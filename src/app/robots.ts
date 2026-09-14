import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/donar/exito"],
      },
    ],
    sitemap: "https://duchasinfin.com/sitemap.xml",
  };
}
