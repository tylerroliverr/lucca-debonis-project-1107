"use client";
import getProjectData from "./getProjectData";
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Script from "next/script";

export default function Hero() {

    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const projectsRef = useRef([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let data = await getProjectData();
                if (data) {
                    setProjects(data);
                    projectsRef.current = data; // Update ref with latest projects
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData(); // Fetch data initially
    }, []);

    const handlePrev = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === 0 ? projectsRef.current.length - 1 : prevIndex - 1
            );
            setFade(false);
        }, 300); // Half of the transition time
    };

    const handleNext = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === projectsRef.current.length - 1 ? 0 : prevIndex + 1
            );
            setFade(false);
        }, 300); // Half of the transition time
    };

    return (
        <>
        <Script src="/linkHover.js"/>
            <div className="navigationButtons">
                <div className="prevButton link" onClick={handlePrev}></div>
                <div className="nextButton link" onClick={handleNext}></div>
            </div>
            <div className="heroContainer">
                {projectsRef.current && projectsRef.current.length > 0 && (
                    <>
                        <div className={`projectContainer ${fade ? 'fade-out' : ''}`}>
                            <div className="projectImageContainer">
                                <Image fill className="projectImg" src={projectsRef.current[currentIndex].imagePath} alt="Project" />
                            </div>
                            <div className={`projectDetailsContainer ${fade ? 'fade-out' : ''}`}>
                                <p className="projectText">{projectsRef.current[currentIndex].projectName}</p>
                                <p className="projectText">{projectsRef.current[currentIndex].projectYear}</p>
                                <p className="projectText">{projectsRef.current[currentIndex].projectDetails}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
