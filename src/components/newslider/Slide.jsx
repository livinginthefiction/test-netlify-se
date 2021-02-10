import React from "react";

const Slide = ({ classy, title, subtitle, image }) => (
  <div className={classy}>
    <h1 className="slide__title">{title}</h1>
    <h2 className="slide__subtitle">{subtitle}</h2>
    <img src={image} alt={subtitle} className="slide__image" />
  </div>
);
export default Slide;
