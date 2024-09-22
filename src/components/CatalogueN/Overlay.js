import React, { useEffect, useState } from 'react'
import styles from './Overlay.module.css'
import increment from '../../images/catalogues/increment.svg'
import decrement from '../../images/catalogues/decrement.svg'
import close from '../../images/catalogues/close.svg'
import Backdrop from '../Backdrop/Backdrop'
import left from '../../images/catalogues/left.svg'
import right from '../../images/catalogues/right.svg'

function Overlay({ product, open, setOpen, selectedproducts, setSelectedproducts }) {
  const [imgArr, setImgArr] = useState([]);
  const [quant, setQuant] = useState(1)
  const [custom, setCustom] = useState(0)
  const [choice, setChoice] = useState('Available Options')
  const [color, setColor] = useState('Available Colors')
  const [index, setIndex] = useState(0)
  const [variantIndex,setVariantIndex] = useState(0);

  const PushanImage = (x) => {
    setImgArr(current => [...current, x]);
  }

  const GetImage = () => {
    product.variant.map((i, index) => {
      PushanImage(i.images[0])
    })
  }

  const increaseQuant = () => {
    setQuant(quant + 1)
  }

  const decreaseQuant = () => {
    setQuant(quant - 1)
  }

  const increaseCustom = () => {
    setCustom(custom + 1)
  }

  const decreaseCustom = () => {
    setCustom(custom - 1)
  }

  const closeImage = () => {
    setOpen(false)
    setQuant(1)
    setCustom(1)
    setChoice('Available Options')
    setColor('Available Colors')
    setIndex(0)
    setImgArr([])
    GetImage()
  }

  useEffect(() => {
    setQuant(1)
    setCustom(1)
    setImgArr([])
    GetImage()
    setIndex(0)
    setChoice('Available Options')
    setColor('Available Colors')
  }, [product])

  useEffect(() => {
    setImgArr([])
    GetImage()
  }, [])

  useEffect(()=>{
    setCustom(product.cust_flag ? 1 : 0)
  },[])

  const change = () => {
    setOpen(false);
  }

  return (
    <>
      {open && (
        <>
          <Backdrop show={true} switch={change} />
          <div className={styles.overlayCards}>
            <div className={styles.closebtn}>
              <img src={close} alt='CloseImage' onClick={closeImage}></img>
            </div>
            <div className={styles.overlayCardsp}>
              <div className={styles.productdisplay}>
                <div className={styles.images}>
                  <div className={styles.mainImage}>
                    <img
                      src={imgArr[index]}
                      alt='Image'
                      style={{ width: '348px', height: '290px' }}
                    />
                  </div>
                  <div className={styles.otherimages}>
                    {index <= imgArr.length - 1 && imgArr.length - 1 > 1 ? (
                      <div
                        className={styles.leftarrow}
                        style={{ cursor: 'pointer' }}
                      >
                        <img
                          src={left}
                          alt='LeftArrow'
                          onClick={() => { setIndex(index - 1 >= 0 ? index - 1 : imgArr.length - 1) }}
                        />
                      </div>
                    ) : null}
                    {index <= imgArr.length - 1 && imgArr.length - 1 > 1 ? (
                      <div
                        className={styles.leftimage}
                        style={{ cursor: 'pointer' }}
                      >
                        <img
                          src={index !== 0 ? imgArr[index - 1] : imgArr[imgArr.length - 1]}
                          alt='Image'
                          style={{
                            height: '75px',
                            width: '75px',
                            borderRadius: '12px'
                          }}
                          onClick={() => {
                            setIndex(() => index !== 0 ? index - 1 : imgArr.length - 1)
                          }}
                        />
                      </div>
                    ) : null}
                    <div className={styles.activeimage}>
                      <img
                        src={imgArr[index]}
                        alt='Image'
                        style={{
                          height: '75px',
                          width: '75px',
                          borderRadius: '12px'
                        }}
                      />
                    </div>
                    {index <= imgArr.length - 1 && imgArr.length - 1 != 0 ? (
                      <div
                        className={styles.rightimage}
                        style={{ cursor: 'pointer' }}
                      >
                        <img
                          src={imgArr[index + 1 <= imgArr.length - 1 ? index + 1 : 0]}
                          alt='Image'
                          style={{
                            height: '75px',
                            width: '75px',
                            borderRadius: '12px'
                          }}
                          onClick={() => setIndex(index + 1 <= imgArr.length - 1 ? index + 1 : 0)}
                        />
                      </div>
                    ) : null}
                    {index <= imgArr.length - 1 && imgArr.length - 1 != 0 ? (
                      <div className={styles.rightarrow}>
                        <img
                          src={right}
                          alt='RightArrow'
                          onClick={() => setIndex(index + 1 <= imgArr.length - 1 ? index + 1 : 0)}
                        ></img>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.rightcont}>
                    <h1 className={styles.name}>{product.name}</h1>
                    <h1 className={styles.branding}>{product.brandName}</h1>
                    {product.productType === 'C' ? (
                      <>
                        {/* <div>
                          <h3 className={styles.colorname}>{color}</h3>
                        </div> */}
                        <div>
                          <h2 className={styles.available}>{color}</h2>
                        </div>
                        <div className={styles.hexcodes}>
                          {product.variant.map((c, i) => {
                            return (
                              <div
                                className={styles.coloredcircles}
                                style={{
                                  backgroundColor: c.hexColor,
                                  cursor: 'pointer',
                                  border: '1px solid #A3A3A3'
                                }}
                                onClick={() => {
                                  setColor(c.colorName)
                                  setImgArr(c.images)
                                  setIndex(0)
                                  setVariantIndex(i)
                                }}
                              ></div>
                            )
                          })}
                        </div>
                      </>
                    ) : product.productType === 'DC' ? (
                      <>
                        {/* <div>
                          <h3 className={styles.colorname}>{color}</h3>
                        </div> */}
                        <div>
                          <h2 className={styles.available}>{color}</h2>
                        </div>
                        <div className={styles.hexcodes}>
                          {product.variant.map((c, i) => {
                            return (
                              <div
                                className={styles.coloredcircles}
                                style={{
                                  backgroundImage: `linear-gradient(to right, ${c.hexColor.substring(0, c.hexColor.indexOf(' '))} 51% ,${c.hexColor.substring(c.hexColor.indexOf(' '), c.hexColor.length)} 50%)`,
                                  cursor: 'pointer',
                                  border: '1px solid rgb(15,20,58,0.5)'
                                }}
                                onClick={() => {
                                  setColor(c.colorName)
                                  setImgArr(c.images)
                                  setIndex(0)
                                  setVariantIndex(i)
                                }}
                              ></div>
                            )
                          }

                          )}
                        </div>
                      </>
                    ) : product.productType === 'NV' ? (
                      <>
                        {/* <div>
                          <h3 className={styles.colorname}>{choice}</h3>
                        </div> */}
                        <div>
                          <h2 className={styles.available}>{choice}</h2>
                        </div>
                        <div className={styles.options}>
                          <select
                            name='options'
                            id='dropdown'
                            className={styles.select}
                            onChange={e => {
                              setChoice(e.target.value)
                              setIndex(0)
                              setImgArr(product.variant[e.target.selectedIndex].images)
                              setVariantIndex(e.target.selectedIndex)
                            }}
                          >
                            {product.variant.map((c, i) => {
                              return <option value={c.varName}>{c.varName}</option>
                            })}
                          </select>
                        </div>
                      </>
                    ) : null}
                    {product.productType === 'UP' ? null : (
                      <div className={styles.quantandcustom}>
                        <div className={styles.quantity}>
                          <h2 className={styles.quantity_heading}>
                            Quantity <span style={{ fontSize: "12px" }}>( per pack )</span>
                          </h2>
                          <div className={styles.quantity_entry}>
                            {quant < 2 ? (
                              <img
                                src={decrement}
                                className={styles.decrease}
                                style={{ opacity: '50%' }}
                              ></img>
                            ) : (
                              <img
                                src={decrement}
                                className={styles.decrease}
                                onClick={decreaseQuant}
                                style={{ cursor: 'pointer' }}
                              ></img>
                            )}
                            <p className={styles.num}>{quant}</p>
                            <img
                              src={increment}
                              className={styles.increase}
                              onClick={increaseQuant}
                              style={{ cursor: 'pointer' }}
                            ></img>
                          </div>
                        </div>
                        {product.cust_flag ?
                          <div className={styles.customisation}>
                            <h2 className={styles.customisation_heading}>
                              Customisations <span style={{ fontSize: "12px" }}>( Max 3 )</span>
                            </h2>
                            <div className={styles.customisation_entry}>
                              {custom < 2 ? (
                                <img
                                  src={decrement}
                                  className={styles.decrease}
                                  style={{ opacity: '50%' }}
                                ></img>
                              ) : (
                                <img
                                  src={decrement}
                                  className={styles.decrease}
                                  onClick={decreaseCustom}
                                  style={{ cursor: 'pointer' }}
                                ></img>
                              )}
                              <p className={styles.num}>{custom}</p>
                              {
                                custom < 3 ? (
                                  <img
                                    src={increment}
                                    className={styles.increase}
                                    onClick={increaseCustom}
                                    style={{ cursor: 'pointer' }}
                                  ></img>
                                ) : (
                                  <img
                                    src={increment}
                                    className={styles.increase}
                                    style={{ opacity: '50%' }}
                                  ></img>
                                )
                              }

                            </div>
                          </div> : null

                        }
                      </div>
                    )}
                    <div className={styles.price}>
                      <h2 className={styles.price_heading}>Price</h2>
                      <div className={styles.costing}>
                        <p className={styles.total}>
                          ₹ {Math.round(quant * ((product.price[0].cost + (custom * product.price[0].customisation)) + (product.price[0].margin * (product.price[0].cost + (custom * product.price[0].customisation)))))}
                          {/* ₹ {Math.round(quant * (((product.price[0].cost + (product.price[0].cost * product.price[0].cost_GST)) + (custom * (product.price[0].customisation + (product.price[0].customisation * product.price[0].customisation_GST)))) + (product.price[0].margin * ((product.price[0].cost + (product.price[0].cost * product.price[0].cost_GST)) + (1 * (product.price[0].customisation + (product.price[0].customisation * product.price[0].customisation_GST)))))))} */}
                        </p>
                        <p className={styles.cost}>(₹ {Math.round((product.price[0].cost + (1 * product.price[0].customisation)) + (product.price[0].margin * (product.price[0].cost + (1 * product.price[0].customisation))))}/item)</p>
                      </div>
                    </div>
                    <button
                      className={styles.addtocartbtn}
                      onClick={() =>
                        setSelectedproducts([
                          {
                            color: color == 'Available Colors' ? product.variant[0].colorName : color,
                            choice: choice == 'Available Options' ? product.variant[0].varName : choice,
                            quantity: quant,
                            customnumber: custom,
                            index: variantIndex,
                            ...product
                          },
                          ...selectedproducts
                        ])
                      }
                    >
                      Add to Cart
                    </button>
                    <div className={styles.desc}>
                      <h2 className={styles.desc_heading}>Description</h2>
                      <p className={styles.description}>
                        {product.description}
                      </p>
                      <p className={styles.subdescription}>
                        {product.sub_description}
                      </p>
                      {product.item_Details[0].length != 0 ? (
                        <>
                          <p className={styles.itemdetails_heading}>
                            Item Details :
                          </p>
                          {product.item_Details.map((x, i) => {
                            return (
                              <div>
                                <p className={styles.details}>
                                  {i + 1}. {x}
                                </p>
                              </div>
                            )
                          })}
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      )
    </>
  )
}

export default Overlay
