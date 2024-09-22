import React from 'react';
import Backdrop from '../Backdrop/Backdrop'
import styles from './Popup.module.css';
import handshake from '../../images/Popup/handshake.svg';
import cross from '../../images/Popup/Cross.svg';

const popup = (props) => (
    <div>
        <Backdrop show={props.show} switch={props.switch} />
        {/* <img src="https://tracking.adcanopus.com/aff_l?offer_id=36741" width="1" height="1" /> */}
        <div className={styles.popup}>
            <div className={styles.cross}>
                <img src={cross} alt="" onClick={props.switch}></img>
            </div>
            <div className={styles.shake}>
                <img src={handshake} alt="" />
            </div>
            <div className={styles.thanking}>
                <h1>Thank You!</h1>
                <div className={styles.innerbox}>
                    <p>Someone from Hustlemad will reach out to you soon :)</p>
                </div>
            </div>
        </div>
    </div>
)

export default popup;