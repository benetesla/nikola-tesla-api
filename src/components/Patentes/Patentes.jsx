import React from 'react'
import styles from './Patentes.module.css'
import Navabar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Axios from 'axios'
import { useState, useEffect } from 'react'
const Patentes = () => {
  const [datePatentes, setDatePatentes] = useState ([])
  useEffect (() => {
    Axios.get ('http://localhost:3005/api/Patentes').then (res => {
      setDatePatentes (res.data)
      console.log(res.data)
    })
  }, [])
  return (
    <>
      <Navabar />
      <div className={styles.container}>
        <div className={styles.containerPatentes}>
          <h1 className={styles.title}>Patentes</h1>
          <div className={styles.containerPatentes}>
           
          </div>


        </div>
      </div>
      <Footer />
    </>
  )
}

export default Patentes