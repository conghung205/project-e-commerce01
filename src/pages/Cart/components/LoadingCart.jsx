import LoadingTextComon from "@components/LoadingTextCommon/LoadingTextComon";
import React from "react";
import styles from "../styles.module.scss";

const LoadingCart = () => {
    const { loading } = styles;

    return (
        <div className={loading}>
            <LoadingTextComon />
        </div>
    );
};

export default LoadingCart;
