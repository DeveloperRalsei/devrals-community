import { MiddlewareHandler } from "hono";
import { posts } from "~/../mock-data";

export const getPosts: MiddlewareHandler = async ({ req, ...c }) => {
    return c.json(posts);
};
