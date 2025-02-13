import React from 'react'
import styles from './Footer.module.css'
import { Link} from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className={styles.bigbox}>
        <div>
            <img src="./src/assets/Logo mono.png" alt="Little Lemon Logo" />
          </div>
        <div>
            <h3>Links</h3>
          
            <ul className={styles.linksBar}>
            <Link to="/" className={styles.links} >Home</Link>
          <Link to="/about" className={styles.links} >About</Link>
          <Link to="/menu" className={styles.links} >Menu</Link>
          <Link to="/Reservation" className={styles.links} >Reservation</Link>
          <Link to="/order_online" className={styles.links} >Order Online</Link>
          <Link to="/login" className={styles.links} >Login</Link>
            </ul>
        </div>
      </div>

      <div className={styles.bigbox}>
      <div>
        <h3>Contact</h3>
        <div className={styles.adContainer}>
           <div>
            <p>Lonesome road 65, Chicago</p>
            <p>00887-8854-552</p>
            <p>llelemon@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.slinks}>
        <h3>Social media links</h3>
       <a href="https://meta.com"> <img src="./src/assets/facebookIcon.png" alt="facebook icon" /></a>
       <a href="https://instagram.com"><img src="./src/assets/instaIcon.png" alt="instagram icon" /></a>
       <a href="https://pinterest.com"><img src="./src/assets/pinterestIcon.png" alt="pinterest icon" /></a>
       <a href="https://youtube.com"><img src="./src/assets/youtubeicon.png" alt="youtube icon" /></a>
        
        
        
      </div>
      </div>
      </footer>

  )
}

export default Footer