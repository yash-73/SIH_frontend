import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import { Outlet } from "react-router-dom";
import ScrollContextProvider from "./Context/ScrollContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AnimatedRoutes from "./Components/AnimatedRoutes.jsx/AnimatedRoutes";
import Mainpage from "./Pages/Mainpage";
import AccountSignIn from "./Pages/AccountSignIn";
import Registration from "./Pages/Registration";
import NoMatch from "./Pages/NoMatch";
import Analyze from "./Components/Analyze/Analyze";
import ContactUs from './Components/Contact/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs'; // Import the AboutUs component

// import { useContext } from "react";
// import scrollContext from "./Context/scrollContext";

export default function App() {

  // const context = useContext(scrollContext);
  // const navRef = context.navRef;

  return (
    <BrowserRouter>
      <div className="min-h-[100vh] flex flex-col">
        <ScrollContextProvider>
          {/* <div ref={navRef}><Header/></div> */}
          <Header />
          <main className="md:flex-grow-[1] md:flex md:flex-col md:justify-center">
            <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="/about" element={<AboutUs />} /> 
              <Route path="/login" element={<AccountSignIn />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/analyze" element={<Analyze />} />
              <Route path="/contact" element={<ContactUs />} /> 
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </main>
          <Footer />
        </ScrollContextProvider>
      </div>
    </BrowserRouter>
  );
}
