import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../UserComponent/UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(allUsers => setUsers(allUsers));
    })
    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;