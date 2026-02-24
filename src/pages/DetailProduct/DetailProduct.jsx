import React, { useState } from "react";
import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { BsCart3 } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { TfiReload } from "react-icons/tfi";
import PaymentMethods from "@components/PaymentMethods/PaymentMethods";
import AccordionMenu from "@components/AccordionMenu/AccordionMenu";
import Infomation from "@pages/DetailProduct/components/Infomation";
import Review from "@pages/DetailProduct/components/Review";
import Footer from "@components/Footer/Footer";
import SliderCommon from "@components/SliderCommon/SliderCommon";
import ReactImageMagnifier from "simple-image-magnifier/react";
import cls from "classnames";

const tempDataSize = [
    {
        name: "L",
        amount: "1000",
    },
    {
        name: "M",
        amount: "1000",
    },
    {
        name: "S",
        amount: "1000",
    },
];

const DetailProduct = () => {
    const {
        container,
        navigateSection,
        contentSection,
        imageBox,
        contentBox,
        title,
        priceProduct,
        desc,
        containerSize,
        boxSize,
        size,
        addToCartSection,
        boxAddTocart,
        btnAddTocart,
        incremenAmount,
        quantity,
        orSection,
        textOr,
        line,
        buyNowSection,
        btnBuyNow,
        addFunc,
        info,
        accordionMenu,
        relatedSection,
        relatedTitle,
        active,
        clear,
        activeDisabledBtn,
    } = styles;

    const [menuSelected, setMenuSelected] = useState(null);
    const [sizeSelected, setSizeSelected] = useState("");

    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: "ADDITIONAL INFOMATION",
            content: <Infomation />,
        },
        {
            id: 2,
            titleMenu: "REVIEWS (0)",
            content: <Review />,
        },
    ];

    const dataImageDetail = [
        "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg",
        "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg",
        "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg",
        "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg",
    ];

    const handleRenderZoomImage = (src) => {
        return (
            <ReactImageMagnifier
                srcPreview={src}
                srcOriginal={src}
                width={295}
                height={350}
                objectFit="contain"
            />
        );
    };

    const handleSetMenuSelected = (id) => {
        setMenuSelected((prev) => {
            return prev === id ? null : id;
        });
    };

    const tempDataSlider = [
        {
            image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg",
            name: "Test Product 1",
            price: "1000",
            size: [{ name: "L" }, { name: "S" }, { name: "M" }],
        },
        {
            image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg",
            name: "Test Product 1",
            price: "1000",
            size: [{ name: "L" }, { name: "S" }, { name: "M" }],
        },
        {
            image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg",
            name: "Test Product 1",
            price: "1000",
            size: [{ name: "L" }, { name: "S" }, { name: "M" }],
        },
        {
            image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg",
            name: "Test Product 1",
            price: "1000",
            size: [{ name: "L" }, { name: "S" }, { name: "M" }],
        },
        {
            image: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg",
            name: "Test Product 1",
            price: "1000",
            size: [{ name: "L" }, { name: "S" }, { name: "M" }],
        },
    ];

    const handleSelectSize = (size) => {
        setSizeSelected(size);
    };

    const handleClearSize = () => {
        setSizeSelected("");
    };

    return (
        <div>
            <Header />
            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {">"} men</div>
                        <div style={{ cursor: "pointer" }}>
                            {"<"} Return to previous page
                        </div>
                    </div>

                    <div className={contentSection}>
                        <div className={imageBox}>
                            {dataImageDetail.map((src) => {
                                return handleRenderZoomImage(src);
                            })}
                        </div>
                        <div className={contentBox}>
                            <h1 className={title}>Title product</h1>
                            <p className={priceProduct}>$435.00</p>
                            <p className={desc}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>

                            <div className={containerSize}>
                                Size: {sizeSelected}
                                <div className={boxSize}>
                                    {tempDataSize.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={cls(size, {
                                                    [active]:
                                                        item.name ===
                                                        sizeSelected,
                                                })}
                                                onClick={() =>
                                                    handleSelectSize(item.name)
                                                }
                                            >
                                                {item.name}
                                            </div>
                                        );
                                    })}
                                </div>
                                {sizeSelected && (
                                    <p
                                        className={clear}
                                        onClick={handleClearSize}
                                    >
                                        Clear
                                    </p>
                                )}
                            </div>

                            <div className={addToCartSection}>
                                <div className={incremenAmount}>
                                    <div>-</div>
                                    <div className={quantity}>1</div>
                                    <div>+</div>
                                </div>

                                <div className={boxAddTocart}>
                                    <Button
                                        content={
                                            <div className={btnAddTocart}>
                                                <BsCart3 /> ADD TO CART
                                            </div>
                                        }
                                        customClassname={
                                            !sizeSelected && activeDisabledBtn
                                        }
                                        Large={true}
                                    />
                                </div>
                            </div>

                            <div className={orSection}>
                                <div className={line}></div>
                                <div className={textOr}>OR</div>
                                <div className={line}></div>
                            </div>

                            <div className={buyNowSection}>
                                <Button
                                    content={
                                        <div className={btnBuyNow}>
                                            <BsCart3 /> BUY NOW
                                        </div>
                                    }
                                    customClassname={
                                        !sizeSelected && activeDisabledBtn
                                    }
                                    Large={true}
                                />
                            </div>

                            <div className={addFunc}>
                                <div>
                                    <LuHeart style={{ fontSize: "20px" }} />
                                </div>
                                <div>
                                    <TfiReload style={{ fontSize: "20px" }} />
                                </div>
                            </div>

                            <div>
                                <PaymentMethods />
                            </div>

                            <div className={info}>
                                <div>
                                    Brand: <span>Brand 03</span>
                                </div>
                                <div>
                                    SKU: <span>87654</span>
                                </div>
                                <div>
                                    Category: <span>Men</span>
                                </div>
                            </div>

                            <div className={accordionMenu}>
                                {dataAccordionMenu.map((item, index) => (
                                    <AccordionMenu
                                        key={index}
                                        titleMenu={item.titleMenu}
                                        contentJsx={item.content}
                                        onClick={() =>
                                            handleSetMenuSelected(item.id)
                                        }
                                        isSelected={menuSelected === item.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={relatedSection}>
                        <h2 className={relatedTitle}>Related Products</h2>

                        <SliderCommon
                            data={tempDataSlider}
                            isProductItem
                            showItem={4}
                        />
                    </div>
                </MainLayout>
            </div>

            <Footer />
        </div>
    );
};

export default DetailProduct;
