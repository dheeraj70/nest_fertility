import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Reviews.css";

export default function Reviews() {
  return (
    <div className="reviews">
      <h1 className="stats_head about_head">What People say about us.</h1>
      <div className="googleReviews">
        <div className="badge">
          <div className="badgeImgDiv"><img src="./nest_badge.png" alt="Clinic" className="badgeImg" /></div>
          
          <div className="badgeDetail">
            <div className="bD-l">
              <h2 className="bD-text">Dr Shravani's Nest Fertility</h2>
              <h2 className="bD-text">5.0 ★ ★ ★ ★ ★</h2>
            </div>
            <div className="bD-r">
              <button className="badgeBtn">Review us</button>
            </div>
          </div>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={1000}
          centerMode={true}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={true}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          <div className="citem">Item 1</div>
          <div class="citem">Item 1</div>
          <div class="citem">Item 1</div>
          <div class="citem">Item 1</div>
          <div class="citem">Item 1</div>
          <div class="citem">Item 1</div>
          <div class="citem">Item 1</div>
        </Carousel>
      </div>
    </div>
  );
}
