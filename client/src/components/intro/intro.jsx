import { useState, useEffect, useRef } from "react";
import "./intro.scss";
import { Slide1, Slide2, Slide3 } from "./data";

export default function Intro() {
  const index = useRef(0);
  const slides = [Slide1, Slide2, Slide3];
  const [slide, setSlide] = useState(slides[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index.current < slides.length - 1) {
        index.current++;
      } else {
        index.current = 0;
      }
      setSlide(slides[index.current]);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  });

  return <div>{slide}</div>;
}
