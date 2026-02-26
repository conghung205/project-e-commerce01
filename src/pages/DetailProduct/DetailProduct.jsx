import React, { useContext, useEffect, useState } from "react";
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
import { getDetailProduct, getRelatedProduct } from "@/apis/productsService";
import { useNavigate, useParams } from "react-router-dom";
import LoadingTextComon from "@components/LoadingTextCommon/LoadingTextComon";
import { toast } from "react-toastify";
import { handleAddProductToCartCommon } from "@/utils/helper";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { ToastContext } from "@/contexts/ToastProvider";
import Cookies from "js-cookie";

const INCREMENT = "increment";
const DECREMENT = "decrement";

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
        quantityCss,
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
        loading,
        emptyData,
    } = styles;

    const [menuSelected, setMenuSelected] = useState(null);
    const [sizeSelected, setSizeSelected] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [relatedData, setRelatedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const param = useParams();
    const navigate = useNavigate();
    const { setIsOpen, setType, handleGetListProductCart } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const userId = Cookies.get("userId");
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);

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

    const handleSelectSize = (size) => {
        setSizeSelected(size);
    };

    const handleClearSize = () => {
        setSizeSelected("");
    };

    const handleSetQuantity = (type) => {
        if (quantity < 1) return;
        setQuantity((prev) =>
            type === INCREMENT ? (prev += 1) : quantity === 1 ? 1 : (prev -= 1),
        );
    };

    const fetchDataDetail = async (id) => {
        setIsLoading(true);

        try {
            const data = await getDetailProduct(id);

            setData(data);
            setIsLoading(false);
        } catch (error) {
            toast.error("Có lỗi khi tải dữ liệu");
            setData();
            setIsLoading(false);
        }
    };

    const fetchDataRelatedProduct = async (id) => {
        setIsLoading(true);

        try {
            const data = await getRelatedProduct(id);

            setRelatedData(data);
            setIsLoading(false);
        } catch (error) {
            toast.error("Có lỗi khi tải dữ liệu");
            setRelatedData([]);
            setIsLoading(false);
        }
    };

    const handleAdd = () => {
        handleAddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeSelected,
            param.id,
            quantity,
            setIsLoadingBtn,
            handleGetListProductCart,
        );
    };

    useEffect(() => {
        if (param.id) {
            fetchDataDetail(param.id);
            fetchDataRelatedProduct(param.id);
        }
    }, [param]);

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

                    {isLoading ? (
                        <div className={loading}>
                            {" "}
                            <LoadingTextComon />
                        </div>
                    ) : (
                        <>
                            {!data ? (
                                <div className={emptyData}>
                                    <p>No Result!</p>
                                    <div>
                                        <Button
                                            content={"Back to Our Shop"}
                                            onClick={() => navigate("/shop")}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className={contentSection}>
                                    <div className={imageBox}>
                                        {data?.images.map((src) => {
                                            return handleRenderZoomImage(src);
                                        })}
                                    </div>
                                    <div className={contentBox}>
                                        <h1 className={title}>{data?.name}</h1>
                                        <p className={priceProduct}>
                                            ${data?.price}
                                        </p>
                                        <p className={desc}>
                                            {data?.description}
                                        </p>

                                        <div className={containerSize}>
                                            Size: {sizeSelected}
                                            <div className={boxSize}>
                                                {data?.size.map(
                                                    (item, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className={cls(
                                                                    size,
                                                                    {
                                                                        [active]:
                                                                            item.name ===
                                                                            sizeSelected,
                                                                    },
                                                                )}
                                                                onClick={() =>
                                                                    handleSelectSize(
                                                                        item.name,
                                                                    )
                                                                }
                                                            >
                                                                {item.name}
                                                            </div>
                                                        );
                                                    },
                                                )}
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
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            DECREMENT,
                                                        )
                                                    }
                                                >
                                                    -
                                                </div>
                                                <div className={quantityCss}>
                                                    {quantity}
                                                </div>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            INCREMENT,
                                                        )
                                                    }
                                                >
                                                    +
                                                </div>
                                            </div>

                                            <div className={boxAddTocart}>
                                                <Button
                                                    content={
                                                        isLoadingBtn ? (
                                                            <LoadingTextComon />
                                                        ) : (
                                                            <div
                                                                className={
                                                                    btnAddTocart
                                                                }
                                                            >
                                                                <BsCart3 /> ADD
                                                                TO CART
                                                            </div>
                                                        )
                                                    }
                                                    customClassname={
                                                        !sizeSelected &&
                                                        activeDisabledBtn
                                                    }
                                                    Large={true}
                                                    onClick={handleAdd}
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
                                                    !sizeSelected &&
                                                    activeDisabledBtn
                                                }
                                                Large={true}
                                            />
                                        </div>

                                        <div className={addFunc}>
                                            <div>
                                                <LuHeart
                                                    style={{ fontSize: "20px" }}
                                                />
                                            </div>
                                            <div>
                                                <TfiReload
                                                    style={{ fontSize: "20px" }}
                                                />
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
                                            {dataAccordionMenu.map(
                                                (item, index) => (
                                                    <AccordionMenu
                                                        key={index}
                                                        titleMenu={
                                                            item.titleMenu
                                                        }
                                                        contentJsx={
                                                            item.content
                                                        }
                                                        onClick={() =>
                                                            handleSetMenuSelected(
                                                                item.id,
                                                            )
                                                        }
                                                        isSelected={
                                                            menuSelected ===
                                                            item.id
                                                        }
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {relatedData.length ? (
                        <div className={relatedSection}>
                            <h2 className={relatedTitle}>Related Products</h2>

                            <SliderCommon
                                data={relatedData}
                                isProductItem
                                showItem={4}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                </MainLayout>
            </div>

            <Footer />
        </div>
    );
};

export default DetailProduct;
