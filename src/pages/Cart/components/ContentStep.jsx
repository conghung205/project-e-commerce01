import React, { useContext } from "react";
import { SteperContext } from "@/contexts/SteperProvider";
import ShoppingCart from "@pages/Cart/components/ShoppingCart/ShoppingCart";
import Checkout from "@pages/Cart/components/Checkout/Checkout";
import QrPayment from "@pages/Cart/components/QrPayment/index";

const ContentStep = () => {
    const { currentStep } = useContext(SteperContext);

    const handleRenderContent = () => {
        switch (currentStep) {
            case 1:
                return <ShoppingCart />;
            case 2:
                return <Checkout />;
            case 3:
                return <QrPayment />;

            default:
                break;
        }
    };

    return <>{handleRenderContent()}</>;
};

export default ContentStep;
