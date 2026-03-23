import React, { useContext, useEffect, useState } from "react";
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import styles from "./styles.module.scss";
import Menu from "./Menu/Menu";
import { BsCart3 } from "react-icons/bs";
import useScrollHandling from "@/hooks/useScrollHandling";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBarProvider";
import cls from "classnames";
import { StoreContext } from "@/contexts/StoreProvider";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import SearchBar from "@components/Header/SearchBar/SearchBar";
import { HiMenu } from "react-icons/hi";
import { useMenuAction } from "@/hooks/useMenuAction";

const Header = () => {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader,
        icon,
        boxCart,
        quantity,
        iconLogo,
        logo,
        menuIcon,
        mobileMenu,
        overlay,
        sidebar,
        closeIcon,
        mobileItem,
        closing,
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const { handleMenuAction } = useMenuAction();
    const navigate = useNavigate();

    const {
        setIsOpen,
        setType,
        listProductCart,
        userId,
        handleGetListProductCart,
    } = useContext(SideBarContext);

    const { userInfo } = useContext(StoreContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    const handleOpenCartSideBar = () => {
        handleGetListProductCart(userId, "cart");
        handleOpenSideBar("cart");
    };

    const totalItemCart = listProductCart.length
        ? listProductCart.reduce((acc, item) => {
              return (acc += item.quantity);
          }, 0)
        : 0;

    const handleNavigateToHome = () => {
        navigate("/");
    };

    const handleCloseMenu = () => {
        setIsClosing(true);

        setTimeout(() => {
            setIsOpenMenu(false);
            setIsClosing(false);
        }, 500);
    };

    useEffect(() => {
        setFixedPosition(scrollPosition >= 100);
    }, [scrollPosition]);

    return (
        <header>
            <div
                className={classNames(container, topHeader, {
                    [fixedHeader]: fixedPosition,
                })}
            >
                <div className={containerHeader}>
                    {/* left */}
                    <div className={containerBox}>
                        <div className={containerBoxIcon}>
                            {dataBoxIcon.map((item, index) => (
                                <BoxIcon
                                    key={index}
                                    type={item.type}
                                    href={item.href}
                                />
                            ))}
                        </div>

                        <div className={containerMenu}>
                            {dataMenu.slice(0, 3).map((item, index) => (
                                <Menu
                                    key={index}
                                    href={item.href}
                                    content={item.content}
                                />
                            ))}
                        </div>
                    </div>

                    {/* logo */}
                    <div className={logo} onClick={handleNavigateToHome}>
                        <h1 className={iconLogo}>NC/H</h1>
                    </div>

                    {/* right */}
                    <div className={containerBox}>
                        <div className={containerMenu}>
                            {dataMenu
                                .slice(3, dataMenu.length)
                                .map((item, index) => (
                                    <Menu
                                        key={index}
                                        href={item.href}
                                        content={item.content}
                                        onSearchClick={() =>
                                            setIsShowSearch(true)
                                        }
                                    />
                                ))}
                        </div>
                        <div className={containerBoxIcon}>
                            <div
                                className={cls(icon, boxCart)}
                                onClick={() => handleOpenCartSideBar()}
                            >
                                <BsCart3
                                    style={{
                                        fontSize: "20px",
                                    }}
                                />

                                <div className={quantity}>
                                    {totalItemCart || userInfo?.amountCart || 0}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ICON MENU MOBILE */}
                    <div
                        onClick={() => setIsOpenMenu(true)}
                        className={menuIcon}
                    >
                        <HiMenu />
                    </div>
                </div>
            </div>

            {isOpenMenu && (
                <div className={mobileMenu}>
                    <div className={overlay} onClick={handleCloseMenu} />

                    <div
                        className={cls(sidebar, {
                            [closing]: isClosing,
                        })}
                    >
                        <div className={closeIcon} onClick={handleCloseMenu}>
                            <IoClose />
                        </div>

                        {dataMenu.map((item, index) => (
                            <div
                                key={index}
                                className={mobileItem}
                                onClick={() => {
                                    handleMenuAction({
                                        ...item,
                                        onSearchClick: () =>
                                            setIsShowSearch(true),
                                    });
                                    handleCloseMenu();
                                }}
                            >
                                {item.content}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {isShowSearch && (
                <SearchBar
                    isShowSearch={isShowSearch}
                    setIsShowSearch={setIsShowSearch}
                />
            )}
        </header>
    );
};

export default Header;
