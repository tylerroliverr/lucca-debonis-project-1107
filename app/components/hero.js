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
    const [loading, setLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState(0);
    const projectsRef = useRef([]);
    const { setIsWelcome, welcomeImageRef, setCurrentIndex, currentIndex } = useWelcome();

    useEffect(() => {
        if (!loading) {
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
        }
    }, [loading, initialData, welcomeImageRef]);

    useEffect(() => {
        if (projects.length > 0 && projects[currentIndex]?.type === 'welcome') {
            setIsWelcome(true);
        } else {
            setIsWelcome(false);
        }
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

    const handleNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const totalAssets = initialData.projects.filter(project => project.mediaType === 'image').length;
    const progress = Math.floor((loadedImages / totalAssets) * 100);

    return (
        <>
            {loading ? (
                <div className='loadingBar'>
                    <div className='percentage'>{Math.round(progress)}%</div>
                </div>
            ) : (
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
            )}
        </>
    );
}