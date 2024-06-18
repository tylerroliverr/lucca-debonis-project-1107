"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useWelcome } from './3dLogoContext';
import ProjectDisplay from './projectDisplay';
import ProjectNav from './projectNav';
import HoverLink from './hoverLink';
import GlassLogo from './3dlogo';
import Loader from './loader';

export default function Hero({ initialData }) {
    const [projects, setProjects] = useState([]);
    const projectsRef = useRef([]);
    const { setIsWelcome, welcomeImageRef, setCurrentIndex, currentIndex } = useWelcome();

    useEffect(() => {
        // Create the welcome image component
        const welcomeImage = {
            type: 'welcome',
            component: (
                <div ref={welcomeImageRef} className='glassContainer'>
                    <div className='glassLogo'>
                        <GlassLogo />
                    </div>
                </div>
            ),
        };
        // Prepend "welcome" image component to the projectsRef array
        projectsRef.current = [welcomeImage, ...initialData.projects];
        // Shuffle the array excluding the "welcome" image component
        shuffleArray(projectsRef.current, 1);
        setProjects(projectsRef.current);
    }, [initialData, welcomeImageRef]);

    useEffect(() => {
        setIsWelcome(projects[currentIndex]?.type === 'welcome');
    }, [currentIndex, projects, setIsWelcome]);

    const shuffleArray = (array, startIndex = 0) => {
        for (let i = array.length - 1; i > startIndex; i--) {
            const j = Math.floor(Math.random() * (i - startIndex + 1)) + startIndex;
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 700px)").matches;

    const handleNext = () => {
        if(isMobile) {
            let nextIndex = currentIndex + 1;
            while (nextIndex < projects.length) {
                if (hasContent(projects[nextIndex])) {
                    break;
                }
                nextIndex++;
            }
            setCurrentIndex(nextIndex >= projects.length ? 0 : nextIndex);
        } else {
            setCurrentIndex(prevIndex =>
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const hasContent = (project) => {
        if (isMobile) {
            return (
                project.imagePath || project.imagePathMobile || project.type === 'welcome'
            );
        }
    };

    return (
        <>
            <Loader />
            <HoverLink />
            <ProjectNav handlePrev={handlePrev} handleNext={handleNext} />
            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <ProjectDisplay
                        key={index}
                        project={project}
                        isActive={currentIndex === index}
                    />
                ))}
            </div>
        </>
    );
}