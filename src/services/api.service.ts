import { urls } from "../constants/urls.ts";
import type {IUser} from "../models/IUser.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers).then((res) => res.json());
    }
}
