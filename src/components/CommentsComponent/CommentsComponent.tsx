import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {commentService} from "../../services/api.service.ts";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        commentService.getAllComments().then(value => setComments(value));
    }, []);

    return (
        <div>
            {
                comments.map((comment: IComment) => (<div>{comment.email}</div>))
            }
        </div>
    );
};

export default CommentsComponent;