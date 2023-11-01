// const timeDelay = 10000;

import { useEffect, useState } from "react";
import Carousel from "./Carousel";

const Testimonials = () => {
  const [Width, setWidth] = useState(480);

  // useEffect(() => {
  //   setTimeout(() => {
  //     return setIndex((prevIndex) =>
  //       prevIndex === testimonialData.length - 1
  //         ? 0
  //         : (prevIndex + 1) % testimonialData.length
  //     );
  //   }, timeDelay);
  //   return () => {};
  // }, [index]);
  const HandleResizeWork = () => {
    let WindowWidth = window.innerWidth;
    if (WindowWidth <= 680) {
      setWidth(WindowWidth);
      let slickSlide = document.querySelectorAll(".slick-slide > div");

      slickSlide.forEach((EachSlide) => {
        EachSlide.style.width = `${WindowWidth - 70}px`;
      });
    }
  };
  useEffect(() => {
    window.addEventListener("resize", HandleResizeWork);
    HandleResizeWork();
  }, []);

  return (
    <section className="testimonials">
      <div className="testimonial-wrapper flex">
        <div className="testimonials-left">
          <p className="small">TESTIMONIAL</p>
          <h2>Clients loves jobi</h2>
          <h4 className="testimonials-left-rating h4">A+ Rating</h4>
          <p>Avg rating 4.8 makes us best market place</p>
        </div>
        <div className="testimonials-right">
          <div className="slideshow">
            <ul
              className="slideshow-slider flex"
              // style={{ transform: `translate3d(${-index * 50}%, 0, 0)` }}
            >
              <Carousel Width={Width} />
            </ul>
          </div>
          <div className="slideshow-dots">
            {/* {testimonialData.map((person, personIndex) => (
              <div
                key={person.id}
                className={`slideshow-dot ${
                  index === personIndex ? "active-dot" : ""
                }`}
              ></div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
