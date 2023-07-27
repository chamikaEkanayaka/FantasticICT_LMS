import React from "react";
import styles from "../common/NavBarStyles.module.css";
import fIctIcon from "../../Images/fantasticIctLogoWhite.png";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarLeft}>
        <img src={fIctIcon} alt="fantasticIctLogo" width="120px"/>
      </div>
      <div className={styles.navBarRight}>
        <a className={styles.navBarTab} href={'/home'}>Home</a>
        <a className={styles.navBarTab} href={'/study'}>Study</a>
        <a className={styles.navBarTab} href={'/about'}>About</a>
        <a className={styles.navBarTab} href={'/contact'}>Contact</a>
        <div className={styles.profileIcon}>C</div>
      </div>
    </div>
  );
}

export default NavBar;