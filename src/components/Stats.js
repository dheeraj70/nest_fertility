import React, { useEffect, useState } from "react";
import "./Stats.css";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref: statRef, inView: Statview } = useInView();
  const [SuccessRate, setSuccessRate] = useState(0);

  useEffect(() => {
    if (Statview) {
      if (SuccessRate < 98) {
        setTimeout(() => {
          setSuccessRate(SuccessRate + 1);
        }, 10);
      }
    }
  }, [SuccessRate, Statview]);

  return (
    <div className="stats">
      <h1 className="stats_head">Why Nest Fertility & IVF?</h1>
      <div className="youtubeEmbedDiv">
        <iframe
          className="youtubeEmbed"
          
          src="https://www.youtube.com/embed/sm3txNWurus?si=MaQojNNDs-pV1pHd?&autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="statLists">
        <div className="statList">
          <div className="stat">
            <h1 className="statHead">{SuccessRate}%</h1>
            <p className="statUnder">Success Rate</p>
          </div>
          <div className="stat">
            <h1 className="statHead" ref={statRef}>
              {Math.floor(SuccessRate / 7)}+ Yrs
            </h1>
            <p className="statUnder">Experience</p>
          </div>
          <div className="stat statDesktop">
            <img className="statIcon" src="/doc.png" alt="Doctor" />
            <p className="statUnder">Top IVF Experts</p>
          </div>
          <div className="stat statDesktop">
            <img className="statIcon" src="/pig.png" alt="Doctor" />
            <p className="statUnder">Affordable</p>
          </div>
        </div>
        <div className="statList statListMob">
          <div className="stat">
            <img className="statIcon" src="/doc.png" alt="Doctor" />
            <p className="statUnder">Top IVF Experts</p>
          </div>
          <div className="stat">
            <img className="statIcon" src="/pig.png" alt="Doctor" />
            <p className="statUnder">Affordable</p>
          </div>
        </div>
      </div>
    </div>
  );
}
