import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { config } from "dotenv";
import { postsRoute } from "./routes";
config({ path: "../../.env" });

const app = new Hono();
app.use(cors(), logger());

app.use(
    "*",
    serveStatic({
        path: "../public",
    }),
);

app.route("", postsRoute);

export default app;
