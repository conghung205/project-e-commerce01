import React, { useContext, useState } from "react";
import { SideBarContext } from "@/contexts/SideBarProvider";
import styles from "./styles.module.scss";
import SliderCommon from "@components/SliderCommon/SliderCommon";
import SelectBox from "@pages/OurShop/components/SelectBox";
import Button from "@components/Button/Button";
import { IoCartOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import cls from "classnames";
import { addProductToCart } from "@/apis/cartService";

const DetailProduct = () => {
    const {
        container,
        title,
        price,
        desc,
        titleSize,
        boxSize,
        size,
        isActive,
        boxAddToCart,
        btnAddToCart,
        boxOr,
        or,
        line,
        boxBuyNow,
        contentBuyNow,
        boxCompare,
        boxWishList,
        boxSku,
        boxCategory,
        boxDelivery,
        boxShare,
        boxIconShare,
        btnClear,
    } = styles;

    const {
        detailProduct,
        userId,
        setType,
        handleGetListProductCart,
        setIsLoading,
        setIsOpen,
    } = useContext(SideBarContext);

    const [chooseSize, setChooSize] = useState("");
    const [quantity, setQuantity] = useState(1);

    const showOptions = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
    ];

    const handleGetSize = (value) => {
        setChooSize(value);
    };

    const handleClearSize = () => {
        setChooSize("");
    };

    const handleGetQuantity = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        const data = {
            userId,
            productId: detailProduct._id,
            quantity,
            size: chooseSize,
            isMultiple: true,
        };

        setIsOpen(false);
        setIsLoading(true);

        addProductToCart(data)
            .then((res) => {
                setType("cart");
                setIsOpen(true);
                handleGetListProductCart(userId, "cart");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={container}>
            <div>
                <SliderCommon data={detailProduct.images} />
                <div className={title}>{detailProduct.name}</div>
                <div className={price}>${detailProduct.price}</div>
                <div className={desc}>{detailProduct.description}</div>

                <div className={titleSize}>Size: {chooseSize}</div>
                <div className={boxSize}>
                    {detailProduct.size.map((item, index) => {
                        return (
                            <div
                                className={cls(size, {
                                    [isActive]: item.name === chooseSize,
                                })}
                                key={index}
                                onClick={() => handleGetSize(item.name)}
                            >
                                {item.name}
                            </div>
                        );
                    })}
                </div>
                {chooseSize && (
                    <div onClick={handleClearSize} className={btnClear}>
                        Clear
                    </div>
                )}

                <div className={boxAddToCart}>
                    <SelectBox
                        options={showOptions}
                        getValue={handleGetQuantity}
                        defaultValue={quantity}
                    />

                    <Button
                        content={
                            <div className={btnAddToCart}>
                                <IoCartOutline style={{ fontSize: "16px" }} />
                                add to cart
                            </div>
                        }
                        Large={true}
                        onClick={handleAddToCart}
                    />
                </div>

                <div className={boxOr}>
                    <div className={line}></div>
                    <div className={or}>Or</div>
                    <div className={line}></div>
                </div>

                <div className={boxBuyNow}>
                    <Button
                        content={
                            <div className={contentBuyNow}>
                                <IoCartOutline style={{ fontSize: "16px" }} />
                                BUY NOW
                            </div>
                        }
                        Large={true}
                    />
                </div>

                <div className={boxCompare}>
                    <TfiReload style={{ fontSize: "16px" }} />
                    Add to compare
                </div>

                <div className={boxWishList}>
                    <IoIosHeartEmpty style={{ fontSize: "20px" }} />
                    Add to wishlist
                </div>

                <div className={boxSku}>
                    SKU:
                    <span>87654</span>
                </div>
                <div className={boxCategory}>
                    Category:
                    <span>Men</span>
                </div>
                <div className={boxDelivery}>
                    Estimated delivery:
                    <span>3 - 7 days</span>
                </div>
                <div className={boxShare}>
                    Share:
                    <div className={boxIconShare}>
                        <span>
                            <RiTwitterXFill />
                        </span>
                        <span>
                            <FaFacebookF />
                        </span>
                        <span>
                            <FaVk />
                        </span>
                        <span>
                            <FaPinterestP />
                        </span>
                        <span>
                            <GoMail />
                        </span>
                        <span>
                            <FaLinkedinIn />
                        </span>
                        <span>
                            <FaWhatsapp />
                        </span>
                        <span>
                            <FaSkype />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
