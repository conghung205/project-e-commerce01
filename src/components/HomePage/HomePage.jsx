import React, { useEffect, useState } from "react";
import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import Footer from "@components/Footer/Footer";
import styles from "./style.module.scss";
import AdvancedHeading from "@components/AdvancedHeading/AdvancedHeading";
import Info from "@components/Info/Info";
import HeadingListProducts from "@components/HeadingListProducts/HeadingListProducts";

import { getProducts } from "@/apis/productsService";
import PopularProduct from "@components/PopularProduct/PopularProduct";
import SaleHomePage from "@components/SaleHomePage/SaleHomePage";

const HomePage = () => {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        const query = {
            sortType: 0,
            page: 1,
            limit: 10,
        };

        getProducts(query).then((res) => setListProducts(res.contents));
    }, []);

    return (
        <main>
            <Header />
            <Banner />
            <Info />
            <AdvancedHeading />
            <HeadingListProducts data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, 14)} />
            <SaleHomePage />
            <Footer />
        </main>
    );
};

export default HomePage;
