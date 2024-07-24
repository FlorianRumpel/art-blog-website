import DesginFilter from "@/components/DesginFilter";
import {notFound} from "next/navigation";
import React from "react";

function Page({params}: {params: {slug?: string}}) {
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

  if (params.slug === undefined) return <DesginFilter filter="projects" />;
  else if (routes.includes(params.slug[0].toLowerCase())) {
    return <DesginFilter filter={filterMap[params.slug[0].toLowerCase()]} />;
  } else {
    return notFound();
  }
}

export default Page;
