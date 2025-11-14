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
    "/emergency-hospital-kadapa",
    "/best-icu-kadapa",
    "/gynecology-dr-sireesha-kadapa",
    "/infertility-treatment-kadapa",
    "/ortho-hospital-kadapa",
    "/cosmetology-kadapa",
    "/dermatology-kadapa",
    "/diabetes-care-kadapa",
    "/fever-hospital-kadapa",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}