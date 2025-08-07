import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {postService} from "../../services/api.service.ts";
import PostComponent from "../PostComponent/PostComponent.tsx";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        postService.getPosts().then(value => setPosts(value))
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post} />)
            }
        </div>
    );
};

export default PostsComponent;