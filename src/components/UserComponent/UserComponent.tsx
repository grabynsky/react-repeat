import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";
import { useNavigate} from "react-router-dom";

type UserTypeProps = {
    item: IUser
}
const UserComponent: FC<UserTypeProps> = ({item}) => {
    const navigate = useNavigate();

    const handleOnClick = ()=>{
        navigate('details', {state: item})
    }

    return (
        <div>
            {/*<Link to={'details'} state={item}>{item.name}</Link>*/}
            {item.name} <button onClick={handleOnClick}>Go to details</button>
        </div>
    );
};

export default UserComponent;