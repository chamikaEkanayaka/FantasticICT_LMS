import React from "react";
import styles from "./BasicComStyles.module.css";

function BasicCom(){
    return(
        <div className={styles.BasicComCon}>
            <div className={styles.subSec}>
                <p className={styles.heading1}>දත්ත හා තොරතුරු</p>
                <p className={styles.heading2}>දත්ත</p>
                <p className={styles.paragraph1}>- බාහිර පරිසරයෙන් ලබා ගන්නා අවිධිමත්, අසංවිධිත, අර්ථ රහිත අංග සමූහයක් දත්ත ලෙස හැදින්වේ.</p>
                <p className={styles.heading2}>තොරතුරු</p>
                <p className={styles.paragraph1}>- දත්ත සකස් කර නිර්මාණය කරලනු ලබන අර්ථවත් දෑ තොරතුරු වේ.</p>
                <p className={styles.heading1}>දත්ත හා තොරතුරු</p>
            </div>
        </div>
    )
}

export default BasicCom;