/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navabar = () => {
    return (
        <nav className={`navbar sticky-top navbar-expand-lg navbar-light ${styles.navbar}`}>
            <div className="container-fluid">
                <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
                    <span>Tesla</span>API
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbarNav}`}>
                        <li className={`nav-item ${styles.navItem}`}>
                            <Link to="/" >
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <Link to="/experimentos" >
                                <i className="fas fa-cogs"></i> Experimentos
                            </Link>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <Link to="/corrents" >
                                <i className="fas fa-bolt"></i> Corrents
                            </Link>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <Link to="/patentes">
                                <i className="fas fa-file-alt"></i> Patentes
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navabar