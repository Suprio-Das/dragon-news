import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
const SocialLogin = () => {
    const { signUpWithGoogle } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        signUpWithGoogle()
            .then(result => {
                console.log(`Google Signin complete, ${result.user}`);
            })
            .catch(error =>
                console.log(error.message)
            )
    }
    return (
        <div>
            <h2 className="font-semibold text-[20px] my-1">Login With</h2>
            <div>
                <button onClick={handleGoogleLogin} className="btn my-1 w-full text-blue-500"><FaGoogle className="text-blue-500" /> Login With Google</button>
                <button className="btn my-1 w-full"><IoLogoGithub className="text-lg" /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;