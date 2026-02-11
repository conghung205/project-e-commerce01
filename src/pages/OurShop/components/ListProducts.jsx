import MainLayout from "@components/Layout/Layout";
import React, { useContext } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from "../styles.module.scss";
import Button from "@components/Button/Button";
import LoadingTextComon from "@components/LoadingTextCommon/LoadingTextComon";

const ListProducts = () => {
    const { containerProduct, sectionListProduct } = styles;

    const {
        products,
        isShowGrid,
        isLoading,
        handleLoadMore,
        total,
        isLoadMore,
    } = useContext(OurShopContext);

    return (
        <div className={sectionListProduct}>
            <MainLayout>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className={isShowGrid ? containerProduct : ""}>
                            {products.map((product, index) => (
                                <ProductItem
                                    key={index}
                                    src={product.images[0]}
                                    prevSrc={product.images[1]}
                                    name={product.name}
                                    price={product.price}
                                    details={product}
                                    isHomePage={false}
                                />
                            ))}
                        </div>

                        {/* ===Btn Load More */}
                        {products.length < total && (
                            <div
                                style={{
                                    width: "180px",
                                    margin: "50px auto",
                                }}
                            >
                                <Button
                                    content={
                                        isLoadMore ? (
                                            <LoadingTextComon />
                                        ) : (
                                            "LOAD MORE PRODUCT"
                                        )
                                    }
                                    Large={true}
                                    isPrimary={false}
                                    onClick={handleLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
};

export default ListProducts;
