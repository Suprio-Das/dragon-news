import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex items-center space-x-5">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <button className="btn bg-[#403F3F] rounded-none px-8 text-white w-[140px] h-[40px]">Login</button>
            </div>
        </div>
    );
};

export default Navbar;