import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const { data } = useLoaderData();
    return (
        <div>
            {data.length} data was Found in this category.
        </div>
    );
};

export default CategoryNews;