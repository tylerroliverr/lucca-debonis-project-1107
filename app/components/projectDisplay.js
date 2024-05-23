import React from 'react';

const ProjectDisplay = ({ fade, currentIndex, projectsRef }) => {
    return (
        <div className="heroContainer">
            {projectsRef.current && projectsRef.current.length > 0 && (
                <div className={`projectContainer ${fade ? 'fade-out' : ''}`}>
                    <div className="projectImageContainer">
                        <img className="projectImg" src={projectsRef.current[currentIndex].imagePath} alt="Project" />
                    </div>
                    <div className={`projectDetailsContainer ${fade ? 'fade-out' : ''}`}>
                        <p className="projectText">{projectsRef.current[currentIndex].projectName}</p>
                        <p className="projectText">{projectsRef.current[currentIndex].projectYear}</p>
                        <p className="projectText">{projectsRef.current[currentIndex].projectDetails}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDisplay;
