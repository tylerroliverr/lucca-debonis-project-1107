import Image from 'next/image';

export default function MobileProjects({ project, isActive }) {
    const {
        type,
        component,
        mediaType,
        projectName,
        projectYear,
        projectDetails,
    } = project;

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
                        <>
                            {project.imagePathMobile && (
                                <Image
                                    className='projectImg projectImgMobile'
                                    src={project.imagePathMobile}
                                    alt={project.projectName}
                                    fill={true}
                                    quality={100}
                                    sizes='100vw'
                                />
                            )}
                            {project.imagePath && (
                                <Image
                                    className='projectImg projectImgDesktop'
                                    src={project.imagePath}
                                    alt={project.projectName}
                                    fill={true}
                                    quality={100}
                                    sizes='100vw'
                                />
                            )}
                        </>
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
