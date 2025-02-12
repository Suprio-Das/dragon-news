import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
const FindUs = () => {
    return (
        <div className="my-11">
            <h2 className="font-semibold text-[20px] my-1">Find Us On</h2>
            <div className="join join-vertical w-full *:justify-start *:h-14 *:bg-white">
                <button className="btn join-item">
                    <span className="bg-gray-200 text-lg p-1 rounded-full"><IoLogoFacebook className="text-blue-500" /></span> Facebook
                </button>
                <button className="btn join-item">
                    <span className="bg-gray-200 text-lg p-1 rounded-full"><IoLogoTwitter className="text-blue-500" /></span> Twitter
                </button>
                <button className="btn join-item">
                    <span className="bg-gray-200 text-lg p-1 rounded-full"><IoLogoInstagram className="text-pink-500" /></span> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;