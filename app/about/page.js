"use client";
import getAboutData from '../components/getAboutData';
import React, { useEffect, useState } from 'react';

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
                        <p className='itemText'>Instagram</p>
                        <p className='itemText'>LinkedIn</p>
                        <p className='itemText'>hello@1107.co</p>
                    </div>
                    <div className='awardsContainer'>
                        <p className='itemTitle'>Awards</p>
                        {about.awards && about.awards.map((award, index) => (
                            <p className='itemText' key={index}>{award}</p>
                        ))}
                    </div>
                </div>
                <div className='rightsContainer'>
                    <p>All Rights Reserved ©</p>
                </div>
            </div>
        </>
    )
}