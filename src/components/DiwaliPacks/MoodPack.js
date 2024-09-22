import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './MoodPack.module.css';
import diya from '../../images/Diwali/Diya.svg';
import mandpat from '../../images/Diwali/Mandpat.svg';
import { Link } from 'react-router-dom';
import left from '../../images/catalogues/left.svg'
import right from '../../images/catalogues/right.svg'
import Difference from '../../images/OrderForm/Line.svg'
import Popup from './DiwaliPopup/Popup'
import Spin from '../Spinner/Spinner'

function MoodPack() {
  let moodpack = ['https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/ae0c1c5a-9e6e-4003-8dbf-c665fb35a400/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/b0ba663b-dee0-4170-bbd2-3de8385fc000/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9b50f33c-e80a-4511-653f-144384797800/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/ba636d14-cfb6-429b-d24f-e2c933ab2a00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/3dc22409-290c-4dfc-7671-cf5197477700/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/773d8489-6f87-413a-116e-b8c2bc175200/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/88f56485-6a5b-4521-36e5-d00d771c1900/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/05a16aa9-d955-47a3-6b2d-63f8ff638f00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/58e1829a-cf4b-455b-dddd-03958ea6ff00/public'];

  let products = ['Custom Mailer Box', 'Ziro Assam Pan Roasted Green Tea - 50 g', 'Phool Natural Incense Cones', 'Indus People Ganga Kulhar Candle', 'Smoor Luxe Treat (Box of 6)', 'Custom Playing Cards', 'Custom Greeting Card', 'Pan-India Shipping (Individual Addresses)']

  const [index, setIndex] = useState(0);
  const [productsOpen, setProductsOpen] = useState(true);
  const [requestOpen, setRequestOpen] = useState(true);
  const [quantity, setQuantity] = useState();
  const [name, setName] = useState();
  const [companyName, setCompanyName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [show, setShow] = useState(false)
  const [spin, setSpin] = useState(false)
  const [utm, setUtm] = useState();

  useEffect(() => {
    var item = JSON.parse(localStorage.getItem('items'));
    setUtm(item);
    // console.log(item);
  }, []);

  // console.log(utm);

  const saveData = async event => {
    event.preventDefault()
    event.target.reset()
    window.scrollTo(0, 0)
    setSpin(true)
    const data = {
      name: name,
      company_name: companyName,
      email: email,
      contact: contact,
      quantity: quantity,
      packName: "Mood Pack",
      utmInfo: utm
    }
    // console.log('data', data)
    axios.post('https://hustlemad-backend.herokuapp.com/diwalipack/', data)
      .then(res => {
        window.lintrk('track', { conversion_id: 10073865 });
        setShow(true)
        setSpin(false)
        setQuantity()
        setName()
        setCompanyName()
        setContact()
        setEmail()
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const change = () => {
    setShow(false)
  }

  return (
    <>
      {spin ? <Spin /> : null}
      {show ? <Popup show={show} switch={change} /> : null}
      <div className={styles.diwalipacks}>
        <div className={styles.leftimage}>
          <img src={diya} alt="Bg-Image"></img>
        </div>
        <div className={styles.rightimage}>
          <img src={mandpat} alt="Bg-Image"></img>
        </div>
        <div className={styles.container}>
          <div className={styles.upper}>
            <Link to="/diwalipacks">
              <span className={styles.swag}>Diwali Packs
                <span className={styles.greater}> &gt; </span>
              </span>
            </Link>
            <span className={styles.req}>Mood Pack</span>
          </div>
          <div className={styles.heading}>
            Mood Pack
          </div>
          <div className={styles.box}>
            <div className={styles.mainimage}>
              <img src={moodpack[index]} alt="Main-Image"></img>
            </div>
            <div className={styles.otherimages}>
              <div className={styles.leftarrow}>
                <img src={left} alt="" onClick={() => setIndex((index + 1) < moodpack.length ? index + 1 : 0)} />
              </div>
              <div className={styles.otherimage}>
                <img src={moodpack[index + 1] || moodpack[index - moodpack.length + 1]} alt="" onClick={() => setIndex((index + 1) < moodpack.length ? index + 1 : index - moodpack.length + 1)} />
              </div>
              <div className={styles.otherimage}>
                <img src={moodpack[index + 2] || moodpack[index - moodpack.length + 2]} alt="" onClick={() => setIndex((index + 2) < moodpack.length ? index + 2 : index - moodpack.length + 2)} />
              </div>
              <div className={styles.otherimage}>
                <img src={moodpack[index + 3] || moodpack[index - moodpack.length + 3]} alt="" onClick={() => setIndex((index + 3) < moodpack.length ? index + 3 : index - moodpack.length + 3)} />
              </div>
              <div className={styles.rightarrow}>
                <img src={right} alt="" onClick={() => setIndex((index - 1) >= 0 ? index - 1 : moodpack.length - 1)} />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            Delight your team with our carefully curated assortment of joyful goodies that bring their loved ones together for the most awaited festival of the year. Packed in a specially designed festive mailer box, this hamper is bound to get your team in the mood for fun and joy.
          </div>
          <div className={styles.products}>
            <div className={styles.productsheading}>
              Products Included
              {
                productsOpen ? <span onClick={() => setProductsOpen(false)}><img src={left} className={styles.uparrow}></img></span> : <span onClick={() => setProductsOpen(true)}><img src={right} className={styles.downarrow}></img></span>
              }
            </div>
            {
              productsOpen ? <div className={styles.productsbox}>
                {
                  products.map((i, index) => {
                    return (
                      <div className={styles.product}>
                        <div className={styles.items}>
                          <div className={styles.itemimage}>
                            <img src={moodpack[index + 1]}></img>
                          </div>
                          <div className={styles.itemname}>
                            {i}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div> : null
            }
          </div>
          <div className={styles.estimate}>
            Estimate Price : <span className={styles.price}>&#8377; 2899</span>
            <span className={styles.disclaimer}>(Prices may vary based on order size)</span>
          </div>
          {/* <div className={styles.view} onClick={() => setRequestOpen(true)}>
          <button className={styles.btn}>Request Info</button>
        </div> */}
          <div className={styles.diff}>
            <img src={Difference} alt='Line'></img>
          </div>
          <div className={styles.requestinfo}>
            <div className={styles.requestheading}>
              Request Information
            </div>
            {requestOpen && (
              <div className={styles.form}>
                <form onSubmit={saveData}>
                  <div className={styles.number}>
                    <h3>How many packs are you looking for ?</h3>
                    <input
                      name='fullname'
                      placeholder='25'
                      type='number'
                      onChange={event => setQuantity(event.target.value)}
                      id={styles.inputfield}
                      required
                    ></input>
                  </div>
                  <div className={styles.firstline}>
                    <div className={styles.top1}>
                      <h3>Full Name</h3>
                      <input
                        name='fullname'
                        placeholder='Elon Jobs'
                        type='text'
                        onChange={event => setName(event.target.value)}
                        id={styles.inputfieldcontact}
                        required
                      ></input>
                    </div>
                    <div className={styles.top2}>
                      <h3>Company Name</h3>
                      <input
                        name='companyname'
                        placeholder='Orange Inc.'
                        type='text'
                        onChange={event => setCompanyName(event.target.value)}
                        id={styles.inputfieldcontact}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className={styles.secondline}>
                    <div className={styles.bottom1}>
                      <h3>Email Address</h3>
                      <input
                        name='email'
                        placeholder='elon@orange.com'
                        type='email'
                        onChange={event => setEmail(event.target.value)}
                        id={styles.inputfieldcontact}
                        required
                      ></input>
                    </div>
                    <div className={styles.bottom2}>
                      <h3>Phone Number</h3>
                      <input
                        name='contact'
                        placeholder='1234567890'
                        pattern='[0-9]{10}'
                        type='tel'
                        onChange={event => setContact(event.target.value)}
                        id={styles.inputfieldcontact}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className={styles.buton}>
                    <input
                      type='submit'
                      className={styles.bttn}
                      value='Submit Enquiry'
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.wishing}>
            -------------------- Happy Diwali !!! --------------------
          </div>
        </div>
      </div>
    </>
  )
}

export default MoodPack