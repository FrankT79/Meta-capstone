import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <div>
        <img src="./src/assets/Logo mono.png" alt="Little Lemon Logo" />
      </div>
      <div>
        <h3>Links</h3>
        
        <ul className={styles.linksBar}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#Reservations">Reservations</a></li>
          <li><a href="#Order Online">Order Online</a></li>
          <li><a href="#Login">Login</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <div className={styles.adContainer}>
          <div>
            <p>Address:</p>
            <p>Phone:</p>
            <p>Email:</p>
          </div>
          <div>
            <p>Lonesome road 65, Chicago</p>
            <p>00887-8854-552</p>
            <p>littlelemon@chicago.com</p>
          </div>
        </div>
      </div>
      <div className={styles.slinks}>
        <h3>Social media links</h3>
        <img src="./src/assets/facebookIcon.png" alt="" />
        <img src="./src/assets/instaIcon.png" alt="" />
        <img src="./src/assets/pinterestIcon.png" alt="" />
        <img src="./src/assets/youtubeicon.png" alt="" />
      </div>

    </footer>
  )
}

export default Footer