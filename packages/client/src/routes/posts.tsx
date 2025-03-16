import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "@/data/utils/posts";

export const Route = createFileRoute("/posts")({
    component: RouteComponent,
    loader: () => getPosts(),
});

function RouteComponent() {
    const posts = Route.useLoaderData();
    return <div>{JSON.stringify(posts, null, "\n")}</div>;
}
