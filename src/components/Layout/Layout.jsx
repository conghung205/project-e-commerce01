import React from "react";
import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
    const { wrapLayout, container } = styles;

    return (
        <section className={wrapLayout}>
            <div className={container}>{children}</div>
        </section>
    );
};

export default MainLayout;
