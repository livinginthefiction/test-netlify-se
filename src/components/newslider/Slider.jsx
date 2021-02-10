import React, { useState } from "react";
import Slide from "./Slide";
const Slider = ({ slides }) => {
  const [cur, setCur] = useState(0);
  const nextMoving = () => {
    if (cur >= slides.length - 1) {
      setCur(0);
    } else {
      setCur(cur + 1);
    }
  };
  const prevMoving = () => {
    if (cur <= 0) {
      setCur(slides.length - 1);
    } else {
      setCur(cur - 1);
    }
  };
  return (
    <section className="slider mt-4">
      {!slides || slides.length === 0 ? null : (
        <>
          <div className="slider-btn">
          <button className="prev" onClick={prevMoving}>
            <span className="lnr lnr-chevron-left" />
          </button>
          <button className="next" onClick={nextMoving}>
            <span className="lnr lnr-chevron-right" />
          </button>
          </div>
          {slides.map((slide, idx) => {
            return (
              <Slide
                classy={idx === cur ? "slide active" : "slide"}
                key={idx}
                {...slide}
              />
            );
          })}
        </>
      )}
    </section>
  );
};

export default Slider;
