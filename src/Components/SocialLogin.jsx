import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
const SocialLogin = () => {
    const { signUpWithGoogle, signUpWithGit } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        signUpWithGoogle()
    }
    const handleGitLogin = () => {
        signUpWithGit()
    }
    return (
        <div>
            <h2 className="font-semibold text-[20px] my-1">Login With</h2>
            <div>
                <button onClick={handleGoogleLogin} className="btn my-1 w-full text-blue-500"><FaGoogle className="text-blue-500" /> Login With Google</button>
                <button onClick={handleGitLogin} className="btn my-1 w-full"><IoLogoGithub className="text-lg" /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;