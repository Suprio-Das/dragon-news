import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
const FindUs = () => {
    return (
        <div className="my-11">
            <h2 className="font-semibold text-[20px] my-1">Find Us On</h2>
            <div className="join join-vertical w-full *:justify-start *:h-14">
                <button className="btn join-item"><IoLogoFacebook /> Facebook</button>
                <button className="btn join-item"><IoLogoTwitter /> Twitter</button>
                <button className="btn join-item"><IoLogoInstagram /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;