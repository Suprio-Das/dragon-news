import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 my-3'>
            <div>
                <img src={logo} alt="Dragon_News_Logo" className='w-[400px]' />
            </div>
            <h2 className='text-[18px] text-[#706F6F]'>Journalism Without Fear or Favour</h2>
            <p className='text-[20px] text-[#706F6F]'><span className='font-semibold text-black'>{moment().format("dddd")}, </span>{moment().format("MMMM YYYY")}</p>
        </div>
    );
};

export default Header;