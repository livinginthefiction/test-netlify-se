import React, {useEffect, useRef } from "react";
import Globe from "react-globe.gl";


function World () {
  const globeEl = useRef();
  const height = window.innerHeight;
  // const width = window.innerWidth;
  useEffect(() => {
    // aim at continental US centroid
    globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 });
    globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 3;
  }, []);
  console.log('globeEl',globeEl);
  return (
    <Globe
      ref={globeEl}
      globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      // globeImageUrl="https://yellowstud.io/wp-content/uploads/2020/08/css_globe_diffuse.jpg"
      bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
      // bumpImageUrl="https://yellowstud.io/wp-content/uploads/2020/08/css_globe_halo.png"
      width={height}
      height={height}
      backgroundColor="#fff0"
    />
  );
};

export default World;