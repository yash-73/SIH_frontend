import React from 'react'
// import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
function NoMatch() {
    const nomatch = useLocation();
    return (
        <div 
       
        className='p-8 flex flex-row justify-center text-xl font-semibold items-center text-[#5fc321] '>No match found for &apos;{nomatch.pathname}&apos;</div>
    )
}

export default NoMatch
