import React, { useContext, useState } from "react";
import styles from "../styles.module.scss";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/StoreProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import cls from "classnames";
import { useMenuAction } from "@/hooks/useMenuAction";

const Menu = ({ content, href, onSearchClick }) => {
    const { menu, subMenu, menuActive } = styles;
    const { userInfo, handleLogOut } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const location = useLocation();
    const { handleMenuAction } = useMenuAction();

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
                handleMenuAction({ content, href, onSearchClick });
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
