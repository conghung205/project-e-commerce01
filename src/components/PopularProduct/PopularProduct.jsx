import MainLayout from "@components/Layout/Layout";
import React from "react";
import styles from "./styles.module.scss";
import ProductItem from "@components/ProductItem/ProductItem";

const PopularProduct = ({ data }) => {
    const { container } = styles;

    return (
        <>
            <MainLayout>
                <div className={container}>
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
            </MainLayout>
        </>
    );
};

export default PopularProduct;
