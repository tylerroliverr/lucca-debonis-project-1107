"use client";
import { useState } from 'react';
import Hero from "./components/hero";
import getProjectData from "./components/getProjectData";
import Loader from "./components/loader";
import setIsPlaying from './components/musicPlayer';

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [projects, setProjects] = useState(null);

  const handleEnterClick = async () => {
    setHasEntered(true);
    const projectData = await getProjectData();
    setProjects(projectData);
    // setIsPlaying(true);
  };

  return (
    <main>
      {hasEntered ? (
        <>
          <Loader />
          {projects && <Hero projects={projects} />}
        </>
      ) : (
        <div className='enterDiv'>
          <button onClick={handleEnterClick}>Enter</button>
        </div>
      )}
    </main>
  );
}
