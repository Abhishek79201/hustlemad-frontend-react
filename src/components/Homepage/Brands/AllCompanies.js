import React, { useState, useEffect } from 'react'
import styles from './AllCompanies.module.css';
import shortarrow from "../../../images/Brands/arrow.svg";

function AllCompanies() {
    const [companyLogos, setCompanyLogos] = useState([]);
    const getData = async () => {
        const data = await fetch(
            'https://hustlemad-backend.herokuapp.com/brandLogo'
        )
        const json = await data.json()
        // console.log(json)
        setCompanyLogos(json.brands);
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
                    We get you the <span>Best</span>
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

export default AllCompanies