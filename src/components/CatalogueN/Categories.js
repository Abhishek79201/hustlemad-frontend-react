import React, { useEffect, useState } from 'react'
import styles from './categories.module.css'
import left from '../../images/catalogues/chevron-left.svg'
import right from '../../images/catalogues/chevron-right.svg'
import Spinner from '../Spinner/Spinner'
import BackdropD from '../Backdrop_Dropdown/Backdrop'
import { Link } from 'react-scroll'

// function Categories({ testRef,value,setValue }) {
  function Categories() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const [categories, setCategories] = useState();
  const [spin, setSpin] = useState(true);
  const [drop, setDrop] = useState(false);
  const [value,setValue] = useState(0);

  let update = (i) => {
    setValue(i)
  }

  const getData = async () => {
    const data = await fetch(
      'https://hustlemad-backend.herokuapp.com/category/get'
    )
    const json = await data.json()
    // console.log(json);
    setCategories(json.allcategory);
    setSpin(false);
  }

  useEffect(() => {
    getData()
  }, [])

  const onPrevCategoryButtonClick = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1)
      setValue(categories[currentCategoryIndex - 1].name)
    } else {
      setCurrentCategoryIndex(categories.length - 1)
      setValue(categories[categories.length - 1].name)
    }
  }

  const onNextCategoryButtonClick = () => {
    if (currentCategoryIndex === categories.length - 1) {
      setCurrentCategoryIndex(0)
      setValue(categories[0].name)
    } else {
      setCurrentCategoryIndex(currentCategoryIndex + 1)
      setValue(categories[currentCategoryIndex + 1].name)
    }
  }

  // console.log(categories);

  const change = () => {
    setDrop(false)
  }

  useEffect(()=>{
      if(categories && categories.length!=0)
      setValue(categories[0].name)
  },[categories])

  return (
    <>
      {
        drop ? <BackdropD show={true} switch={change}/> : null
      }
      {spin ? (
        <Spinner />) : (
        <>
          <div className={styles.categorymobile}>
            <div className={styles.categorymobilecontainer}>
              <div className={styles.categorymobile_heading}>
                <h3>Categories</h3>
              </div>
              <hr />
              <div className={styles.categorymobile_options}>
                <Link to={categories[(currentCategoryIndex-1)>=0 ? (currentCategoryIndex-1) : (categories.length-1)].name} spy={true} smooth={true} offset={-120} duration={100} onClick={onPrevCategoryButtonClick}>
                  <div>
                    <img src={left} alt='Prev Arrow' />
                  </div>
                </Link>
                <div className={styles.categorymobile_options_active} onClick={() => setDrop(!drop)}>
                  <img src={categories[currentCategoryIndex].images[1]} alt='' />
                  <h3>{value == '' ? categories[0].name : value}</h3>
                </div>
                <Link onClick={onNextCategoryButtonClick} to={categories[(currentCategoryIndex+1)<categories.length ? (currentCategoryIndex+1) : 0].name} spy={true} smooth={true} offset={-120} duration={100}>
                  <div>
                    <img src={right} alt='Next Arrow' />
                  </div>
                </Link>
              </div>
            </div>
            {drop ?
              <div className={styles.categorymobile_dropdown}>
                <div className={styles.categorymobile_dropdown_names}>
                  <ul>
                    {categories.map((i, index) => {
                      return (
                        <Link to={i.name} spy={true} smooth={true} offset={-120} duration={100} isDynamic={true} onClick={() => {
                          update(i.name);
                          setCurrentCategoryIndex(index);
                          setDrop(false)
                        }
                        }>
                          <li >
                            <div className={styles.a1}>
                              {value === i.name ? (
                                <img src={i.images[1]} alt='' />
                              ) : (
                                <img src={i.images[0]} alt='' style={{ border: "1px solid rgba(52, 52, 52, 0.64)", borderRadius: "50%" }} />
                              )}
                              <div className={styles.name}>{i.name}</div>
                            </div>
                          </li>
                        </Link>
                      )
                    })}
                  </ul>
                </div>
              </div> : null}
          </div>
          <div className={styles.cgrs}>
            <div className={styles.topic}>
              <p>Categories</p>
            </div>
            <hr />
            <div className={styles.lis}>
              <ul>
                {categories.map((i, index) => {
                  return (
                    <Link to={i.name} spy={true} smooth={true} offset={0} duration={100} onClick={() =>
                      update(i.name)
                    }>
                      <li >
                        <div className={styles.a1}>
                          {value === i.name ? (
                            <img src={i.images[1]} alt='' />
                          ) : (
                            <img src={i.images[0]} alt='' style={{ border: "1px solid rgba(52, 52, 52, 0.64)", borderRadius: "50%" }} />
                          )}
                          <div className={styles.name}>{i.name}</div>
                        </div>
                      </li>
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Categories
