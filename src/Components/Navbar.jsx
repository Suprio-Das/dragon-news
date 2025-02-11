import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div></div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;