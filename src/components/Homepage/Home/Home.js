import React from 'react'
import { NavLink } from 'react-router-dom'
import Homestyles from './Home.module.css'
import swagshape from '../../../images/Hero/circ.svg';
// import hoodieman from '../../../images/Hero/Main.png';
// import socks from '../../../images/Hero/socks.png';
// import tees from '../../../images/Hero/tshirt.png';
// import bottle from '../../../images/Hero/bottle.png';
// import notebook from '../../../images/Hero/notebook_pen.png';
import Typewriter from 'typewriter-effect';
import './Typewriter.css';

function Home() {
  // const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  return (
    <>
      <div className={Homestyles.container}>
        <h1>
          <span className={Homestyles.TypingEfect}><Typewriter
            options={{
              strings: ["Thoughtful", "Curated", "Quality"],
              autoStart: true,
              loop: true,
              delay: 120,
              deleteSpeed: 80,
              pauseFor: 500
            }}
          /></span>
          <span className={Homestyles.firstword}></span><span className={Homestyles.swagfor}><img className={Homestyles.swagcircle} src={swagshape}></img>merch</span> from 100+ D2C brands</h1>
        <p>Delight your tribe. Leave the hustle and the madness to us.</p>
        <NavLink to="/catalogue">
          <button className={Homestyles.startbtn}>Get Started</button>
        </NavLink>
        <div className={Homestyles.teesandbottle}>
          <div className={Homestyles.tees}>
            <img src='https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/7fcb68bf-79b1-4165-6b32-4d0e41b59f00/public' alt="items" />
          </div>
          <div className={Homestyles.bottle}>
            <img src='https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/acb9ffef-8f87-4ce9-8fb5-d86735a43c00/public' alt="items" />
          </div>
        </div>
        <div className={Homestyles.hoodieman}>
          <img src='https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/084a3361-9bbd-4047-d2b8-45d9f1608900/public' alt="" />
        </div>
        <div className={Homestyles.socksandnotebook}>
          <div className={Homestyles.socks}>
            <img src='https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/bfeaef4a-fcf5-452f-d6cd-1ef2a3c68900/public' alt="items" />
          </div>
          <div className={Homestyles.notebook}>
            <img src='https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/765fd9d7-3ed7-4d6e-259d-1d7f0daa0600/public' alt="items" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home