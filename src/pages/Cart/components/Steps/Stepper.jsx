import React, { useContext } from "react";
import styles from "../../styles.module.scss";
import cls from "classnames";
import { SteperContext } from "@/contexts/SteperProvider";

const Stepper = ({ number, content, isDisabled = false }) => {
    const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
        styles;

    const { setCurrentStep } = useContext(SteperContext);

    return (
        <div className={stepper} onClick={() => setCurrentStep(number)}>
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
