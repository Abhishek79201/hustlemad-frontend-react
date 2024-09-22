import React, { useState, useEffect } from 'react'
import styles from './OurClients.module.css';
import shortarrow from "../../../images/Brands/arrow.svg";

function OurClients() {
    const [companyLogos, setCompanyLogos] = useState([]);
    const getData = async () => {
        const data = await fetch(
            'https://hustlemad-backend.herokuapp.com/companyPageList'
        )
        const json = await data.json()
        // console.log(json)
        setCompanyLogos(json.clients);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className={styles.companies}>
                <div className={styles.changer}>
                    <div className={styles.shortarrow}>
                        <img src={shortarrow} alt="" />
                    </div>
                    <div className={styles.text}>
                        <p>the absolute best</p>
                    </div>
                </div>
                <h1>
                    We work with the <span>Best</span>
                </h1>
                <div className={styles.structure}>
                    {companyLogos.map((c, i) => {
                        return (
                            <div className={styles.brandimages}>
                                <img src={c.logo_url} alt="Logo" className={styles.brandlogos} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default OurClients