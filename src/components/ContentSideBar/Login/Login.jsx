import InputConmon from "@components/InputCommon/InputCommon";
import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContext } from "@/contexts/ToastProvider";
import { register, signIn, getInfo } from "@/apis/authService";
import Cookies from "js-cookie";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/StoreProvider";

const Login = () => {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const { setIsOpen, handleGetListProductCart } = useContext(SideBarContext);
    const { setUserId } = useContext(StoreContext);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            cfmpassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),

            password: Yup.string()
                .min(6, "Password must be at 6 characters")
                .required("Password is required"),

            cfmpassword: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "password must match",
            ),
        }),
        onSubmit: async (values) => {
            if (isLoading) return;
            const { email: username, password } = values;

            setIsLoading(true);

            if (isRegister) {
                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }

            if (!isRegister) {
                await signIn({ username, password })
                    .then((res) => {
                        setIsLoading(false);
                        const { id, token, refreshToken } = res.data;
                        setUserId(id);

                        Cookies.set("token", token);
                        Cookies.set("refreshToken", refreshToken);
                        Cookies.set("userId", id);
                        toast.success("Sign in successfully");
                        handleGetListProductCart(id, "cart");
                        setIsOpen(false);
                    })
                    .catch((err) => {
                        setIsLoading(false);
                        toast.error("Sign in failed!");
                    });
            }
        },
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    return (
        <div className={container}>
            <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>

            <form onSubmit={formik.handleSubmit}>
                <InputConmon
                    id="email"
                    label={"Username or Email"}
                    type={"text"}
                    isRequired={true}
                    formik={formik}
                />

                <InputConmon
                    id="password"
                    label={"Password"}
                    type={"password"}
                    isRequired={true}
                    formik={formik}
                />
                {isRegister && (
                    <InputConmon
                        id="cfmpassword"
                        label={"Confirm password"}
                        type={"password"}
                        isRequired={true}
                        formik={formik}
                    />
                )}

                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                )}

                <Button
                    type="submit"
                    content={
                        isLoading
                            ? "LOADING..."
                            : isRegister
                              ? "REGISTER"
                              : "LOGIN"
                    }
                    Large={true}
                />
            </form>

            <Button
                content={
                    isRegister
                        ? "Already have an account?"
                        : "Don't have an account?"
                }
                isPrimary={false}
                Large={true}
                onClick={handleToggle}
            />

            {!isRegister && <div className={lostPw}>Lost your password?</div>}
        </div>
    );
};

export default Login;
