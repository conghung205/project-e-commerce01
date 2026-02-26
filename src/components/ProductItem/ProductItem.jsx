import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Button from "@components/Button/Button";
import { OurShopContext } from "@/contexts/OurShopProvider";
import cls from "classnames";
import Cookies from "js-cookie";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { ToastContext } from "@/contexts/ToastProvider";
import LoadingTextComon from "@components/LoadingTextCommon/LoadingTextComon";
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { handleAddProductToCartCommon } from "@/utils/helper";

const ProductItem = ({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true,
    slideItem = false,
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
        handleAddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeChoose,
            details._id,
            1,
            setIsLoading,
            handleGetListProductCart,
        );
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

    useEffect(() => {
        if (slideItem) {
            setIsShowGrid(true);
        }
    }, [slideItem]);

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
