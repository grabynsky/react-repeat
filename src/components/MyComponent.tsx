import {type FC} from 'react';

type MyComponentProps = {
    text: string
}

const MyComponent: FC<MyComponentProps> = ({text}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                {text}
            </h1>

        </div>
    );
};

export default MyComponent;