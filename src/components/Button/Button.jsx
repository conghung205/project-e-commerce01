import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

const Button = ({
    content,
    isPrimary = true,
    medium = false,
    Large = false,
    ...props
}) => {
    const { btn, primaryBtn, secondaryBtn, btnLarge, btnMedium } = styles;
    return (
        <button
            className={classNames(btn, {
                [btnLarge]: Large,
                [btnMedium]: medium,
                [primaryBtn]: isPrimary, //sẽ ăn class này khi isPrimary là true
                [secondaryBtn]: !isPrimary, //sẽ ăn class này khi isPrimary là false
            })}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;
