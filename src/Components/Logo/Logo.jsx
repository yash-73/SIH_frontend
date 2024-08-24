import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
function Logo({className , width = '80px'}) {
    return ( 
        <NavLink  to='/'
        className={`${className} flex flex-row items-center cursor-pointer`}><img className={`w-[${width}] max-sm:max-w-[40px] max-w-[60px]`} src={logo} alt=''/> Farm Guard</NavLink>
    )
}

export default Logo
