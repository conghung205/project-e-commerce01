import React, { createContext, useState } from "react";

export const SteperContext = createContext();

const SteperProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const value = {
        currentStep,
        setCurrentStep,
    };

    return (
        <SteperContext.Provider value={value}>
            {children}
        </SteperContext.Provider>
    );
};

export default SteperProvider;
