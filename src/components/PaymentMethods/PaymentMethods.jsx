import React from "react";
import styles from "./styles.module.scss";

const PaymentMethods = () => {
    const { containerMethods, titleMethods, boxImgMethod, textSecure } = styles;

    const srcMethods = [
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
    ];

    return (
        <>
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

export default PaymentMethods;
