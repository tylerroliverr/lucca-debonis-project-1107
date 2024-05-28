"use client";
import { useState, useEffect } from 'react';
import Hero from "./components/hero";
import getProjectData from "./components/getProjectData";
import Loader from "./components/loader";

// export default function Home() {
//   const [hasEntered, setHasEntered] = useState(false); //CHANGE BACK
//   const [projects, setProjects] = useState(null);

//   const handleEnterClick = async () => {
//     setHasEntered(true);
//     const projectData = await getProjectData();
//     setProjects(projectData);
//   };

//   return (
//     <main>
//       {hasEntered ? (
//         <>
//           <Loader />
//           {projects && <Hero projects={projects} />}
//         </>
//       ) : (
//         <div className='enterDiv'>
//           <button onClick={handleEnterClick}>Enter</button>
//         </div>
//       )}
//     </main>
//   );
// }

export default function Home() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await getProjectData();
      setProjects(projectData);
    };

    fetchProjects();
  }, []);

  return (
    <main>
        <Loader />
        <Hero projects={projects} />
    </main>
  );
}

