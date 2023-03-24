import React from 'react'
import styles from './Patentes.module.css'
import Navabar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Axios from 'axios'
import { useState, useEffect } from 'react'
const Patentes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get('http://localhost:3005/api/Patentes')
      .then(response => setData(response.data));
    console.log(data)
  }, []);
  if (loading) {
    return <div className={styles.pyramidloader}>
      <div className={styles.wrapper}>
        <span className="side side1"></span>
        <span className="side side2"></span>
        <span className="side side3"></span>
        <span className="side side4"></span>
        <span className="shadow"></span>
      </div>
    </div>
  }

  return (
    <>
      <Navabar />
      <div className={styles.container}>
        {data.map((patente) => (
          <div className={styles.card} key={patente.id}>
            <h3>{patente.nome}</h3>
            <div>
              <p>{patente.description}</p>
              <p>{patente.data}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>

  );
}

export default Patentes