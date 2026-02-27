import React from "react";
import styles from "../../styles.module.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import SelectBox from "@pages/OurShop/components/SelectBox";
import LoadingCart from "@pages/Cart/components/LoadingCart";

const CartTable = ({ listProductCart, getData, getDataDelete, isLoading }) => {
    const {
        cartTable,
        header,
        row,
        product,
        info,
        remove,
        price,
        sku,
        quantity,
        subtotal,
        containerTable,
    } = styles;

    const showOptions = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
    ];

    const getValueSelect = (userId, productId, quantity, size) => {
        const data = {
            userId,
            productId,
            quantity,
            size,
            isMultiple: true,
        };

        getData(data);
    };

    return (
        <div className={containerTable}>
            <div className={cartTable}>
                <div className={header}>
                    <span>PRODUCT</span>
                    <span>PRICE</span>
                    <span>SKU</span>
                    <span>QUANTITY</span>
                    <span>SUBTOTAL</span>
                </div>

                {listProductCart.map((item, index) => (
                    <div className={row} key={index}>
                        <div className={product}>
                            <img src={item.images[0]} alt={item.name} />
                            <div className={info}>
                                <h4>{item.name}</h4>
                                <p>Size: {item.size}</p>
                            </div>

                            <FaRegTrashAlt
                                onClick={() =>
                                    getDataDelete({
                                        userId: item.userId,
                                        productId: item.productId,
                                    })
                                }
                                className={remove}
                            />
                        </div>

                        <div className={price}>${item.price.toFixed(2)}</div>

                        <div className={sku}>{item.sku}</div>

                        <div className={quantity}>
                            <SelectBox
                                options={showOptions}
                                getValue={(e) =>
                                    getValueSelect(
                                        item.userId,
                                        item.productId,
                                        e,
                                        item.size,
                                    )
                                }
                                type={"show"}
                                defaultValue={item.quantity}
                            />
                        </div>

                        <div className={subtotal}>${item.total.toFixed(2)}</div>
                    </div>
                ))}
            </div>

            {isLoading && <LoadingCart />}
        </div>
    );
};

export default CartTable;
