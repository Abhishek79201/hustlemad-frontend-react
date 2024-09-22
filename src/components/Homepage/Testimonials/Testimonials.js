import React, { useState, useEffect } from 'react'
import Testimonialstyles from "./Testimonials.module.css";
import test_arrow from "../../../images/Testimonials/test _ arrow.svg";
import test_lefthand from "../../../images/Testimonials/Left hand - Frame 84.svg";
import test_mainbox from "../../../images/Testimonials/Group.svg";
import rabbit from "../../../images/Testimonials/Rabbit.svg";
import test_righthand from "../../../images/Testimonials/Right Hand - Frame 83.svg";
import grp231 from "../../../images/Testimonials/Group 231.png";
import left from '../../../images/catalogues/left.svg'
import right from '../../../images/catalogues/right.svg'

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  const getData = async () => {
    const data = await fetch(
      'https://hustlemad-backend.herokuapp.com/testimonial/get'
    )
    const json = await data.json()
    // console.log(json)
    setTestimonials(json.testimonials);
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    let intervalId = 0;
    const Changing = () => {
      intervalId = setInterval(() => {
        setIndex(prevIndex => {
          return (prevIndex + 1 < testimonials.length) ? (prevIndex + 1) : 0
        });
      }, 3000);
    }
    Changing()

    return () => {
      clearInterval(intervalId);
    }
  }, [testimonials, index])

  // console.log(testimonials[0]);

  return (
    <>
      <div className={Testimonialstyles.testimonial}>
        <div className={Testimonialstyles.testimonialheading}>
          <img className={Testimonialstyles.rabbit} src={rabbit} alt=""></img>
          <h1>Our Clients love us 3,000</h1>
          <img className={Testimonialstyles.arrowT} src={test_arrow} alt="" />
        </div>
        <div className={Testimonialstyles.rightdiv}>
          <img src={test_righthand} alt="" />
        </div>
        <div className={Testimonialstyles.middlediv}>
          <div className={Testimonialstyles.speechboxp2}>
            <img className={Testimonialstyles.bubble} src={test_mainbox} alt="" />
            <div className={Testimonialstyles.writingp2}>
              <p>
                {testimonials[index]?.description}
              </p>
              <img src={grp231} alt="" />
              <h2>{testimonials[index]?.name}</h2>
              <h3>{testimonials[index]?.companyName}</h3>
            </div>
          </div>
          <div className={Testimonialstyles.lowerContent}>
            <div className={Testimonialstyles.leftarrow}>
              <img src={left} alt="" onClick={() => setIndex((index - 1) >= 0 ? index - 1 : testimonials.length - 1)} />
            </div>
            <div className={Testimonialstyles.leftmostpersondiv}>
              <img src={testimonials[index - 2]?.image || testimonials[testimonials.length + index - 2]?.image} alt="" onClick={() => setIndex((index - 2) >= 0 ? index - 2 : testimonials.length - 2)} />
            </div>
            <div className={Testimonialstyles.leftpersondiv}>
              <img src={testimonials[index - 1]?.image || testimonials[testimonials.length + index - 1]?.image} alt="" onClick={() => setIndex((index - 1) >= 0 ? index - 1 : testimonials.length - 1)} />
            </div>
            <div className={Testimonialstyles.middlepersondiv}>
              <img src={testimonials[index]?.image} alt="" />
            </div>
            <div className={Testimonialstyles.rightpersondiv}>
              <img src={testimonials[index + 1]?.image || testimonials[index - testimonials.length + 1]?.image} alt="" onClick={() => setIndex((index + 1) < testimonials.length ? index + 1 : 0)} />
            </div>
            <div className={Testimonialstyles.rightmostpersondiv}>
              <img src={testimonials[index + 2]?.image || testimonials[index - testimonials.length + 2]?.image} alt="" onClick={() => setIndex((index + 2) < testimonials.length ? index + 2 : 1)} />
            </div>
            <div className={Testimonialstyles.rightarrow}>
              <img src={right} alt="" onClick={() => setIndex((index + 1) < testimonials.length ? index + 1 : 0)} />
            </div>
          </div>
        </div>
        <div className={Testimonialstyles.leftdiv}>
          <img src={test_lefthand} alt="" />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
