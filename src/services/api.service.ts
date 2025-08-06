import type {IUser} from "../models/IUser.ts";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(baseUrl + '/users').then((res) => res.json());
    }
}
