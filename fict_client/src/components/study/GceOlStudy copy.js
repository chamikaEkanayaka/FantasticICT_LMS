import React, { useState } from "react";
import styles from "./StudySecStyles.module.css";

function GceOlStudy() {
  const [display, setDisplay] = useState(true);

  function hideContent() {
    if(display===false){
        document.getElementById('GceOlStudyContent').style.display='none';
        document.getElementById('GceOlStudyTitle').style.backgroundColor='#ffffff';
        document.getElementById('GceOlStudyTitle').style.color='#000000';
        setDisplay(true);
    }else{
        document.getElementById('GceOlStudyContent').style.display='block';
        document.getElementById('GceOlStudyTitle').style.backgroundColor='rgb(70,70,70)';
        document.getElementById('GceOlStudyTitle').style.color='#ffffff';
        setDisplay(false);
    }
  }

  return (
    <div className={styles.studySec}>
        <div onClick={hideContent} className={styles.GceOlStudyTitle} id="GceOlStudyTitle">GCE Ordinary Level</div>
        <div className={styles.GceOlStudyContent} id="GceOlStudyContent">
            This is main div
        </div>
    </div>
  );
}

export default GceOlStudy;
 