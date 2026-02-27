import React from "react";
import styles from "./styles.module.scss";

const InputCustom = ({
    label,
    type,
    dataOptions,
    placeholder,
    isRequired = false,
    register,
    isShowlabel = true,
}) => {
    const { container, labelCss } = styles;

    const renderInput = () => {
        if (type === "text") {
            return (
                <input type="text" placeholder={placeholder} {...register} />
            );
        } else {
            return (
                <select>
                    <option value="" selected disabled hidden>
                        {label}
                    </option>
                    {dataOptions.map((item, index) => (
                        <option key={index} {...register}>
                            {item.label}
                        </option>
                    ))}
                </select>
            );
        }
    };

    return (
        <div className={container}>
            {isShowlabel && (
                <label className={labelCss}>
                    {label} {isRequired && <span> *</span>}
                </label>
            )}
            {renderInput()}
        </div>
    );
};

export default InputCustom;
