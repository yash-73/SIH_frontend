// import React from 'react'
import { logout } from "../../store/authSlice"
import {useDispatch} from 'react-redux'
function LogoutButton({className}) {

    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(logout());
    }

    return (
        <button className={`${className}`} onClick={handleClick}>
            Logout
        </button>
    )
}

export default LogoutButton
