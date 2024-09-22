import React from "react";
import ink from "../../images/AboutUs/ink.svg";
import start from "../../images/AboutUs/start.svg";
import end from "../../images/AboutUs/end.svg";
import claps from "../../images/AboutUs/claps.png";
import quality from "../../images/AboutUs/quality.svg";
import delivery from "../../images/AboutUs/delivery.svg";
import cost from "../../images/AboutUs/cost.svg";
import twitter from "../../images/AboutUs/twitter.svg";
import linkedin from "../../images/AboutUs/linkedin.svg";
import mail from "../../images/AboutUs/mail.svg";
import Anurag from "../../images/AboutUs/AnuragDoodle.svg";
import Aditya from "../../images/AboutUs/AdityaDoodle.svg";
import Vipul from "../../images/AboutUs/VipulDoodle.svg";
import Sonam from "../../images/AboutUs/SonamDoodle.svg";
import Rahul from "../../images/AboutUs/Rahul.svg";
import Abhinav from "../../images/AboutUs/AbhinavDoodle.svg";
import Tarun from "../../images/AboutUs/TarunDoodle.svg";
import AdityaB from "../../images/AboutUs/AdityaBDoodle.svg";

function AboutUs() {
  document.title = "Hustlemad | About Us";
  return (
    <>
      <div className={styles.AboutUs}>
        <div className={styles.upperpart}>
          <h1 className={styles.heading}>We Love Swag!</h1>
          <div class={styles.img}>{/* <img src={claps} alt="Claps" /> */}</div>
        </div>
        <h2 className={styles.subheading}>Our Story</h2>
        <img src={ink} alt="INK" className={styles.ink}></img>
        <div className={styles.storycontent}>
          <div className={styles.startcolon}>
            <img src={start} alt="Start" />
          </div>
          <div className={styles.content}>
            What pains us the most is poor quality swag, it’s not only a waste
            of money but also harms the brand image. Whether you are trying to
            attract the best talent or wow your clients, thoughtful swag goes a
            long way in establishing your commitment to settle for nothing but
            the best.
            <br />
            <br />
            Today, while we have figured out how to send rockets to Mars,
            procuring branded swag continues to be a hassle, even for large
            companies. We have taken it upon ourselves to be your procurement
            partners. Think of us as your extended arm that curates, procures,
            packs & ships quality swag where you need it when you need it.
            <br />
            <br />
            We are a bunch of entrepreneurs, marketers, and technologists who
            understand the challenges of a growing business. We get you the best
            swag while you focus on doing what you do the best!
          </div>
          <div className={styles.endcolon}>
            <img src={end} alt="End" />
          </div>
        </div>
        <div className={styles.corevalues}>
          <h1 className={styles.coreheading}>What drives us</h1>
          <h2 className={styles.coresubheading}>
            Our core values guide everything we do
          </h2>
          <div className={styles.values}>
            <div className={styles.quality}>
              <img src={quality} alt="Quality"></img>
              <h1>Quality</h1>
              <p>
                Quality swag is a great culture enabler in a company. It not
                just delights your team but also inspires them to be
                #BetterEveryday.{" "}
              </p>
            </div>
            <div className={styles.delivery}>
              <img src={delivery} alt="Delivery"></img>
              <h1>Delivery</h1>
              <p>
                We are not a vendor, we are your partner in growth. We
                effectively manage end-to-end procurement operations to keep you
                lean.
              </p>
            </div>
            <div className={styles.cost}>
              <img src={cost} alt="Cost"></img>
              <h1>Cost</h1>
              <p>
                We save hundreds of your human hours that go in the mundanity of
                swag design, curation, procurement, storage & distribution.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <h1 className={styles.teamheading}>Our Team</h1>
          <div className={styles.teammembers}>
            <div className={styles.teams}>
              <div class={styles.dot}></div>
              <h4 class={styles.lead}>Co-founder</h4>
              <div className={styles.one}>
                <img src={Anurag} class={styles.admin} />
                <div className={styles.admindesc}>
                  <p>
                    Brand logo quiz winner. Loves music, football &
                    motor-racing. Reach out to Anurag for all your crazy ideas,
                    you will find the perfect audience in him.
                  </p>
                  <span className={styles.social}>
                    <a
                      href="https://twitter.com/anuragsingh22_"
                      target="_blank"
                    >
                      <img src={twitter} alt="Twitter"></img>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/singhanurag/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="Linkedin"></img>
                    </a>
                    <a href="mailto:anurag@hustlemad.com" target="_blank">
                      <img src={mail} alt="Mail"></img>
                    </a>
                  </span>
                </div>
              </div>
              <h5 class={styles.member}>Anurag Singh</h5>
            </div>
            <div className={styles.teams}>
              <div class={styles.dot}></div>
              <h4 class={styles.lead}>Co-founder</h4>
              <div className={styles.one}>
                <img src={Aditya} class={styles.admin} />
                <div className={styles.admindesc}>
                  <p>
                    Aditya is a true blue first-principles guy. An avid trekker,
                    he has worked at the intersection of finance & tech for 7
                    years. Take your half baked ideas to him and you’ve lost
                    him.
                  </p>
                  <span className={styles.social}>
                    <a href="https://twitter.com/AddyAgrawal" target="_blank">
                      <img src={twitter} alt="Twitter"></img>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aditya-agrawal-162498162/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="Linkedin"></img>
                    </a>
                    <a href="mailto:aditya@hustlemad.com" target="_blank">
                      <img src={mail} alt="Mail"></img>
                    </a>
                  </span>
                </div>
              </div>

              <h5 class={styles.member}>Aditya Agrawal</h5>
            </div>
            {/* <div className={styles.teams}>
              <div class={styles.dot}></div>
              <h4 class={styles.lead}>Co-founder</h4>
              <div className={styles.one}>
                <img src={Vipul} class={styles.admin} />
                <div className={styles.admindesc}>
                  <p>
                    Curious Stargazer. Based in a Tier-3 town & a 3rd generation
                    Education entrepreneur, Vipul loves to talk about education,
                    communities, events, philosophy & building for Bharat.
                  </p>
                  <span className={styles.social}>
                    <a href="https://twitter.com/vipulgarg9" target="_blank">
                      <img src={twitter} alt="Twitter"></img>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vipul9/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="Linkedin"></img>
                    </a>
                    <a href="mailto:vipul@hustlemad.com" target="_blank">
                      <img src={mail} alt="Mail"></img>
                    </a>
                  </span>
                </div>
              </div>

              <h5 class={styles.member}>Vipul Garg</h5>
            </div> */}
            {/* <div className={styles.teams}>
              <div class={styles.dot}></div>
              <h4 class={styles.lead}>Head of Content & Community</h4>
              <div className={styles.one}>
                <img src={Sonam} class={styles.admin} />
                <div className={styles.admindesc}>
                  <p>
                    A dreamer, a do-er, Sonam is a mathematician turned poetic
                    copywriter. Reach out to her and you'll either get solutions
                    or sarcasm.
                  </p>
                  <span className={styles.social}>
                    <a href="https://twitter.com/heycopygirl" target="_blank">
                      <img src={twitter} alt="Twitter"></img>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sonam-g"
                      target="_blank"
                    >
                      <img src={linkedin} alt="Linkedin"></img>
                    </a>
                    <a href="mailto:sonam@hustlemad.com" target="_blank">
                      <img src={mail} alt="Mail"></img>
                    </a>
                  </span>
                </div>
              </div>
              <h5 class={styles.member}>Sonam</h5>
            </div> */}
            {/* <div className={styles.teams}>
              <div class={styles.dot}></div>
              <h4 class={styles.lead}>Product Designer</h4>
              <div className={styles.one}>
                <img src={Abhinav} class={styles.admin} />
                <div className={`${styles.admindesc} ${styles.us}`}>
                  <p>I designed this entire Website.</p>
                  <span className={styles.social}>
                    <a href="https://twitter.com/creativedumbo" target="_blank">
                      <img src={twitter} alt="Twitter"></img>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/creativedumbo/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="Linkedin"></img>
                    </a>
                    <a href="mailto:creativedumbo11@gmail.com" target="_blank">
                      <img src={mail} alt="Mail"></img>
                    </a>
                  </span>
                </div>
              </div>
              <h5 class={styles.member}>Abhinav Prakash</h5>
            </div> */}
            {/* <div className={styles.teams}>
              <div class={styles.dot}></div>
              <h4 class={styles.lead}>Front-End Developer</h4>
              <div className={styles.one}>
                <img src={Tarun} class={styles.admin} />
                <div className={`${styles.admindesc} ${styles.us}`}>
                  <p>I developed this entire Website.</p>
                  <span className={styles.social}>
                    <a href="#" target="_blank">
                      <img src={twitter} alt="Twitter"></img>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tarun-thakur-753b6a18b/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="Linkedin"></img>
                    </a>
                    <a href="mailto:tarun@hustlemad.com" target="_blank">
                      <img src={mail} alt="Mail"></img>
                    </a>
                  </span>
                </div>
              </div>

              <h5 class={styles.member}>Tarun Thakur </h5>
            </div> */}
            {/* <div className={styles.teams}>
              <div class={styles.dot}></div>
              <h4 class={styles.lead}>Full-Stack Developer</h4>
              <div className={styles.one}>
                <img src={Rahul} class={styles.admin} />
                <div className={`${styles.admindesc} ${styles.us}`}>
                  <p>I am maintaing this entire Website.</p>
                  <span className={styles.social}>
                    <a href="https://twitter.com/RahulDh24340599" target="_blank">
                      <img src={twitter} alt="Twitter"></img>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rahul-dhakar-0213ab1b8/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="Linkedin"></img>
                    </a>
                    <a href="rdhakar288@gmail.com" target="_blank">
                      <img src={mail} alt="Mail"></img>
                    </a>
                  </span>
                </div>
              </div>
              <h5 class={styles.member}>Rahul Dhakar </h5>
            </div> */}
            {/* <div className={styles.teams}>
              <div class={styles.dot}></div>
              <h4 class={styles.lead}>Full-Stack Developer</h4>
              <div className={styles.one}>
                <img src={AdityaB} class={styles.admin} />
                <div className={`${styles.admindesc} ${styles.us}`}>
                  <p>
                    I developed this entire Website.
                  </p>
                  <span className={styles.social}>
                    <a href="#" target="_blank">
                      <img src={twitter} alt="Twitter"></img>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aditya-budhia-3390591bb/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="Linkedin"></img>
                    </a>
                    <a href="mailto:ab@hustlemad.com" target="_blank">
                      <img src={mail} alt="Mail"></img>
                    </a>
                  </span>
                </div>
              </div>
              <h5 class={styles.member}>Aditya Budhia</h5>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
