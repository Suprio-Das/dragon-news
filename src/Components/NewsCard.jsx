import { FaRegStar, FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
    return (
        <div className="p-6 rounded-lg shadow-lg border border-gray-200 w-full mx-auto bg-white my-2 mb-11">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={singleNews.author.img}
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700">{singleNews.author.name}</h3>
                        <p className="text-xs text-gray-500">{singleNews.author.published_date}</p>
                    </div>
                </div>
                <FaShareAlt className="text-gray-500 cursor-pointer hover:text-orange-500" />
            </div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {singleNews.title}
            </h2>
            <img
                src={singleNews.thumbnail_url}
                alt="News Thumbnail"
                className="w-full h-84 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
                {singleNews.details.slice(0, 150)}...
            </p>
            <Link to={`/api/news/${singleNews._id}`} className="text-orange-500 font-semibold hover:underline">Read More</Link>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                        <FaStar key={i} className="text-orange-500" />
                    ))}
                    <FaRegStar className="text-orange-500" />
                    <span className="ml-1 font-semibold text-gray-700">{singleNews.rating.number}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{singleNews.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
