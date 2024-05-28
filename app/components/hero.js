"use client";
import React, { useEffect, useState, useRef } from 'react';
import getProjectData from './getProjectData';
import ProjectDisplay from './projectDisplay';
import ProjectNav from './projectNav';
import HoverLink from './hoverLink';
import GlassLogo from './3dlogo';

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
                    // Prepend "welcome" image component to the projectsRef array
                    projectsRef.current = [createWelcomeImage(), ...data];
                    // Shuffle the array excluding the "welcome" image component
                    shuffleArray(projectsRef.current, 1);
                    setProjects(projectsRef.current);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const createWelcomeImage = () => {
        // Return a React component for the welcome image with an identifier
        return {
            type: 'welcome',
            component: (
                <div className='glassContainer'>
                    <div className='glassLogo'>
                        <GlassLogo />
                    </div>
                </div>
            ),
        };
    };

    const shuffleArray = (array, startIndex = 0) => {
        for (let i = array.length - 1; i > startIndex; i--) {
            const j = Math.floor(Math.random() * (i - startIndex + 1)) + startIndex;
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const handlePrev = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === 0 ? projectsRef.current.length - 1 : prevIndex - 1
            );
            setFade(false);
        }, 300);
    };

    const handleNext = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === projectsRef.current.length - 1 ? 0 : prevIndex + 1
            );
            setFade(false);
        }, 300);
    };

    return (
        <>
            <HoverLink />
            <ProjectNav handlePrev={handlePrev} handleNext={handleNext} />
            <ProjectDisplay fade={fade} currentIndex={currentIndex} projectsRef={projectsRef} />
        </>
    );
}
