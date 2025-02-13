import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    return (
        <div>
            <h2 className="text-[#403F3F] text-[20px] font-semibold">Dragon News Home</h2>
            <div>
                {
                    news.map((singleNews) => <NewsCard key={singleNews.category_id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;