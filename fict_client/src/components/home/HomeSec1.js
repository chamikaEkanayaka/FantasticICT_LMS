import React from "react";
import styles from "../home/HomeSec1Styles.module.css";
import fIctCeIcon from "../../Images/fIctChamikaEkanayakaAsh.png";

function HomeSec1() {
    return (
        <div className={styles.HomeSec1Con}>
            <p className={styles.mainTagLine}>The One & Only A/L ICT Class Conducted by an Island Ranker</p>
            <img src={fIctCeIcon} alt="fantasticIctIcon" width="500px" />
        </div>
    );
}

export default HomeSec1;