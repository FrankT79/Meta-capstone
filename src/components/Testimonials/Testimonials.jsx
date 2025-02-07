import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testimonial}>

        <h2>Testimonials</h2>
        <div className={styles.testcontainer}>
            <div className={styles.testcard}>
                <h2>hello</h2>
                <img src="./src/assets/creditcard.svg" alt="" />
                <h2 className={styles.revname}>John</h2>
                <p>this is the review text</p>
            </div>
            <div className={styles.testcard}>
                <h2>hello</h2>
                <img src="./src/assets/creditcard.svg" alt="" />
                <h2 className={styles.revname}>John</h2>
                <p>this is the review text</p>
            </div>
            <div className={styles.testcard}>
                <h2>hello</h2>
                <img src="./src/assets/creditcard.svg" alt="" />
                <h2 className={styles.revname}>John</h2>
                <p>this is the review text</p>
            </div>
            <div className={styles.testcard}>
                <h2>hello</h2>
                <img src="./src/assets/creditcard.svg" alt="" />
                <h2 className={styles.revname}>John</h2>
                <p>this is the review text</p>
            </div>
            
           
        </div>
        
    </div>
  )
}

export default Testimonials