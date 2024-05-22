import { client } from "../lib/sanity";

async function getData() {
    const query = `
    *[_type == "projects"] | order(projectOrder asc) {
        "projectYear": projectYear,
        "projectDetails": projectDetails,
        "projectName": projectName,
        "imagePath": projectImage.asset -> url
      }`

      const data = await client.fetch(query);
      return data;
};

export default async function getProjectData() {
    const data = await getData();
    return data;
}

