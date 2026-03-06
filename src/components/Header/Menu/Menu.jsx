import React, { useContext, useState } from "react";
import styles from "../styles.module.scss";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/StoreProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import cls from "classnames";

const Menu = ({ content, href }) => {
    const { menu, subMenu, menuActive } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userInfo, handleLogOut } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClickShowLogin = () => {
        if (content === "Sign In" && !userInfo) {
            setIsOpen(true);
            setType("login");
        }
    };

    const handleRenderText = (content) => {
        if (content === "Sign In" && userInfo) {
            const name = userInfo?.username?.split("@")[0];
            return `Hello: ${name}`;
        } else {
            return content;
        }
    };

    const handleHover = () => {
        if (content === "Sign In" && userInfo) {
            setIsShowSubMenu(true);
        }
    };

    return (
        <div
            className={cls(menu, {
                [menuActive]: location.pathname === href,
            })}
            onMouseEnter={handleHover}
            onClick={() => {
                (handleClickShowLogin(), navigate(href));
            }}
            onMouseLeave={() => setIsShowSubMenu(false)}
        >
            {handleRenderText(content)}

            {isShowSubMenu && (
                <div className={subMenu} onClick={handleLogOut}>
                    LOG OUT
                    <IoIosLogOut
                        style={{
                            fontSize: "18px",
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Menu;
