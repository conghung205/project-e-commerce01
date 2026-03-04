import axiosClient from "@/apis/axiosClient";

const createOrder = async (data) => {
    return await axiosClient.post("/orders", data);
};

const getDetailOrders = async (id) => {
    return await axiosClient.get(`/orders/${id}`);
};

export { createOrder, getDetailOrders };
