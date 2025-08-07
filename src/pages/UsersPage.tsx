import UsersComponent from "../components/UsersComponent/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;