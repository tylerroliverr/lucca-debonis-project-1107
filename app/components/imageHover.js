"use client";
import React, { useState } from "react";
export default function ImageHover() {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`aboutContainer ${isExpanded ? 'expanded' : ''}`}>
            <div
                className={`imgContainer ${isExpanded ? 'fade-out' : ''}`}
                onClick={handleToggle}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >
                <img className="aboutImage" src="/newlucca.png" alt="About Image" />
            </div>
        </div>
    );
};