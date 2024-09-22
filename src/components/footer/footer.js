import React from 'react'
import insta from '../../images/Footer/instagram.svg'
import twitter from '../../images/Footer/twitter-square.svg'
import Copyright from '../../images/Footer/Copyright.svg'
import Footerstyles from './footer.module.css'

function footer() {
  return (
    <div className={Footerstyles.footer}>
      <div className={Footerstyles.contentFooter}>
        <hr className={Footerstyles.lineFooter} />
        <div className={Footerstyles.writingFooter}>
          <div className={Footerstyles.leftFooter}>
            <img src={Copyright} alt="" />
            <p>2023 by Hustlemad Brands Pvt Ltd</p>
          </div>
          <div className={Footerstyles.rightFooter}>
            <a href="https://store.hustlemad.com/pages/privacy-policy" target="_blank">
              <p>Privacy Policy</p>
            </a>
            <div>
              <a href="https://twitter.com/hustlemad_" target="_blank"><img src={twitter} alt='' /></a>
              <a href="https://www.instagram.com/hustlemad/" target="_blank"><img src={insta} alt='' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
