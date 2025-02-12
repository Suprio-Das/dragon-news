import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then((data) => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className="font-semibold text-[#403F3F] text-[20px]">All Category</h2>
            {/* <h2 className="bg-[#E7E7E7] font-semibold py-3 text-center my-2 rounded-sm">National News</h2> */}
            <div className="flex flex-col items-start max-w-full my-2">
                {
                    categories.map((category) => <NavLink to={`/categories/${category.category_id}`} className="text-left w-full text-[#9F9F9F] hover:cursor-pointer hover:bg-[#E7E7E7] px-5 py-3 rounded-sm" key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;