import React from 'react'
import {useForm} from 'react-hook-form'


function ContactUs() {

  const { register, handleSubmit, formState: { errors, isSubmitting  }, reset } = useForm();

  const onSubmit = async (data) => {
    // Only include the password field in the submission
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data); // You can handle your submission here
    reset();
   
    
};

  return (
    <div className='flex flex-col items-center justify-center px-4'>
        <h2 className='text-[#009921] font-bold text-2xl my-4'>Contact Us</h2>
      
        <form action="submit" className='m-8 flex flex-col  items-left p-8 w-[50%] max-md:w-full rounded-2xl border-[1px] border-gray-400'
        onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
                    <input
                        id='name'
                        className='mb-2 text-md py-1 w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2'
                        type="text"
                        {...register("name", {
                            required: "Enter your name",
                            pattern: {
                                value: /^[A-Za-z\s'-]+$/,
                                message: 'Name can only contain letters, spaces, hyphens, and apostrophes',
                            }
                        })}
                    />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}


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

                    <label htmlFor="subject">Subject</label>
                    <input
                        id='subject'
                        className='mb-2 text-md py-1 w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2'
                        type="text"
                        {...register("subject", {
                            required: "Enter subject",
                            
                        })}
                    />
                    {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}


                    <label htmlFor="message">Message</label>
                    <textarea  id="message" 
                        className='mb-2 text-md py-1 w-full border-[1px] border-gray-300 outline-none focus:border-gray-500 pl-2'

                    {...register("message" , {
                      required: "Enter message"
                    })}></textarea>
                    <label htmlFor="message" className='self-end text-[10px] '>Hold and pull down to expand</label>

          
<button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-[100px] bg-[#5fc321] self-center my-4 px-4 py-2 rounded-lg text-white border-[1px] border-[#498722]'
                >
                    {isSubmitting ? 'Loading...' : 'Submit'}
                </button>

        </form>
       
    </div>
  )
}

export default ContactUs
