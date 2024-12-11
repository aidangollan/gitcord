import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    BOT_KEY: z.string(),
    SUPABASE_URL: z.string().url(),
    SUPABASE_DATABASE_URL: z.string().url(),
    SUPABASE_ANON_PUBLIC_KEY: z.string(),
    SUPABASE_SERVICE_ROLE_KEY: z.string()
  },

  client: {},

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    BOT_KEY: process.env.BOT_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_DATABASE_URL: process.env.SUPABASE_DATABASE_URL,
    SUPABASE_ANON_PUBLIC_KEY: process.env.SUPABASE_ANON_PUBLIC_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});
