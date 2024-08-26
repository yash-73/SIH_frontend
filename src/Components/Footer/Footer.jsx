// import React from 'react'
import { useContext } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Logo from "../Logo/Logo"
import scrollContext from "../../Context/scrollContext"
import { useSelector } from "react-redux";

function Footer() {

    // const feat = useRef<HTMLDivElement | null >(null);
    const context = useContext(scrollContext);
    const reference = context.reference;
    const handleScroll = context.handleScroll;
    const navigate = useNavigate();
    const location = useLocation();
    const setNeedtoScroll = context.setNeedtoScroll;
    const authStatus = useSelector((state)=> state.auth.status);

   
    return (
        <footer className="flex flex-col bg-[#ffffff] border-t-2 border-[#5fc321] text-black px-6 ">
            <section className="flex md:flex-row flex-col md:justify-around md:items-start">
                <Logo className='max-md:text-center text-[#009921] font-bold text-xl my-4 md:my-10 gap-2'/>
                <div className="flex flex-col flex-wrap  sm:flex-row my-4 md:my-10 sm:max-md:justify-around justify-between md:w-[50%]">
                    <ul className="sm:mx-8 max-md:my-4 flex flex-col gap-4">
                        <h3 className="text-lg font-bold">Contact Us</h3>
                        <li>Email: support@farmguard.com</li>
                        <li>Phone: +123-456-789</li>
                        
                    </ul>
                    <ul className="sm:mx-8  max-md:my-4 flex flex-col gap-4">
                        <h3 className="text-lg font-bold">Quick links</h3>
                        <NavLink className='hover:text-[#5fc321]' to='/'>Home</NavLink>
                        <NavLink className='hover:text-[#5fc321]' to='/about'>About</NavLink>
                        <NavLink className='hover:text-[#5fc321]' onClick={(e)=>{
                            e.preventDefault();
                            if(location.pathname != '/'){
                                setNeedtoScroll(true);
                                navigate('/');
                                

                            }
                            else{
                                handleScroll(reference);
                            }
                            
                        }}>Features</NavLink>
                        {authStatus && <NavLink className='hover:text-[#5fc321]' to='/analyze'>Analyze Crop</NavLink>}
                    </ul>
                    <ul className="sm:mx-8 max-md:my-4 flex flex-col gap-4">
                        <h3 className="text-lg font-bold">Support</h3>
                        <li>Help Center</li>
                        <li>User Guide</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </section>

            <aside className="flex sm:flex-row flex-col sm:justify-center sm:gap-4  border-t-2 py-4">
                <p>© 2024 Farm Guard. All rights reserved </p>
                <p> Terms  </p>
                <p>Privacy</p>
                
            </aside>
        </footer>
    )
}

export default Footer
