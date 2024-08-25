// import React from 'react'
import {    useState } from "react"
import Logo from "../Logo/Logo"
import {NavLink} from 'react-router-dom'
// import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from './LogoutButton'
function Header() {
    // const navigate = useNavigate();
    const location = useLocation();
   
    const authStatus = useSelector((state)=>state.auth.status);
   
    const [menubar, setMenubar] = useState(false);
    
    // const [authStatus, setAuthStatus] = useState(auth)

    // const authStatus = true
    const navItems = [
        {
            name: "Home",
            slug: '/',
            active: true,
        },
        {
            name: "About",
            slug: '/about',
            active: true,
        },
        {
            name: "Login",
            slug: '/login',
            active: !authStatus,
        },
        {
            name: "Register",
            slug: '/register',
            active: !authStatus,
        },
        {
                name: "Analyze",
                slug: '/analyze',
                active: authStatus,
        },
        {
            name: "Contact",
            slug: '/contact',
            active: true,
        }
        
    ]
    return (
        <header className="px-[5%] bg-[#ffffff] text-black border-b-2 border-[#5fc321] z-30">
            <nav className="flex flex-row justify-between">
            <Logo className=' mr-0 my-0  font-bold text-xl text-[#009921]' />
            <ul className="flex flex-row max-lg:hidden px-0"> 
            {navItems.map((item)=>
                                item.active ? (
                                    <NavLink key={item.name} to={item.slug} 
                                    className={`max-lg:mx-[1%] lg:mx-4 my-4 py-1 px-4 text-xl ${(item.slug == location.pathname)? 'text-[#009921]' : null } hover:bg-[#5fc321] cursor-pointer rounded-2xl hover:text-white transition-colors duration-200`}>
                                            {item.name}
                                    </NavLink>
                                ) : null
                            )}

            {
                authStatus && <LogoutButton className={`className="mx-6 my-4 py-1 px-4 text-xl hover:bg-[#5fc321] cursor-pointer rounded-2xl hover:text-white transition-colors duration-200`}/>
                
            }    
            {/* {
                className="mx-6 my-4 py-1 px-4 text-xl hover:bg-[#5fc321] cursor-pointer rounded-2xl hover:text-white transition-colors duration-200"
            }        */}
            </ul>

            <button className="lg:hidden mx-6 my-4 font-medium" onClick={()=>setMenubar(true)}>Menu</button>

            
            </nav>

            <div className={`flex flex-col px-2 lg:hidden w-[80%] z-20 h-full bg-[#ffffff] border-l-2 border-[#5fc321] fixed top-0 right-0 duration-200 transition-all
            ${menubar? 'translate-x-0':'translate-x-[1000px]'}`
            }>
                <button className="mx-6 my-4 text-[#5fc321]  px-2 text-2xl font-bold border-[1px] border-white rounded self-end" onClick={()=>setMenubar(false)} >X</button>
                <div className=" border-white border-[1px] "></div>
                <ul className="flex flex-col justify-start items-start">
                {navItems.map((item)=>
                                item.active ? (
                                    <NavLink key={item.name} to={item.slug} onClick={()=>{setMenubar(false)}}
                                    className="mx-6 mt-12 font-medium hover:text-[#5fc321]">
                                            {item.name}
                                    </NavLink>
                                ) : null
                            )}
                 {
                authStatus &&
                <NavLink onClick={()=>{setMenubar(false)}}>
                    <LogoutButton className='mx-6 mt-12 hover:text-[#5fc321] font-medium'/>
                </NavLink>
                
            } 

                </ul>


            </div>

        </header>
    )
}

export default Header
