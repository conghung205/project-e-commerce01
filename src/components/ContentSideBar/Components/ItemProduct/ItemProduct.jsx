import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { deleteItem } from "@/apis/cartService";
import { SideBarContext } from "@/contexts/SideBarProvider";
import LoadingTextComon from "@components/LoadingTextCommon/LoadingTextComon";

const ItemProduct = ({
    src,
    nameProduct,
    price,
    sku,
    size,
    quantity,
    productId,
    userId,
}) => {
    const {
        container,
        boxContent,
        title,
        sizeCss,
        priceCss,
        skuCss,
        boxClose,
        overlayLoading,
    } = styles;

    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductCart } = useContext(SideBarContext);

    const handleRemoveItem = () => {
        setIsDelete(true);
        const body = {
            productId,
            userId,
        };

        deleteItem(body)
            .then((res) => {
                handleGetListProductCart(userId, "cart");
                setIsDelete(false);
            })
            .catch((err) => {
                console.log(err);
                setIsDelete(false);
            });
    };

    return (
        <div className={container}>
            <img src={src} alt="" />

            <div className={boxClose} onClick={handleRemoveItem}>
                <MdOutlineClose
                    style={{ fontSize: "20px", color: "#252424" }}
                />
            </div>

            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={sizeCss}>Size: {size}</div>
                <div className={priceCss}>
                    {quantity} x ${price}
                </div>
                <div className={skuCss}>SKU: {sku}</div>
            </div>

            {isDelete && (
                <div className={overlayLoading}>
                    <LoadingTextComon />
                </div>
            )}
        </div>
    );
};

export default ItemProduct;
