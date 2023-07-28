import React from "react";
import styles from "./StudyMenuStyles.module.css";
import { IoIosBrowsers } from "react-icons/io";
import { Navigate } from "react-router-dom";

function StudyMenu(){
    return(
        <div className={styles.studyMenuCon}>
            <div className={styles.studyMenuTitle}><IoIosBrowsers/><br/>Browse your course...</div>
            <div className={styles.studyMenuCardCon}>
                <a href={'/studyal'} className={styles.studyMenuCard} id={styles.alCover}>
                    A/L
                </a>
                <a href={'/studyal'} className={styles.studyMenuCard} id={styles.olCover}>
                    O/L
                </a>
                <a href={'/studyal'} className={styles.studyMenuCard} id={styles.pythonCover}>
                    Python
                </a>
                <a href={'/studyal'} className={styles.studyMenuCard} id={styles.htmlCover}>
                    HTML
                </a>
            </div>
        </div>
    )
}

export default StudyMenu;