import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
    <div className="footerUp">

      <div className="footerIn footer1">
        <div className="footerLogo">
          <img className="footerLogoImg" src="white_nest.svg" alt="Nest Fertility" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15221.029481151216!2d78.344265!3d17.4952234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8bb2b9d820528499%3A0x7c697cabc0624dd0!2sDr%20Shravani&#39;s%20Nest%20Fertility!5e0!3m2!1sen!2sin!4v1722336547067!5m2!1sen!2sin"
          className="footerMap"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="footer1Details">
            <div className="f1DetailName">
                Address :
            </div>
            <div className="f1DetailValue">
                123-31-23434, Vattepally, Madeena Guda, Gahhre lane, Cannu Road - 3000422
            </div>
            <div className="f1DetailName">
            <i class="fa-solid fa-envelope"></i> :
            </div>
            <div className="f1DetailValue">
steverogers@gmail.com            </div>
            <div className="f1DetailName">
            <i class="fa-solid fa-phone"></i> :
            </div>
            <div className="f1DetailValue">
            7895412548            </div>
            <div className="f1DetailName">
            <i class="fa-solid fa-phone"></i> :
            </div>
            <div className="f1DetailValue">
                8963245671
            </div>
        </div>
      </div>
      <div className="footerIn footer2">
        <p className="footerLinksHead">Treatments</p>
        <ul className="footerLinksList">
    <li className="footerLinksitems">Gynecology</li>
    <li className="footerLinksitems">In Vitro Fertilization (IVF)</li>
    <li className="footerLinksitems">Intrauterine Insemination (IUI)</li>
    <li className="footerLinksitems">Ovulation Induction</li>
    <li className="footerLinksitems">Intracytoplasmic Sperm Injection (ICSI)</li>
    <li className="footerLinksitems">Egg Freezing</li>
    <li className="footerLinksitems">Male Infertility Treatments</li>
    <li className="footerLinksitems">Polycystic Ovary Syndrome (PCOS) Treatment</li>
</ul>

      </div>
      <div className="footerIn footer3">
        <div>
        <p className="footerLinksHead">About</p>
        <ul className="footerLinksList">
    <li className="footerLinksitems">About us</li>
    <li className="footerLinksitems">Know your Doctor</li>
    <li className="footerLinksitems">Testimonials and Reviews</li>
    
</ul>
        </div>
      <div>
      <p className="footerLinksHead">Contact us</p>
        <ul className="footerLinksList">
    <li className="footerLinksitems">Whatsapp us <i class="fa-brands fa-whatsapp"></i></li>
    <li className="footerLinksitems">Call us <i class="fa-solid fa-phone"></i></li>
    <li className="footerLinksitems">Email us <i class="fa-solid fa-envelope"></i></li>
    
</ul>
      </div>
      </div>
                  
      </div>
      <div className="footerDown">
        <div style ={{height: "1px", width: "100%", backgroundColor: "rgba(255, 150, 241, 0.502)"}}></div>
      <p>© {(new Date).getFullYear()} Nest Fertility & IVF. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
