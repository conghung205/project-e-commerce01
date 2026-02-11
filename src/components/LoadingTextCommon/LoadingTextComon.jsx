import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./styles.module.scss";

const LoadingTextComon = () => {
    const { rotate } = styles;
    return <AiOutlineLoading3Quarters className={rotate} />;
};

export default LoadingTextComon;
