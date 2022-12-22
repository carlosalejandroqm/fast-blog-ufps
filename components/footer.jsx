import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import ingSistemas from "../public/assets/img/logo_ingsistemas_vertical_invertido.png";
import ufps from "../public/assets/img/logoufpsvertical.png"

function footer() {
  return (
    <footer className={styles.footer_container}>
    <div className={styles.footer}>
      <div className={styles.footer__imagenes}>
        <Image
          src={ingSistemas}
          alt="ingSistemas"
          width={80}
          height={100}
        />
          <Image
          src={ufps}
          alt="UFPS"
          width={150}
          height={100}
          padding-left="10px"
        />
      
        <h3 className={styles.footer__titulo}>Fast Blog UFPS </h3>
      </div>
      <div className={styles.footer__enlaces}>
        <h3 className={styles.footer__titulo}>Enlaces Rapidos</h3>
        <label><a href="">Acerca de nosotros</a></label><br />
        <label><a href="">Funcionalidades del software</a></label><br />
        <label><a href="">Acerca de nosotros</a></label><br />
        <label><a href="">Soporte</a></label><br />
      </div>
      <div className={styles.footer__redes}>
        <h3 className={styles.footer__titulo}>Redes</h3>
        <label><a href="">Facebook</a></label><br />
        <label><a href="">Twitter</a></label>
      </div>
    </div>
    <div className={styles.footer2}>
      <div className={styles.footer2__linea}></div>
      <div className={styles.footer2__last}>
        <h3 className={styles.footer__titulo}>
          Copyright © AÑO 2022
        </h3>
      </div>
    </div>
    
  </footer>

    
  );
}

export default footer;
