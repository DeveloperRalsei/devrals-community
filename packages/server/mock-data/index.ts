import { Post } from "#";
export const posts: Post[] = [
    {
        id: 1,
        title: "Post 1",
        description: "Description 1",
        content: "Content 1",
        date: "2020-01-01",
        authorId: 1,
        reviews: [
            {
                id: 1,
                content: "Review 1",
                byUserId: 1,
            },
        ],
    },
    {
        id: 2,
        title: "Post 2",
        description: "Description 2",
        content: "Content 2",
        date: "2020-01-02",
        authorId: 2,
        reviews: [
            {
                id: 2,
                content: "Review 2",
                byUserId: 2,
            },
        ],
    },
];

export const users = [
    {
        id: 1,
        username: "User 1",
        email: "1234@mail.com",
    },
];
