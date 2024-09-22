import React, { useState } from 'react'
import styles from './Cart.module.css'
// import gift from '../../images/OrderForm/giftbox.svg'
import close from '../../images/catalogues/close.svg'
import trash from '../../images/OrderForm/trash.svg'
import { NavLink } from 'react-router-dom'
import Backdrop from '../Backdrop_Spinner/Backdrop'

function Cart({
  selectedproducts,
  disabled,
  deleteProduct,
  deleteCustomProduct,
  customproducts,
  quantityform,
  cartOpen,
  setCartOpen,
  price,
  quantitycatalogue,
  uniqueCategories
}) {
  const [quantity, setQuantity] = useState(quantitycatalogue)

  price = 0

  // console.log(customproducts)
  // console.log(uniqueCategories)
  // console.log(selectedproducts)

  const closeCartImage = () => {
    setCartOpen(false)
  }

  // console.log(cartOpen)
  // console.log(selectedproducts)

  return (
    <>
      {cartOpen && (
        <>
          {/* <Backdrop show={true} /> */}
          <div className={disabled ? styles.boxorderform : styles.box}>
            <div className={styles.closebtn}>
              <img src={close} alt='CloseImage' onClick={closeCartImage}></img>
            </div>
            <h1 className={styles.heading}>
              Your Swag Pack
              <span style={{ color: '#757474', marginLeft: '8px', fontSize: "18px" }}>
                [<span style={{ fontSize: "14px", marginLeft: "2px", marginRight: "2px" }}>{selectedproducts.length + customproducts.length}</span>]
              </span>
            </h1>
            <hr className={styles.differentline} />
            <div className={styles.productselected}>
              {selectedproducts.length != 0 ? (
                <>
                  {selectedproducts.map((s, i) => {
                    return (
                      <>
                        <div className={styles.boxdesign}>
                          <div className={styles.imageandname}>
                            <div className={styles.productimg}>
                              <img
                                src={s.variant[s.index].images[0]}
                                alt='Image'
                                style={{ height: '60px', width: '72px' }}
                              />
                            </div>
                            <div className={styles.item}>
                              <h4 className={styles.product}>{s.name} </h4>
                              <p className={styles.rate}>
                                ₹ {Math.round(s.quantity * ((s.price[0].cost + (s.customnumber * s.price[0].customisation)) + (s.price[0].margin * (s.price[0].cost + (s.customnumber * s.price[0].customisation)))))} ({s.quantity} Swag Per Box)
                              </p>
                              <div style={{ display: 'none' }}>
                                {(price = price + Math.round(s.quantity * ((s.price[0].cost + (s.customnumber * s.price[0].customisation)) + (s.price[0].margin * (s.price[0].cost + (s.customnumber * s.price[0].customisation))))) * s.quantity)}
                              </div>
                              <p className={styles.desc}>
                                <span style={{ textTransform: "uppercase", fontWeight: "700" }}>{s.brandName} </span>{}{(s.productType === 'C' || s.productType === 'DC' ) ? `- ${s.color}` : (s.productType === 'NV') ? `- ${s.choice}` : null}
                              </p>
                            </div>
                          </div>
                          <div
                            onClick={() => deleteProduct(i)}
                            className={styles.delete}
                          >
                            <img src={trash} alt='Trash'></img>
                          </div>
                        </div>
                        <hr className={styles.line} />
                      </>
                    )
                  })}
                </>
              ) : customproducts.length == 0 ? (
                <>
                  <div className={styles.none}>
                    <div className={styles.noitems}>
                      <p className={styles.additems}>
                        Add Items to your Swag pack...
                      </p>
                    </div>
                  </div>
                </>
              ) : null}
              {customproducts.length != 0 ? (
                <>
                  {customproducts.map((s, i) => {
                    let final = 0
                    uniqueCategories.map((c, index) => {
                      if (s.category == uniqueCategories[index].name) {
                        final = index
                      } else {
                        index++
                      }
                    })
                    return (
                      <>
                        <div className={styles.boxdesign}>
                          <div className={styles.imageandname}>
                            <div className={styles.productimg}>
                              <img
                                src={uniqueCategories[final].someField}
                                alt='Image'
                                style={{ height: '60px', width: '72px' }}
                              />
                            </div>
                            <div className={styles.item}>
                              <h4 className={styles.product}>{s.swagName} </h4>
                              <p className={styles.rate}>
                                ₹ TBD ({s.quantity} Swag Per Box)
                              </p>
                              {/* <div style={{ display: 'none' }}>
                          {(price = price + s.price * s.quantity)}
                        </div> */}
                              <p className={styles.desc}>Custom</p>
                            </div>
                          </div>
                          <div
                            onClick={() => deleteCustomProduct(i)}
                            className={styles.delete}
                          >
                            <img src={trash} alt='Trash'></img>
                          </div>
                        </div>
                        <hr className={styles.line} />
                      </>
                    )
                  })}
                </>
              ) : null}
              {/* <div className={styles.boxdesignextra}>
              <div className={styles.productimg}>
                <img src={gift} alt='GiftBox'></img>
              </div>
              <div className={styles.itemextra}>
                <h4 className={styles.productextra}>
                  Looking for Something Else ?
                </h4>
                <p className={styles.rateextra}>If only we could read minds!</p>
                <p className={styles.descextra}>You'll have to tell us...</p>
              </div>
            </div> */}
            </div>
            <div className={disabled ? styles.billingform : styles.billing}>
              <div className={styles.quantity}>
                <div className={styles.qname}>
                  <h2 className={styles.head}>Quantity</h2>
                  <h4 className={styles.minimum}>(50 min)</h4>
                </div>
                {disabled ? (
                  <input
                    type='number'
                    min='50'
                    value={disabled ? quantityform : quantity}
                    className={styles.quantityinput}
                    onChange={event => setQuantity(event.target.value)}
                    disabled
                  ></input>
                ) : (
                  <input
                    type='number'
                    min='50'
                    value={disabled ? quantityform : quantity}
                    className={styles.quantityinput}
                    onChange={event => setQuantity(event.target.value)}
                  ></input>
                )}
              </div>
              <div className={styles.pricing}>
                <div className={styles.billheads}>
                  <h2 className={styles.head}>Price</h2>
                  <h4 className={styles.minimum}>(per pack)</h4>
                </div>
                <div className={styles.amount}>
                  <h4 className={styles.number1}>₹ {price}</h4>
                  {customproducts.length != 0 ? (
                    <h4 className={styles.minimum}>+ TBD</h4>
                  ) : null}
                </div>
              </div>
              <hr className={styles.line} />
              <div className={styles.total}>
                <h2 className={styles.head2}>Total Estimate</h2>
                <div className={styles.amount}>
                  <h4 className={styles.number2}>
                    ₹ {disabled ? price * quantityform : price * quantity}
                  </h4>
                  {customproducts.length != 0 ? (
                    <h4 className={styles.minimum2}>+ TBD</h4>
                  ) : null}
                </div>
              </div>
              <p className={styles.description}>
                Total estimate doesn't include taxes.
              </p>
              <NavLink
                to='/order'
                state={{
                  selectedproducts: selectedproducts,
                  price: price,
                  quantity: quantity,
                  total: price * quantity,
                  selectedCustomproducts: customproducts,
                  uniqueCategories: uniqueCategories
                }}
              >
                {disabled ? null : (
                  <div className={styles.btn}>
                    <button className={styles.continuebtn}>Continue</button>
                  </div>
                )}
              </NavLink>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Cart
