import logo from './logo.svg';
import './App.css';


import Hero from './components/Hero';
import Nav from './components/Nav';
import Stats from './components/Stats'
import About from './components/About';
import Reviews from './components/Reviews';
import { useState ,useEffect, useRef} from 'react';

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
    <div className="floatingWhatsApp" onClick={()=>{window.open("https://wa.me/7799001120")}}>Chat with us<i class="fa-brands fa-whatsapp"></i></div>
    <div ref={floatingArrow} className="floatingArrow" onClick={()=>{window.location.href = "#emptyTop"}}><i class="fa-solid fa-arrow-up"></i></div>

    </>
  );
}

export default App;
