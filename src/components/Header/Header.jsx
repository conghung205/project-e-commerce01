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
    const { setIsOpen, setType, listProductCart } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

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
                            onClick={() => handleOpenSideBar("cart")}
                        >
                            <BsCart3
                                style={{
                                    fontSize: "20px",
                                }}
                            />

                            <div className={quantity}>
                                {listProductCart.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
