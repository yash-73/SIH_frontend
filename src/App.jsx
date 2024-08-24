import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
// import { Outlet } from "react-router-dom"
import ScrollContextProvider from "./Context/ScrollContextProvider"
import { BrowserRouter, Routes ,  Route } from "react-router-dom"
// import AnimatedRoutes from "./Components/AnimatedRoutes.jsx/AnimatedRoutes"
import Mainpage from "./Pages/Mainpage"
import AccountSignIn from "./Pages/AccountSignIn"
import Registration from "./Pages/Registration"
import NoMatch from "./Pages/NoMatch"

export default function App() {
  

  return (
    <BrowserRouter>
    <div className="min-h-[100vh] flex flex-col">
   <ScrollContextProvider>
   <Header/>
   <main className="md:flex-grow-[1] md:flex md:flex-col md:justify-center">
     <Routes>
      <Route path="/" element={<Mainpage/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      <Route path="/login" element={<AccountSignIn/>}/>
      <Route path="/register" element={<Registration/>}/>
      {/* <Route path="/contact" element={<Contact/>}/> */}
      <Route path="*" element={<NoMatch/>}/>
     </Routes>
   </main>
   <Footer/>
   </ScrollContextProvider>
   </div>
   </BrowserRouter>
  )
}