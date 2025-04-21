import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "نور صوفاناتي",
    short_name: "نور صوفاناتي",
    description: "المدونة الشخصية لنور صوفاناتي - مطور برمجيات ومحتوى تقني",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    theme_color: "#1f2937",
    background_color: "#101928",
    icons: [
      {
        src: "/nour-sofanati-portrait.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/nour-sofanati-portrait.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
