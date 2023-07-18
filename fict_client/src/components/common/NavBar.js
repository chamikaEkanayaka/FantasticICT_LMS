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
        <div className={styles.navBarTab}>Home</div>
        <div className={styles.navBarTab}>Study</div>
        <div className={styles.navBarTab}>About</div>
        <div className={styles.navBarTab}>Contact</div>
        <div className={styles.profileIcon}>C</div>
      </div>
    </div>
  );
}

export default NavBar;