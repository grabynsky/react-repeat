import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IPostByUserId} from "../models/IPostByUserId.ts";
import {postService} from "../services/api.service.ts";

const UserPostsPage = () => {
    // const param = useParams()
    const {userId} = useParams()
    const [postsById, setPostsById] = useState<IPostByUserId[]>([])

    useEffect(() => {
        if (userId){
            postService.getAllPostsOfUserById(+userId).then(value=> setPostsById(value))
        }
    }, [userId]);

    return (
        <div>
            <hr/>
            {
                postsById.map((post: IPostByUserId) => (
                    <div key={post.id}>{post.title}</div>
                ))
            }
        </div>
    );
};

export default UserPostsPage;