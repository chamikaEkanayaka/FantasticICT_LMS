import React from "react";
import styles from "./StudyMenuStyles.module.css";
import { IoIosBrowsers } from "react-icons/io";

function StudyMenu(){
    return(
        <div className={styles.studyMenuCon}>
            <div className={styles.studyMenuTitle}><IoIosBrowsers/><br/>Browse your course...</div>
            <div className={styles.studyMenuCardCon}>
                <div className={styles.studyMenuCard} id={styles.alCover}>
                    A/L
                </div>
                <div className={styles.studyMenuCard} id={styles.olCover}>
                    O/L
                </div>
                <div className={styles.studyMenuCard} id={styles.pythonCover}>
                    Python
                </div>
                <div className={styles.studyMenuCard} id={styles.htmlCover}>
                    HTML
                </div>
            </div>
        </div>
    )
}

export default StudyMenu;