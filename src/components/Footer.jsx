import IMG from "../utils/images";

function Footer(){
    return (
        <div className="bg-black text-white">
            <div className="w-5/6 m-auto  text-center p-20 flex justify-between items-start">
                <div>
                    <div className="flex items-center p-2"><img src={IMG.Trion} alt="" />
                        <h2 className="capitalize text-left text-4xl p-4">Trion <span className="text-blue-500">Tech</span> Solution</h2>
                    </div>
                    <div className="flex items-center text-sm gap-3 justify-between">
                        <div className="flex items-center"><img className='px-1' src={IMG.gmail} alt="" />triontechsolution@gmail.com</div>
                        <div className="flex items-center"><img src={IMG.insta} alt="" />triontechsolution</div>
                        <div className="flex items-center"><img src={IMG.linkedin} alt="" />trion tech solution</div>
                    </div>
                </div>
                <div className="p-3">
                    <ul className="text-sm text-right">
                        <li>How it work</li>
                        <li>About</li>
                        <li>Our Work</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
            </div>
    )
}
export default Footer;