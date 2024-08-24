// import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {useForm} from 'react-hook-form'
import { FaEye, FaEyeSlash } from "react-icons/fa";
function SingIn() {

    const {register , handleSubmit , formState: {errors , isSubmitting} } = useForm();
    const [view, setView] = useState("password");

    const toggleView = (e)=>{
        e.preventDefault();
        if (view == "password"){
            setView("text") 
        }
        else{
            setView("password")
        }
    }

    const onSubmit = async(data)=>{
        await new Promise((resolve)=>{setTimeout(resolve,1000);})
        console.log(data)
    }

    return  (
        <div className={`bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover h-[90svh] text-center flex items-center justify-center `}>
                <form action="submit" className='flex flex-col max-sm:w-[80vw] bg-[#ffffff]  rounded-2xl py-8  max-sm:px-8 sm:px-12 sm:min-w-[350px]   gap-4 shadow-2xl border-gray-400 border-[1px] ' onSubmit={handleSubmit(onSubmit)}>

                <h3 className='font-semibold text-2xl  text-[#5fc321]'>Login</h3>

                <div className='flex flex-col items-start'>
               
                <label  htmlFor="email">Email</label>
                <input className=' mb-2 text-md py-1 w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2' type="text"
                {...register("email" ,{
                    required: "Email is required",
                    validate: (value) => {
                        if (!value.includes("@")){
                            return ("Enter valid Email")
                        }
                        return true;
                    }

                })} />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <div className='w-full flex flex-row justify-between '><label htmlFor="password">Password</label>
                <button className='relative top-[28px] mr-2 z-10' onClick={toggleView}>{view == 'password' ? <FaEyeSlash/> : <FaEye/>}</button></div>
                <input className=' mb-2 text-md py-1 pr-[10%] w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2' type={view}
                {...register("password" , {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must have atleast 8 characters"
                    }
                }

                )}/>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <button type="submit" className='w-[100px] bg-[#5fc321] self-center px-4 py-2 rounded-lg text-white border-[1px] border-[#498722]'
                disabled={isSubmitting}>{isSubmitting? 'Loading...' : 'Login'}</button>

                <p className='mb-0'>Don&apos;t have an account? <NavLink to='/register' className='underline text-blue-500'>Register</NavLink></p>

        </form>
            
            </div>
        
    )
}

export default SingIn
