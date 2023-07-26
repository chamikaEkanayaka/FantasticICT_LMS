import React, { useState } from "react";
import styles from "./StudySecStyles.module.css";

function GceOlStudy() {
  const [display, setDisplay] = useState(true);

  function hideContent() {
    if(display===false){
        document.getElementById('mainn').style.display='none';
        document.getElementById('studySecTitle').style.backgroundColor='#ffffff';
        document.getElementById('studySecTitle').style.color='#000000';
        setDisplay(true);
    }else{
        document.getElementById('mainn').style.display='block';
        document.getElementById('studySecTitle').style.backgroundColor='rgb(70,70,70)';
        document.getElementById('studySecTitle').style.color='#ffffff';
        setDisplay(false);
    }
  }

  return (
    <div className={styles.studySec}>
        <div onClick={hideContent} className={styles.studySecTitle} id="studySecTitle">GCE Ordinary Level</div>
        <div className={styles.studySecContent} id="mainn">
            This is main div
        </div>
    </div>
  );
}

export default GceOlStudy;
 