import React, { useContext } from "react";
import styles from "../styles.module.scss";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import Button from "@components/Button/Button";

const Banner = () => {
    const { containerBanner, contentBox, title, countDownBox } = styles;
    const targetDate = "2026-02-31T00:00:00";

    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countDownBox}>
                        <CountdownTimer targetDate={targetDate} />
                    </div>
                    <div className={title}>The Classic Make A Comeback</div>
                    <Button content={"Buy now"} />
                </div>
            </div>
        </>
    );
};

export default Banner;
