import Hero from "./components/hero";
import getProjectData from "./components/getProjectData";

export default async function Home() {
  const projects = await getProjectData();
  
  return (
    <main>
      <Hero projects={projects}/>
    </main>
  );
}