import React, { useContext } from "react";
import PaymentMethods from "@components/PaymentMethods/PaymentMethods";
import styles from "./styles.module.scss";
import { SideBarContext } from "@/contexts/SideBarProvider";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
import LoadingTextComon from "@components/LoadingTextCommon/LoadingTextComon";
import Button from "@components/Button/Button";

const RightBody = ({ handleExternalSubmit }) => {
    const {
        rightBody,
        container,
        checkoutTitle,
        boxSubTotal,
        boxTotal,
        subTotal,
        priceSubTotal,
        totalCss,
        priceTotal,
        boxProduct,
        btnOrder,
        rightContent,
        payment,
    } = styles;
    const { listProductCart } = useContext(SideBarContext);
    const total = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const formatTotal = total.toFixed(2);
    return (
        <div className={rightBody}>
            <div className={container}>
                <p className={checkoutTitle}>Your order</p>

                <div className={rightContent}>
                    <div className={boxProduct}>
                        {listProductCart.map((item, index) => (
                            <ItemProduct
                                key={index}
                                nameProduct={item.name}
                                src={item.images[0]}
                                price={item.price}
                                sku={item.sku}
                                size={item.size}
                                quantity={item.quantity}
                                productId={item.productId}
                                userId={item.userId}
                            />
                        ))}
                    </div>

                    <div className={boxSubTotal}>
                        <div className={subTotal}>Subtotal</div>
                        <div className={priceSubTotal}>${formatTotal}</div>
                    </div>

                    <div className={boxTotal}>
                        <div className={totalCss}>TOTAL</div>
                        <div className={priceTotal}>${formatTotal}</div>
                    </div>

                    <div className={payment}>
                        <input type="radio" name="payment" id="qrcode" />
                        <label htmlFor="qrcode">QR CODE</label>
                    </div>
                    <div className={payment}>
                        <input type="radio" name="payment" id="cod" />
                        <label htmlFor="cod">Cash on delivery</label>
                    </div>

                    <div className={btnOrder}>
                        <Button
                            onClick={handleExternalSubmit}
                            content={"PLACE ORDER"}
                            Large
                        />
                    </div>
                </div>
                <PaymentMethods />
            </div>
        </div>
    );
};

export default RightBody;
