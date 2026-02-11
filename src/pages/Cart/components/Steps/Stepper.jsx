import React from "react";
import styles from "../../styles.module.scss";
import cls from "classnames";

const Stepper = ({ number, content, isDisabled = false }) => {
    const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
        styles;

    return (
        <div className={stepper}>
            <div
                className={cls(numberStep, {
                    [isDisableNumber]: isDisabled,
                })}
            >
                {number}
            </div>

            <div
                className={cls(textStep, {
                    [isDisableText]: isDisabled,
                })}
            >
                {content}
            </div>
        </div>
    );
};

export default Stepper;
