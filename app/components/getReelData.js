import { client } from "../lib/sanity";

async function getData() {
    const query = `
    *[_type == "reel"] {
        "videoUrl": videoUrl
      }[0]`

      const data = await client.fetch(query);
      return data;
};

export default async function getReelData() {
    const data = await getData();
    return data;
}