import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.aboutcont}>
    <div className={styles.abouttext}>
        <h1>Little Lemon</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non eveniet modi est? Reiciendis quo dolores repellendus cumque? Aliquid dolorem sapiente quasi? Dolore molestiae recusandae deleniti autem? Laborum, temporibus corrupti?</p>
    </div>
    <div className={styles.aboutimage}>
        <img src="./src/assets/Mario and Adrian A.jpg" alt="" />
        <img src="./src/assets/Mario and Adrian b.jpg" alt="" />
    </div>
    </div>
  )
}

export default About