import React from 'react'
import styles from './Experimentos.module.css'
import Navabar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Axios from 'axios'
import { useState, useEffect } from 'react'
const Experimentos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3005/api/Exprimentos')
            .then(response => setData(response.data));
    }, []);

    return (
        <>
            <Navabar />
            <div className={styles.container}>
                {data.map((patente) => (
                    <div className={styles.card} key={patente.id}>
                        <h3 className={styles.title}>{patente.nome}</h3>
                        <div className={styles.cardConteudo}>
                            <p>{patente.Descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>

    );
}

export default Experimentos