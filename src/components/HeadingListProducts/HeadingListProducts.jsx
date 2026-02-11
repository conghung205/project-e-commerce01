import React from "react";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import MainLayout from "@components/Layout/Layout";
import styles from "./style.module.scss";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import ProductItem from "@components/ProductItem/ProductItem";

const HeadingListProducts = ({ data }) => {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />

                <div className={containerItem}>
                    {data.map((product, index) => (
                        <ProductItem
                            key={index}
                            src={product.images[0]}
                            prevSrc={product.images[1]}
                            name={product.name}
                            price={product.price}
                            details={product}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default HeadingListProducts;
