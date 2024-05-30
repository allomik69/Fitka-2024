import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const organizations = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
});
