export * from "./utils";
export type Post = {
    id: number;
    title: string;
    description: string;
    content: string;
    date: string;
    authorId: number;
    reviews: Review[];
};

export type Review = {
    id: number;
    content: string;
    byUserId: number;
};

export type User = {
    id: number;
    username: string;
    email: string;
};
