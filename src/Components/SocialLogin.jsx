import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold text-[20px] my-1">Login With</h2>
            <div>
                <button className="btn my-1 w-full"><FaGoogle /> Login With Google</button>
                <button className="btn my-1 w-full"><IoLogoGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;