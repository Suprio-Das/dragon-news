import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const NewsDetails = () => {
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main className="grid grid-cols-12 justify-center">
                <div className="col-span-9">
                    <h1>Single News Details</h1>
                </div>
                <div className="col-span-3">
                    <h1>Right Sidebar</h1>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;