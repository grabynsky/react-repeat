import {type FC} from 'react';

type MyComponentProps = {
    text: string
}

const MyComponent: FC<MyComponentProps> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default MyComponent;