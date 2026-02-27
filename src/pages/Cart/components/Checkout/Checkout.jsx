import React from "react";
import InputCustom from "@components/InputCommon2/Input";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import cls from "classnames";

const Checkout = () => {
    const {
        container,
        textCoupon,
        containerContent,
        leftBody,
        checkoutTitle,
        rightBody,
        row,
        row2col,
    } = styles;

    const dataOptions = [
        {
            value: "1",
            label: "option 1",
        },
        {
            value: "2",
            label: "option 2",
        },
        {
            value: "3",
            label: "option 3",
        },
    ];

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    return (
        <div className={container}>
            <p className={textCoupon}>
                Have a coupon? <span>Click here to enter</span>
            </p>

            <div className={containerContent}>
                <div className={leftBody}>
                    <p className={checkoutTitle}>billing details</p>

                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                        <div className={cls(row, row2col)}>
                            <InputCustom
                                label={"First Name"}
                                type={"text"}
                                placeholder={"First Name"}
                                isRequired
                                register={register("firstName", {
                                    required: true,
                                    maxLength: 25,
                                })}
                            />
                            <InputCustom
                                label={"Last Name"}
                                type={"text"}
                                placeholder={"Last Name"}
                                isRequired
                                register={register("lastName", {
                                    required: true,
                                    maxLength: 25,
                                })}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Company Name (optional)"}
                                type={"text"}
                                placeholder={"Company Name"}
                                register={register("companyName")}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Country / Region"}
                                type={"select"}
                                dataOptions={dataOptions}
                                isRequired
                                register={register("country", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Street address "}
                                type={"text"}
                                placeholder={"House number and street name"}
                                isRequired
                                register={register("streetAddress", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Apartment"}
                                type={"text"}
                                placeholder={
                                    "Apartment, suite, unit, etc. (optional)"
                                }
                                register={register("apartment")}
                                isShowlabel={false}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Town / City"}
                                type={"text"}
                                placeholder={"House number and street name"}
                                isRequired
                                register={register("city", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Department"}
                                type={"select"}
                                dataOptions={dataOptions}
                                isRequired
                                register={register("department", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Phone"}
                                type={"text"}
                                placeholder={"Phone"}
                                isRequired
                                register={register("phone", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Postcode / ZIP"}
                                type={"text"}
                                isRequired
                                register={register("zipCode", {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Email Address "}
                                type={"text"}
                                placeholder={"Email Address "}
                                isRequired
                                register={register("email", {
                                    required: true,
                                })}
                            />
                        </div>

                        <button type="submit">submit</button>
                    </form>
                </div>

                {/* Right Block */}
                <div className={rightBody}></div>
            </div>
        </div>
    );
};

export default Checkout;
