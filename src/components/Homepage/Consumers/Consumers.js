import React, { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import Consumerstyles from './Consumers.module.css'

function Consumers () {
  const [companyLogos,setCompanyLogos] = useState([]);
  const getData = async () => {
    const data = await fetch(
      'https://hustlemad-backend.herokuapp.com/companyList'
    )
    const json = await data.json()
    // console.log({json})
    setCompanyLogos(json.companies);
  }
  
  useEffect(() => {
    getData()
  }, [])
  
  // console.log(companyLogos);

  return (
    <div className={Consumerstyles.consumers}>
      <h1>Freshly brewed merch. The way they like it.</h1>
      <div className={Consumerstyles.con}>
        <Marquee speed={60} gradientWidth={0}>
          {companyLogos.map((i, index) => {
            return (
              <img src={i.logo_url} className={Consumerstyles.logoname} alt='Logo' />
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}

export default Consumers
