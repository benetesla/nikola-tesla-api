import React from 'react'
import styles from './Patentes.module.css'
import Navabar from '../navbar/Navbar'
import Footer from '../footer/Footer'
const Patentes = () => {
  const APIURL = 'http://localhost:3001/patentes'
  return (
    <>
      <Navabar />
      <div className={styles.container}>
        <div className={styles.containerPatentes}>
          <h1 className={styles.title}>Patentes</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Patentes