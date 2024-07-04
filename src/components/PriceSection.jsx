import IMG from "../utils/images";

function PriceSection(){
    return(
        <div>
            <div className="w-5/6 m-auto  text-center p-10">
                <div className="flex justify-between items-center">
                    <div className="border rounded-xl border-orange-500 p-6 w-[30%] hover:bg-orange-500  hover:text-white">
                        <div className="p-4">
                            <h3 className="font-bold text-xl">Silver</h3>
                            <p className="text-[12px]">Great for basic UI/UX design needs</p>
                        </div>
                        <div className="p-4">
                            <p className="text-[#FF734F] group-hover:text-black underline"><span className="text-2xl font-extrabold">$2,600</span> per month</p>
                        </div>
                        <div className="py-5">
                            <h5 className="text-left font-bold">what's Included:</h5>
                            <ul className="text-left pl-3 text-sm">
                                <li>UI execution</li>
                                <li>Connect on Slack</li>
                                <li>One 30 minut meeting a week</li>
                            </ul>
                        </div>
                        <div className="py-5">
                            <h5 className="text-left font-bold">Design Team</h5>
                            <ul className="text-left pl-3 text-sm">
                                <li>UI execution1 designer working with 4-5 other customers at the same time</li>
                            
                            </ul>
                        </div>
                        <button className=" my-10 rounded-xl border-black py-3 px-10 border ">Try Free</button>
                    </div>

                    <div className="border rounded-xl border-orange-500 p-6 w-[30%]  hover:bg-orange-500  hover:text-white">
                        <div className="p-4">
                            <h3 className="font-bold text-xl">Gold</h3>
                            <p className="text-[12px]">Great for end-to-end product design</p>
                        </div>
                        <div className="p-4">
                            <p className="text-[#FF734F] underline">
                                <span className="text-2xl  font-extrabold">$3,600</span> per month</p>
                        </div>
                        <div className="py-5">
                            <h5 className="text-left font-bold">what's Included:</h5>
                            <ul className="text-left pl-3 text-sm">
                                <li>UI execution</li>
                                <li>Connect on Slack</li>
                                <li>One 30 minut meeting a week</li>
                            </ul>
                        </div>
                        <div className="py-5">
                            <h5 className="text-left font-bold">Design Team</h5>
                            <ul className="text-left pl-3 text-sm">
                                <li>UI execution1 designer working with 4-5 other customers at the same time</li>
                            
                            </ul>
                        </div>
                        <button className=" my-10 rounded-xl border-black py-3 px-10 border ">Try Free</button>
                    </div>

                    <div className="border rounded-xl border-orange-500 p-6 w-[30%]  hover:bg-orange-500  hover:text-white">
                        <div className="p-4">
                            <h3 className="font-bold text-xl">Premium</h3>
                            <p className="text-[12px]">Great for basic UI/UX design needs</p>
                        </div>
                        <div className="p-4">
                            <p className="text-[#FF734F] underline"><span className="text-2xl font-extrabold">$5,200</span> per month</p>
                        </div>
                        <div className="py-5">
                            <h5 className="text-left font-bold">what's Included:</h5>
                            <ul className="text-left pl-3 text-sm">
                                <li>UI execution</li>
                                <li>Connect on Slack</li>
                                <li>One 30 minut meeting a week</li>
                            </ul>
                        </div>
                        <div className="py-5">
                            <h5 className="text-left font-bold">Design Team</h5>
                            <ul className="text-left pl-3 text-sm">
                                <li>UI execution1 designer working with 4-5 other customers at the same time</li>
                            
                            </ul>
                        </div>
                        <button className=" my-10 rounded-xl border-black py-3 px-10 border ">Try Free</button>
                    </div>
                </div>
                {/* contact us */}
                <div className="w-3/4 mx-auto border-t-2 border-black my-14 S py-10">
                    <div className="p-4">
                        <h3 className="font-semibold">Hey! Need a custom plan? <span className="text-[#FF734F]">Contact us!</span></h3>
                        <p>Try us risk free for 7 days, if you don’t love us, get your money back.</p>
                    </div>
                    <button className='border bg-[#FF734F] text-white hover:bg-white hover:text-[#FF734F] px-3 py-2 rounded-2xl font-semibold'>Get Started</button>
                </div>

                {/* box features */}
                <div>
                    <h3 className=" text-2xl font-semibold capitalize p-4">How to know if <span className="text-[#FF734F]">TTS</span> is right for your <span className="text-[#FF734F]">Business</span></h3>
                    <div className="flex items-center justify-between">
                        <div className="w-2/4">
                            <div className="hover:bg-[#FF734F] bg-black text-white text-sm p-4 rounded-bl-none rounded-2xl m-4">You want a new, innovative, and user-centered UX strategy for an existing product</div>
                            <div className="hover:bg-[#FF734F] bg-black text-white text-sm p-4 rounded-bl-none rounded-2xl m-4">You want to translate complex data into an easy-to-understand dashboard</div>
                            <div className="hover:bg-[#FF734F] bg-black text-white text-sm p-4 rounded-bl-none rounded-2xl m-4">You‘re researching how UX can impact you business growth</div>
                        </div>
                        <div className="w-2/4">
                            <div className="hover:bg-[#FF734F] bg-black text-white text-sm p-4 rounded-br-none rounded-2xl m-4">You want a new, innovative, and user-centered UX strategy for an existing product</div>
                            <div className="hover:bg-[#FF734F] bg-black text-white text-sm p-4 rounded-br-none rounded-2xl m-4">You want to translate complex data into an easy-to-understand dashboard</div>
                            <div className="hover:bg-[#FF734F] bg-black text-white text-sm p-4 rounded-br-none rounded-2xl m-4">You‘re researching how UX can impact you business growth</div>
                        </div>
                        
                    </div>
                </div>

                {/* Faq */}
                <div className="p-5 m-4">
                <h3 className=" text-2xl font-semibold capitalize p-4">Our most <span className="text-[#FF734F]">frequently</span> asked questions</h3>
                <ul className=" text-left font-semibold p-5 ">
                    <li className="py-4 border-b-2 border-[#FF734F]">Do I really get unlimited design services? </li>
                    <li className="py-4 border-b-2 border-[#FF734F]">What is a realistic turnaround time?</li>
                    <li className="py-4 border-b-2 border-[#FF734F]">I need my designs ASAP—can you help?</li>
                    <li className="py-4 border-b-2 border-[#FF734F]">What types of projects do you work on?</li>
                    <li className="py-4 border-b-2 border-[#FF734F]">What if I want to cancel my service?</li>
                </ul>
                </div>

                {/* section2 */}
                <div>
                    <h2 className=" text-2xl font-semibold capitalize p-4">Let’s <span className="text-[#FF734F]">build</span> something <span className="text-[#FF734F]">awesome</span> together!</h2>
                    <p>Try us risk free for 7 days, if you don’t love us, get your money back.</p>
                    <button className='border bg-[#FF734F] text-white hover:bg-white hover:text-[#FF734F] px-3 py-2 rounded-2xl font-semibold'>Get Started</button>
                    <img className='m-auto w-2/4 ' src={IMG.avatar4} alt="" />
                </div>

            </div>
        </div>
    )
}
export default PriceSection;