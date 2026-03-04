import React from "react";
import styles from "./styles.module.scss";
import cls from "classnames";

const InputCustom = ({
    label,
    type,
    dataOptions,
    placeholder,
    isRequired = false,
    register,
    isShowlabel = true,
    isError = false,
}) => {
    const { container, labelCss, err, textErr } = styles;

    const renderInput = () => {
        if (type === "text") {
            return (
                <input
                    className={isError ? err : ""}
                    type="text"
                    placeholder={placeholder}
                    {...register}
                />
            );
        } else {
            return (
                <select {...register} className={isError ? err : ""}>
                    <option value="" defaultValue={""} disabled hidden>
                        {label}
                    </option>
                    {dataOptions.map((item, index) => (
                        <option key={index} value={item.value}>
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
                <label className={cls(labelCss, { [textErr]: isError })}>
                    {label} {isRequired && <span> *</span>}
                </label>
            )}
            {renderInput()}
        </div>
    );
};

export default InputCustom;
