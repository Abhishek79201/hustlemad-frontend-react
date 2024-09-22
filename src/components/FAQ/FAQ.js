import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./faq.css";
import q1 from "../../images/FAQ/Group 265.png";
import q2 from "../../images/FAQ/Group 267.png";
import q3 from "../../images/FAQ/Group 270.png";
import q4 from "../../images/FAQ/Group 271.png";
import vector1 from "../../images/FAQ/Group 266.png";
import vector2 from "../../images/FAQ/Group 273.png";
import human from "../../images/FAQ/thinker.svg";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [value, isValue] = useState(true);
  const [value2, isValue2] = useState(true);
  const [value3, isValue3] = useState(true);
  const [value4, isValue4] = useState(true);
  const [value5, isValue5] = useState(true);

  const [value6, isValue6] = useState(true);
  document.title = "Hustlemad | FAQ";
  return (
    <>
      <div className="faqmain">
        <section className="faq-top-section">
          <div className="top-container">
            <div className="top-left">
              <div className="q1">
                <img src={q1} alt="" className="q1Img" />
              </div>
              <div className="vector1">
                <img src={vector1} alt="" className="vector1Img" />
              </div>
              <div className="q2">
                <img src={q2} alt="" className="q2Img" />
              </div>
            </div>
            <div className="top-middle">
              <h1>Frequently Asked Questions</h1>
              <p>
                Don't worry, you're not alone! Here are some of the top{" "}
                <br></br>
                questions we get asked all of the time.
              </p>
            </div>
            <div className="top-right">
              <div className="q3">
                <img src={q3} alt="" className="q3Img" />
              </div>
              <div className="vector2">
                <img src={vector2} alt="" className="vector2Img" />
              </div>
              <div className="q4">
                <img src={q4} alt="" className="q4Img" />
              </div>
            </div>
          </div>
        </section>

        <section className="faq-questions-section">
          <div className="questions-container">
            <div className="row1">
              <div className="content">
                <p className="qs">
                  Is there a minimum amount we need to order?
                </p>
                <div className={value ? "qsaF" : "qsa"}>
                  <p>
                    We are only able to process orders of 50 boxes or more. Less
                    than minimum orders are accepted on a case-by-case basis.
                  </p>
                </div>
              </div>

              <button className="icon" onClick={() => isValue(!value)}>
                {value ? (
                  <FontAwesomeIcon className="plus" icon={faPlus} />
                ) : (
                  <FontAwesomeIcon className="xmark" icon={faCircleXmark} />
                )}
              </button>
            </div>
            <hr className="greyline"/>
            <div className="row1">
              <div className="content">
                <p className="qs">Who designs the items?</p>
                <div className={value2 ? "qsaF" : "qsa"}>
                  <p>
                    Our in-house design team finds new ideas and creates mockups
                    for each project to get ideas flowing. You can provide your
                    logo or if you need help with designs, or need some ideas,
                    we are here to help!
                  </p>
                </div>
              </div>
              <button className="icon" onClick={() => isValue2(!value2)}>
                {value2 ? (
                  <FontAwesomeIcon className="plus" icon={faPlus} />
                ) : (
                  <FontAwesomeIcon className="xmark" icon={faCircleXmark} />
                )}
              </button>
            </div>
            <hr className="greyline"/>
            <div className="row1">
              <div className="content">
                <p className="qs">What's the ordering process like?</p>
                <div className={value3 ? "qsaF" : "qsa"}>
                  <p>
                    Our agents handle all of the ordering for you, and assemble
                    your boxes in-house. Once your boxes are ready to be sent
                    out, we will update you with tracking information.
                  </p>
                </div>
              </div>
              <button className="icon" onClick={() => isValue3(!value3)}>
                {value3 ? (
                  <FontAwesomeIcon className="plus" icon={faPlus} />
                ) : (
                  <FontAwesomeIcon className="xmark" icon={faCircleXmark} />
                )}
              </button>
            </div>
            <hr className="greyline"/>
            <div className="row1">
              <div className="content">
                <p className="qs">What is in a typical box?</p>
                <div className={value4 ? "qsaF" : "qsa"}>
                  <p>
                    It depends on what your project is for! Our most common box
                    includes a crew neck t-shirt, insulated water bottle, coffee
                    mug, A5 notebook, and pen (all custom branded) inside a
                    custom printed box. For new ideas, check out our{" "}
                    <a
                      href="https://drive.google.com/file/d/1nLJ8Iz-4HFMiyMkMLnVLKEh-DXMmP6_7/view?usp=sharing"
                      target="_blank"
                    >
                      catalog!
                    </a>
                  </p>
                </div>
              </div>
              <button className="icon" onClick={() => isValue4(!value4)}>
                {value4 ? (
                  <FontAwesomeIcon className="plus" icon={faPlus} />
                ) : (
                  <FontAwesomeIcon className="xmark" icon={faCircleXmark} />
                )}
              </button>
            </div>
            <hr className="greyline"/>
            <div className="row1">
              <div className="content">
                <p className="qs">Can I order samples?</p>
                <div className={value5 ? "qsaF" : "qsa"}>
                  <p>
                    Yes of course! If you wish to see samples of products you
                    are interested in, we charge for the cost of the samples and
                    will refund if returned.
                  </p>
                </div>
              </div>
              <button className="icon" onClick={() => isValue5(!value5)}>
                {value5 ? (
                  <FontAwesomeIcon className="plus" icon={faPlus} />
                ) : (
                  <FontAwesomeIcon className="xmark" icon={faCircleXmark} />
                )}
              </button>
            </div>
            <hr className="greyline"/>
            <div className="row1 lastrow">
              <div className="content">
                <p className="qs">
                  How long does it take for me to get my Swag?
                </p>
                <div className={value6 ? "qsaF" : "qsa"}>
                  <p>
                    At this moment, we cannot guarantee turnaround times due to
                    COVID-19 and the stress being placed on the supply chains.
                    We estimate new orders will be ready to ship within 4 weeks.
                    Thank you for your patience!
                  </p>
                </div>
              </div>
              <button className="icon" onClick={() => isValue6(!value6)}>
                {value6 ? (
                  <FontAwesomeIcon className="plus" icon={faPlus} />
                ) : (
                  <FontAwesomeIcon className="xmark" icon={faCircleXmark} />
                )}
              </button>
            </div>
          </div>
        </section>

        <section className="faq-lower-section">
          <div className="further-more">
            <div className="lower-left">
              <h1>Can’t find what you’re looking for?</h1>
              <p>
                You can post your question. Our team will reach out to you as
                soon as possible!
              </p>
              <button className="contact_us"><Link to="/contact" className="contactlink">Contact Us</Link></button>
            </div>
            <div className="lower-right">
              <img src={human} alt="" className="humanpic" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default FAQ;
