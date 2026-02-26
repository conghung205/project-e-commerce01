import React, { useContext, useEffect } from "react";
import styles from "../../styles.module.scss";
import CartTable from "@pages/Cart/components/Contents/CartTable";
import CartSummary from "@pages/Cart/components/Contents/CartSummary";
import Button from "@components/Button/Button";
import { FaRegTrashAlt } from "react-icons/fa";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { addProductToCart } from "@/apis/cartService";
import { deleteItem } from "@/apis/cartService";
import { deleteCart } from "@/apis/cartService";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getCart } from "@/apis/cartService";

const Contents = () => {
    const {
        containerContent,
        containerBoxLeft,
        containerSummary,
        boxFooter,
        boxCoupon,
        boxBtnDelete,
        contentBtnDelete,
        boxEmptyCart,
        boxEmptyCartIcon,
        boxEmptyCartTitle,
        boxEmptyCartDesc,
        boxEmptyCartbtn,
    } = styles;

    const {
        listProductCart,
        handleGetListProductCart,
        isLoading,
        setIsLoading,
        userId,
        setListProductCart,
    } = useContext(SideBarContext);

    const navigate = useNavigate();

    const handleReplaceQuantity = (data) => {
        setIsLoading(true);

        addProductToCart(data)
            .then((res) => {
                handleGetListProductCart(data.userId, "cart");
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteItemcart = (data) => {
        setIsLoading(true);
        deleteItem(data)
            .then((res) => {
                handleGetListProductCart(data.userId, "cart");
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteCart = () => {
        setIsLoading(true);

        deleteCart({ userId })
            .then((res) => {
                handleGetListProductCart(userId, "cart");
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleNavigateToShop = () => {
        navigate("/shop");
    };

    useEffect(() => {
        if (userId) {
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setListProductCart([]);
                    setIsLoading(false);
                });
        }
    }, []);

    return (
        <>
            {listProductCart.length > 0 && userId ? (
                <div className={containerContent}>
                    <div className={containerBoxLeft}>
                        <CartTable
                            listProductCart={listProductCart}
                            getData={handleReplaceQuantity}
                            isLoading={isLoading}
                            getDataDelete={handleDeleteItemcart}
                        />

                        <div className={boxFooter}>
                            <div className={boxCoupon}>
                                <input type="text" placeholder="Coupon code" />
                                <Button
                                    content={"ok"}
                                    isPrimary={false}
                                    Large={true}
                                />
                            </div>
                            <div className={boxBtnDelete}>
                                <Button
                                    isPrimary={false}
                                    Large={true}
                                    content={
                                        <div className={contentBtnDelete}>
                                            <FaRegTrashAlt />
                                            clear shopping cart
                                        </div>
                                    }
                                    onClick={handleDeleteCart}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={containerSummary}>
                        <CartSummary />
                    </div>
                </div>
            ) : (
                <div className={boxEmptyCart}>
                    <BsCart3 className={boxEmptyCartIcon} />
                    <h1 className={boxEmptyCartTitle}>
                        YOUR SHOPPING CART IS EMPTY
                    </h1>
                    <p className={boxEmptyCartDesc}>
                        We invite you to get acquainted with an assortment of
                        our shop. Surely you can find something for yourself!
                    </p>
                    <div className={boxEmptyCartbtn}>
                        <Button
                            content={"RETURN TO SHOP"}
                            onClick={handleNavigateToShop}
                            Large={true}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Contents;
