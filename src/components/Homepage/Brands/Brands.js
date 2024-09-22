import React from "react";
import { NavLink } from 'react-router-dom';
import Brandstyles from "./Brands.module.css";
import shortarrow from "../../../images/Brands/shortarrow.svg";

let brandarray = ['https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/f0bd2a10-f089-40d6-cfd9-44eea3ef6900/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/e4b3f8b2-c81c-473d-d115-01b0eeaf5400/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/e2af32c9-d1da-4f4c-2437-387848b03600/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/018b8dfb-39d5-4b8d-284f-a0154d018d00/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/c2131e49-269d-448e-e6d6-fb755d709100/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/62032de0-a925-4ab5-62c9-9aee91c80200/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/d8e9c5f3-fb08-497b-6e15-7e93560e2500/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/6da38384-5b51-414c-efb4-14c59d05e000/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/6607ef8c-ff8f-45d5-9608-df1569500900/public', 'https://imagedelivery.net/aKDgfisBqvZNtFE3Wylbbg/9f25a19d-9b40-4d6f-e4c7-50b5a7fb2100/public']

function Brands() {
  return (
    <>
      <div className={Brandstyles.brands}>
        <div className={Brandstyles.changer}>
          <div className={Brandstyles.shortarrow}>
            <img src={shortarrow} alt="" />
          </div>
          <div className={Brandstyles.text}>
            <p>the absolute best</p>
          </div>
        </div>
        <h1>
          We get you the <span>Best</span>
        </h1>
        <div className={Brandstyles.brandcompanies}>
          {/* className={`${Brandstyles.brandlogos} ${Brandstyles.bu}`} */}
          {brandarray.map((c, i) => {
            // console.log(c);
            return (
              <div className={Brandstyles.brandimages}>
                <img src={c} alt="Logo" className={Brandstyles.brandlogos} />
              </div>
            )
          })}
        </div>
        <NavLink to='/allcompanies'>
          <div className={Brandstyles.viewmore}>
            View more
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Brands;
