const urlPosts = import.meta.env.VITE_API_BASE_URL + '/posts';

export const getPosts = async (): Promise<IPost[]> => {
    return await fetch(urlPosts).then (res => res.json());
}