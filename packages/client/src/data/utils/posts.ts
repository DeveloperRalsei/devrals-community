import { Post } from "#";

export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch("/api/posts");
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
};

export const searchPost = async (query: string): Promise<Post[]> => {
    const response = await fetch(`/api/posts/${query}`);
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
};

export const getPostById = async (id: number | string): Promise<Post> => {
    const response = await fetch(`/api/post/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
};
