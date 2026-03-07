import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const SearchBar = ({ isShowSearch, setIsShowSearch }) => {
    const { containerSearch, boxSearch, inputSearch, btnSearch, close } =
        styles;

    const [keyword, setKeyword] = useState("");
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!keyword.trim()) return;

        navigate(`/shop?search=${keyword}`);
        setIsShowSearch(false);
    };

    // tự động focus khi mở search
    useEffect(() => {
        if (isShowSearch) {
            inputRef.current?.focus();
        }
    }, [isShowSearch]);

    return (
        <div className={containerSearch}>
            <div className={boxSearch}>
                <input
                    ref={inputRef}
                    className={inputSearch}
                    type="text"
                    placeholder="Search product..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />

                <button className={btnSearch} onClick={handleSearch}>
                    Search
                </button>

                <div className={close} onClick={() => setIsShowSearch(false)}>
                    <IoClose
                        style={{
                            fontSize: "26px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
