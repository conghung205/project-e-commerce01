import React from "react";
import styles from "../style.module.scss";

const InfoCard = ({ image, title, desc }) => {
    const { containerCard, titleCard, descCard, iconCard, cardContent } =
        styles;

    return (
        <div className={containerCard}>
            <img className={iconCard} src={image} alt="" />
            <div className={cardContent}>
                <h2 className={titleCard}>{title}</h2>
                <p className={descCard}>{desc}</p>
            </div>
        </div>
    );
};

export default InfoCard;
