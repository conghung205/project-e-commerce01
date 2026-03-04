import React, { useEffect } from "react";
import { getDetailOrders } from "@/apis/orderService";
import { useLocation } from "react-router-dom";

const Orders = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const id = params.get("id");
    const totalAmount = params.get("totalAmount");

    const qrCodeImage = `https://qr.sepay.vn/img?acc=VQRQAHKHF1598&bank=MBBank&amount=${totalAmount}&des=${id}`;

    const handleGetDetailOrder = async () => {
        try {
            const res = await getDetailOrders(id);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetDetailOrder();
    }, []);

    return (
        <div>
            <img src={qrCodeImage} alt="" />
        </div>
    );
};

export default Orders;
