import React, { useEffect, useState } from "react";
import InputCustom from "@components/InputCommon2/Input";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import cls from "classnames";
import axios from "axios";

const CN_BASE = "https://countriesnow.space/api/v0.1";

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

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

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
        console.log(watch("cities"));
    }, [watch("cities")]);

    console.log(states);
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
                                dataOptions={countries}
                                isRequired
                                register={register("country", {
                                    required: true,
                                })}
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
