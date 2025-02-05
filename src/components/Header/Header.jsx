import React from 'react'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'

function Header() {
  return (
    <header>
<img src="./src/assets/logo.svg" alt="Little Lemon Logo" />
<Nav></Nav>

</header>
  )
}

export default Header