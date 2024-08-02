import logo from './logo.svg';
import './App.css';


import Hero from './components/Hero';
import Nav from './components/Nav';
import Stats from './components/Stats'
import About from './components/About';
import Reviews from './components/Reviews';
import { useState ,useEffect, useRef} from 'react';
import Book from './components/Book';
import Footer from './components/Footer';

//import Container from './components/Container';
function App() {

  const [scrolledDown, setScrolledDown] = useState(false);

  const floatingArrow = useRef(null);

  const listenScrollEvent = () => {
    window.scrollY > 450 ? setScrolledDown(true) : setScrolledDown(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  useEffect(()=>{
    if(scrolledDown){
      floatingArrow.current.classList.add("showFloatingArrow");
    }else{
      floatingArrow.current.classList.remove("showFloatingArrow");
    }
  },[scrolledDown]);

  return (
    <>
    <div id="emptyTop" className="emptyTop"></div>
    <Nav />
    <Hero />
    <Stats />
    <About />
    <Reviews />
    <Book />
    <Footer />
    {/*<div className="floatingWhatsApp" onClick={()=>{window.open("https://wa.me/7799001120")}}>Chat with us<i style={{fontSize: "25px"}} class="fa-brands fa-whatsapp"></i></div>
    <div className="floatingCall" onClick={()=>{window.open("tel:+917799001120")}}><i style={{fontSize: "17px"}} class="fa-solid fa-phone"></i></div>*/}
    <div ref={floatingArrow} className="floatingArrow" onClick={()=>{window.location.href = "#emptyTop"}}><i class="fa-solid fa-arrow-up"></i></div>
    
    <div className="floatingDiv">
      <div className="floatingBlur">

      </div>
    <div className="fCall" onClick={()=>{window.open("tel:+917799001120")}}>Call Us<i style={{fontSize: "14px"}} class="fa-solid fa-phone"></i></div>
    <div className="fWhatsApp" onClick={()=>{window.open("https://wa.me/917799001120?text=I%20want%20to%20book%20an%20appointment")}}>Book Appointment<i style={{fontSize: "25px"}} class="fa-brands fa-whatsapp"></i></div>

    </div>

    </>
  );
}

export default App;
