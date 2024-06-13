import { client } from "../lib/sanity";
import axios from "axios";

async function getData() {
  const query = `
    *[_type == "projects"] | order(projectOrder asc) {
      "projectYear": projectYear,
      "projectDetails": projectDetails,
      "projectName": projectName,
      "imagePath": projectImage.asset -> url,
      "imagePathMobile": projectImageMobile.asset -> url,
      "videoUrl": videoUrl
    }`;

  try {
    const data = await client.fetch(query);

    // Fetch Vimeo thumbnails
    const updatedData = await Promise.all(
      data.map(async (project) => {
        const embedUrl = project.videoUrl ? `https://player.vimeo.com/video/${project.videoUrl}&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&background=1` : null;

        let mediaType;
        let mediaPath;

        if (embedUrl) {
          mediaType = 'vimeo';
          mediaPath = embedUrl;

          // Fetch Vimeo thumbnail
          try {
            const response = await axios.get(`https://vimeo.com/api/v2/video/${project.videoUrl}.json`);
            const { thumbnail_large } = response.data[0];
            project.thumbnailUrl = thumbnail_large;
          } catch (error) {
            console.error('Error fetching Vimeo thumbnail:', error);
          }
        } else if (project.imagePathMobile) {
          mediaType = 'imageMobile';
          mediaPath = project.imagePathMobile;
        } else if (project.imagePath) {
          mediaType = 'image';
          mediaPath = project.imagePath;
        } else {
          mediaType = null;
          mediaPath = null;
        }

        return {
          ...project,
          mediaType,
          mediaPath
        };
      })
    );

    return updatedData;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return [];
  }
}


export default async function getProjectData() {
  const data = await getData();
  return data;
}