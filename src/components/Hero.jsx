import Navbar from "./Navbar";
import Group from '../assets/Group.svg';
function Hero(){
return (
    <div className="bg-[#E0EAF3] w-screen ">
    <div className="w-5/6 m-auto  text-center">
    <Navbar/>
    <h1 className="text-5xl p-3 text-center font-semibold">
    Digital transformation is our <span className="text-[#FF734F]">Motto</span> <br/>
    Let’s Create a Milestone <span className="text-[#FF734F]">Together</span>
    </h1>

    <ul className="text-sm flex items-center justify-between w-2/3 m-auto">
        <li>No hiring headaches</li>
        <li>Weekly turnaround times</li>
        <li>One flat monthly rate</li>
    </ul>
    <button className='border bg-[#FF734F] text-white hover:bg-white hover:text-[#FF734F] px-3 py-2 rounded-2xl font-semibold'>Start your risk free trial</button>
    <img src={Group} alt="photo" className="w-full h-80"/>
    </div>
    </div>
)
}
export default Hero;