import { useContext } from "react";
import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";

const RightSidebar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            {
                !user && <SocialLogin></SocialLogin>
            }
            <FindUs></FindUs>
        </div>
    );
};

export default RightSidebar;