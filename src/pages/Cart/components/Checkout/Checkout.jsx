import React, { useContext, useEffect, useRef, useState } from "react";
import InputCustom from "@components/InputCommon2/Input";
import { set, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import cls from "classnames";
import axios from "axios";
import RightBody from "@pages/Cart/components/Checkout/RightBody";
import { createOrder } from "@/apis/orderService";
import { useNavigate } from "react-router-dom";
import { SteperContext } from "@/contexts/SteperProvider";

const CN_BASE = "https://countriesnow.space/api/v0.1";

const Checkout = () => {
    const {
        container,
        textCoupon,
        containerContent,
        leftBody,
        checkoutTitle,
        row,
        row2col,
    } = styles;

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const navigate = useNavigate();
    const { setCurrentStep } = useContext(SteperContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const formRef = useRef();

    const handleExternalSubmit = () => {
        formRef.current.requestSubmit();
    };

    const handleOnSubmit = async (data) => {
        try {
            const res = await createOrder(data);
            setCurrentStep(3);
            navigate(
                `?id=${res.data.data._id}&totalAmount=${res.data.data.totalAmount}`,
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        axios.get(`${CN_BASE}/countries/iso`).then((res) => {
            setCountries(
                res.data.data.map((c) => {
                    return {
                        value: c.name,
                        label: c.name,
                    };
                }),
            );
        });
    }, []);

    //Khi chọn quốc gia thì lấy thành phố
    useEffect(() => {
        if (!watch("country")) return;

        if (
            watch("country") === "Vietnam" &&
            !localStorage.getItem("listCities")
        ) {
            axios
                .get("https://provinces.open-api.vn/api/?depth=2")
                .then((res) => {
                    localStorage.setItem(
                        "listCities",
                        JSON.stringify(res.data),
                    );

                    setCities(
                        res.data.map((item) => ({
                            label: item.name,
                            value: item.codename,
                        })),
                    );
                });

            return;
        }

        if (localStorage.getItem("listCities")) {
            const data = JSON.parse(localStorage.getItem("listCities"));
            setCities(
                data.map((item) => ({
                    label: item.name,
                    value: item.codename,
                })),
            );
        }
    }, [watch("country")]);

    //Khi chọn thành phố
    useEffect(() => {
        if (!watch("cities")) return;

        if (localStorage.getItem("listCities")) {
            const data = JSON.parse(localStorage.getItem("listCities"));

            const statesCustom = data
                .find((item) => item.codename === watch("cities"))
                .districts.map((item) => ({
                    label: item.name,
                    value: item.codename,
                }));

            setStates(statesCustom);
        }
    }, [watch("cities")]);
    return (
        <div className={container}>
            <p className={textCoupon}>
                Have a coupon? <span>Click here to enter</span>
            </p>

            <div className={containerContent}>
                <div className={leftBody}>
                    <p className={checkoutTitle}>billing details</p>

                    <form ref={formRef} onSubmit={handleSubmit(handleOnSubmit)}>
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
                                isError={errors.firstName}
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
                                isError={errors.lastName}
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
                                dataOptions={countries}
                                isRequired
                                register={register("country", {
                                    required: true,
                                })}
                                isError={errors.country}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Town / City"}
                                type={"select"}
                                dataOptions={cities}
                                isRequired
                                register={register("cities", {
                                    required: true,
                                })}
                                isError={errors.cities}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"State"}
                                type={"select"}
                                dataOptions={states}
                                isRequired
                                register={register("state", {
                                    required: true,
                                })}
                                isError={errors.state}
                            />
                        </div>

                        <div className={row}>
                            <InputCustom
                                label={"Street address "}
                                type={"text"}
                                placeholder={"House number and street name"}
                                isRequired
                                register={register("street", {
                                    required: true,
                                })}
                                isError={errors.streetAddress}
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
                                label={"Phone"}
                                type={"text"}
                                placeholder={"Phone"}
                                isRequired
                                register={register("phone", {
                                    required: true,
                                })}
                                isError={errors.phone}
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
                                isError={errors.zipCode}
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
                                isError={errors.email}
                            />
                        </div>
                    </form>
                </div>

                {/* Right Block */}

                <RightBody handleExternalSubmit={handleExternalSubmit} />
            </div>
        </div>
    );
};

export default Checkout;
