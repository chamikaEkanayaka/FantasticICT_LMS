import React, { useState } from "react";
import styles from "./StudySecStyles.module.css";

function GceAlStudy() {
  const [display, setDisplay] = useState(true);

  function hideContent() {
    if(display===false){
        document.getElementById('main').style.display='none';
        document.getElementById('studySecTitle').style.backgroundColor='#ffffff';
        document.getElementById('studySecTitle').style.color='#000000';
        setDisplay(true);
    }else{
        document.getElementById('main').style.display='block';
        document.getElementById('studySecTitle').style.backgroundColor='rgb(70,70,70)';
        document.getElementById('studySecTitle').style.color='#ffffff';
        setDisplay(false);
    }
  }

  return (
    <div className={styles.studySec}>
        <div onClick={hideContent} className={styles.studySecTitle} id="studySecTitle">GCE Advanced Level</div>
        <div className={styles.studySecContent} id="main">
            This is main div
        </div>
    </div>
  );
}

export default GceAlStudy;
 