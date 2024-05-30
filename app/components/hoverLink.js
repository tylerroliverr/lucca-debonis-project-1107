"use client";
import { useEffect } from 'react';

export default function HoverLink() {
    useEffect(() => {

        const link = document.querySelectorAll('.link');
        const navLink = document.querySelectorAll('.navLink');

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

        navLink.forEach(function (navlinks) {
            navlinks.addEventListener('mouseover', function () {
                customPointer.classList.add('hoveringNav');
            });
        
            navlinks.addEventListener('mouseout', function () {
                customPointer.classList.remove('hoveringNav');
            });
        });

    },[]);
}