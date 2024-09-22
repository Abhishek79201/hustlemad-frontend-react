import React from 'react'
import styles from './Schedule.module.css'
import customer from '../../../images/Schedule/sc2.webp'

function Schedule() {
  // data-aos="fade-right" data-aos-duration="500" data-aos-once="true"
  return (
    <div className={styles.schedule}>
      <div className={styles.customercare}>
        <img src={customer} alt='Image-Customer'></img>
      </div>
      <div className={styles.schedulecontent}>
        <div className={styles.questions}>Coffee? Let's talk.</div>
        <div className={styles.expert}>Find a time that fits your schedule...</div>
        <a href='https://zcal.co/i/y3a0AYqZ' target='_blank'>
          <div className={styles.bookbtn}>
            <div className={styles.content}>Book Now</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Schedule
