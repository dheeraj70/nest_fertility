import React, { useState, useEffect, useRef } from "react";
import "./Nav.css";

export default function Nav() {
  const [NavColor, setNavColor] = useState(false);

  const toggle = useRef(null);
  const burger1 = useRef(null);
  const burger2 = useRef(null);
  const burger3 = useRef(null);

  const bookAppointment = ()=>{window.open("https://wa.me/7799001120")};

  const burgerPressed = () => {
    toggle.current.classList.toggle("nav_links_show");
    burger1.current.classList.toggle("burger1");
    burger2.current.classList.toggle("burger2");
    burger3.current.classList.toggle("burger3");
    (document.body.style.overflow == "") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
  }

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor(true) : setNavColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <nav
      className="nav"
      style={
        NavColor
          ? { backgroundColor: "rgb(255,255,255, 1)" }
          : { backgroundColor: "rgb(236, 197, 251,0)" }
      }
    >
      <div className="nav_logo">
        <img
          className="nav_logo_img"
          src="/dark_nest.svg"
          alt="Nest Fertility and IVF"
        />
      </div>
      <div className="nav_links" ref={toggle}>
        <a className="nav_link nav_link_top" href="about">
          About
        </a>
        <a className="nav_link" href="Treatments">
          Treatments
        </a>
        <a className="nav_link" href="#testimonials" onClick={()=>{(window.matchMedia("(max-width: 768px)").matches)&&burgerPressed()}}>
          Testimonials
        </a>
        <a className="nav_link nav_link_bottom" href="Blog">
          Blog
        </a>
      </div>
      <button
        className="nav_burger"
        onClick={burgerPressed}
      >
        <div ref={burger1} className="burgerb"></div>
        <div ref={burger2} className="burgerb"></div>
        <div ref={burger3} className="burgerb"></div>
      </button>
      <div className="nav_btns">
        <button className="nav_btn" onClick={bookAppointment}>Book Appoitment</button>
        <button className="nav_btn" onClick={()=>{window.open("tel:7799001120")}}>Call Us</button>
      </div>

      
    </nav>

    
  );
}
