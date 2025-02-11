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
        </div>
    );
};

export default LeftSidebar;