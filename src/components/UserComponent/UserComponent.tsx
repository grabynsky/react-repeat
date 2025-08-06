import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserTypeProps = {
    item: IUser
}
const UserComponent: FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            {item.name}
        </div>
    );
};

export default UserComponent;