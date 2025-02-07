import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.textpart}>
            <h1 className={styles.lemon}>Little Lemon</h1>
            <h3 className={styles.chicago}>Chicago</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ad quis nostrum? Quisquam omnis natus eligendi quidem et ut, asperiores magni, vitae libero voluptatem iure cupiditate maiores, minima rerum cum?</p>
            <a href="#">Reserve a table</a>
        </div>
        <div className={styles.imagepart}>
            <img src="./src/assets/restauranfood.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero