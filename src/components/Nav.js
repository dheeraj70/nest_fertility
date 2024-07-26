import React, { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {

    const [NavColor, setNavColor] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY > 10
          ? setNavColor(true)
          : setNavColor(false)
      }

    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent)
    })

    
  return (
    <nav className="nav" style={NavColor?{backgroundColor: 'rgb(255,255,255, 1)'}:{backgroundColor: 'rgb(236, 197, 251,0)'}}>
        <div className="nav_logo">
            <img className='nav_logo_img' src="/nest_lin.png" alt="Nest Fertility and IVF" />
        </div>
        <div className="nav_links">
            <a className='nav_link' href="about">About</a>
            <a className='nav_link' href="Treatments">Treatments</a>
            <a className='nav_link' href="Testimonials">Testimonials</a>
            <a className='nav_link' href="Blog">Blog</a>
            
        </div>
        <div className="nav_btns">
            <button className="nav_btn">Book Appoitment</button>
            <button className="nav_btn">Call Us</button>
        </div>
    </nav>
  )
}
