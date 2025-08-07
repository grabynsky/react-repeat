import { urls } from "../constants/urls.ts";
import type {IUser} from "../models/IUser.ts";
import type {IPost} from "../models/IPost.ts";
import type {IPostByUserId} from "../models/IPostByUserId.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers).then((res) => res.json());
    }
}

export const postService = {
    getPosts: async (): Promise<IPost[]> => {
        return await fetch(urls.posts.allPosts).then((res) => res.json());
    },
    getAllPostsOfUserById: async (id:number): Promise<IPostByUserId[]> => {
        return await fetch(urls.posts.getAllPostsById(id)).then((res) => res.json());
    }
}

export const commentService = {
    getAllComments: async () => {
        return await fetch(urls.comments.allComments).then((res) => res.json());
    }
}
