// import React from 'react'
import aiml from '../../assets/brain.png'
import camera from '../../assets/diaphragm.png'
import info from '../../assets/file.png'
import steps from '../../assets/stairs.png'
import solution from '../../assets/solution.png'
import update from '../../assets/changes.png'

// import { forwardRef } from 'react'






function Features() {

    const feats = [
        {
            name: "Advanced Disease Detection",
            image: aiml,
            text: 'Utilize machine learning and image processing technology to accurately identify crop diseases.',
        },
        {
            name: "Simple Image Upload",
            image: camera,
            text: "Easily upload photos of your crop leaves. Our intuitive interface ensures a smooth and hassle-free experience.",
        },
        {
            name: "Comprehensive Disease Information",
            image: info,
            text: "Receive detailed information about the identified disease, including its name, symptoms, and causes.",
        },
        {
            name: "Disease Stage Analysis",
            image: steps,
            text: "Early detection and precise stage analysis help you take timely action to mitigate damage.",
        },
        {
            name: "Preventative Measures and Solutions",
            image: solution,
            text: "Access expert recommendations on how to prevent the spread of the disease and protect your crops.",
        },
        {
            name: "Continuous Learning and Update",
            image: update,
            text: "Our platform continuously evolves to provide you with the most current and reliable information.",
        },
    ]

   

    return (<>
        <div  className='flex flex-col items-center pt-8 border-y-2 border-[#5fc321]'>
            <h2 className='text-[#5fc321] font-bold text-3xl'>Features</h2>
            <ul className='flex flex-col md:flex-row flex-wrap justify-center max-md:items-center '>
                {feats.map((item)=>{ 
                    return(
                    <div  key={item.name} className='flex flex-col items-center md:w-[25%] md:max-lg:w-[40%] max-md:w-[70%] m-8 bg-gray-300 gap-8 p-8 rounded-2xl text-center shadow-xl border-gray-400 border-[1px] text-pretty'>
                    <img src={item.image}  className='w-[80px]' alt={item.name} />
                    <h3 className='font-bold text-2xl'>{item.name}</h3>
                    <p className='font-medium'>{item.text}</p>
                </div> )
})}
                
                

            </ul>
        </div>
        
        </>
    )
}

export default Features
