import React from "react";
import styles from "../../sass/components/footer.module.scss";
import logo from "../data/logofooter.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo de Kasa"></img>
      <p className={styles.pf}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
