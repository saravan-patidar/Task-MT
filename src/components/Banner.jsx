
// import vector from '../assets/Vector.svg';
import IMG from '../utils/images';

function Banner(){
    return (
        <div className="bg-black">
            <div className="w-5/6 m-auto  text-center p-2">
            <h3 className="text-white text-2xl font-semibold capitalize p-4">
            We helped our customers raise <span className="text-[#FF734F]">$1B+</span>
            </h3>
            <div className="flex justify-around items-center px-3 py-6">
                <img src={IMG.y} className='w-36' alt="" />
                <div className="w-0.5 h-8 bg-[#FF734F]"></div>
                <img src={IMG.v} className='w-36' alt="" />
                <div className="w-0.5 h-8 bg-[#FF734F]"></div>
                <img src={IMG.accel} className='w-36' alt="" />
                <div className="w-0.5 h-8 bg-[#FF734F]"></div>
                <img src={IMG.a16z} className='w-36' alt="" />
            </div>
            </div>
        </div>
    )
}
export default Banner;