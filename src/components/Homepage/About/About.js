import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import tryblogo from '../../../images/SwagPack/Hustlemad.svg';
import Speech from '../../../images/SwagPack/Speechbubble.svg';
import left from '../../../images/SwagPack/leftb.png';
import right from '../../../images/SwagPack/Swagboxright.png';
import Astyles from './About.module.css';

function About() {
  // console.log(window.screen.height,window.screen.width);
  const [animated, setAnimated] = useState(false);
  window.onscroll = function () { myFunction() };
  function myFunction() {
    let element = document.getElementById("swagpackpage");
    const rect = element.getBoundingClientRect();
    if (!rect) return;
    if (rect.y < window.screen.height - rect.height) {
      setAnimated(true);
    }
  }
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  return (
    <>
      <div className={Astyles.about} id="swagpackpage">
        <h1>Stand out from the clutter</h1>
        <div className={Astyles.boxrow}>
          <div className={Astyles.swagbox}>
            <img src={left} alt="left" className={animated ? Astyles.swagleftanimate : Astyles.swagleft} />
            <img src={right} alt="right" className={animated ? Astyles.swagrightanimate : Astyles.swagright} />
            <div className={animated ? Astyles.animatelogoandbutton : Astyles.textblockleft}>
              <div className={Astyles.tryblogos}>
                <img src={tryblogo} alt="Logo" />
              </div>
              <div className={Astyles.orderbutton}>
                <NavLink to='/catalogue'>
                  <button className={Astyles.bookbtn}>Swag Box</button>
                </NavLink>
              </div>
            </div>
            <div className={Astyles.textblockright}>
              <div className={animated ? Astyles.speechanimate : Astyles.Speech}>
                <img src={Speech} alt="Textbox" />
                <p>Products from India's top brands</p>
              </div>
              <div className={animated ? Astyles.speechanimate : Astyles.Speech}>
                <img src={Speech} alt="Textbox" />
                <p>Customisation tailored to the brand identity</p>
              </div>
              <div className={animated ? Astyles.speechanimate : Astyles.Speech}>
                <img src={Speech} alt="Textbox" />
                <p>Powered by Amazon-grade fulfilment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About