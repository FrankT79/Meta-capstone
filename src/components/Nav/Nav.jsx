import React from 'react'
import styles from './Nav.module.css'


function Nav() {
  return (
    <nav>
        <ul className={styles.navbar}>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#Reservations">Reservations</a></li>
            <li><a href="#Order Online">Order Online</a></li>
            <li><a href="#Login">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav