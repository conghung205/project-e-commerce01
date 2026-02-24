import React from "react";
import "./styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductItem from "@components/ProductItem/ProductItem";

const SliderCommon = ({ data, isProductItem = false, showItem = 1 }) => {
    const NextArrow = ({ className, style, onClick }) => {
        return (
            <div className={className} style={style} onClick={onClick}>
                <IoIosArrowForward />
            </div>
        );
    };

    const PrevArrow = ({ className, style, onClick }) => {
        return (
            <div className={className} style={style} onClick={onClick}>
                <IoIosArrowBack />
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: showItem,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className={`sliderWrapper ${showItem === 1 ? "singleSlide" : ""}`}>
            <Slider {...settings}>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            {isProductItem ? (
                                <ProductItem
                                    src={item.image}
                                    prevSrc={item.image}
                                    name={item.name}
                                    price={item.price}
                                    details={item}
                                    isHomePage={false}
                                    slideItem
                                />
                            ) : (
                                <img key={index} src={item} alt="" />
                            )}
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default SliderCommon;
