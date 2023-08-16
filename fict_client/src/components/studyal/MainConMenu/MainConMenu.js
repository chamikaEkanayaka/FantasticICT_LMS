import React from "react";
import styles from "../MainConMenu/MainConMenuStyles.module.css";
import { useState } from "react";

function MainConMenu(){

    const [isSec1Visible, setIsSec1Visible] = useState(false);
    const [isSec2Visible, setIsSec2Visible] = useState(false);

    function toggleSec1Visibility() {
        if (isSec1Visible) {
            document.getElementById('sec1').style.display = 'none';
        } else {
            document.getElementById('sec1').style.display = 'block';
        }

        setIsSec1Visible(!isSec1Visible);
    }

    function toggleSec2Visibility() {
        if (isSec2Visible) {
            document.getElementById('sec2').style.display = 'none';
        } else {
            document.getElementById('sec2').style.display = 'block';
        }

        setIsSec2Visible(!isSec2Visible);
    }


    return(
        <div className={styles.MainConMenuCon}>
            <div className={styles.lessonTitleCon} onClick={() => toggleSec1Visibility()}>
                මූලික සංකල්ප
            </div>
            <div className={styles.lessonSubTitleCon} id='sec1'>
                <div className={styles.lessonSubTitle}>
                    - දත්ත හා තොරතුරු
                </div>
                <div className={styles.lessonSubTitle}>
                    - තොරතුරු පිළිබද ස්වර්ණමය න්‍යාය
                </div>
                <div className={styles.lessonSubTitle}>
                    - දත්ත සැකසීම
                </div>
                <div className={styles.lessonSubTitle}>
                    - දත්ත සැකසුම් න්‍රමවේද
                </div>
                <div className={styles.lessonSubTitle}>
                    - පරිගණක පද්ධතියේ මූලික සංරචක
                </div>
                <div className={styles.lessonSubTitle}>
                    - ආදාන උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - ප්‍රතිදාන උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - සැකසුම් උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - ආචයන උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - සන්නිවේදන උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - මෘදුකාංග වර්ගීකරණය
                </div>
                <div className={styles.lessonSubTitle}>
                    - ස්වයංක්‍රීය ආදාන උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - ග්‍රන්ථ රචනා චෞරත්වය
                </div>
                <div className={styles.lessonSubTitle}>
                    - වොන් නියුමාන් ආකෘතිය
                </div>
                <div className={styles.lessonSubTitle}>
                    - පරිගණකයේ බස් පද්ධතිය
                </div>
                <div className={styles.lessonSubTitle}>
                    - සෙවුම් ඉශ්ට චක්‍රය
                </div>
                <br/>
            </div>
            <div className={styles.lessonTitleCon} onClick={() => toggleSec2Visibility()}>
                පරිගණකයේ ඉතිහාසය
            </div>
            <div className={styles.lessonSubTitleCon} id='sec2'>
                <div className={styles.lessonSubTitle}>
                    - දත්ත හා තොරතුරු
                </div>
                <div className={styles.lessonSubTitle}>
                    - තොරතුරු පිළිබද ස්වර්ණමය න්‍යාය
                </div>
                <div className={styles.lessonSubTitle}>
                    - දත්ත සැකසීම
                </div>
                <div className={styles.lessonSubTitle}>
                    - දත්ත සැකසුම් න්‍රමවේද
                </div>
                <div className={styles.lessonSubTitle}>
                    - පරිගණක පද්ධතියේ මූලික සංරචක
                </div>
                <div className={styles.lessonSubTitle}>
                    - ආදාන උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - ප්‍රතිදාන උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - සැකසුම් උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - ආචයන උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - සන්නිවේදන උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - මෘදුකාංග වර්ගීකරණය
                </div>
                <div className={styles.lessonSubTitle}>
                    - ස්වයංක්‍රීය ආදාන උපාංග
                </div>
                <div className={styles.lessonSubTitle}>
                    - ග්‍රන්ථ රචනා චෞරත්වය
                </div>
                <div className={styles.lessonSubTitle}>
                    - වොන් නියුමාන් ආකෘතිය
                </div>
                <div className={styles.lessonSubTitle}>
                    - පරිගණකයේ බස් පද්ධතිය
                </div>
                <div className={styles.lessonSubTitle}>
                    - සෙවුම් ඉශ්ට චක්‍රය
                </div>
                <br/>
            </div>
        </div>
    )
}

export default MainConMenu;