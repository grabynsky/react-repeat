export const userService = {
    getUser: ()=>{
        return await fetch('https://jsonplaceholder.typicode.com/posts')
    }
}