import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";

const LatestNews = () => {
    const categoryOneData = useLoaderData();
    const data = categoryOneData.data;
    console.log(data);
    return (
        <div className="flex items-center gap-x-5 bg-[#F3F3F3] p-3">
            <p className="bg-[#D72050] text-white px-4 py-2 text-nowrap">Latest News</p>
            <Marquee pauseOnHover={true} speed={70} className="w-full">
                {
                    data.map(singleLatestNews =>
                        <span className="mr-20 font-semibold" key={singleLatestNews._id}>
                            <Link to={`/api/news/${singleLatestNews._id}`} className="hover:underline">!! {singleLatestNews.title} !!</Link>
                        </span>
                    )
                }

            </Marquee>
        </div>
    );
};

export default LatestNews;