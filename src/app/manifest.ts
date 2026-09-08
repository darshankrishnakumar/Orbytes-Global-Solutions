import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orbytes Global Solutions",
    short_name: "Orbytes",
    description:
      "Enterprise technology platform delivering managed cybersecurity, 24/7 IT operations, cloud migration, and IT consulting.",
    start_url: "/",
    display: "standalone",
    background_color: "#030714",
    theme_color: "#030714",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
