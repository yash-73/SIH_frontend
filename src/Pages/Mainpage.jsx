import { useContext, useEffect } from 'react'
// import Header from '../Components/Header/Header'
import Features from '../Components/Header/Features'
import scrollContext from '../Context/scrollContext'
import howtouse from '../assets/howtouse.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { motion } from 'framer-motion'

function Mainpage() {

    const context = useContext(scrollContext);
    const handleScroll = context.handleScroll;
    const reference = context.reference;
    const needtoScroll = context.needtoScroll;
    const setNeedtoScroll = context.setNeedtoScroll;
    const navigate = useNavigate();
    const authStatus = useSelector((state)=>state.auth.status);
    const handleClick = ()=>{
        // e.preventDefault();
        navigate('/login')
    }

    useEffect(()=>{
        if(needtoScroll == true) handleScroll(reference);
        setNeedtoScroll(false);
    })
    return (<div>
    
    <div className={`bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover h-[90svh] text-center flex flex-col justify-center  items-center gap-[3%]`}>

<h1 className='text-white drop-shadow-2xl  font-bold text-3xl '>Welcome to Farm Guard</h1>
<p className='text-white font-bold lg:text-5xl text-2xl'>Nurture your crops, ensure healthy growth!</p>
 { authStatus && <button onClick={()=>{navigate('/analyze')}} className='text-white font-bold border-2 border-white hover:scale-110 transition-all hover:bg-white hover:text-black
 w-[fit-content] px-4 py-2  rounded-md'>Analyze Crop</button>}
</div>

<div className='flex flex-col justify-center text-center items-center md:text-2xl
 text-white'>
    <div className='flex md:flex-row flex-col justify-center'>
    <div className='bg-[#5fc321] p-8 mx-4 my-6 md:w-[42vw] rounded-xl'>Keep your crops healthy and thriving with early detection and care</div>
    <div className='bg-[#5fc321] p-8 mx-4 md:w-[42vw] my-6 rounded-xl'>Use our simple tool to identify potential issues before they spread, ensuring a bountiful harvest.</div>
    </div>
    <div className='font-bold text-black mx-4 md:w-[70%] my-6 md:text-3xl'>Upload images of your crop leaves to quickly identify diseases, understand their stages, and learn how to stop them from spreading.</div>
</div>
            <div ref={reference}>
                <Features/>
            </div>
            <img src={howtouse} alt="" />
            <div className='flex flex-col items-center my-8'>
            <button className='px-4 py-2 text-2xl font-bold text-white w-[190px] border-2  hover:border-[#488224] rounded-lg transition-all bg-[#5fc321] hover:scale-105' onClick={handleClick} >Get Started</button>
            <h4  className='font-medium text-2xl mt-6'>Signup today!</h4>
            </div>
            
            </div>

    )
}

export default Mainpage
