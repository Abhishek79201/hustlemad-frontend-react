import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Marquee from 'react-fast-marquee'
import packstyles from './packs.module.css';

function Packs({ onPackSelectHandler }) {
  const [presetpacks, setPresetpacks] = useState([]);
  const [selectedproducts, setSelectedproducts] = useState([]);

  const getData = async () => {
    const data = await fetch(
      'https://hustlemad-backend.herokuapp.com/presetBox/get'
    )
    const json = await data.json()
    // console.log(json)
    setPresetpacks(json.preset);
  }

  useEffect(() => {
    getData()
  }, [])

  // console.log(presetpacks);
  // const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  return (
    <>
      <div className={packstyles.packcards}>
        <div className={packstyles.packs}>
          <h1>Preset Boxes</h1>
          <div className={packstyles.row}>
          {/* <Marquee speed={5} gradientWidth={0}> */}
            {
              presetpacks.map((p, index) => (
                <div className={packstyles.preset}>
                  <img className={packstyles.starter} src={p.displayImage} />
                  <div className={packstyles.contentpacks}>
                    <h3>{p.title}</h3>
                    <div className={packstyles.items}>
                      {
                        p.name.map((displayname, i) => (
                          <div className={packstyles.each}>
                            <i className={`${packstyles.color} fa fa-check fa-lg`}></i>
                            <p>{displayname}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <div className={packstyles.button}>
                    {/* <button className={packstyles.butn} onClick={()=>{scrollToBottom();onPackSelectHandler("Essential Pack")}}>Get at &#8377; <span className={packstyles.strikethrough}>3750</span> 2499</button> */}
                    <NavLink
                      to='/catalogue'
                      state={{
                        selectedproducts: p.products.map(element => {
                          return {
                            ...element,
                            color: element.variant[0].colorName,
                            choice: element.variant[0].varName,
                            index: 0,
                            quantity: 1,
                            customnumber: element.cust_flag ? 1 : 0,
                          }
                        })
                      }}
                    >
                      <button className={packstyles.butn}>Starting at &#8377; {p.price}</button>
                    </NavLink>
                  </div>
                  <div className={packstyles.upto}>
                    <p className={packstyles.min}>* min {p.minBox} boxes</p>
                  </div>
                </div>
              ))
            }
            {/* </Marquee> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Packs
