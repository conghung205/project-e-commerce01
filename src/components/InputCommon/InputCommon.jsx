import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import classNames from "classnames";

const InputCommon = ({ label, type, isRequired = false, ...props }) => {
    const { labelInput, boxInput, container, boxIcon, error, errMsg } = styles;
    const { formik, id } = props;
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const isShowTextPassword =
        type === "password" && showPassword ? "text" : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];

    return (
        <div
            className={classNames(container, {
                [error]: isErr,
            })}
        >
            <div className={labelInput}>
                {label}
                {isRequired && <span> *</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowTextPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />

                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? (
                            <FaRegEyeSlash />
                        ) : (
                            <MdOutlineRemoveRedEye />
                        )}
                    </div>
                )}

                {isErr && <div className={errMsg}>{messageErr}</div>}
            </div>
        </div>
    );
};

export default InputCommon;
