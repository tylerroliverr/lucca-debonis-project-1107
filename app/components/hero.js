"use client";
import React, { useEffect, useState, useRef } from 'react';
import getProjectData from './getProjectData';
import ProjectDisplay from './projectDisplay';
import ProjectNav from './projectNav';
import HoverLink from './hoverLink';

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
                    // Prepend "welcome" image to the projectsRef array
                    projectsRef.current = [createWelcomeImage(), ...data];
                    // Shuffle the array excluding the "welcome" image
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
        // Assuming you have the path to the welcome image in your public folder
        return {
            imagePath: '', // Adjust the path accordingly
            projectName: 'Welcome',
            projectYear: '',
            projectDetails: 'Welcome to our projects!'
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
        }, 0);
    };

    const handleNext = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === projectsRef.current.length - 1 ? 0 : prevIndex + 1
            );
            setFade(false);
        }, 0);
    };

    return (
        <>
            <HoverLink/>
            <ProjectNav handlePrev={handlePrev} handleNext={handleNext} />
            <ProjectDisplay fade={fade} currentIndex={currentIndex} projectsRef={projectsRef} />
        </>
    );
}