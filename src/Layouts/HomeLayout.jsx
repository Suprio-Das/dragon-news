import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftSidebar from "../Components/LayoutComponents/LeftSidebar";
import RightSidebar from "../Components/LayoutComponents/RightSidebar";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto my-3">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5">
                <aside className="col-span-3">
                    <LeftSidebar></LeftSidebar>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightSidebar></RightSidebar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;