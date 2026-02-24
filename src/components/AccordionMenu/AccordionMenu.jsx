import React, { useState } from "react";
import styles from "./styles.module.scss";
import cls from "classnames";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";

const AccordionMenu = ({ titleMenu, contentJsx, onClick, isSelected }) => {
    const {
        container,
        title,
        activeTitle,
        contentMenu,
        isVisibility,
        borderBottom,
    } = styles;

    const handleToggle = () => {
        onClick();
    };

    return (
        <div className={container}>
            <div
                className={cls(title, {
                    [activeTitle]: isSelected,
                    [borderBottom]: !isSelected,
                })}
                onClick={handleToggle}
            >
                {isSelected ? (
                    <TfiLayoutLineSolid style={{ fontSize: "20px" }} />
                ) : (
                    <IoIosArrowDown style={{ fontSize: "20px" }} />
                )}{" "}
                {titleMenu}
            </div>

            <div
                className={cls(contentMenu, {
                    [isVisibility]: isSelected,
                    [borderBottom]: isSelected,
                })}
            >
                {contentJsx}
            </div>
        </div>
    );
};

export default AccordionMenu;
