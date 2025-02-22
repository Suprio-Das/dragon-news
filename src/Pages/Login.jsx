import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader";

const Login = () => {
    const { signInUser, loading } = useContext(AuthContext);
    if (loading) {
        <Loader></Loader>
    }
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center -mt-10">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-center pt-5 text-2xl font-semibold">Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="fieldset-label text-black font-semibold">Email Address</label>
                        <input type="email" name="email" className="input outline-0 border-0 bg-[#F3F3F3]" placeholder="Email" />
                        <label className="fieldset-label text-black font-semibold">Password</label>
                        <input type="password" name="password" className="input outline-0 border-0 bg-[#F3F3F3]" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn bg-[#403F3F] text-white mt-4">Login</button>
                    </form>
                    <h2 className="text-center text-[#706F6F]">Don't have an account? <Link to='/auth/register' className="text-red-500 font-semibold">Register</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Login;