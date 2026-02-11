import React from "react";
import styles from "./styles.module.scss";
import { dataMenu } from "@components/Footer/constans";

const Footer = () => {
    const { container, boxNav, logoImg, copyight } = styles;

    return (
        <section className={container}>
            <div>
                <img
                    className={logoImg}
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png"
                    alt=""
                />
            </div>
            <div>
                <ul className={boxNav}>
                    {dataMenu.map((item, index) => (
                        <li key={index}>{item.content}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p>Guaranteed safe ckeckout</p>
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
