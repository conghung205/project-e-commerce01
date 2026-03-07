import React, { useRef } from "react";
import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import { IoHomeOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { dataBoxIcon } from "@pages/Contact/constants";
import BoxIcon from "@components/Header/BoxIcon/BoxIcon";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputConmon from "@components/InputCommon/InputCommon";
import Button from "@components/Button/Button";
import Footer from "@components/Footer/Footer";

const Contact = () => {
    const {
        container,
        map,
        containerContent,
        content,
        info,
        contact,
        title,
        boxInfoContent,
        desc,
        subTitle,
        boxIcon,
        boxRegister,
        boxBtn,
        textFooter,
        errMsg,
    } = styles;

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            message: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),

            name: Yup.string().required("Name is required"),

            message: Yup.string().required("Message is required"),
        }),
        onSubmit: (values, formikHelpers) => {
            console.log(values);
            formikHelpers.resetForm();
        },
    });

    return (
        <>
            <Header />
            <MainLayout>
                <div className={container}>
                    <div className={map}>
                        <img
                            src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Map-new.jpeg"
                            alt=""
                        />
                    </div>

                    <div className={containerContent}>
                        <div className={content}>
                            <div className={info}>
                                <h4 className={title}>Information</h4>
                                <div className={boxInfoContent}>
                                    <p className={subTitle}>
                                        <IoHomeOutline />
                                        Address
                                    </p>
                                    <p className={desc}>
                                        7895 Piermont Dr NE Albuquerque, NM
                                        198866
                                    </p>
                                </div>
                                <div className={boxInfoContent}>
                                    <p className={subTitle}>
                                        <LuPhoneCall />
                                        Phones
                                    </p>
                                    <p className={desc}>+391 (0)35 2568 4593</p>
                                </div>
                                <div className={boxInfoContent}>
                                    <p className={subTitle}>
                                        <CiClock2 />
                                        We're Open
                                    </p>
                                    <p className={desc}>
                                        Every day 11am to 7pm
                                    </p>
                                </div>

                                <div className={boxIcon}>
                                    {dataBoxIcon.map((item, index) => (
                                        <BoxIcon
                                            key={index}
                                            type={item.type}
                                            href={item.href}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className={contact}>
                                <h4 className={title}>Contact Us</h4>
                                <p className={desc}>
                                    If you’ve got great products your looking to
                                    work with us then drop us a line.
                                </p>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className={boxRegister}>
                                        <InputConmon
                                            id="email"
                                            label={"Email"}
                                            type={"text"}
                                            isRequired={true}
                                            formik={formik}
                                        />

                                        <InputConmon
                                            id="name"
                                            label={"Name"}
                                            type={"text"}
                                            isRequired={true}
                                            formik={formik}
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            value={formik.values.message}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            onFocus={() =>
                                                formik.setFieldTouched(
                                                    "message",
                                                    false,
                                                )
                                            }
                                        ></textarea>
                                        {formik.touched.message &&
                                            formik.errors.message && (
                                                <div className={errMsg}>
                                                    {formik.errors.message}
                                                </div>
                                            )}
                                    </div>
                                    <div className={boxBtn}>
                                        <Button
                                            content={"Send Now"}
                                            type={"submit"}
                                            Large
                                        />
                                    </div>

                                    {formik.submitCount > 0 &&
                                        Object.keys(formik.errors).length >
                                            0 && (
                                            <p className={textFooter}>
                                                One or more fields have an
                                                error. Please check and try
                                                again.
                                            </p>
                                        )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>

            <Footer />
        </>
    );
};

export default Contact;
