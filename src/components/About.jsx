import IMG from '../utils/images';

function About() {

  return (
    <div className="w-5/6 m-auto  text-center py-16">
      <h2 className="text-[35px] font-bold p-3 m-1">
        A diverse team of <span className="text-[#FF734F]">passionate</span> tech nerds who are here to help your
        <span className="text-[#FF734F]">startup succeed</span>
      </h2>
      <p className="text-[12px] w-3/4 m-auto">
        From ideation to expansion, TDP understands the unique demands of your
        startup—providing you with optimized design strategies and fast
        turnarounds for an affordable monthly subscription.
      </p>

      <div className="flex justify-between items-center py-10 px-10">
        <div className=" w-[30%] p-4">
          <img className='m-auto p-2' src={IMG.frame} alt="" />
          <h4 className='font-bold'>Costs 70% less</h4>
          <p className="text-[10px]">
            We developed highly-optimized design processes to let us work fast
            and deliver incredible results—and we pass those savings on to you
          </p>
        </div>
        <div className=" w-[30%] p-4">
          <img className='m-auto p-2' src={IMG.square} alt="" />
          <h4 className='font-bold'>Adaptable and scalable</h4>
          <p className="text-[10px]">
          High-velocity is crucial to a startup's success, and that's why TDP delivers new designs every week so your momentum never falters
          </p>
        </div>
        <div className=" w-[30%] p-4">
          <img className='m-auto p-2' src={IMG.circle} alt="" />
          <h4 className='font-bold'>Fast turnaround times</h4>
          <p className="text-[10px]">
          TDP was built for flexibility—we quickly adapt and grow as you grow
          </p>
        </div>
      </div>

      <div className="pt-16">
      <h2 className="text-[35px] font-bold p-3 m-1">
      How <span className="text-[#FF734F]">signing</span> up with The Design Project <span className="text-[#FF734F]">works</span>!?
      </h2>
      <p className="text-[12px] w-3/4 m-auto">
      Take a minute to imagine how you’d feel watching your user count grow, and retention rates stay consistently high. When you prioritize effective UX, better retention and growth are natural consequences. Backed by countless hours of research and testing, TDP blends UX, UI, and Product design into a deliciously smooth process that fuels productivity and success.
      </p>

      <div className="flex justify-between items-center py-10 px-10">
        <div className=" w-[25%] p-4">
            <div className='w-10 h-10 flex items-center justify-center rounded-full font-bold bg-orange-500 text-white m-auto'>01</div>
          <h4 className='font-bold p-2'>Sign up for one of our services</h4>
          <img className='m-auto p-2' src={IMG.avatar1} alt="" />
          <p className="text-[10px]">
          Sign up for one of our affordable subscription play which offer a variety of options to fit your unique needs.
          </p>
        </div>
        <div className=" w-[25%] p-4">
        <div className='w-10 h-10 flex items-center justify-center rounded-full font-bold bg-orange-500 text-white m-auto'>02</div>
          <h4 className='font-bold'>Meet your perfect match</h4>
          <img className='m-auto p-2' src={IMG.avatar2} alt="" />
          <p className="text-[10px]">
          We match you with the best TDP design expert for your needs. Then we schedule a call to learn about your startup.
          </p>
        </div>
        <div className=" w-[25%] p-4">
        <div className='w-10 h-10 flex items-center justify-center rounded-full font-bold bg-orange-500 text-white m-auto'>03</div>
          <h4 className='font-bold'>The first sprint begins (hold on tight)</h4>
          <img className='m-auto p-2' src={IMG.avatar3} alt="" />
          <p className="text-[10px]">
          TDP manages the project, learns the intimate details of what your users want, and delivers impactful design iterations.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default About;
