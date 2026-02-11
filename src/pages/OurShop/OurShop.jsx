import React, { useContext } from "react";
import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import Banner from "@pages/OurShop/components/Banner";
import { OurShopProvider } from "@contexts/OurShopProvider";
import Filter from "@pages/OurShop/components/Filter";
import ListProducts from "@pages/OurShop/components/ListProducts";
import Footer from "@components/Footer/Footer";

const OurShop = () => {
    const { container, functionBox, specialText, btnBack } = styles;
    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    };

    return (
        <>
            <OurShopProvider>
                <Header />
                <MainLayout>
                    <div className={container}>
                        <div className={functionBox}>
                            <div>
                                Home &gt;{" "}
                                <span className={specialText}>Shop</span>
                            </div>
                            <div
                                onClick={() => handleBackPreviousPage()}
                                className={btnBack}
                            >
                                {" "}
                                &lt; Return to previous page
                            </div>
                        </div>
                    </div>

                    <Banner />

                    <div>
                        <Filter />
                        <ListProducts />
                    </div>
                </MainLayout>
                <Footer />
            </OurShopProvider>
        </>
    );
};

export default OurShop;
