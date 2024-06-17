'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { horizontalLoop } from "./horizontalLoop";

const scrollerText = [
    '1107® Studio portrays the collection of creative work by Lucca De Bonis.',
    'Explore projects by pressing esle/else buttons across the screen.',
    'Listen to the Radio by clicking play on the top right menu as you view projects.',
    `Watch the latest ‘1107® Reel’.`,
    '1107® Studio, Moving Culture - All Rights Reserved ©.'
];

export default function Marquee() {
    const scrollerContainer = useRef();
    const timelineRef = useRef();

    useGSAP(() => {
        const scroller = gsap.utils.toArray('.scrollerText');
        const loop = horizontalLoop(scroller, { repeat: -1, speed: 0.4 });
        timelineRef.current = loop;
    }, { scope: scrollerContainer });

    useEffect(() => {
        let isPaused = false;

        const handleMouseEnter = () => {
            timelineRef.current.pause();
        };

        const handleMouseLeave = () => {
            if (!isPaused) {
                timelineRef.current.resume();
            }
        };

        const handleClick = () => {
            isPaused = !isPaused;
            if (isPaused) {
                timelineRef.current.pause();
            } else {
                timelineRef.current.resume();
            }
        };

        const scrollerElements = document.querySelectorAll('.scrollerText');

        scrollerElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
            el.addEventListener('click', handleClick);
        });

        return () => {
            scrollerElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
                el.removeEventListener('click', handleClick);
            });
        };
    }, []);

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