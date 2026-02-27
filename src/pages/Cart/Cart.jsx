import React, { useEffect, useState } from "react";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Steps from "@pages/Cart/components/Steps/Steps";

import styles from "./styles.module.scss";
import MainLayout from "@components/Layout/Layout";
import SteperProvider from "@/contexts/SteperProvider";
import ContentStep from "@pages/Cart/components/ContentStep";

const Cart = () => {
    const { container } = styles;

    return (
        <SteperProvider>
            <Header />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <ContentStep />
                </MainLayout>
            </div>
            <Footer />
        </SteperProvider>
    );
};

export default Cart;
