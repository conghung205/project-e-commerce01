import React, { useEffect } from "react";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Steps from "@pages/Cart/components/Steps/Steps";
import Contents from "@pages/Cart/components/Contents/Contents";
import styles from "./styles.module.scss";
import MainLayout from "@components/Layout/Layout";

const Cart = () => {
    const { container } = styles;

    return (
        <>
            <Header />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <Contents />
                </MainLayout>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
