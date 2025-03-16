import { Hono } from "hono";
import { getPosts } from "~/controllers";

const router = new Hono();
router.get("/posts", getPosts);

export default router;
