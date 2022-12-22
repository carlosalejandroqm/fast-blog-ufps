import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const router = useRouter();
  return <div className={styles.navbar_container}>

    <span className={styles.navbar_back} onClick={() => router.back()}>Ir atras</span>
    <span className={styles.navbar_back} onClick={() => router.back()}>Registrate</span>
    <span className={styles.navbar_back} onClick={() => router.back()}>Iniciar Sesion</span>
  </div>;
};

export default Navbar;
