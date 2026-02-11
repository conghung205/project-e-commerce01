import React, { useContext } from "react";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { CiCircleList } from "react-icons/ci";
import styles from "../styles.module.scss";
import { OurShopContext } from "@contexts/OurShopProvider";
import SelectBox from "@pages/OurShop/components/SelectBox";

const Filter = () => {
    const { containerFilter, boxIcon, boxLeft, boxRight } = styles;

    const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
        useContext(OurShopContext);

    const getValueSelect = (value, type) => {
        if (type === "sort") {
            setSortId(value);
        } else {
            setShowId(value);
        }
    };

    const handleGetShowGrid = (type) => {
        // if (type === "grid") {
        //     setIsShowGrid(true);
        // } else {
        //     setIsShowGrid(false);
        // }

        setIsShowGrid(type === "grid");
    };

    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                <SelectBox
                    options={sortOptions}
                    getValue={getValueSelect}
                    type="sort"
                />

                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: "20px", cursor: "pointer" }}
                        onClick={() => handleGetShowGrid("grid")}
                    />
                    <div
                        style={{
                            height: "20px",
                            width: "1px",
                            backgroundColor: "#e1e1e1",
                        }}
                    />
                    <CiCircleList
                        style={{
                            fontSize: "25px",
                            cursor: "pointer",
                            color: "#222",
                        }}
                        onClick={() => handleGetShowGrid("list")}
                    />
                </div>
            </div>

            <div className={boxRight}>
                <div
                    style={{
                        fontSize: "14px",
                        color: "#555",
                    }}
                >
                    Show
                </div>
                <SelectBox
                    options={showOptions}
                    getValue={getValueSelect}
                    type="show"
                />
            </div>
        </div>
    );
};

export default Filter;
