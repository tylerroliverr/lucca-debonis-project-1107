"use client";
import { useEffect } from "react";
export default function ImageHover() {

    useEffect(() => {
        const hoverImage = document.querySelector('.imgContainer');
        const aboutDiv = document.querySelector('.aboutContainer');

        hoverImage.addEventListener('mouseenter', function () {
            hoverImage.classList.add('fade-out');
            aboutDiv.classList.add('expanded');
        });

        hoverImage.addEventListener('mouseleave', function () {
            hoverImage.classList.remove('fade-out');
            aboutDiv.classList.remove('expanded');
        });

    }, []);

    // useEffect(() => {
    //     const hoverImage = document.querySelector('.imgContainer');
    //     const aboutDiv = document.querySelector('.aboutContainer');

    //     hoverImage.addEventListener('click', function () {
    //         hoverImage.classList.add('fade-out');
    //         aboutDiv.classList.add('expanded');
    //         console.log("clicked");

    //     });

    //     hoverImage.addEventListener('click', function () {
    //         hoverImage.classList.remove('fade-out');
    //         aboutDiv.classList.remove('expanded');
    //         console.log("clicked");

    //     });

    // }, []);

    useEffect(() => {
        const button = document.querySelector(".email");

        // Function to copy text to clipboard and show an alert
        function copyToClipboard() {
            // Get the button text
            const text = button.textContent;

            // Use the Clipboard API (preferred) if available
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    alert("Copied to clipboard!");
                });
            } else {
                // Fallback for older browsers using execCommand (deprecated)
                const textArea = document.createElement("textarea");
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                textArea.remove();
                alert("Copied email to clipboard!");
            }
        }

        // Add click event listener to the button
        button.addEventListener("click", copyToClipboard);
    }, []);
}