import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1 className="stats_head about_head">About the Doctor</h1>

      <div className="about_details">        <div className="about_right_detail">
          <img
            className="doctor_pic"
            src="./shravani.png"
            alt="Doctor Shravani"
          />
        </div>
        <div className="about_left_detail">
          <h1 className="about_left_text">Your Trusted Specialist</h1>
          <h1 style={{ fontSize: "45px" }} className="about_left_text">
            Dr. Shravani Pulluri
          </h1>
          <h3 className="about_left_text">
            DGO, MBBS
            <br />
            Gynecologist,Obstetrician,Reproductive Endocrinologist (Infertility)
          </h3>
          <p style={{ marginTop: "10px" }} className="about_left_text">
          Dr. Shravani Pulluri, Best Gynecologist and Obstetrician in Hyderabad has an immense experience in these fields. She completed DGO from Rajiv Gandhi University of Health Sciences, Bangalore, India in 2017 and MBBS from Rajiv Gandhi University of Health Sciences in 2013.
<br /><br />
She is a member of Indian Medical Association (IMA) and Federation of Obstetric and Gynaecological Societies of India (FOGSI). Some of the services provided by the doctor are: IUI,Pediatric,Low Sperm Count,Oocyte Donor and Semen Analysis etc.
          </p>
        </div>

      </div>
    </div>
  );
}
