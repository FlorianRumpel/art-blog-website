import DesginFilter from "@/components/DesginFilter";
import {Metadata} from "next";
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

const metaMap: any = {
  grafikdesign: {
    title: "Grafikdesign Projekte",
    description: "Entdecke inspirierende Grafikdesign Projekte.",
  },
  urbandesign: {
    title: "Urban Design Projekte",
    description: "Entdecke faszinierende Urban Design Projekte.",
  },
  fotografie: {
    title: "Fotografie Projekte",
    description: "Entdecke beeindruckende Fotografie Projekte.",
  },
  kunst: {
    title: "Kunst Projekte",
    description: "Entdecke kreative Kunst Projekte.",
  },
  produktdesign: {
    title: "Produktdesign Projekte",
    description: "Entdecke innovative Produktdesign Projekte.",
  },
  materialdesign: {
    title: "Materialdesign Projekte",
    description: "Entdecke kreative Materialdesign Projekte.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: {slug?: string};
}): Promise<Metadata> {
  const slug = params.slug ? params.slug[0].toLowerCase() : "projects";
  const meta = metaMap[slug] || {};
  return {
    title: meta.title || "Alle Projekte",
    description: meta.description || "Entdecke spannende Design Projekte",
  };
}

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
