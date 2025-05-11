import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Moderno Next.js App",
    short_name: "Moderno",
    description: "A modern web application built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a1a",
    theme_color: "#d6ed17",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
