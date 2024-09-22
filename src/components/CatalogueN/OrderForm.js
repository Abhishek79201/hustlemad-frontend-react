import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate , NavLink} from 'react-router-dom'
import axios from 'axios'
import styles from './OrderForm.module.css'
import customClick from '../../images/catalogues/_xmarkCustom.svg'
import pen from '../../images/OrderForm/edit-2.svg'
import Difference from '../../images/OrderForm/Line.svg'
import Popup from '../Popup/Popup'
import Cart from './Cart'
import Spin from '../Spinner/Spinner'
import CustomOverlay from './CustomOverlay'
// import trash from '../../images/OrderForm/trash.svg'

function OrderForm(props) {
  const location = useLocation()
  // console.log(location)
  const navigate = useNavigate()
  const [expand, setExpand] = useState(false)
  const [products, setProducts] = useState([])
  const [cate, setCate] = useState([])
  const [orderOpen, setOrderOpen] = useState(true)
  const [contactOpen, setContactOpen] = useState(false)
  const [name, setName] = useState()
  const [companyname, setCompanyname] = useState()
  const [email, setEmail] = useState()
  const [contact, setContact] = useState()
  const [date, setDate] = useState()
  const [cartOpen, setCartOpen] = useState(true)
  const [budget, setBudget] = useState('')
  const [comments, setComments] = useState('')
  const [show, setShow] = useState(false)
  const [spin, setSpin] = useState(false)
  const [price, setPrice] = useState(location.state.price)
  const [total, setTotal] = useState(location.state.total)
  const [customOpen, setCustomOpen] = useState(false)
  const [selectedproducts, setSelectedproducts] = useState(location.state?.selectedproducts || [])
  const [customproducts, setCustomproducts] = useState(location.state?.selectedCustomproducts || [])
  const [quantityform, setQuantityForm] = useState(location.state.quantity)

  const change = () => {
    setShow(false)
  }

  const getData = async () => {
    const data = await fetch(
      'https://hustlemad-backend.herokuapp.com/productList'
    )
    const json = await data.json()
    // console.log(json)
    setProducts(json)
    setSpin(false)
  }

  // console.log(customproducts)

  const deleteProduct = async index => {
    let temp = [...selectedproducts]
    temp = temp.filter((item, i) => {
      if (i !== index) {
        return item
      }
    })
    setSelectedproducts(temp)
  }

  const deleteCustomProduct = async index => {
    let temp = [...customproducts]
    temp = temp.filter((item, i) => {
      if (i !== index) {
        return item
      }
    })
    setCustomproducts(temp)
  }

  useEffect(() => {
    getData()
  }, [])

  const saveData = async event => {
    event.preventDefault()
    event.target.reset()
    window.scrollTo(0, 0)
    setSpin(true)
    const data = {
      full_name: name,
      company_name: companyname,
      email: email,
      phone: contact,
      swagbox_quantity: quantityform,
      budget_per_box: budget,
      delivery_date: date,
      comment: comments,
      preset_pack: 'NO',
      items_count: selectedproducts.length + customproducts.length,
      total_price: price,
      tbd: customproducts.length !== 0 ? 'YES' : 'NO',
      total_estimate: price * quantityform,
      product_list: selectedproducts,
      custom_product_list: customproducts
    }
    // console.log('data', data)
    axios
      .post(
        'https://hustlemad-backend.herokuapp.com/Admin/orderedProduct/',
        data
      )
      // axios.post('http://localhost:4000/Admin/orderedProduct/', data)
      .then(res => {
        window.lintrk('track', { conversion_id: 9831049 });
        setShow(true)
        setSpin(false)
        // console.log('Done')
        setSelectedproducts([])
        setCustomproducts([])
        setDate()
        setQuantityForm(50)
        setComments()
        setName()
        setCompanyname()
        setContact()
        setEmail()
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const swagHandler = () => {
    setCartOpen(true)
    setExpand(!expand)
  }

  const saveOrder = async e => {
    e.preventDefault()
    setContactOpen(true)
    setOrderOpen(false)
  }

  // console.log(location.state?.uniqueCategories)

  document.title = 'Hustlemad | OrderForm'
  return (
    <>
      {spin ? <Spin /> : null}
      {show ? <Popup show={show} switch={change} /> : null}
      {customOpen && (
        <CustomOverlay
          setCustomOpen={setCustomOpen}
          uniqueCategories={location.state?.uniqueCategories}
          customproducts={customproducts}
          setCustomproducts={setCustomproducts}
        />
      )}
      <div className={styles.view} onClick={swagHandler}>
        <button className={styles.bttnn}>
          Expand Swag Box [{selectedproducts.length + customproducts.length}]
        </button>
      </div>
      <div className={styles.everything}>
        <NavLink
          to='/catalogue'
          state={{
            selectedproducts: selectedproducts,
            price: price,
            quantity: quantityform,
            total: price * quantityform,
            selectedCustomproducts: customproducts
          }}
          style={{ width: "200px" }}
        >
          <div className={styles.upper}>
            <span className={styles.swag}>Swag <span className={styles.greater}> &gt; </span></span><span className={styles.req}>Order Request Form</span>
          </div>
        </NavLink>
        <div className={styles.OrderForm}>
          <div className={styles.heading}>
            <img src={pen} alt='Pen'></img>
            <h1 className={styles.orderheading}>Order Request Form</h1>
            {orderOpen ? null : (
              <p className={styles.edit}
                onClick={() => {
                  setOrderOpen(true)
                  setContactOpen(false)
                }}>
                Edit
              </p>
            )}
          </div>
          {orderOpen && (
            <>
              <form onSubmit={saveOrder}>
                <div className={styles.form}>
                  <div className={styles.first}>
                    <h3>How many Swag Boxes do you want ?</h3>
                    <input
                      name='swagpacks'
                      placeholder='50'
                      type='number'
                      min='50'
                      onChange={event => setQuantityForm(event.target.value)}
                      id={styles.inputfieldswag}
                      value={quantityform}
                      required
                    ></input>
                  </div>
                  <div className={styles.second}>
                    {/* <div className={styles.middle1}>
                      <h3>What's your budget per Swag box ?</h3>
                      <input
                        name='swagpacks'
                        placeholder='Enter Budget'
                        type='number'
                        value={budget}
                        onChange={event => setBudget(event.target.value)}
                        id={styles.inputfield}
                        required
                      ></input>
                    </div> */}
                    <h3>Do you need these by a certain date ?</h3>
                    <input
                      name='swagpacks'
                      placeholder='Enter Date'
                      type='date'
                      value={date}
                      onChange={event => setDate(event.target.value)}
                      id={styles.inputfield}
                      required
                    ></input>
                  </div>
                  <div className={styles.third}>
                    <h3>Custom Items in your Box</h3>
                    <div className={styles.boxing}>
                      {customproducts.length !== 0 ? (
                        customproducts.map((c, i) => {
                          let final = 0
                          location.state?.uniqueCategories.map((u, index) => {
                            if (c.category == u.name) {
                              final = index
                            } else {
                              index++
                            }
                          })
                          return (
                            <div className={styles.boxdesign}>
                              <div className={styles.box}>
                                <img src={location.state?.uniqueCategories[final].someField} alt='GiftBox'></img>
                              </div>
                              <div className={styles.item}>
                                <h4 className={styles.product}>
                                  {c.swagName}{' '}
                                </h4>
                                <p className={styles.rate}>
                                  TBD ( {c.quantity} Swag Per Box )
                                </p>
                                <p className={styles.desc}>Custom</p>
                              </div>
                              {/* <div className={styles.delete}>
                              <img src={trash} alt='Trash'></img>
                              </div> */}
                            </div>
                          )
                        })
                      ) : null}
                      <div className={styles.boxdesignextra}
                        onClick={() => setCustomOpen(true)}>
                        <div className={styles.box}>
                          <img src={customClick} alt='Custom'></img>
                        </div>
                        <div className={styles.item}>
                          <h4 className={styles.product}>
                            Looking for Something Else ?
                          </h4>
                          <p className={styles.rate}>If only we could read minds!</p>
                          <p className={styles.desc}>You'll have to tell us...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.fourth}>
                    <h3>Add Comments</h3>
                    <input
                      name='comments'
                      placeholder='Wanna Say Something ?'
                      type='text'
                      value={comments}
                      onChange={event => setComments(event.target.value)}
                      id={styles.inputfieldswag}
                    ></input>
                  </div>
                  <div className={styles.button}>
                    <input
                      type='submit'
                      className={styles.bttn}
                      value='Continue'
                    />
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
        <div className={styles.diff}>
          <img src={Difference} alt='Line'></img>
        </div>
        <form onSubmit={saveData}>
          <div className={styles.ContactForm}>
            <span className={styles.heading}>
              <img src={pen} alt='Pen'></img>
              <h1 className={styles.orderheading}>Contact Details</h1>
            </span>
            {contactOpen && (
              <div className={styles.form}>
                {/* <form onSubmit={saveData}> */}
                <div className={styles.firstline}>
                  <div className={styles.top1}>
                    <h3>Full Name</h3>
                    <input
                      name='fullname'
                      placeholder='Elon Jobs'
                      type='text'
                      value={name}
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
                      value={companyname}
                      onChange={event => setCompanyname(event.target.value)}
                      id={styles.inputfieldcontact}
                      required
                    ></input>
                  </div>
                </div>
                <div className={styles.secondline}>
                  <div className={styles.bottom1}>
                    <h3>Work Email</h3>
                    <input
                      name='email'
                      placeholder='elon@orange.com'
                      type='email'
                      value={email}
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
                      value={contact}
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
                    value='Submit Request'
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className={styles.cartsystem}>
        <Cart
          deleteProduct={deleteProduct}
          deleteCustomProduct={deleteCustomProduct}
          selectedproducts={selectedproducts}
          disabled={true}
          customproducts={customproducts}
          quantityform={quantityform}
          cartOpen={true}
          setCartOpen={setExpand}
          price={price}
          uniqueCategories={location.state?.uniqueCategories}
        />
      </div>
      {expand ? (
        <div className={styles.cartpopup}>
          <Cart
            deleteProduct={deleteProduct}
            deleteCustomProduct={deleteCustomProduct}
            selectedproducts={selectedproducts}
            disabled={true}
            customproducts={customproducts}
            quantityform={quantityform}
            cartOpen={expand}
            setCartOpen={setExpand}
            price={price}
            uniqueCategories={location.state?.uniqueCategories}
          />
        </div>
      ) : null}
    </>
  )
}

export default OrderForm
