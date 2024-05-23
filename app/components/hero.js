"use client";
import React, { useEffect, useState, useRef } from 'react';
import getProjectData from './getProjectData';
import ProjectNav from './projectNav';
import ProjectDisplay from './projectDisplay';

export default function Hero() {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const projectsRef = useRef([]);

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

    useEffect(() => {
        async function fetchData() {
            try {
                let data = await getProjectData();
                if (data) {
                    data = shuffleArray(data);
                    setProjects(data);
                    projectsRef.current = data;
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
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
            <ProjectNav handlePrev={handlePrev} handleNext={handleNext} />
            <ProjectDisplay fade={fade} currentIndex={currentIndex} projectsRef={projectsRef} />
        </>
    );
}
