import React, { useContext, useEffect, useState } from "react";
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import styles from "./styles.module.scss";
import Menu from "./Menu/Menu";
import logo from "../../assets/icons/images/Logo-retina.png";
import { TfiReload } from "react-icons/tfi";
import { BsCart3, BsHeart } from "react-icons/bs";
import useScrollHandling from "@/hooks/useScrollHandling";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBarProvider";
import cls from "classnames";
import { StoreContext } from "@/contexts/StoreProvider";

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
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const {
        setIsOpen,
        setType,
        listProductCart,
        userId,
        handleGetListProductCart,
    } = useContext(SideBarContext);

    const { userInfo } = useContext(StoreContext);
    console.log(userInfo);

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

    useEffect(() => {
        setFixedPosition(scrollPosition >= 100);
    }, [scrollPosition]);

    return (
        <header
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
                            <Menu key={index} content={item.content} />
                        ))}
                    </div>
                </div>

                {/* logo */}
                <div>
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: "153px", height: "53px" }}
                    />
                </div>

                {/* right */}
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((item, index) => (
                                <Menu key={index} content={item.content} />
                            ))}
                    </div>
                    <div className={containerBoxIcon}>
                        <div
                            className={icon}
                            onClick={() => handleOpenSideBar("compare")}
                        >
                            <TfiReload
                                style={{
                                    fontSize: "20px",
                                }}
                            />
                        </div>
                        <div
                            className={icon}
                            onClick={() => handleOpenSideBar("wishlist")}
                        >
                            <BsHeart
                                style={{
                                    fontSize: "20px",
                                }}
                            />
                        </div>

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
            </div>
        </header>
    );
};

export default Header;
