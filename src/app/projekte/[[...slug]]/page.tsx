import DesginFilter from "@/components/DesginFilter";
import {notFound} from "next/navigation";
import React from "react";

const routes = [
  "grafikdesign",
  "urbandesign",
  "fotografie",
  "kunst",
  "produktdesign",
  "materialdesign",
];

const filterMap: any = {
  grafikdesign: "graphic",
  urbandesign: "urban",
  fotografie: "photo",
  kunst: "art",
  produktdesign: "product",
  materialdesign: "material",
};

function Page({params}: {params: {slug?: string}}) {
  if (params.slug === undefined) return <DesginFilter filter="projects" />;
  const slug = params.slug[0].toLowerCase();
  if (routes.includes(slug)) {
    return <DesginFilter filter={filterMap[slug]} />;
  } else {
    return notFound();
  }
}

export default Page;
