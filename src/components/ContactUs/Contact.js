import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Contact.module.css'
import thinker from '../../images/ContactUs/thinker.svg'
import call from '../../images/ContactUs/call.svg'
import mail from '../../images/ContactUs/mail.svg'
import man from '../../images/ContactUs/Frame 118.svg'
import letter from '../../images/ContactUs/Frame 120.svg'
import chat from '../../images/ContactUs/Frame 119.svg'
import headphones from '../../images/ContactUs/Frame 121.svg'
import mark from '../../images/ContactUs/Frame 122.svg'
import available from '../../images/ContactUs/Frame 128.svg'
import Popup from '../Popup/Popup'
import Spin from '../Spinner_Backdrop/Spinner'

function Contact() {
  const [name, setName] = useState()
  const [companyname, setCompanyname] = useState()
  const [email, setEmail] = useState()
  // const [reason, setReason] = useState()
  const [message, setMessage] = useState()
  const [contact, setContact] = useState()
  const [show, setShow] = useState(false)
  const [spin, setSpin] = useState(false)
  const change = () => {
    setShow(false)
  }

  const saveData = async event => {
    event.preventDefault()
    event.target.reset()
    setSpin(true)
    const data = {
      name: name,
      companyname: companyname,
      email: email,
      // reason: reason,
      contact: contact,
      message: message
    }
    axios
      .post('https://hustlemad-backend.herokuapp.com/feed/send/', data)
      .then(res => {
        setShow(true)
        setSpin(false)
        var Dropdown = document.getElementById('dropdown')
        Dropdown.selectedIndex = 0
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  // axios.post('http://localhost:8080/feed/send/', data)

  document.title = 'Hustlemad | Contact Us'
  return (
    <>
      {spin ? <Spin /> : null}
      {show ? <Popup show={show} switch={change} /> : null}
      <div className={styles.contact}>
        <div className={styles.chat}>
          <img src={chat}></img>
        </div>
        <div className={styles.man}>
          <img src={man}></img>
        </div>
        <div className={styles.letter}>
          <img src={letter}></img>
        </div>
        <h1>Contact Us</h1>
        <h3>Any questions or remarks? Just write us a message!</h3>
        <div className={styles.headphones}>
          <img src={headphones}></img>
        </div>
        <div className={styles.mark}>
          <img src={mark}></img>
        </div>
        <div className={styles.available}>
          <img src={available}></img>
        </div>
        <div className={styles.questions}>
          <div className={styles.faq}>
            <div className={styles.contentfaq}>
              <div className={styles.leftfaq}>
                <h4>
                  Find few of the most frequently asked questions over here...
                </h4>
                <Link to='/faq'>
                  <button
                    className={styles.faqbutton}
                    style={{ cursor: 'pointer' }}
                  >
                    FAQ
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.imagefaq}>
              <img src={thinker} alt='Thinking'></img>
            </div>
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.mainform}>
            <div className={styles.leftcontent}>
              <h4>Contact Us</h4>
              <h2>Have Questions ?</h2>
              <h2>Don't Be Shy</h2>
              <div className={styles.callandmail}>
                <div className={styles.call}>
                  <span className={styles.callhead}>
                    <img src={call} alt=''></img>
                    <p>Call Us</p>
                  </span>
                  <p className={styles.phonenumber}>966-305-2001</p>
                  <p className={styles.timings}>Mon-Fri, 9AM-7PM, IST</p>
                </div>
                <div className={styles.mail}>
                  <span className={styles.mailhead}>
                    <img src={mail} alt=''></img>
                    <p>Send Email</p>
                  </span>
                  <p className={styles.email}>info@hustlemad.com</p>
                  <p className={styles.timings}>
                    Typically replies within 24 hours
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.rightcontent}>
              <form onSubmit={saveData}>
                <div className={styles.first}>
                  <input
                    name='fullname'
                    placeholder='Your Name'
                    type='text'
                    onChange={event => setName(event.target.value)}
                    id={styles.gap}
                    required
                  ></input>
                </div>
                <div className={styles.second}>
                  <input
                    name='companyname'
                    placeholder='Company Name'
                    type='text'
                    onChange={event => setCompanyname(event.target.value)}
                    id={styles.gap}
                    required
                  ></input>
                </div>
                <div className={styles.third}>
                  <input
                    name='email'
                    placeholder='Email Address'
                    type='email'
                    onChange={event => setEmail(event.target.value)}
                    id={styles.gap}
                    required
                  ></input>
                </div>
                {/* <div className={styles.fourth}>
                  <select
                    name='reason'
                    id='dropdown'
                    className={styles.select}
                    onChange={event => setReason(event.target.value)}
                    required
                  >
                    <option value='' disabled selected hidden>
                      Select why you are emailing us
                    </option>
                    <option value='I want to try out Samples'>
                      I want to try out Samples
                    </option>
                    <option value='I want more info on Pricing'>
                      I want more info on Pricing
                    </option>
                    <option value='I want more info on Shipping'>
                      I want more info on Shipping
                    </option>
                    <option value="I'm a client">I'm a client</option>
                    <option value='Other'>Other</option>
                  </select>
                </div> */}
                <div className={styles.fifth}>
                  <input
                    name='contact'
                    placeholder='Contact Number'
                    pattern='[0-9]{10}'
                    type='tel'
                    onChange={event => setContact(event.target.value)}
                    id={styles.gap}
                    required
                  ></input>
                </div>
                <div className={styles.sixth}>
                  <textarea
                    name='message'
                    placeholder='Leave a message here'
                    type='text'
                    id={styles.textarea}
                    onChange={event => setMessage(event.target.value)}
                    required
                  ></textarea>
                </div>
                <div className={styles.button}>
                  <input
                    type='submit'
                    className={styles.bttn}
                    value='Send Us a Message'
                  />
                </div>
              </form>
              <div className={styles.downcallandmail}>
                <div className={styles.call}>
                  <span className={styles.callhead}>
                    <img src={call} alt=''></img>
                    <p>Call Us</p>
                  </span>
                  <p className={styles.phonenumber}>966-305-2001</p>
                  <p className={styles.timings}>Mon-Fri, 9AM-7PM, IST</p>
                </div>
                <div className={styles.mail}>
                  <span className={styles.mailhead}>
                    <img src={mail} alt=''></img>
                    <p>Send Email</p>
                  </span>
                  <p className={styles.email}>info@hustlemad.com</p>
                  <p className={styles.timings}>
                    Typically replies within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
