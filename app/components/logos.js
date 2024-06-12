"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWelcome } from "./3dLogoContext";

export default function Logos() {

    const pathname = usePathname();
    const wordLogo = pathname === "/about" || pathname === "/reel";
    const { isWelcome } = useWelcome();

    return (
        <>
            <div className="logoContainer">
                <Link href="/">
                    {isWelcome  || wordLogo ? (
                        <svg className="logo link logoWords" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 11.44">
                            <g className="logo link" fill="#fff">
                                <path d="M6.81,4.99v1.15H2.59v2.76h4.93v1.15H1.25V1.37H7.4v1.15H2.59v2.47H6.81z" />
                                <path d="M10.01,1.37v7.53h4.4v1.15H8.67V1.37H10.01z" />
                                <path d="M20.99,4.99v1.15h-4.22v2.76h4.93v1.15h-6.27V1.37h6.15v1.15h-4.81v2.47H20.99z" />
                                <path d="M23.95,1.37l2.3,7.28h0.02l2.28-7.28h1.41l-2.99,8.69h-1.45l-3.06-8.69H23.95z" />
                                <path d="M36.45,4.99v1.15h-4.22v2.76h4.93v1.15h-6.27V1.37h6.15v1.15h-4.81v2.47H36.45z" />
                                <path d="M38.31,1.37h1.53l4.03,6.68h0.02V1.37h1.35v8.69h-1.53l-4.05-6.68h-0.02v6.68h-1.34V1.37z" />
                                <path d="M49.24,5.71c0-2.61,1.67-4.51,4.25-4.51c2.6,0,4.27,1.9,4.27,4.51s-1.66,4.52-4.27,4.52C50.9,10.23,49.24,8.33,49.24,5.71z
		 M56.37,5.71c0-1.79-0.83-3.35-2.88-3.35c-2.04,0-2.87,1.57-2.87,3.35c0,1.79,0.83,3.37,2.87,3.37C55.55,9.08,56.37,7.5,56.37,5.71
		z"/>
                                <path d="M68.04,7.62c0,1.49-1.02,2.61-3.18,2.61c-2.2,0-3.76-1.14-3.84-3.1h1.38c0.1,1.17,0.79,1.96,2.42,1.96
		c1.39,0,1.82-0.61,1.82-1.4c0-1.11-0.85-1.26-2.43-1.66c-1.36-0.35-2.85-0.8-2.85-2.46c0-1.51,1.17-2.37,3.04-2.37
		c1.98,0,3.27,1.01,3.4,2.76h-1.4c-0.13-1.04-0.73-1.62-2-1.62c-1.08,0-1.65,0.4-1.65,1.15c0,0.97,0.92,1.18,2.04,1.46
		C66.46,5.38,68.04,5.78,68.04,7.62z"/>
                                <path d="M74.73,4.99v1.15h-4.22v2.76h4.93v1.15h-6.27V1.37h6.15v1.15h-4.81v2.47H74.73z" />
                                <path d="M77.44,1.37l2.3,7.28h0.02l2.28-7.28h1.41l-2.99,8.69h-1.45l-3.06-8.69H77.44z" />
                                <path d="M89.94,4.99v1.15h-4.22v2.76h4.94v1.15h-6.27V1.37h6.15v1.15h-4.81v2.47H89.94z" />
                                <path d="M91.81,1.37h1.53l4.03,6.68h0.02V1.37h1.35v8.69h-1.53l-4.05-6.68h-0.02v6.68h-1.34V1.37z" />
                            </g>
                        </svg>
                    ) : (
                        <img className="logo link logoNumbers" src="./logo.png" />
                    )}
                </Link>
            </div>
        </>
    )
}