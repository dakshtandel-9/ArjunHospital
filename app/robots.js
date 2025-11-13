import { getBaseUrl } from "@/lib/site";

export default function robots() {
  const siteUrl = getBaseUrl();
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}