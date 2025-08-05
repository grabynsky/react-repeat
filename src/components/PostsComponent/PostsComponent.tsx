import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/posts.service.ts";
import PostComponent from "../PostComponent/PostComponent.tsx";
import type {IPost} from "../../models/IPost.ts";

const PostsComponent = () => {
   const [posts, setPosts] = useState<IPost[]>([])

    useEffect(()=>{
        getPosts().then(res=> setPosts(res))
    })
    console.log(posts);
    return (
        <>
            {
                posts.map(post => <PostComponent key={post.id} post={post} />)
            }
        </>
    );
};

export default PostsComponent;