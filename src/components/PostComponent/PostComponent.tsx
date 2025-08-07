import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostTypeProps = {
    post: IPost
}
const PostComponent: FC<PostTypeProps> = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;