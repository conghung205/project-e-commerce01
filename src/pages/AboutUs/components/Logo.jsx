import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles.module.scss";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import "./style.css";

const Logo = () => {
    const { containerSlider } = styles;

    const dataLogos = [
        {
            id: "1",
            url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-03-min.png",
        },
        {
            id: "2",
            url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-03-min.png",
        },
        {
            id: "3",
            url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-05-min.png",
        },
        {
            id: "4",
            url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-02-min.png",
        },
        {
            id: "5",
            url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png",
        },
        {
            id: "6",
            url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png",
        },
    ];

    return (
        <div className={containerSlider}>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {dataLogos.map((item, index) => (
                    <SwiperSlide
                        key={item.id}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={item.url}
                            alt=""
                            style={{ objectFit: "contain" }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Logo;
