import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import RightSidebar from "../Components/LayoutComponents/RightSidebar";

const NewsDetails = () => {
    const { data } = useLoaderData();
    const singleNewsData = data[0];
    console.log(singleNewsData)
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main className="grid grid-cols-12 justify-center gap-5">
                <div className="col-span-9">
                    <div>
                        <h1 className="font-semibold text-xl text-[#403F3F]">Dragon News</h1>
                        <div className="shadow-sm p-5 mt-3">
                            <div>
                                <img src={singleNewsData.image_url} alt="" />
                            </div>
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