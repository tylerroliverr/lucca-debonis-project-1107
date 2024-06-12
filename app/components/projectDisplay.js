import React from 'react';
import LazyImage from './LazyImage';
import { useRef, useEffect } from 'react';

const ProjectDisplay = ({ project, isActive }) => {
    const {
        type,
        component,
        mediaType,
        mediaPath,
        projectName,
        projectYear,
        projectDetails,
    } = project;

    const videoRef = useRef(null);
    const videoRefUnder = useRef(null);

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
                                    <LazyImage
                                        className="projectImg projectImgMobile"
                                        src={project.imagePathMobile}
                                        alt="Project Mobile"
                                    />
                                )}
                                {project.imagePath && (
                                    <LazyImage
                                        className="projectImg projectImgDesktop"
                                        src={project.imagePath}
                                        alt="Project"
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
