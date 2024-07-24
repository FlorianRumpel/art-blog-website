import {Data} from "@/globalstate";
import {MetadataRoute} from "next";
const projectRoutes = [
  "grafikdesign",
  "urbandesign",
  "fotografie",
  "kunst",
  "produktdesign",
  "materialdesign",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(`${process.env.BASE_URL}/api/firebase`);
  const resJson = await res.json();
  const posts: Data[] = resJson.response;

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${process.env.BASE_URL}/details/${post.name
      .toLowerCase()
      .replaceAll(" ", "-")}`,
  }));
  const projectEntries: MetadataRoute.Sitemap = projectRoutes.map((route) => ({
    url: `${process.env.BASE_URL}/projekte/${route}`,
  }));
  return [
    {
      url: `${process.env.BASE_URL}`,
    },
    {
      url: `${process.env.BASE_URL}/persoenlich`,
    },

    ...projectEntries,
    ...postEntries,
  ];
}
