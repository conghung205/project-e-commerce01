import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Button from "@components/Button/Button";
import { OurShopContext } from "@/contexts/OurShopProvider";
import cls from "classnames";
import Cookies from "js-cookie";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { ToastContext } from "@/contexts/ToastProvider";
import { addProductToCart } from "@/apis/cartService";
import LoadingTextComon from "@components/LoadingTextCommon/LoadingTextComon";
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductItem = ({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true,
}) => {
    const {
        container,
        textCenter,
        boxImg,
        showImgWhenHover,
        showOptionWhenHover,
        boxIcon,
        title,
        desc,
        boxSize,
        size,
        content,
        largImg,
        isActiveSize,
        btnClear,
    } = styles;

    // const { isShowGrid } = useContext(OurShopContext);
    const [sizeChoose, setSizeChoose] = useState("");
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const userId = Cookies.get("userId");
    const { setIsOpen, setType, handleGetListProductCart, setDetailProduct } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose("");
    };

    const handleAddToCart = () => {
        if (!userId) {
            setIsOpen(true);
            setType("login");
            toast.warning("Please login to add product to cart");
            return;
        }

        if (!sizeChoose) {
            toast.warning("Please choose size!");
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose,
        };

        setIsLoading(true);

        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType("cart");
                toast.success("Add product to cart successfully!");
                setIsLoading(false);
                handleGetListProductCart(userId, "cart");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Add product to cart failed!");

                setIsLoading(false);
            });
    };

    const handleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType("detail");
        setDetailProduct(details);
    };

    const handleNavigateToDetail = () => {
        const path = `/product/${details._id}`;

        navigate(path);
    };

    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomePage, ourShopStore?.isShowGrid]);

    return (
        <div className={isShowGrid ? "" : container}>
            {/* box img */}
            <div
                className={cls(boxImg, {
                    [largImg]: !isShowGrid,
                })}
                onClick={handleNavigateToDetail}
            >
                <img src={src} alt="" />
                <img src={prevSrc} alt="" className={showImgWhenHover} />
                <div className={showOptionWhenHover}>
                    <div className={boxIcon}>
                        <BsCart3 style={{ fontSize: "20px" }} />
                    </div>
                    <div className={boxIcon}>
                        <IoIosHeartEmpty style={{ fontSize: "20px" }} />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload />
                    </div>
                    <div
                        className={boxIcon}
                        onClick={handleShowDetailProductSideBar}
                    >
                        <IoEyeOutline style={{ fontSize: "20px" }} />
                    </div>
                </div>
            </div>

            {/* ==========content========== */}
            <div className={isShowGrid ? "" : content}>
                {!isHomePage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => (
                            <div
                                className={cls(size, {
                                    [isActiveSize]: sizeChoose === item.name,
                                })}
                                key={index}
                                onClick={() => handleChooseSize(item.name)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}

                {sizeChoose && (
                    <div className={btnClear} onClick={handleClearSize}>
                        clear
                    </div>
                )}

                <div
                    className={cls(title, {
                        [textCenter]: !isHomePage,
                    })}
                >
                    {name}
                </div>
                {!isHomePage && (
                    <div style={{ color: "#888", textAlign: "center" }}>
                        Brand 01
                    </div>
                )}
                <div
                    className={cls(desc, {
                        [textCenter]: !isHomePage,
                    })}
                    style={{ color: isHomePage ? "#333" : "#888" }}
                >
                    ${price}
                </div>

                <div className={textCenter}>
                    {!isHomePage && (
                        <Button
                            content={
                                isLoading ? <LoadingTextComon /> : "ADD TO CART"
                            }
                            medium={true}
                            onClick={handleAddToCart}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
