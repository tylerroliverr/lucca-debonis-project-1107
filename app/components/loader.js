"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import TextScrambleComponent from "./textScramble";

export default function Loader() {

    const container = useRef();
    useGSAP(() => {

    gsap.to(".barWhite", 1.2, {
        delay: 1.75,
        yPercent: -100,
        ease: "power4.out",
    });
    
    gsap.to(".bar", 1.2, {
        delay: 3,
        yPercent: -100,
        ease: "power4.out",
    });

    gsap.to(".textScramble", 1.2, {
        delay: 3,
        yPercent: -120,
        ease: "power4.out",
    })

}, {scope:container});

    return (
        <>
            <div ref={container} className="overlay">
            <TextScrambleComponent />
            <div className="barWhite"></div>
                <div className="bar"></div>
            </div>
        </>
    )
}