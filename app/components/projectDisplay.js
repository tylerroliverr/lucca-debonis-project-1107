import React from 'react';
import LazyImage from './LazyImage';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

const ProjectDisplay = ({ project, isActive }) => {
    const {
        type,
        component,
        mediaType,
        mediaPath,
        projectName,
        projectYear,
        projectDetails,
        thumbnailUrl,
    } = project;

    const videoRef = useRef(null);

    useEffect(() => {
        if (mediaType === 'vimeo' && videoRef.current) {
            if (isActive) {
                videoRef.current.src = mediaPath;
            } else {
                videoRef.current.src = ''; // Clear the src to stop the video
            }
        }
    }, [isActive, mediaType, mediaPath]);

    return (
        <div
            className={`projectContainer ${isActive ? 'active' : 'inactive'}`}
            style={{ opacity: isActive ? 1 : 0 }}
        >
            {type === 'welcome' ? (
                component
            ) : (
                <>
                    <div className="projectImageContainer">
                        {mediaType === 'vimeo' ? (
                            <div className="videoWrapper">
                                <div className='loadingGifContainer'>
                                    <img className='loadingGif' src='/loadingicon.gif'></img>
                                </div>
                                <img src={thumbnailUrl} />
                                <iframe
                                    ref={videoRef}
                                    className="projectVideo"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                ></iframe>
                            </div>
                        ) : (
                            <>
                                {project.imagePathMobile && (
                                    <Image
                                    className='projectImg projectImgMobile'
                                    src={project.imagePathMobile}
                                    alt={project.projectName}
                                    fill={true}
                                    quality={100}
                                />
                                )}
                                {project.imagePath && (
                                    // <LazyImage
                                    //     className="projectImg projectImgDesktop"
                                    //     src={project.imagePath}
                                    //     alt="Project"
                                    // />
                                    <Image
                                        className='projectImg projectImgDesktop'
                                        src={project.imagePath}
                                        alt={project.projectName}
                                        fill={true}
                                        quality={100}
                                    />
                                )}
                            </>
                        )}
                    </div>
                    <div className="projectDetailsContainer">
                        <p className="projectText">{projectName}</p>
                        <p className="projectText">{projectYear}</p>
                        <p className="projectText">{projectDetails}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectDisplay;
