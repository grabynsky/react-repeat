const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const urls = {
    users: {
        allUsers: baseUrl + '/users',
        byId: (id: number) => {
            return baseUrl + '/users/' + id;
        },
    },
    posts: baseUrl + '/posts',
}

