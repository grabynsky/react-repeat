import React, {type FC} from 'react';

type Props = {
    post: IPost;
}

const PostComponent: FC<Props> = ({post: {id, body, title}}) => {
    return (
        <div>
            {id} - {body}
            <p>{title}</p>
            <hr/>
        </div>
    );
};

export default PostComponent;