import React from "react";
import styles from "./style.module.scss";
import Button from "@components/Button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const { container, content, title, desc } = styles;
    const navigate = useNavigate();

    const handleNavigateToShop = () => {
        navigate("/shop");
    };

    return (
        <section className={container}>
            <div className={content}>
                <h1 className={title}>NC/H Store</h1>
                <p className={desc}>
                    Elevate your everyday style with products designed for
                    comfort and elegance.
                </p>
                <Button onClick={handleNavigateToShop} content={"Go to shop"} />
            </div>
        </section>
    );
};

export default Banner;
