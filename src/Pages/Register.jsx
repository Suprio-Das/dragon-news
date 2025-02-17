import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser, user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const photo = formData.get("photo");
        const email = formData.get("email");
        const password = formData.get("password");
        console.log({ name, photo, email, password });
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center -mt-10">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-center pt-5 text-2xl font-semibold">Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="fieldset-label text-black font-semibold">Your Name</label>
                        <input type="text" name="name" className="input outline-0 border-0 bg-[#F3F3F3]" placeholder="Your Name Here" required />
                        <label className="fieldset-label text-black font-semibold">Photo URL</label>
                        <input type="text" name="photo" className="input outline-0 border-0 bg-[#F3F3F3]" placeholder="Your Photo URL Here" required />
                        <label className="fieldset-label text-black font-semibold">Email Address</label>
                        <input type="email" name="email" className="input outline-0 border-0 bg-[#F3F3F3]" placeholder="Email" required />
                        <label className="fieldset-label text-black font-semibold">Password</label>
                        <input type="password" name="password" className="input outline-0 border-0 bg-[#F3F3F3]" placeholder="Password" required />
                        <button type="submit" className="btn bg-[#403F3F] text-white mt-4">Register</button>
                    </form>
                    <h2 className="text-center text-[#706F6F]">Already have an account? <Link to='/auth/login' className="text-red-500 font-semibold">Login</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Register;