import React from "react";
import HeaderSideBar from "@components/ContentSideBar/Components/HeaderSideBar/HeaderSideBar";
import { TfiReload } from "react-icons/tfi";
import styles from "./styles.module.scss";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

const Compare = () => {
    const { container, boxContent } = styles;

    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar
                    icon={<TfiReload style={{ fontSize: "30px" }} />}
                    title={"COMPARE"}
                />

                <ItemProduct />
            </div>

            <div>
                <Button content={"VIEW COMPARE"} Large={true} />
            </div>
        </div>
    );
};

export default Compare;
