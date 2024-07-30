import React from 'react';
import './Book.css'

export default function Book() {
  return (
    <div className='book' >
        
        <h1 className='bookHead'>Begin your path to parenthood today.</h1>
        <p className="bookSub">Ready to take the next step? Schedule your appointment at Nest Fertility today.</p>
    
        <div className="bookDetails">
            <div className="bookPhones">
                    <h2 onClick={()=>{window.open("tel:+917799001120")}} className="bookPhone">+91 7799001120</h2>
                    <h2 onClick={()=>{window.open("tel:+917799001120")}} className="bookPhone">+91 9030446570</h2>
            </div>
            <div className="bookDetailsDivider">

            </div>
            <div className="bookWhatsApp">
                <p className='bookWhatsAppHead'>Request an Appointment on Whatsapp.</p>
                <button onClick={()=>{window.open("https://wa.me/7799001120")}} className='bookDetailsBtn'>Book an Appointment <i class="fa-solid fa-calendar-check"></i></button>
            </div>
        </div>
    </div>
  )
}
