import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";

const NewsDetails = () => {
    const { data } = useLoaderData();
    const singleNewsData = data[0];
    console.log(singleNewsData)

    // Loading Data
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/news/${singleNewsData._id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main className="grid grid-cols-12 justify-center">
                <div className="col-span-9">
                    <div>
                        <h1>Single News Details</h1>
                    </div>
                </div>
                <div className="col-span-3">
                    <h1>Right Sidebar</h1>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;