import React from 'react'
import {useRef, useState} from 'react'
import  styles from './Nav.module.css'


function Nav() {
  const[responsive, setResponsive] = useState("");


  

  const opencloseNav = ()=>{
   
      if (responsive === "")  setResponsive(styles.responsiveBar);
      else setResponsive("");
    }

  return (
    
    <nav >
        <ul  className={responsive}>
          <button id={styles.closeNav} onClick={opencloseNav}><img src="./src/assets/x-icon2.svg" alt="X icon"  width={16} height={16} /></button>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#Reservations">Reservations</a></li>
            <li><a href="#Order Online">Order Online</a></li>
            <li><a href="#Login">Login</a></li>
        </ul>
        <button id={styles.openNav} onClick={opencloseNav}><img src="./src/assets/menu-icon.svg" alt="menu icon"  width={16} height={16} color='green' /></button>
    </nav>
    
   
  )
}

export default Nav