import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import db from "./db/database.js";

const PORT = 3000;

const currentDir = dirname(fileURLToPath(import.meta.url));
const clientDir = resolve(currentDir, "../../client");

const contentTypes: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

createServer(async (req, res) => {
  const { method } = req;
  const url = new URL(
    req.url ?? "/",
    `http://${req.headers.host ?? "localhost:3000"}`,
  );

  req.on("error", (error) => {
    console.error("failed to fetch products", error);

    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Bad Request" }));
  });

  res.on("error", (error) => {
    console.error("failed to send response", error);

    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal server error" }));
  });

  // products list route
  if (method === "GET" && url.pathname === "/api/products") {
    const products = db
      .prepare(`SELECT id, image, name, brand, price FROM products`)
      .all();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: products }));

    return;
  }

  // rejecting POST and DELETE and PUT methods in static-file handler
  if (method !== "GET") {
    res.writeHead(405, { "content-type": "text/plain", Allow: "GET" });
    res.end("Method not allowed");
    return;
  }

  // serve html file and images
  try {
    const clientRouts = ["/", "/men", "/women", "/products"];
    const pathname = url.pathname ?? "/";
    const relativePath = clientRouts.includes(pathname)
      ? "index.html"
      : pathname.slice(1);
    const filePath = resolve(clientDir, relativePath);

    // prevents requests from accessing files outside the client folder
    if (!filePath.startsWith(clientDir + sep)) {
      res.writeHead(403, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Forbidden" }));
      return;
    }

    const file = await readFile(filePath);
    const contentType =
      contentTypes[extname(filePath).toLowerCase()] ??
      "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": file.length,
    });
    res.end(file);
    return;
  } catch (error) {
    const isMissingFile =
      error instanceof Error && "code" in error && error.code === "ENOENT";

    if (isMissingFile) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      return;
    }

    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal server error");
  }

  // not found
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}).listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT}`),
);
