import { useRef, useState } from 'react'
import scrollContext from './scrollContext';


const ScrollContextProvider = ({children})=>{
        const [needtoScroll , setNeedtoScroll] = useState(false)
        const reference = useRef(null);
        const navRef = useRef(null);
        const [navRefScroll , setNavRefScroll] = useState(false);

        const handleScroll = (ref) => {
            ref.current.scrollIntoView({ behavior: 'smooth' });
          };

        return (
            <scrollContext.Provider value={{reference, handleScroll, needtoScroll , setNeedtoScroll , navRef, navRefScroll , setNavRefScroll}}>
                    {children}
            </scrollContext.Provider>
        )
}

export default ScrollContextProvider
