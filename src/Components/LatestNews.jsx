import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-x-5 bg-[#F3F3F3] p-3">
            <p className="bg-[#D72050] text-white px-4 py-2 text-nowrap">Latest News</p>
            <Marquee pauseOnHover={true} speed={70} className="w-full">
                <span className="mr-10 ">
                    <Link to="/news" className="hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis?</Link>
                </span>
                <span className="mr-10">
                    <Link to="/news" className="hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis?</Link>
                </span>
                <span className="mr-10">
                    <Link to="/news" className="hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis?</Link>
                </span>
                <span className="mr-10">
                    <Link to="/news" className="hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis?</Link>
                </span>
            </Marquee>
        </div>
    );
};

export default LatestNews;