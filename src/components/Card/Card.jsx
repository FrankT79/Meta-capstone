import React from 'react'
import styles from './Card.module.css'


function Card() {
  return (
    <>
    <div className={styles.bodycontainer}>
    <div className={styles.titlemain}>
        <h1 className={styles.maintitle}>Specials</h1>
    </div>
    <div className={styles.container}>
    <div className={styles.card}>
        <img src="./src/assets/1greek salad.jpg" alt="greek salad" />
        <div className={styles.titleContainer}>
            <p className={styles.title}>Greek Salad</p>
            <p className={styles.price}>€ 25</p>
        </div>
        <p className={styles.description}>Lorem ipsum something Lorem ipsum something Lorem ipsum something Lorem ipsum something</p>
    </div>
    <div className={styles.card}>
        <img src="./src/assets/bruchetta.svg" alt="bruchetta" />
        <div className={styles.titleContainer}>
            <p className={styles.title}>Bruchetta</p>
            <p className={styles.price}>€ 25</p>
        </div>
        <p className={styles.description}>Lorem ipsum something Lorem ipsum something Lorem ipsum something Lorem ipsum something</p>
    </div>
    <div className={styles.card}>
        <img src="./src/assets/1lemon dessert.jpg" alt="lemon dessert" />
        <div className={styles.titleContainer}>
            <p className={styles.title}>Lemon dessert</p>
            <p className={styles.price}>€ 25</p>
        </div>
        <p className={styles.description}>Lorem ipsum something Lorem ipsum something Lorem ipsum something Lorem ipsum something</p>
    </div>
    </div>
    </div>
    </>


    
  )
}

export default Card