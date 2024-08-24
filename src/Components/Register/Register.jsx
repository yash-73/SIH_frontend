import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Register() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
    const [view, setView] = useState("password");
    const watchPassword = watch('password');

    const toggleView = (e) => {
        e.preventDefault();
        setView(view === "password" ? "text" : "password");
    };

    const onSubmit = async (data) => {
        // Only include the password field in the submission
        const { confirmPassword, ...submissionData } = data;
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(submissionData); // You can handle your submission here
    };

    return (
        <div className={`bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover h-[90svh] text-center flex items-center justify-center`}>
            <form className='flex flex-col max-sm:w-[80vw] bg-[#ffffff] rounded-2xl py-8 max-sm:px-8 sm:px-12 sm:min-w-[350px] gap-4 shadow-2xl border-gray-400 border-[1px] my-4' onSubmit={handleSubmit(onSubmit)}>

                <h3 className='font-semibold text-2xl text-[#5fc321]'>Register</h3>

                <div className='flex flex-col items-start'>
                    <label htmlFor="name">Name</label>
                    <input
                        id='name'
                        className='mb-2 text-md py-1 w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2'
                        type="text"
                        {...register("name", {
                            required: "Enter name",
                            pattern: {
                                value: /^[A-Za-z\s'-]+$/,
                                message: 'Name can only contain letters, spaces, hyphens, and apostrophes',
                            }
                        })}
                    />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    <label htmlFor="location">Location</label>
                    <input
                        id='location'
                        className='mb-2 text-md py-1 w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2'
                        type="text"
                        {...register("location", {
                            required: "Enter location",
                        })}
                    />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}

                    <label htmlFor="accounttype">Account Type</label>
                    <select
                        id="accounttype"
                        className='mb-2 text-md py-1 w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2 bg-transparent text-medium font-normal'
                        {...register("accounttype", {
                            required: "Select Account Type"
                        })}
                    >
                        <option value=''>--Select Account Type--</option>
                        <option value="Farmer">Farmer</option>
                        <option value="Administrative">Administrative</option>
                    </select>
                    {errors.accounttype && <p className='text-red-500'>{errors.accounttype.message}</p>}

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        className='mb-2 text-md py-1 w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2'
                        type="text"
                        {...register("email", {
                            required: "Email is required",
                            validate: (value) => value.includes("@") || "Enter valid Email"
                        })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <div className='w-full flex flex-row justify-between'>
                        <label htmlFor="password">Password</label>
                        <button
                            className='relative top-[28px] mr-2 z-10'
                            onClick={toggleView}
                        >
                            {view === 'password' ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <input
                        id="password"
                        className='mb-2 text-md py-1 pr-[10%] w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2'
                        type={view}
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                        })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        className='mb-2 text-md py-1 w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2'
                        type={view}
                        {...register("confirmPassword", {
                            required: "Password confirmation is required",
                            validate: (value) => value === watchPassword || "Passwords do not match"
                        })}
                    />
                    {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
                </div>

                <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-[100px] bg-[#5fc321] self-center px-4 py-2 rounded-lg text-white border-[1px] border-[#498722]'
                >
                    {isSubmitting ? 'Loading...' : 'Register'}
                </button>

                <p className='mb-0'>Already have an account? <NavLink to='/login' className='underline text-blue-500'>Login</NavLink></p>

            </form>
        </div>
    );
}

export default Register;
