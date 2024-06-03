import React, { useState, useEffect } from 'react';

const ProjectDisplay = ({ fade, currentIndex, projectsRef }) => {
   const [loading, setLoading] = useState(true);
   const [progress, setProgress] = useState(0);

   const hasProjects = projectsRef.current && projectsRef.current.length > 0;
   const currentProject = hasProjects ? projectsRef.current[currentIndex] : null;

   useEffect(() => {
      setLoading(true); // Reset loading state on project change
      setProgress(0); // Reset progress
   }, [currentIndex]);

   useEffect(() => {
      if (loading) {
         const interval = setInterval(() => {
            setProgress((prev) => {
               if (prev < 95) {
                  return prev + 5; // Increase progress
               } else {
                  clearInterval(interval); // Stop at 95%
                  return prev;
               }
            });
         }, 70); // Update progress every 30ms

         return () => clearInterval(interval); // Cleanup interval on component unmount or load state change
      }
   }, [loading]);

   const handleVideoLoad = () => {
      setLoading(false);
      setProgress(100); // Set progress to 100% on load
   };

   if (!hasProjects) return null;

   const {
      type,
      component,
      mediaType,
      mediaPath,
      imagePathMobile,
      imagePath,
      projectName,
      projectYear,
      projectDetails,
   } = currentProject;

   return (
      <div className="heroContainer">
         <div className={`projectContainer ${fade ? 'fade-out' : ''}`}>
            {type === 'welcome' ? (
               component
            ) : (
               <>
                  <div className="projectImageContainer">
                     {mediaType === 'vimeo' ? (
                        <div className="videoWrapper">
                           {loading && (
                              <div className="loadingBarVideo">
                                 <div className="progressV">
                                    <div
                                       className="progressBarV"
                                       style={{ width: `${progress}%` }}
                                    >
                                    </div>
                                 </div>
                              </div>
                           )}
                           <iframe
                              src={mediaPath}
                              className="projectVideo"
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              onLoad={handleVideoLoad}
                           ></iframe>
                        </div>
                     ) : (
                        <>
                           {imagePathMobile && (
                              <img
                                 className="projectImg projectImgMobile"
                                 src={imagePathMobile}
                                 alt="Project Mobile"
                                 loading="lazy"
                              />
                           )}
                           {imagePath && (
                              <img
                                 className="projectImg projectImgDesktop"
                                 src={imagePath}
                                 alt="Project"
                                 loading="lazy"
                              />
                           )}
                        </>
                     )}
                  </div>
                  <div className={`projectDetailsContainer ${fade ? 'fade-out' : ''}`}>
                     <p className="projectText">{projectName}</p>
                     <p className="projectText">{projectYear}</p>
                     <p className="projectText">{projectDetails}</p>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default ProjectDisplay;
