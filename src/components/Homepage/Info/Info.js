import React, { useEffect, useRef, useState } from "react";
import Infostyles from "./Info.module.css";
import axios from "axios";
import Popup from "../../Popup/Popup";
import Spin from "../../Spinner_Backdrop/Spinner";
// import { useLocation } from "react-router-dom";
// import LinkedInTag from 'react-linkedin-insight';

function Info({ pack }) {
  const [name, setName] = useState();
  const [companyname, setCompanyname] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [swagpacks, setSwagpacks] = useState();
  const [preference, setPreference] = useState();
  const [show, setShow] = useState(false);
  const [spin, setSpin] = useState(false);
  const change = () => {
    setShow(false);
  };
  const saveData = async (event) => {
    event.preventDefault();
    event.target.reset();
    window.scrollTo(0, 0);
    setSpin(true);
    const data = {
      name: name,
      companyname: companyname,
      email: email,
      contact: contact,
      swagpacks: swagpacks,
      preference: preference,
    };
    axios
      .post("https://hustlemad-backend.herokuapp.com/feed/post/", data)
      // axios.post('http://localhost:8080/feed/post/', data)
      .then((res) => {
        setShow(true);
        setSpin(false);
        var Dropdown = document.getElementById("dropdown");
        Dropdown.selectedIndex = 0;
        window.lintrk('track', { conversion_id: 8199977 });
        // console.log("Done");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (pack.length !== 0) {
      setPreference(pack);
    }
  }, [pack]);

  return (
    <>
      {spin ? <Spin /> : null}
      {show ? <Popup show={show} switch={change} /> : null}
      <div className={Infostyles.info} id="info">
        <h1>Request Information</h1>
        <form onSubmit={saveData}>
          <div className={Infostyles.first}>
            <div className={Infostyles.top1}>
              <h3>Full Name</h3>
              <input
                name="fullname"
                placeholder="Elon Jobs"
                type="text"
                onChange={(event) => setName(event.target.value)}
                id={Infostyles.inputfield}
                required
              ></input>
            </div>
            <div className={Infostyles.top2}>
              <h3>Company Name</h3>
              <input
                name="companyname"
                placeholder="Orange Inc."
                type="text"
                onChange={(event) => setCompanyname(event.target.value)}
                id={Infostyles.inputfield}
                required
              ></input>
            </div>
          </div>
          <div className={Infostyles.second}>
            <div className={Infostyles.middle1}>
              <h3>How many Swag Boxes do you want ?</h3>
              <input
                name="swagpacks"
                placeholder="50"
                type="number"
                min="50"
                onChange={(event) => setSwagpacks(event.target.value)}
                id={Infostyles.inputfield}
                required
              ></input>
            </div>
            <div className={Infostyles.middle2}>
              <h3>Choose Your Preference of Swag Box</h3>
              <select
                name="preference"
                id="dropdown"
                onChange={(event) => setPreference(event.target.value)}
                className={Infostyles.selectfield}
                value={preference}
              >
                <option value="" disabled selected hidden>
                  Choose your Preference
                </option>
                <option value="Essential Box">Essential Box</option>
                <option value="Delight Box">Delight Box</option>
                <option value="India @75 Box">India @75 Box</option>
                <option value="The Patriot Box">The Patriot Box</option>
                <option value="Create Custom Pack">Create Custom Box</option>
              </select>
            </div>
          </div>
          <div className={Infostyles.third}>
            <div className={Infostyles.bottom1}>
              <h3>Work Email</h3>
              <input
                name="email"
                placeholder="elon@orange.com"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                id={Infostyles.inputfield}
                required
              ></input>
            </div>
            <div className={Infostyles.bottom2}>
              <h3>Phone Number</h3>
              <input
                name="contact"
                placeholder="1234567890"
                pattern="[0-9]{10}"
                type="tel"
                onChange={(event) => setContact(event.target.value)}
                id={Infostyles.inputfield}
                required
              ></input>
            </div>
          </div>
          <div className={Infostyles.button}>
            <input
              type="submit"
              className={Infostyles.bttn}
              value="Submit Request"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Info;
