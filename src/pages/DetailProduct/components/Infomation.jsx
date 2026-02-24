import React from "react";
import styles from "../styles.module.scss";

const Infomation = () => {
    const { itemInfo, containerInfo, TitleInfo, contentInfo } = styles;

    const dataInfo = [
        { id: 1, Title: "Size", content: "S, M, L" },
        { id: 2, Title: "Material", content: "Fleece" },
        { id: 3, Title: "Color", content: "Black, Blue" },
    ];

    return (
        <div className={containerInfo}>
            {dataInfo.map((item, index) => (
                <div className={itemInfo} key={index}>
                    <div className={TitleInfo}>{item.Title}</div>
                    <div className={contentInfo}>{item.content}</div>
                </div>
            ))}
        </div>
    );
};

export default Infomation;
