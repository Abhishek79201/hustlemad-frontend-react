import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Products.module.css'
import xmarkBC from '../../images/catalogues/_xmarkBC.svg'
import xmarkAC from '../../images/catalogues/_xmarkAC.svg'
import customClick from '../../images/catalogues/_xmarkCustom.svg'
import Cart from './Cart'
import Spinner from '../Spinner/Spinner'
import Categories from './Categories'
import Overlay from './Overlay'
import CustomOverlay from './CustomOverlay'
import IntersectionWrapper from '../../utils/IntersectionWrapper'
import HoverImage from "react-hover-image";

function Products() {
  const location = useLocation()
  // console.log(location)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState()
  const [cate, setCate] = useState([])
  const [spin, setSpin] = useState(true)
  const [expand, setExpand] = useState(false)
  const [singleProduct, setSingleProduct] = useState()
  const [open, setOpen] = useState(true)
  const [cartOpen, setCartOpen] = useState(true)
  const [customOpen, setCustomOpen] = useState(false)
  const [selectedproducts, setSelectedproducts] = useState(location.state?.selectedproducts || [])
  const [customproducts, setCustomproducts] = useState(location.state?.selectedCustomproducts || [])
  const [selectedCategory, setSelectedCategory] = useState()
  const [addimage, setAddimage] = useState({})
  const [selectedProductsId, setSelectedProductsId] = useState([])
  const [value, setValue] = useState("")
  const [elementsInView, setElementsInView] = useState([]);
  const [id, setId] = useState(null);
  const testRef = useRef(null);

  const getCategories = async () => {
    const data = await fetch(
      'https://hustlemad-backend.herokuapp.com/category/get'
    )
    const json = await data.json()
    // console.log(json);
    setCategories(json.allcategory);
    getData()
  }

  useEffect(() => {
    getCategories()
  }, [])

  const getData = async () => {
    const data = await fetch(
      'https://hustlemad-backend.herokuapp.com/productList'
    )
    const json = await data.json()
    // console.log(json.products)
    setProducts(json.products)
    setSpin(false)
    // console.log(products)
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

  const swagHandler = () => {
    setCartOpen(true)
    setExpand(!expand)
  }

  const Truncate = (str) => {
    return str.length > 35 ? str.substring(0, 32) + "..." : str;
  }

  const onCategoryInView = (name, remove = false) => {
    if (remove) {
      const index = elementsInView.findIndex(e => e === name);
      setElementsInView(prev => {
        const newArr = [...prev];
        newArr.splice(index, 1);
        return newArr;
      });
    } else {
      if (!elementsInView.find((e) => e === name))
        setElementsInView(prev => {
          const newArr = [...prev];
          newArr.push(name);
          return newArr;
        });
    }
  }

  // console.log(selectedproducts)
  // console.log(customproducts);
  // console.log(products)
  // console.log(categories)

  useEffect(() => {
    if (elementsInView.length) {
      setValue(elementsInView[elementsInView.length - 1])
    }
  }, [elementsInView])

  document.title = 'Hustlemad | Products'
  return (
    <>
      {spin ? (
        <Spinner />
      ) : (
        <div className={styles.mpage}>
          {singleProduct && (
            <Overlay
              product={singleProduct}
              open={open}
              setOpen={setOpen}
              selectedproducts={selectedproducts}
              setSelectedproducts={setSelectedproducts}
            />
          )}
          {customOpen && (
            <CustomOverlay
              setCustomOpen={setCustomOpen}
              uniqueCategories={categories}
              customproducts={customproducts}
              setCustomproducts={setCustomproducts}
              selectedCategory={selectedCategory}
            />
          )}
          {/* <Categories value={value} setValue={setValue} /> */}
          <Categories />
          {/* Cards Parts  */}
          <div className={styles.cardsSection} id="card-section" ref={testRef}>
            <div className={styles.cardsdisplay}>
              {categories.map((u, index) => {
                return (
                  // <IntersectionWrapper intersectionFunction={(remove) => { onCategoryInView(u.name,remove) }} rootId={testRef}>
                  <div className={styles.crds} id={u.name}>
                    {/* <IntersectionWrapper intersectionFunction={() => { onCategoryInView(u.name) }} rootId="card-section"> */}
                    <p className={styles.swag}>{u.name}</p>
                    <h1 className={styles.heading}>
                      {u.description}
                    </h1>
                    {u.subDescription.length != 0 ? (
                      <div className={styles.subheading}>
                        {u.subDescription}
                      </div>
                    ) : null}
                    <div className={styles.pRows}>
                      {products.map((p, i) => {
                        if (p.categoryId === u._id && p.available) {
                          return (
                            <div className={styles.pCards}>
                              {p.image[1] ?
                                <HoverImage src={p.image[0]} hoverSrc={p.image[1]} className={styles.pimage}
                                  onClick={() => (
                                    setSingleProduct(p), setOpen(true)
                                  )} /> :
                                <img
                                  src={p.image[0]}
                                  alt='Image'
                                  className={styles.pimage}
                                  onClick={() => (
                                    setSingleProduct(p), setOpen(true)
                                  )}
                                />}
                              <div className={styles.pbranding}>
                                <p>{p.brandName}</p>
                              </div>
                              <div className={styles.pCardsbody}>
                                <div
                                  className={styles.l}
                                  onClick={() => (
                                    setSingleProduct(p), setOpen(true)
                                  )}
                                >
                                  <h5 className={styles.name}>
                                    {Truncate(p.name)}
                                  </h5>
                                  <p className={styles.price}>
                                    {
                                      !p.cust_flag ? (
                                        <>
                                          ₹ {Math.round(1 * ((p.price[0].cost + (0 * p.price[0].customisation)) + (p.price[0].margin * (p.price[0].cost + (0 * p.price[0].customisation)))))}
                                        </>
                                      )
                                        :
                                        (
                                          <>
                                            ₹ {Math.round(1 * ((p.price[0].cost + (1 * p.price[0].customisation)) + (p.price[0].margin * (p.price[0].cost + (1 * p.price[0].customisation)))))}
                                          </>
                                        )
                                    }
                                    {/* ₹ {Math.round(1 * (((p.price[0].cost + (p.price[0].cost*p.price[0].cost_GST))+(1*(p.price[0].customisation + (p.price[0].customisation*p.price[0].customisation_GST)))) + (p.price[0].margin*((p.price[0].cost + (p.price[0].cost*p.price[0].cost_GST))+(1*(p.price[0].customisation + (p.price[0].customisation*p.price[0].customisation_GST)))))))} */}
                                  </p>
                                </div>
                                <div className={styles.add}>
                                  <img
                                    src={
                                      selectedproducts.filter(
                                        item => item.sortId === p.sortId
                                      ).length
                                        ? xmarkAC
                                        : xmarkBC
                                    }
                                    alt=''
                                    className={styles.addimg}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                      return selectedproducts.filter(
                                        item => item.sortId === p.sortId
                                      ).length
                                        ? null
                                        : setSelectedproducts([
                                          {
                                            color: p.variant[0].colorName,
                                            choice: p.variant[0].varName,
                                            index: 0,
                                            quantity: 1,
                                            customnumber: p.cust_flag ? 1 : 0,
                                            ...p
                                          },
                                          ...selectedproducts
                                        ])
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          )
                        }
                      })}
                      {/* TBD card */}
                      {customproducts.map((c, i) => {
                        if (
                          customproducts[i].category === u.name
                        ) {
                          return (
                            <div className={styles.pCardsTBD}>
                              <img
                                className={styles.TBD}
                                src={u.someField}
                                alt=''
                              />
                              <div className={styles.pcustombranding}>
                                <p>Custom {customproducts[i].category}</p>
                              </div>
                              <div className={styles.pCardsbodyTBD}>
                                <div className={styles.lTBD}>
                                  <h5>{customproducts[i].swagName}</h5>
                                  <p>₹ TBD</p>
                                </div>
                                <div className={styles.rTBD}>
                                  <img src={xmarkAC} alt='' />
                                </div>
                              </div>
                            </div>
                          )
                        }
                      })}
                      {/* Custom Card */}
                      {u.custom &&
                        <div
                          className={styles.pCardsCustom}
                          onClick={() => (
                            setCustomOpen(true),
                            setSelectedCategory(u.name)
                          )}
                        >
                          <div className={styles.upperCustom}>
                            <h3>Looking for something else?</h3>
                            <p>
                              If only we could read minds! :D You’ll have to tell
                              us.
                            </p>
                          </div>
                          <div className={styles.pCardsbodyCustom}>
                            <img src={customClick} alt='' />
                          </div>
                        </div>}
                    </div>
                  </div>
                  // </IntersectionWrapper>

                )
              })}
            </div>

          </div>

          {
            expand ? (
              <div className={styles.cartpopup}>
                <Cart
                  deleteProduct={deleteProduct}
                  deleteCustomProduct={deleteCustomProduct}
                  selectedproducts={selectedproducts}
                  disabled={false}
                  cartOpen={expand}
                  setCartOpen={setExpand}
                  customproducts={customproducts}
                  quantitycatalogue={location.state?.quantity || "50"}
                  uniqueCategories={categories}
                />
              </div>
            ) : null
          }
          <div className={styles.cartsystem}>
            <Cart
              deleteProduct={deleteProduct}
              deleteCustomProduct={deleteCustomProduct}
              selectedproducts={selectedproducts}
              disabled={false}
              cartOpen={true}
              setCartOpen={setExpand}
              customproducts={customproducts}
              quantitycatalogue={location.state?.quantity || "50"}
              uniqueCategories={categories}
            />
          </div>
          <div className={styles.view_desktop} onClick={swagHandler}>
            <button className={styles.bttnnn}>
              Expand Swag Box [{selectedproducts.length + customproducts.length}]
            </button>
          </div>
          <div className={styles.view} onClick={swagHandler}>
            <button className={styles.bttnn}>
              Expand Swag Box [{selectedproducts.length + customproducts.length}]
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Products