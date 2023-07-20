import React from "react";
import styles from "../home/HomeSec2Styles.module.css";
import { FaRoad } from 'react-icons/fa';

function HomeSec2() {
    return (
        <div className={styles.HomeSec2Con}>
            <div className={styles.HS2heading}>
                - Let Get a Cilicon Journey with Us -
            </div>
            <div className={styles.HS2body}>
                <br/><FaRoad/><br/>Join with us to take a journey...
                <div className={styles.logSignButtonCon}>
                    <div className={styles.logSignButton}>Login</div>
                    <div className={styles.logSignButton}>Sign</div>
                </div>
            </div>
        </div>
    );
}

export default HomeSec2;