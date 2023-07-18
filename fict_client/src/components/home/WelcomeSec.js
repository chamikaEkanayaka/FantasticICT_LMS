import React from "react";
import styles from "../home/WelcomeSecStyles.module.css";

function WelcomeSec(){
    return(
        <div className={styles.welcomeSecCon}>
            <div className={styles.welcomeText}>Welcome to</div>
            <div className={styles.fIctText}>Fantastic ICT</div>
        </div>
    )
}

export default WelcomeSec;