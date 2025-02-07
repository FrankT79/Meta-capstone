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
        <img src="./src/assets/greek salad.jpg" alt="" />
        <div className={styles.titleContainer}>
            <p className={styles.title}>Greek Salad</p>
            <p className={styles.price}>€ 25</p>
        </div>
        <p className={styles.description}>Lorem ipsum something Lorem ipsum something Lorem ipsum something Lorem ipsum something</p>
    </div>
    <div className={styles.card}>
        <img src="./src/assets/greek salad.jpg" alt="" />
        <div className={styles.titleContainer}>
            <p className={styles.title}>Greek Salad</p>
            <p className={styles.price}>€ 25</p>
        </div>
        <p className={styles.description}>Lorem ipsum something Lorem ipsum something Lorem ipsum something Lorem ipsum something</p>
    </div>
    <div className={styles.card}>
        <img src="./src/assets/greek salad.jpg" alt="" />
        <div className={styles.titleContainer}>
            <p className={styles.title}>Greek Salad</p>
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