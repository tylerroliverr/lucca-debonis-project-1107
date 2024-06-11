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

   useEffect(() => {
      if (mediaType === 'vimeo' && videoRef.current) {
          let updatedSrc = mediaPath;
          if (isActive) {
              updatedSrc += '&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&background=1';
          } else {
              updatedSrc = mediaPath; // Reset to original URL without autoplay
          }
          if (videoRef.current.src !== updatedSrc) {
              videoRef.current.src = updatedSrc;
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
                               <iframe
                                   ref={videoRef}
                                   src={mediaPath}
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
