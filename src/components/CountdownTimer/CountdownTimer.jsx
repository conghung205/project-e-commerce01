import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

const CountdownTimer = ({ targetDate }) => {
    const { box, text } = styles;

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Mins: Math.floor((difference / 1000 / 60) % 60),
                Secs: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // clenup function
        return () => clearTimeout(timer);
    });

    const formatNumber = (number) => {
        return String(number).padStart(2, "0");
    };

    const timeComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
        if (timeLeft[interval] !== undefined) {
            timeComponents.push(
                <span className={box} key={index}>
                    {formatNumber(timeLeft[interval])}{" "}
                    <span className={text}>{interval}</span>{" "}
                </span>,
            );
        }
    });

    return timeComponents;
};

export default CountdownTimer;
