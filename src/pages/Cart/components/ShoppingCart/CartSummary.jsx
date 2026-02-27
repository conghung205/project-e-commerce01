import React, { useContext } from "react";
import styles from "../../styles.module.scss";
import Button from "@components/Button/Button";
import { SideBarContext } from "@/contexts/SideBarProvider";
import LoadingCart from "@pages/Cart/components/LoadingCart";
import PaymentMethods from "@components/PaymentMethods/PaymentMethods";

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

            <PaymentMethods />
        </>
    );
};

export default CartSummary;
