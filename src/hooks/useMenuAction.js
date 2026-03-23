import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/StoreProvider";

export const useMenuAction = () => {
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userInfo } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleMenuAction = ({ content, href, onSearchClick }) => {
        if (content === "Sign In" && !userInfo) {
            setIsOpen(true);
            setType("login");
            return;
        }

        if (content === "Search") {
            onSearchClick?.();
            return;
        }

        navigate(href);
    };

    return { handleMenuAction };
};
