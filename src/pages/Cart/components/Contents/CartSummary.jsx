import React, { useContext } from "react";
import styles from "../../styles.module.scss";
import Button from "@components/Button/Button";
import { SideBarContext } from "@/contexts/SideBarProvider";
import LoadingCart from "@pages/Cart/components/LoadingCart";

const CartSummary = () => {
    const {
        contentSummary,
        title,
        boxTotal,
        subTotal,
        priceSubTotal,
        totalCss,
        priceTotal,
        boxBtn,
        containerMethods,
        titleMethods,
        boxImgMethod,
        textSecure,
    } = styles;

    const srcMethods = [
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
    ];

    const { listProductCart, isLoading } = useContext(SideBarContext);

    const total = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const formatTotal = total.toFixed(2);

    return (
        <>
            <div className={contentSummary}>
                <div className={title}>CART TOTALS</div>

                <div className={boxTotal}>
                    <div className={subTotal}>Subtotal</div>
                    <div className={priceSubTotal}>${formatTotal}</div>
                </div>

                <div className={boxTotal}>
                    <div className={totalCss}>TOTAL</div>
                    <div className={priceTotal}>${formatTotal}</div>
                </div>

                <div className={boxBtn}>
                    <Button content={"PROCEED TO CHECKOUT"} Large={true} />
                    <Button
                        content={"CONTINUE SHOPPING"}
                        isPrimary={false}
                        Large={true}
                    />
                </div>

                {isLoading && <LoadingCart />}
            </div>

            <div className={containerMethods}>
                <div className={titleMethods}>
                    Guaranteed <span>safe</span> checkout
                </div>

                <div className={boxImgMethod}>
                    {srcMethods.map((item, index) => (
                        <img key={index} src={item} alt="" />
                    ))}
                </div>
            </div>

            <div className={textSecure}>
                Your Payment is <span>100% Secure</span>
            </div>
        </>
    );
};

export default CartSummary;
