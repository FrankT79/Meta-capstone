import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.aboutcont}>
    <div className={styles.abouttext}>
      <div className={styles.smallwrapper}>
        <h1>Little Lemon</h1>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
        </div>
    </div>
    <div className={styles.aboutimage}>
        <img src="./src/assets/1Mario and Adrian b2.jpg" alt="Mario and Adrian" />
    </div>
    </div>
  )
}

export default About