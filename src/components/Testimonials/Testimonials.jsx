import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testimonial}>

        <h2>Testimonials</h2>
        <div className={styles.testcontainer}>
            <div className={styles.testcard}>
                <h3>hello</h3>
                <img src="./src/assets/personicon2.png" alt="personicon"  width={50}/>
                <h4 className={styles.revname}>John</h4>
                <p>this is the review text</p>
            </div>
            <div className={styles.testcard}>
                <h3>hello</h3>
                <img src="./src/assets/personicon2.png" alt="personicon" width={50}/>
                <h4 className={styles.revname}>John</h4>
                <p>this is the review text</p>
            </div>
            <div className={styles.testcard}>
                <h3>hello</h3>
                <img src="./src/assets/personicon2.png" alt="personicon" width={50}/>
                <h4 className={styles.revname}>John</h4>
                <p>this is the review text</p>
            </div>
            <div className={styles.testcard}>
                <h3>hello</h3>
                <img src="./src/assets/personicon2.png" alt="personicon" width={50}/>
                <h4 className={styles.revname}>John</h4>
                <p>this is the review text</p>
            </div>
            
           
        </div>
        
    </div>
  )
}

export default Testimonials