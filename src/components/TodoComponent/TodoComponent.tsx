import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";

type Props = {
    todo: ITodo
}
const TodoComponent: FC<Props> = ({todo:{title,id}}) => {
    return (
        <div>
            {id} - {title}
        </div>
    );
};

export default TodoComponent;