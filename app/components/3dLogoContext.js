"use client";
import React, { createContext, useContext, useState } from "react";

const WelcomeContext = createContext();

export const WelcomeProvider = ({ children }) => {
    const [isWelcome, setIsWelcome] = useState(false);

    return (
        <WelcomeContext.Provider value={{ isWelcome, setIsWelcome }} >
            {children}
        </WelcomeContext.Provider>
    );
};

export const useWelcome = () => useContext(WelcomeContext);