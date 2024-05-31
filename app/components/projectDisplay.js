import React from 'react';

const ProjectDisplay = ({ fade, currentIndex, projectsRef }) => {
    const currentProject = projectsRef.current[currentIndex];

    return (
        <div className="heroContainer">
            {projectsRef.current && projectsRef.current.length > 0 && (
                <div className={`projectContainer ${fade ? 'fade-out' : ''}`}>
                    {currentProject.type === 'welcome' ? (
                        currentProject.component
                    ) : (
                        <>
                            <div className="projectImageContainer">
                                {currentProject.mediaType === 'vimeo' ? (
                                    <div className="videoWrapper">
                                        <iframe
                                            src={currentProject.mediaPath}
                                            className="projectVideo"
                                            frameBorder="0"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                        ></iframe>
                                    </div>
                                ) : (
                                    <>
                                        {currentProject.imagePathMobile && (
                                            <img
                                                className="projectImg projectImgMobile"
                                                src={currentProject.imagePathMobile}
                                                alt="Project Mobile"
                                            />
                                        )}
                                        {currentProject.imagePath && (
                                            <img
                                                className="projectImg projectImgDesktop"
                                                src={currentProject.imagePath}
                                                alt="Project"
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                            <div className={`projectDetailsContainer ${fade ? 'fade-out' : ''}`}>
                                <p className="projectText">{currentProject.projectName}</p>
                                <p className="projectText">{currentProject.projectYear}</p>
                                <p className="projectText">{currentProject.projectDetails}</p>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectDisplay;
