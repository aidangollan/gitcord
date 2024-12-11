import {
  boolean,
  index,
  integer,
  pgSchema,
  pgTableCreator,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `gitcord_${name}`);

const authSchema = pgSchema("auth");

export const users = authSchema.table("users", {
  id: uuid("id").primaryKey(),
});

/**
 * Any trackable action by the user
 * These include page views and actions such as feedback or idea creation
 */
export const trackable = createTable(
  "trackable",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("userId").notNull().references(() => users.id, {
      onDelete: "cascade"
    }),

    action_type: text("action_type").notNull(),
    label: text("label").notNull(),
    is_limiting: boolean("is_limiting").notNull(),

    created_at: timestamp("created_at").defaultNow().notNull()
  }
);