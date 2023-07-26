import React from "react";
import styles from "../common/FooterBarStyles.module.css";
import fIctIcon from "../../Images/fantasticictchamikaekanayakawhite.png";

function FooterBar(){
    return(
        <div className={styles.footerBarCon}>
            <div className={styles.fBarTop}>
                Top
            </div>
            <div className={styles.fBarBottom}>
                <img src={fIctIcon} alt="fantasticictlogo"/>
            </div>
        </div>
    )
}

export default FooterBar;