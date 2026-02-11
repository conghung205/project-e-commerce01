import React from "react";
import HeaderSideBar from "@components/ContentSideBar/Components/HeaderSideBar/HeaderSideBar";
import { IoMdHeartEmpty } from "react-icons/io";
import styles from "./styles.module.scss";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

const WishList = () => {
    const { container, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<IoMdHeartEmpty style={{ fontSize: "30px" }} />}
                    title={"WISHLIST"}
                />

                <ItemProduct />
            </div>

            <div className={boxBtn}>
                <Button content={"VIEW WISHLIST"} Large={true} />
                <Button
                    content={"ADD ALL TO CART"}
                    Large={true}
                    isPrimary={false}
                />
            </div>
        </div>
    );
};

export default WishList;
