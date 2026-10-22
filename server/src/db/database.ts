import { DatabaseSync } from "node:sqlite";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const dbPath = join(__dirname, "../../src/db/store.db");
const db = new DatabaseSync(dbPath);

const schema = readFileSync(
  join(__dirname, "../../src/db/schema.sql"),
  "utf-8",
);

db.exec(schema);
console.log("Database initialized successfully.");

export default db;
