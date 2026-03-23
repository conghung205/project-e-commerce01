import React from "react";
import styles from "./styles.module.scss";
import { dataMenu } from "@components/Footer/constans";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const { container, boxNav, iconLogo, copyight, ckeckout } = styles;
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate("/");
    };

    return (
        <section className={container}>
            {/* logo */}
            <div onClick={handleNavigateToHome}>
                <h1 className={iconLogo}>NC/H</h1>
            </div>
            <div>
                <ul className={boxNav}>
                    {dataMenu.map((item, index) => (
                        <li onClick={() => navigate(item.href)} key={index}>
                            {item.content}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p className={ckeckout}>Guaranteed safe ckeckout</p>
            </div>
            <div>
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
                    alt=""
                />
            </div>
            <div>
                <p className={copyight}>
                    Copyright © 2025 CongHung theme. Created by CongHung themes.
                </p>
            </div>
        </section>
    );
};

export default Footer;
