import Logo from '../assets/Logo.svg';
function Navbar(){
    return (
        <div className='flex items-center justify-between p-4 mb-4'>
            <div className='mr-12'><img src={Logo} alt="logo" /></div>
            <ul className='flex items-center justify-between p-2 font-bold'>
                <li className='p-3 hover:text-[#FF734F]'>How it work</li>
                <li className='p-3 hover:text-[#FF734F]'>About</li>
                <li className='p-3 hover:text-[#FF734F]'>Work</li>
                <li className='p-3 hover:text-[#FF734F]'>Pricing</li>
                <li className='p-3 hover:text-[#FF734F]'>Blog</li>
            </ul>
            <button className='border bg-[#FF734F] text-white hover:bg-white hover:text-[#FF734F] px-3 py-2 rounded-2xl font-semibold'>Get Started</button>
        </div>
    )
    }
    export default Navbar;