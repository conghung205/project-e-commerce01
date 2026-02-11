import React from "react";
import styles from "../styles.module.scss";
import fbIcon from "@icons/svgs/fbIcon.svg";
import instagramIcon from "@icons/svgs/instagramIcon.svg";
import youtubeIcon from "@icons/svgs/youtubeIcon.svg";

const BoxIcon = ({ type, href }) => {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case "fb":
                return fbIcon;
            case "ins":
                return instagramIcon;
            case "ytb":
                return youtubeIcon;
            default:
                break;
        }
    };

    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt="" />
        </div>
    );
};

export default BoxIcon;
