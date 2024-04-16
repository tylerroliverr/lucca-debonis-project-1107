"use client";
import getProjectData from "./getProjectData";
import React, { useEffect, useState, useRef } from 'react';

export default function Hero() {

    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false); // State for fade effect
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

        const interval = setInterval(() => {
            setFade(true); // Trigger fade out effect
            setTimeout(() => {
                setCurrentIndex(prevIndex =>
                    prevIndex === projectsRef.current.length - 1 ? 0 : prevIndex + 1
                );
                setFade(false); // Trigger fade in effect after some time
            }, 450); // Half of the transition time

        }, 5000);

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <div className="heroContainer">
            {projectsRef.current && projectsRef.current.length > 0 && (
                <div className={`projectContainer ${fade ? 'fade-out' : ''}`}>
                    <div className="projectImageContainer">
                        <img className="projectImg" src={projectsRef.current[currentIndex].imagePath} alt="Project" />
                    </div>
                    <div className={`projectDetailsContainer ${fade ? 'fade-out' : ''}`}>
                        <p className="projectText">{projectsRef.current[currentIndex].projectName}</p>
                        <p className="projectText">{projectsRef.current[currentIndex].projectYear}</p>
                        <p className="projectText">{projectsRef.current[currentIndex].projectDetails}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
