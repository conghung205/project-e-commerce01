import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import cls from "classnames";

const QrPayment = () => {
    const {
        container,
        left,
        rightContainer,
        rightContent,
        flex,
        top,
        des,
        boxTotal,
        desContent,
        title,
        qrCode,
    } = styles;

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const id = params.get("id");
    const totalAmount = params.get("totalAmount");

    const qrCodeImage = `https://qr.sepay.vn/img?acc=VQRQAHKHF1598&bank=MBBank&amount=${totalAmount}&des=${id}`;

    return (
        <div className={container}>
            <div className={left}>
                <h4 className={title}>Quét Mã QR Để Thanh Toán</h4>
                <div className={qrCode}>
                    <img src={qrCodeImage} alt="" />
                </div>
                <p className={des}>
                    Sử dụng ứng dụng ngân hàng của bạn để quét mã QR này
                </p>
            </div>

            <div className={rightContainer}>
                <h3 className={title}>Chi Tiết Thanh Toán</h3>
                <div className={rightContent}>
                    <div className={cls(flex, top)}>
                        <img
                            src="https://icolor.vn/wp-content/uploads/2024/08/mbbank-logo-5.png"
                            alt="image mb bank"
                        />

                        <div>
                            <p>MB BANK</p>
                            <p>Chuyển Khoản Ngân Hàng</p>
                        </div>
                    </div>

                    <div className={cls(flex, des)}>
                        <div>Chủ Tài Khoản:</div>
                        <div>NONG CONG HUNG</div>
                    </div>

                    <div className={cls(flex, des)}>
                        <div>Số Tài Khoản:</div>
                        <div>123456789</div>
                    </div>

                    <div className={cls(flex, des)}>
                        <div>Số Tiền:</div>
                        <div>{totalAmount} VND</div>
                    </div>

                    <div className={cls(flex, des)}>
                        <div>Nội Dung Chuyển Khoản:</div>
                        <div className={desContent}>{id}</div>
                    </div>

                    <div className={cls(flex, boxTotal)}>
                        <div>TOTAL:</div>
                        <div>{totalAmount} VND</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QrPayment;
