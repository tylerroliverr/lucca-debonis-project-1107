'use client';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { horizontalLoop } from "./horizontalLoop";

const scrollerText = [
    '1107® Studio portrays the collection of creative work by Lucca De Bonis.',
    'Explore projects by pressing esle/else buttons across the screen.',
    'Listen to the Radio by clicking play on the top right menu as you view projects.',
    `Watch the latest ‘1107® Reel’.`,
    '1107® Studio, Moving Culture - All Rights Reserved ©.'
]

export default function Marquee() {
    const scrollerContainer = useRef();

    useGSAP(() => {
        const scroller = gsap.utils.toArray('.scrollerText');
        const loop = horizontalLoop(scroller, { repeat: -1 });
    },
    {
        scope: scrollerContainer,
    }
);

    return (
        <>
            <div className="scroller" ref={scrollerContainer}>
                {scrollerText.map((text) => (
                    <div key={`text-${text}`} className="scrollerText">
                        {text}
                    </div>
                ))}
            </div>
        </>
    );
}