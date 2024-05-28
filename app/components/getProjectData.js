import { client } from "../lib/sanity";

async function getData() {
  const query = `
    *[_type == "projects"] | order(projectOrder asc) {
      "projectYear": projectYear,
      "projectDetails": projectDetails,
      "projectName": projectName,
      "imagePath": projectImage.asset -> url,
      "videoUrl": videoUrl
    }`;

  const data = await client.fetch(query);
  return data.map(project => {
    const embedUrl = project.videoUrl ? `https://player.vimeo.com/video/${project.videoUrl}&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&background=1` : null;

    return {
      ...project,
      mediaType: embedUrl ? 'vimeo' : 'image',
      mediaPath: embedUrl || project.imagePath
    };
  });
}

export default async function getProjectData() {
  const data = await getData();
  return data;
}
