import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [readMore, setReadmore] = useState(false);
  return (
    <div className="about">
      <h1 className="stats_head about_head">About the Doctor</h1>

      <div className="about_details">
        <div className="about_right_detail">
          <img
            className="doctor_pic"
            src="./shravani.png"
            alt="Doctor Shravani"
          />
        </div>
        <div className="about_left_detail">
          <h1 className="about_left_text docNameHead">
            Your Trusted Specialist
          </h1>
          <h1 className="about_left_text docName">Dr. Shravani Pulluri</h1>
          <h3 className="about_left_text docDesign">
            DGO, MBBS
            <br />
            Gynecologist,Obstetrician,Reproductive Endocrinologist (Infertility)
          </h3>
          <p style={{ marginTop: "10px" }} className="about_left_text docDesc">
            Dr. Shravani Pulluri, Best Gynecologist and Obstetrician in
            Hyderabad has an immense experience in these fields. She completed
            DGO from Rajiv Gandhi University of Health Sciences, Bangalore,
            India in 2017 and MBBS from Rajiv Gandhi University of Health
            Sciences in 2013.
            <br />
            <br />
            She is a member of Indian
            {readMore
              ? ` Medical Association (IMA) and Federation of Obstetric and Gynaecological Societies of India (FOGSI). Some of the services provided by the doctor are: IUI,Pediatric,Low Sperm Count,Oocyte Donor and Semen Analysis etc.`
              : ""}
            <a
              className="readmore"
              onClick={() => {
                readMore ? setReadmore(false) : setReadmore(true);
              }}
            >
              ...{readMore? "Read less": "Read more"}
            </a>
            
          </p>
        </div>
      </div>
    </div>
  );
}
