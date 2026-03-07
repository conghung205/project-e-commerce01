import React from "react";
import styles from "../styles.module.scss";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import Button from "@components/Button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const { containerBanner, contentBox, title, countDownBox } = styles;
    const targetDate = "2027-02-31T00:00:00";

    const navigate = useNavigate();

    const handleNavigateToCart = () => {
        navigate("/cart");
    };

    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countDownBox}>
                        <CountdownTimer targetDate={targetDate} />
                    </div>
                    <div className={title}>Timeless Style, Modern Comeback</div>
                    <Button
                        onClick={handleNavigateToCart}
                        content={"Buy now"}
                    />
                </div>
            </div>
        </>
    );
};

export default Banner;
