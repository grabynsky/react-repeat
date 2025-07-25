import type {ISimpson} from "../../models/ISimpson.ts";
import type {FC, ReactNode} from "react";

type Props = {
    simpson: ISimpson;
    children: ReactNode;
}
const CharacterComponent: FC<Props> = ({simpson, children}) => {
    return (
        <div className='my-10 border-1'>
                <h2 className="text-2xl">{simpson.name} {simpson.surname}</h2>

            <p>
                {children}
            </p>
            <img src={simpson.photo} alt="{simpson.name}"/>
        </div>
    );
};

export default CharacterComponent;