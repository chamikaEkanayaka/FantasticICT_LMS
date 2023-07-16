import React from "react";
import styles from "../components/NavBarStyles.module.css";
import fictIcon from "../Images/fantasticIctLogo.png";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarLeft}>
        <img src={fictIcon} alt="fantasticIctLogo" width="120px"/>
      </div>
      <div className={styles.navBarRight}>
        <div className={styles.navBarTab}>Home</div>
        <div className={styles.navBarTab}>Study</div>
        <div className={styles.navBarTab}>About</div>
        <div className={styles.navBarTab}>Contact</div>
      </div>
    </div>
  );
}

export default NavBar;