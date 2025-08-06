import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../UserComponent/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getUsers().then(allUsers => setUsers(allUsers));
    }, [])
    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;