import React, { useContext } from "react";
import { SteperContext } from "@/contexts/SteperProvider";
import ShoppingCart from "@pages/Cart/components/Contents/ShoppingCart";

const ContentStep = () => {
    const { currentStep } = useContext(SteperContext);

    const handleRenderContent = () => {
        switch (currentStep) {
            case 1:
                return <ShoppingCart />;
            case 2:
                return <h1>step 2</h1>;
            case 3:
                return <h1>step 3</h1>;

            default:
                break;
        }
    };

    return <>{handleRenderContent()}</>;
};

export default ContentStep;
