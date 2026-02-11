import { dataInfo } from "@components/Info/constans";
import InfoCard from "@components/Info/InfoCard/InfoCard";
import MainLayout from "@components/Layout/Layout";
import React from "react";
import styles from "./style.module.scss";

const Info = () => {
    const { container } = styles;

    return (
        <div>
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((item, index) => (
                        <InfoCard
                            key={index}
                            image={item.src}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </MainLayout>
        </div>
    );
};

export default Info;
