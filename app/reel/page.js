"use client";
import { useEffect } from "react";

export default function Reel() {

    useEffect(() => {

        const link = document.querySelectorAll('.link');

        link.forEach(function (links) {
            links.addEventListener('mouseover', function () {
                customCursor.classList.add('hovering');
                customPointer.classList.add('hovering');
            });
        
            links.addEventListener('mouseout', function () {
                customCursor.classList.remove('hovering');
                customPointer.classList.remove('hovering');
            });
        });
    },[]);

    return (
        <>
            <div className="playReel">
                <p className="link">Play Reel</p>
            </div>
        </>
    )
}