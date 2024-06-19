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