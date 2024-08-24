import { useRef, useState } from 'react'
import scrollContext from './scrollContext';


const ScrollContextProvider = ({children})=>{
        const [needtoScroll , setNeedtoScroll] = useState(false)
        const reference = useRef(null);
        const handleScroll = (ref) => {
            ref.current.scrollIntoView({ behavior: 'smooth' });
          };

        return (
            <scrollContext.Provider value={{reference, handleScroll, needtoScroll , setNeedtoScroll}}>
                    {children}
            </scrollContext.Provider>
        )
}

export default ScrollContextProvider
