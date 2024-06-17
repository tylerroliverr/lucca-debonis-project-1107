"use client";
import React, { createContext, useContext, useState, useRef } from "react";

const WelcomeContext = createContext();

export const WelcomeProvider = ({ children }) => {
    const [isWelcome, setIsWelcome] = useState(false);
    const welcomeImageRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <WelcomeContext.Provider value={{ isWelcome, setIsWelcome, welcomeImageRef, setCurrentIndex, currentIndex }} >
            {children}
        </WelcomeContext.Provider>
    );
};

export const useWelcome = () => useContext(WelcomeContext);