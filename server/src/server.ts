import { createServer } from "node:http";
import db from "./db/database.js";

const PORT = 3000;

createServer((req, res) => {
  const { method, url } = req;

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
  if (method === "GET" && url === "/api/products") {
    const products = db
      .prepare(`SELECT id, image, name, brand, price FROM products`)
      .all();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: products }));

    return;
  }

  // not found
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}).listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT}`),
);
