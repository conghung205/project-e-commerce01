import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import useTranslateXImage from "@/hooks/useTranslateXImage";

const SaleHomePage = () => {
    const { container, title, desc, content, boxImg } = styles;

    const { translateXPosition } = useTranslateXImage();

    return (
        <section className={container}>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: "transform 0.5s",
                }}
            >
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
                    alt=""
                />
            </div>

            <div className={content}>
                <h2 className={title}>Sale of the year</h2>
                <p className={desc}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <Button content={"Read more"} isPrimary={false} />
            </div>

            <div
                className={boxImg}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: "transform 0.5s",
                }}
            >
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
                    alt=""
                />
            </div>
        </section>
    );
};

export default SaleHomePage;
