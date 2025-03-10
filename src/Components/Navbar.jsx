import { Link, useNavigate } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logout()
            .then(() => {
                navigate('/auth/login');
            })
    }
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/career">Career</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/career">Career</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <div>
                    {
                        user ? <div>
                            <img src={user.photoURL} alt="" className="w-11 h-11 rounded-full border-2 border-green-500" />
                        </div> : <img src={userIcon} alt="" />
                    }
                </div>
                {
                    user ? <button onClick={handleLogOut} className="btn bg-[#403F3F] rounded-none px-8 text-white">Logout</button> : <Link to="/auth/login" className="btn bg-[#403F3F] rounded-none px-8 text-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;