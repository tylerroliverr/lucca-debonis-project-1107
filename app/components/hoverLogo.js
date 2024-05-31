"use client";
import { useEffect } from 'react';

export default function HoverLogo() {

    useEffect(() => {

        const logoNumbers = document.querySelector('.logoNumbers');
        const logoWords = document.querySelector('.logoWords');
        const logoContainer = document.querySelector('.logoContainer');
        
        logoContainer.addEventListener('mouseover', () => {
            logoNumbers.classList.add('numbersHover');
            logoWords.classList.add('wordsHover');
        });

        logoContainer.addEventListener('mouseout', () => {
            logoNumbers.classList.remove('numbersHover');
            logoWords.classList.remove('wordsHover');
        });

    }, []);
}