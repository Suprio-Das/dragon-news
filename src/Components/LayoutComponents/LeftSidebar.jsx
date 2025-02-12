import { useEffect, useState } from "react";

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
            <div className="flex items-center justify-center my-5">
                <div className="flex flex-col gap-3">
                    {
                        categories.map((category) => <button className="text-left text-[#9F9F9F] hover:cursor-pointer hover:underline" key={category.category_id}>{category.category_name}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;