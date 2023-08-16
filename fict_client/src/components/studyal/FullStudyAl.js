import React from "react";
import MainConMenu from "./MainConMenu/MainConMenu";
import BasicCom from "./LessonConSec/BasicCom";
import styles from "./FullStudyAlStyles.module.css";

function FullStudyAl(){
    return(
        <div className={styles.FullStudyAlCon}>
            <MainConMenu/>
            <BasicCom/>
        </div>
    )
}

export default FullStudyAl