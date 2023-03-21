import React from 'react'
import Styles from './Footer.module.css'
const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <p className={Styles.text}>
                © 2023 by Bene Tesla . Proudly created with Tesla
            </p>
            <div className={Styles.social}>
                <a href="https://www.facebook.com/benevanio.santos.7/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/bene_tesla/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/bene-tesla/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/benetesla" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer