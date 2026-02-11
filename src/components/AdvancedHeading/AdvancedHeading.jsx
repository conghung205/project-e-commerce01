import MainLayout from "@components/Layout/Layout";
import React from "react";
import styles from "./style.module.scss";

const AdvancedHeading = () => {
    const { container, headline, containerMiddleBox, desc, title } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <div className={headline}></div>
                <div className={containerMiddleBox}>
                    <p className={desc}>don't miss super offers</p>
                    <h2 className={title}>Our best products</h2>
                </div>
                <div className={headline}></div>
            </div>
        </MainLayout>
    );
};

export default AdvancedHeading;
