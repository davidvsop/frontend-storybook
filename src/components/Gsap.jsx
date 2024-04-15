import React from 'react';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import '../../styles/gsap.css';

function Gsap() {
  const container = useRef();
  const circle = useRef();

  useGSAP(() => {
      // use selectors...
      gsap.to(".box", { rotation: "+=360", duration: 3 });

      // or refs...
      gsap.to(circle.current, { rotation: "-=360", duration: 3 });
    },
    { scope: container }
  ); // <-- scope for selector text (optional)

  return (
    <div className="App">
      <div ref={container} className="container">
        <div className="box gradient-blue">selector</div>
        <div className="circle gradient-green" ref={circle}>
          Ref
        </div>
      </div>
      <div className="box gradient-blue">selector</div>
    </div>
  );
}

export default Gsap
