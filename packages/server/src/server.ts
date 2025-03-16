import server from "./app";
import { serve } from "@hono/node-server";
import { config } from "dotenv";
config();

const port = Number(process.env.PORT) || 3000;
serve(
    {
        fetch: server.fetch,
        port,
    },
    (info) =>
        console.log(
            `Server running on port ${info.port} | http://localhost:${info.port}`,
        ),
);
