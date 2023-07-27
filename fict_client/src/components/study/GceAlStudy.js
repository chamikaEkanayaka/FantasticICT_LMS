import React, { useState } from "react";
import styles from "./StudySecStyles.module.css";

function GceAlStudy() {
  const [display, setDisplay] = useState(true);

  function hideContent() {
    if(display===false){
        document.getElementById('GceAlStudyContent').style.display='none';
        document.getElementById('GceAlStudyTitle').style.backgroundColor='#ffffff';
        document.getElementById('GceAlStudyTitle').style.color='#000000';
        setDisplay(true);
    }else{
        document.getElementById('GceAlStudyContent').style.display='block';
        document.getElementById('GceAlStudyTitle').style.backgroundColor='rgb(70,70,70)';
        document.getElementById('GceAlStudyTitle').style.color='#ffffff';
        setDisplay(false);
    }
  }

  return (
    <div className={styles.studySec}>
        <div onClick={hideContent} className={styles.GceAlStudyTitle} id="GceAlStudyTitle">GCE Advanced Level</div>
        <div className={styles.GceAlStudyContent} id="GceAlStudyContent">
            This is main div
        </div>
    </div>
  );
}

export default GceAlStudy;
 