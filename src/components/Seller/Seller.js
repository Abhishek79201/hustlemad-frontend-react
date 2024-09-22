import React, { useState } from "react";
import axios from "axios";
import styles from "./Seller.module.css";
import graph from "../../images/Seller/Graph.svg";
import Popup from "../Popup/Popup";
import Spin from "../Spinner_Backdrop/Spinner";

function Seller() {
    const [name, setName] = useState();
    const [companyname, setCompanyname] = useState();
    const [email, setEmail] = useState();
    const [website, setWebsite] = useState();
    const [message, setMessage] = useState();
    const [contact, setContact] = useState();
    const [show, setShow] = useState(false);
    const [spin, setSpin] = useState(false);
    const change = () => {
        setShow(false);
    };

    const saveData = async (event) => {
        event.preventDefault();
        event.target.reset();
        setSpin(true);
        const data = {
            name: name,
            email: email,
            company_name: companyname,
            website_link: website,
            contact: contact,
            message: message,
        };
        axios
            .post("https://hustlemad-backend.herokuapp.com/sellerdata", data)
            .then((res) => {
                setShow(true);
                setSpin(false);
                window.lintrk('track', { conversion_id: 9381081 });
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    document.title = "Hustlemad | Partner";
    return (
        <>
            {spin ? <Spin /> : null}
            {show ? <Popup show={show} switch={change} /> : null}
            <div className={styles.contact}>
                <div className={styles.mainform}>
                    <div className={styles.leftcontent}>
                        <p className={styles.heading}>
                            We enable <span style={{ color: "green" }}>100+</span> D2C brands generate B2B orders</p>
                        <p className={styles.subheading}>Let us <span className={styles.grow}>grow your revenue</span> while you build your brand</p>
                        <img src={graph} alt="Image"></img>
                    </div>
                    <div className={styles.rightcontent}>
                        <form onSubmit={saveData}>
                            <div className={styles.first}>
                                <input
                                    name="fullname"
                                    placeholder="Your Name"
                                    type="text"
                                    onChange={(event) => setName(event.target.value)}
                                    id={styles.gap}
                                    required
                                ></input>
                            </div>
                            <div className={styles.second}>
                                <input
                                    name="companyname"
                                    placeholder="Company Name"
                                    type="text"
                                    onChange={(event) => setCompanyname(event.target.value)}
                                    id={styles.gap}
                                    required
                                ></input>
                            </div>
                            <div className={styles.third}>
                                <input
                                    name="link"
                                    placeholder="Website/Store Link"
                                    type="url"
                                    onChange={(event) => setWebsite(event.target.value)}
                                    id={styles.gap}
                                    required
                                ></input>
                            </div>
                            <div className={styles.fourth}>
                                <input
                                    name="email"
                                    placeholder="Email Address"
                                    type="email"
                                    onChange={(event) => setEmail(event.target.value)}
                                    id={styles.gap}
                                    required
                                ></input>
                            </div>
                            <div className={styles.fifth}>
                                <input
                                    name="contact"
                                    placeholder="Phone Number"
                                    pattern="[0-9]{10}"
                                    type="tel"
                                    onChange={(event) => setContact(event.target.value)}
                                    id={styles.gap}
                                    required
                                ></input>
                            </div>
                            <div className={styles.sixth}>
                                <textarea
                                    name="message"
                                    placeholder="Leave a message here (optional)"
                                    type="text"
                                    onChange={(event) => setMessage(event.target.value)}
                                    id={styles.messg}
                                ></textarea>
                            </div>
                            <div className={styles.button}>
                                <input
                                    type="submit"
                                    className={styles.bttn}
                                    value="Sign me up!"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Seller;
