import { getBaseUrl } from "@/lib/site";

export default function sitemap() {
  const siteUrl = getBaseUrl();
  const lastModified = new Date();
  const routes = [
    "/",
    "/emergency-care",
    "/icu",
    "/gynecology",
    "/infertility",
    "/orthopedics",
    "/dermatology",
    "/cosmetology",
    "/diabetology",
    "/general-medicine",
    "/insurance",
    "/contact",
    "/about",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}