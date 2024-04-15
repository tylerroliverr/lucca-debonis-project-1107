import { client } from "../lib/sanity";

async function getData() {
    const query = `
    *[_type == "about"] {
        capabilities,
        "blurb": aboutBlurb,
        awards
      }[0]`

      const data = await client.fetch(query);
      return data;
};

export default async function getAboutData() {
    const data = await getData();
    return data;
}