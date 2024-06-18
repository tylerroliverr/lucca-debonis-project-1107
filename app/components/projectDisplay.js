import React from 'react';
import { useRef, useEffect, useState } from 'react';
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
        imagePath,
        imagePathMobile,
        videoThumbnail,
    } = project;

    const videoRef = useRef(null);

    useEffect(() => {
        if (mediaType === 'vimeo' && videoRef.current) {
            if (isActive) {
                videoRef.current.src = mediaPath;
            } else {
                setTimeout(() => {
                    videoRef.current.src = ``; // Clear the src to stop the video
                }, "600");
            }
        }
    }, [isActive, mediaType, mediaPath]);

    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 700px)").matches;

    if (!(imagePath || imagePathMobile || type === 'welcome') && isMobile) {
        return null;
    }

    return (
        <div
            className={`projectContainer ${isActive ? 'active' : 'inactive'}`}
            style={{ opacity: isActive ? 1 : 0 }}
        >
            {type === 'welcome' ? (
                component
            ) : (
                <>
                    {!isMobile ? (
                        <div className="projectImageContainer desktopProjectContainer">
                            {mediaType === 'vimeo' ? (
                                <div className="videoWrapper">
                                    <div className='loadingGifContainer'>
                                        <svg className='loadingGif' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200"><g><circle strokeDasharray="146.08405839192537 50.69468613064179" r="30" strokeWidth="2" stroke="#ffffff" fill="none" cy="50" cx="50">
                                            <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="2.4390243902439024s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
                                        </circle><g></g></g></svg>
                                        <img
                                            src={videoThumbnail}
                                            alt={projectName}
                                            className='videoThumbnail'
                                        />
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
                                    {imagePathMobile && (
                                        <Image
                                            className='projectImg projectImgMobile'
                                            src={imagePathMobile}
                                            alt={projectName}
                                            fill={true}
                                            quality={100}
                                            sizes='100vw'
                                        />
                                    )}
                                    {imagePath && (
                                        <Image
                                            className='projectImg projectImgDesktop'
                                            src={imagePath}
                                            alt={projectName}
                                            fill={true}
                                            quality={100}
                                            sizes='100vw'
                                        />
                                    )}
                                </>
                            )}
                        </div>
                    ) : (
                        <div className='projectImageContainer mobileProjectContainer'>
                            <>
                                {imagePathMobile && (
                                    <Image
                                        className='projectImg projectImgMobile'
                                        src={imagePathMobile}
                                        alt={projectName}
                                        fill={true}
                                        quality={100}
                                        sizes='100vw'
                                    />
                                )}
                                {imagePath && (
                                    <Image
                                        className='projectImg projectImgDesktop'
                                        src={imagePath}
                                        alt={projectName}
                                        fill={true}
                                        quality={100}
                                        sizes='100vw'
                                    />
                                )}
                            </>
                        </div>
                    )}
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
