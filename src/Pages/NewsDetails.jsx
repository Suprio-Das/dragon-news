import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { FaArrowLeftLong } from "react-icons/fa6";
import RightSidebar from "../Components/LayoutComponents/RightSidebar";

const NewsDetails = () => {
    const { data } = useLoaderData();
    const singleNewsData = data[0];
    console.log(singleNewsData)
    return (
        <div className="w-11/12 mx-auto my-3">
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main className="grid grid-cols-12 justify-center gap-5">
                <div className="col-span-9">
                    <div>
                        <h1 className="font-semibold text-xl text-[#403F3F]">Dragon News</h1>
                        <div className="shadow-sm p-5 mt-3 rounded-md">
                            <div>
                                <img src={singleNewsData.image_url} alt="" className="w-full" />
                            </div>
                            <h1 className="text-[25px] text-[#403F3F] font-semibold my-2">{singleNewsData.title}</h1>
                            <p className="text-base text-[#403F3F] leading-6 text-justify">{singleNewsData.details}</p>
                            <Link to={`/category/${singleNewsData.category_id}`} className="btn bg-[#D72050] text-white mt-7"><FaArrowLeftLong /> All news in this category</Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 font-semibold text-xl text-[#403F3F]">
                    <RightSidebar></RightSidebar>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;