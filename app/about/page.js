"use client";
import getAboutData from '../components/getAboutData';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function About() {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let data = await getAboutData();
                if (data) {
                    setAbout(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData(); // Fetch data initially
    }, []);

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
            <div className='aboutContainer'>
                <div className='aboutBlurb'>
                    <p><span className='pop'>1107®</span> {about.blurb}</p>
                </div>
                <div className='itemContainer'>
                    <div className='capabilitiesContainer'>
                        <p className='itemTitle'>Capabilities</p>
                        {about.capabilities && about.capabilities.map((capability, index) => (
                            <p className='itemText' key={index}>{capability}</p>
                        ))}
                    </div>
                    <div className='contactContainer'>
                        <p className='itemTitle'>Contact</p>
                        <p className='itemText link'>Instagram</p>
                        <p className='itemText link'>LinkedIn</p>
                        <p className='itemText link email'>hello@1107.co</p>
                    </div>
                    <div className='awardsContainer'>
                        <p className='itemTitle'>Awards</p>
                        {about.awards && about.awards.map((award, index) => (
                            <p className='itemText awardItem' key={index}>{award}</p>
                        ))}
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className='aboutImage' src="/newlucca.png" />
                </div>
                <div className='rightsContainer'>
                    <p>All Rights Reserved ©</p>
                </div>
                <div className='siteContainer'>
                    <p>Website Design by 1107®</p>
                    <p className='link'><Link target="_blank" href="https://www.blueroomstudios.com.au">Development by</Link></p>
                    <p className='link'><Link target="_blank" href="https://www.blueroomstudios.com.au">Blueroom Studios</Link></p>
                </div>
                <div className='ackContainer'>
                    <p>1107® studio acknowledges the Traditional Custodians of the lands and waters we operate on, the Yugambeh people, and pay our respects to their Elders past, present and emerging.</p>
                </div>
            </div>
        </>
    )
}