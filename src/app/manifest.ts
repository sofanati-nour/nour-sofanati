import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "نور صوفاناتي",
    short_name: "نور صوفاناتي",
    description: "مدونة نور صوفاناتي",
    start_url: "/",
    display: "browser",
    orientation: "portrait",
    theme_color: "#1f2937",
    background_color: "#101928",
  };
}
