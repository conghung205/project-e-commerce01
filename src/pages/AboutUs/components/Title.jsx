import React from "react";
import styles from "../styles.module.scss";

const Title = ({ textSmall, textLarge }) => {
    const { containerTitle, line, title, textS, textL } = styles;
    return (
        <div className={containerTitle}>
            <div className={line}>
                <div className={title}>
                    <div className={textS}>{textSmall}</div>
                    <div className={textL}>{textLarge}</div>
                </div>
            </div>
        </div>
    );
};

export default Title;
