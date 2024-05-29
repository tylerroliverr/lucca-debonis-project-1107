import Hero from "./components/hero";
import getProjectData from "./components/getProjectData";

export default async function Home() {

  const data = await getProjectData();

  const initialData = {
    projects: data,
  };

  return (
    <main>
      <Hero initialData={initialData} />
    </main>
  );
}


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

