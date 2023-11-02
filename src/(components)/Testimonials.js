'use client';
import { useEffect, useState } from 'react';
import Carousel from './Carousel';

const Testimonials = () => {
  const [Width, setWidth] = useState(480);

  const HandleResizeWork = () => {
    let WindowWidth = window.innerWidth;
    if (WindowWidth <= 680) {
      setWidth(WindowWidth);
      let slickSlide = document.querySelectorAll('.slick-slide > div');

      slickSlide.forEach((EachSlide) => {
        EachSlide.style.width = `${WindowWidth - 70}px`;
      });
    }
  };
  useEffect(() => {
    window.addEventListener('resize', HandleResizeWork);
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
            <ul className="slideshow-slider flex">
              <Carousel Width={Width} />
            </ul>
          </div>
          <div className="slideshow-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
