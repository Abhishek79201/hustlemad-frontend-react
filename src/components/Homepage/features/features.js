import React from 'react'
import random1 from '../../../images/Features/Frame 47.svg'
import random2 from '../../../images/Features/Frame 54.svg'
import random3 from '../../../images/Features/Frame 56.svg'
import random4 from '../../../images/Features/Frame 52.svg'
import random5 from '../../../images/Features/Frame 55.svg'
import random6 from '../../../images/Features/Frame 57.svg'
import star from '../../../images/Features/Star.svg'
import arrowrocket from '../../../images/Features/arrowrocket.svg';
import line from '../../../images/Features/Line.svg'
import Featurestyles from './features.module.css'

function features () {
  return (
    <>
      <div className={Featurestyles.features}>
        <h1>
          We go way <span className={Featurestyles.higlight}>Beyond</span> just Swag
        </h1>
        <div className={Featurestyles.outerbox}>
        <div className={Featurestyles.imgs}>
          <img src={arrowrocket} alt='' />
        </div>
          <div className={Featurestyles.contentbox}>
            <div className={Featurestyles.featuresleft}>
              <div className={`${Featurestyles.feature} ${Featurestyles.featuretop}`}>
                <div>
                  <img src={random1}></img>
                </div>
                <div className={Featurestyles.written}>
                  <h2>We customise, you relax</h2>
                  <p>Customisation handled from start to finish for free.</p>
                </div>
              </div>
              <div className={Featurestyles.feature}>
                <div>
                  <img src={random2}></img>
                </div>
                <div className={Featurestyles.written}>
                  <h2>Inventory Management</h2>
                  <p>
                    We will store your Swag and notify you when you're running
                    low.
                  </p>
                </div>
              </div>
              <div className={`${Featurestyles.feature} ${Featurestyles.bottom}`}>
                <div>
                  <img src={random3}></img>
                </div>
                <div className={Featurestyles.written}>
                  <h2>All-in-One Dashboard</h2>
                  <p>
                    One centralized platform to streamline all your Swag needs.
                  </p>
                </div>
              </div>
            </div>
            <div className={Featurestyles.featuresright}>
              <div className={`${Featurestyles.feature} ${Featurestyles.featuretop}`}>
                <div>
                  <img src={random4}></img>
                </div>
                <div className={Featurestyles.written}>
                  <h2>Pan India Fullfillment</h2>
                  <p>
                    No matter where your remote team is, we've got you covered.
                  </p>
                </div>
              </div>
              <div className={Featurestyles.feature}>
                <div>
                  <img src={random5}></img>
                </div>
                <div className={Featurestyles.written}>
                  <h2>Merchandise Shops</h2>
                  <p>Use Hustlemad to create and manage your online merch shop.</p>
                </div>
              </div>
              <div className={`${Featurestyles.feature} ${Featurestyles.bottom}`}>
                <div>
                  <img src={random6}></img>
                </div>
                <div className={Featurestyles.written}>
                  <h2>API & Integrations</h2>
                  <p>
                    Integrate subscriptions within Swag & let your Tribe pick
                    their favourites.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={Featurestyles.stari}>
            <img src={star} alt=''></img>
          </div>
        </div>
        <div className={Featurestyles.line1}>
          <img src={line} alt='' />
        </div>
      </div>
    </>
  )
}

export default features
