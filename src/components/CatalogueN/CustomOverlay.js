import React, { useEffect, useState } from 'react'
import styles from './CustomOverlay.module.css'
import close from '../../images/catalogues/close.svg'
import Backdrop from '../Backdrop/Backdrop'
import { Link } from 'react-scroll'

function CustomOverlay({
  setCustomOpen,
  uniqueCategories,
  customproducts,
  setCustomproducts,
  selectedCategory
}) {
  const [category, setCategory] = useState()
  const [swagName, setSwagName] = useState()
  const [link, setLink] = useState()
  const [quantity, setQuantity] = useState()

  const saveData = async event => {
    event.preventDefault()
    event.target.reset()
    // window.scrollTo(0, 0)
    setCustomOpen(false)
    setCustomproducts([
      {
        category: category,
        swagName: swagName,
        link: link,
        quantity: quantity
      },
      ...customproducts
    ])
  }

  const change=()=>{
    setCustomOpen(false);
  }

  useEffect(()=>{
    setCategory(!selectedCategory ? uniqueCategories[0].name : selectedCategory)
    // console.log(category)
  },[])

  return (
    <>
      <Backdrop show={true} switch={change}/>
      <div className={styles.custombox}>
        <div className={styles.closebtn}>
          <img
            src={close}
            alt='CloseImage'
            onClick={() => setCustomOpen(false)}
          ></img>
        </div>
        <div className={styles.customdata}>
          <h2 className={styles.customdata_head}>Add New Swag</h2>
          <p className={styles.customdata_desc}>
            Saw something cool elsewhere? Drop the link and we’ll get it for
            you.
          </p>
        </div>
        <div className={styles.customForm}>
          <form onSubmit={saveData}>
            <div className={styles.first}>
              <h3>Category</h3>
              <select
                name='category'
                id='dropdown'
                onChange={event => setCategory(event.target.value)}
                className={styles.selectfield}
                value={category}
              >
                {uniqueCategories.map((c, i) => {
                  if (c.custom) {
                    return <option value={c.name}>{c.name}</option>
                  }
                })}
              </select>
            </div>
            <div className={styles.second}>
              <h3>Swag Name</h3>
              <input
                name='swagname'
                type='name'
                placeholder='Enter Name'
                onChange={event => setSwagName(event.target.value)}
                id={styles.inputfield}
                required
              ></input>
            </div>
            <div className={styles.third}>
              <h3>Link (From where to Procure?)</h3>
              <input
                name='link'
                type='url'
                placeholder='Enter Link'
                onChange={event => setLink(event.target.value)}
                id={styles.inputfield}
                required
              ></input>
            </div>
            <div className={styles.fourth}>
              <h3>Quantity per box</h3>
              <input
                name='quantity'
                type='number'
                placeholder='Enter Quantity'
                min='1'
                onChange={event => setQuantity(event.target.value)}
                id={styles.inputfield}
                required
              ></input>
            </div>
            <div className={styles.button}>
              <input
                type='submit'
                className={styles.addbttn}
                value='Add to Cart'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CustomOverlay
