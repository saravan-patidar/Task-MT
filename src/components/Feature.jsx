import IMG from "../utils/images";

function Feature(){
    return (
        <div className="bg-black">
            <div className="w-5/6 m-auto  text-center p-2">
            <h3 className="text-white text-3xl font-semibold capitalize px-10 py-5">
            How accessible <span className="text-[#FF734F]">UX design</span> is changing the businesses for the better
            </h3>
            <img className="py-4" src={IMG.FrameImg} alt="" />
            </div>
        </div>
    )
}
export default Feature;