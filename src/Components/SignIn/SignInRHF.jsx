import React from 'react'
import {useForm} from 'react-hook-form'


function SignInRHF() {
    const {register , handleSubmit , formState: {errors, isSubmitting}} = useForm();
    const onSubmit = async(data)=>{
        await new Promise((resolve)=>{setTimeout(resolve,1000);
            console.log(data);
        })
            
    }
    return (
        <form className='flex gap-4 items-center flex-col py-8 md:w-[400px] max-md:w-[70vw] bg-gray-100 rounded-xl px-8 max-lg:my-8 max-lg:mx-4' action="submit" onSubmit={handleSubmit(onSubmit)}>
            <input className='outline-none rounded-sm pl-1 sm:w-[80%] max-w-[350px] max-sm:w-[100%] border-[1px] focus:border-gray-600' {...register("email" , {
                required:"Email is required",
                 validate: (value)=>    {
                    if (!value.includes("@")){
                        return "Enter valid Email"
                    }
                    return true;
                 }
            })} type="text" placeholder='Email' />
            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
            <input className='outline-none rounded-sm pl-1 max-sm:w-[100%] max-w-[350px] sm:w-[80%] border-[1px] focus:border-gray-600' {...register("password" , {
                required:"Password is required",
                minLength: {
                    value: 8,
                    message: "Password must have atleast 8 characters"
                }
            })} type="password" placeholder='Password' />
            {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            <button disabled={isSubmitting} className='border-2 border-white py-2 w-[50%]' type='submit'>{
                isSubmitting? 'Loading...' : 'Submit'}</button>
        </form>
    )
}

export default SignInRHF
