"use client";
import React, { useEffect, useState, useRef } from 'react';
import ProjectDisplay from './projectDisplay';
import ProjectNav from './projectNav';
import HoverLink from './hoverLink';
import GlassLogo from './3dlogo';
import Loader from './loader';

export default function Hero({ initialData }) {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState(0);
    const projectsRef = useRef([]);

    useEffect(() => {
        async function preloadImages() {
            const promises = initialData.projects.map(project => {
                if (project.mediaType === 'image') {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.src = project.mediaPath;
                        img.onload = () => {
                            setLoadedImages(prev => prev + 1);
                            resolve();
                        };
                        img.onerror = reject;
                    });
                } else {
                    // Handle video preloading if necessary
                    return Promise.resolve();
                }
            });

            await Promise.all(promises);
            setLoading(false);
        }

        preloadImages();
    }, [initialData]);

    useEffect(() => {
        if (!loading) {
            // Create the welcome image component
            const welcomeImage = {
                type: 'welcome',
                component: (
                    <div className='glassContainer'>
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
    }, [loading, initialData]);

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
                    <ProjectDisplay fade={fade} currentIndex={currentIndex} projectsRef={projectsRef} />
                </>
            )}
        </>
    );
}