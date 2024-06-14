import { defineConfig } from "drizzle-kit"
import { config } from "dotenv"

config({ path: ".env.local" })

export default defineConfig({
  driver: "pg",
  out: "./src/db/migrations",
  schema: "./src/db/schema/index.ts",
  dbCredentials: {
    connectionString: process.env.SUPABASE_URL!,
  },
})
