import React from "react";
import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { BsCart3 } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { TfiReload } from "react-icons/tfi";
import PaymentMethods from "@components/PaymentMethods/PaymentMethods";

const DetailProduct = () => {
    const {
        container,
        navigateSection,
        contentSection,
        imageBox,
        contentBox,
        title,
        priceProduct,
        desc,
        containerSize,
        boxSize,
        size,
        addToCartSection,
        boxAddTocart,
        btnAddTocart,
        incremenAmount,
        quantity,
        orSection,
        textOr,
        line,
        buyNowSection,
        btnBuyNow,
        addFunc,
        info,
    } = styles;

    const srcMethods = [
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
    ];

    return (
        <div>
            <Header />
            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {">"} men</div>
                        <div style={{ cursor: "pointer" }}>
                            {"<"} Return to previous page
                        </div>
                    </div>

                    <div className={contentSection}>
                        <div className={imageBox}>
                            <img
                                src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.1-min.jpg"
                                alt=""
                            />
                            <img
                                src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg"
                                alt=""
                            />
                            <img
                                src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.3-min.jpg"
                                alt=""
                            />
                            <img
                                src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.4-min.jpg"
                                alt=""
                            />
                        </div>
                        <div className={contentBox}>
                            <h1 className={title}>Title product</h1>
                            <p className={priceProduct}>$435.00</p>
                            <p className={desc}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>

                            <div className={containerSize}>
                                Size:
                                <div className={boxSize}>
                                    <div className={size}>L</div>
                                    <div className={size}>M</div>
                                    <div className={size}>S</div>
                                </div>
                            </div>

                            <div className={addToCartSection}>
                                <div className={incremenAmount}>
                                    <div>-</div>
                                    <div className={quantity}>1</div>
                                    <div>+</div>
                                </div>

                                <div className={boxAddTocart}>
                                    <Button
                                        content={
                                            <div className={btnAddTocart}>
                                                <BsCart3 /> ADD TO CART
                                            </div>
                                        }
                                        Large={true}
                                    />
                                </div>
                            </div>

                            <div className={orSection}>
                                <div className={line}></div>
                                <div className={textOr}>OR</div>
                                <div className={line}></div>
                            </div>

                            <div className={buyNowSection}>
                                <Button
                                    content={
                                        <div className={btnBuyNow}>
                                            <BsCart3 /> BUY NOW
                                        </div>
                                    }
                                    Large={true}
                                />
                            </div>

                            <div className={addFunc}>
                                <div>
                                    <LuHeart style={{ fontSize: "20px" }} />
                                </div>
                                <div>
                                    <TfiReload style={{ fontSize: "20px" }} />
                                </div>
                            </div>

                            <div>
                                <PaymentMethods />
                            </div>

                            <div className={info}>
                                <div>
                                    Brand: <span>Brand 03</span>
                                </div>
                                <div>
                                    SKU: <span>87654</span>
                                </div>
                                <div>
                                    Category: <span>Men</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </MainLayout>
            </div>
        </div>
    );
};

export default DetailProduct;
