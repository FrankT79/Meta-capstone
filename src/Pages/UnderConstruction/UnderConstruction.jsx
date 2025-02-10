import React from 'react'
import styles from './UnderConstruction.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function UnderConstruction() {
  return (
    <>
        
        <div className={styles.constructContainer}>
            <h1 className={styles.underTitle}>Page under construction</h1>
            <h3 className={styles.secondTitle}>Please come back soon to find new features</h3>
        
        </div>
        

        

    </>
  )
}

export default UnderConstruction