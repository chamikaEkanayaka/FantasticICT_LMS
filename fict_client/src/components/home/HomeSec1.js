import React from "react";
import styles from "../home/HomeSec1Styles.module.css";
import { AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { FaGripfire } from 'react-icons/fa';

function HomeSec1() {
    return (
        <div className={styles.HomeSec1Con}>
            <div className={styles.HS1heading}>
                - The One & Only A/L ICT class Conducted by an Island Ranker -
            </div>
            <div className={styles.HS1body}>
                <br/><FaGripfire/><br/>The fantastic tuition experience of GCE Advanced Level ICT, <span className={styles.whiteWord}>Fantastic ICT</span>.<br/>
                Conducted by <span className={styles.whiteWord}>Chamika Ekanayaka</span> who is the undergraduate of University of Moratuwa<br/>awarded by <span className={styles.whiteWord}>island rank 8 and district rank 1</span> in Advanced Level 2019.
            </div>
            <div className={styles.joinLogoCon}>
                <div className={styles.joinLogo}><AiOutlineYoutube/></div>
                <div className={styles.joinLogo}><AiOutlineFacebook/></div>
                <div className={styles.joinLogo}><AiOutlineLinkedin/></div>
                <div className={styles.joinLogo}><AiOutlineInstagram/></div>
            </div>
        </div>
    );
}

export default HomeSec1;