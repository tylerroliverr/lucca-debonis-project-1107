import React from 'react';

const ProjectNav = ({ handlePrev, handleNext }) => {
    return (
        <div className="navigationButtons">
            <div className="prevButton link" onClick={handlePrev}></div>
            <div className="nextButton link" onClick={handleNext}></div>
        </div>
    );
};

export default ProjectNav;
