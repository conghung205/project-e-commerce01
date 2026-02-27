import React from "react";
import styles from "./style.module.scss";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import Button from "@components/Button/Button";

const CountdownBanner = () => {
    const targetDate = "2027-02-31T00:00:00";
    const { container, containerTimer, title } = styles;

    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <Button content={"Buy now"} />
        </div>
    );
};

export default CountdownBanner;
