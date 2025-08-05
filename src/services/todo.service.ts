import type {ITodo} from "../models/ITodo.ts";

const url = import.meta.env.VITE_API_BASE_URL;

export const getTodos = async (): Promise<ITodo[]> => {
   return await fetch(url+'/todos')
        .then (res => res.json())
}