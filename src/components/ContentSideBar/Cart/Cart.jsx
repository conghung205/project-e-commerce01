import React, { useContext } from "react";
import HeaderSideBar from "@components/ContentSideBar/Components/HeaderSideBar/HeaderSideBar";
import { BsCart2 } from "react-icons/bs";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { SideBarContext } from "@/contexts/SideBarProvider";
import LoadingTextComon from "@components/LoadingTextCommon/LoadingTextComon";
import cls from "classnames";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const {
        container,
        footer,
        total,
        boxBtn,
        headerCart,
        overlayLoading,
        isEmpty,
        boxEmpty,
        containerListItem,
    } = styles;

    const { listProductCart, isLoading, setIsOpen } =
        useContext(SideBarContext);
    const navigate = useNavigate();

    const handleNavigateToShop = () => {
        navigate("/shop");
        setIsOpen(false);
    };

    const handleNavigateToCart = () => {
        navigate("/cart");
        setIsOpen(false);
    };

    const subTotal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);
    const formattedSubTotal = subTotal.toFixed(2);

    return (
        <div
            className={cls(container, {
                [isEmpty]: !listProductCart.length,
            })}
        >
            <div className={headerCart}>
                <HeaderSideBar
                    icon={<BsCart2 style={{ fontSize: "30px" }} />}
                    title={"CART"}
                />
            </div>

            {listProductCart.length ? (
                <div className={containerListItem}>
                    <div>
                        {isLoading ? (
                            <div className={overlayLoading}>
                                <LoadingTextComon />{" "}
                            </div>
                        ) : (
                            listProductCart.map((item, index) => (
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
                            ))
                        )}
                    </div>

                    <div className={footer}>
                        <div className={total}>
                            <p>SUBTOTAL:</p>
                            <p>${formattedSubTotal}</p>
                        </div>

                        <div className={boxBtn}>
                            <Button
                                content={"VIEW CART"}
                                Large={true}
                                onClick={handleNavigateToCart}
                            />
                            <Button
                                content={"CHECKOUT"}
                                Large={true}
                                isPrimary={false}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxEmpty}>
                    <div>No products in the cart</div>
                    <div>
                        <Button
                            content={"RETURN TO SHOP"}
                            isPrimary={false}
                            medium={true}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
