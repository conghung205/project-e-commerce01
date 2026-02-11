import React from "react";
import styles from "./style.module.scss";
import Button from "@components/Button/Button";

const Banner = () => {
    const { container, content, title, desc } = styles;

    return (
        <section className={container}>
            <div className={content}>
                <h1 className={title}>XStore Marseille04 Demo</h1>
                <p className={desc}>
                    Make yours celebrations even more special this years with
                    beautiful.
                </p>
                <Button content={"Go to shop"} />
            </div>
        </section>
    );
};

export default Banner;
