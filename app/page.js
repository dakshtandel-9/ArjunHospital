import HomePage from "@/components/homePage/HomePage";
import { getBaseUrl } from "@/lib/site";

export const metadata = {
  title: "Arjun Hospital - Best Healthcare Services in Kadapa | 24x7 Emergency Care",
  description: "Arjun Hospital offers comprehensive healthcare services in Kadapa with 24x7 emergency care, advanced diagnostics, ICU, surgery, OBG, orthopedics, and specialized medical treatments. Book appointment today.",
  keywords: "Arjun Hospital Kadapa, best hospital Kadapa, emergency care Kadapa, ICU services, surgery hospital, OBG specialist, orthopedic doctor, medical diagnostics, healthcare Kadapa, Dr Arjun Kumar, Dr Sireesha",
  openGraph: {
    title: "Arjun Hospital - Best Healthcare Services in Kadapa | 24x7 Emergency Care",
    description: "Comprehensive healthcare services with 24x7 emergency care, advanced diagnostics, and specialized treatments in Kadapa.",
    url: "https://arjunhospital.com",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Arjun Hospital - Quality Healthcare in Kadapa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Hospital - Best Healthcare Services in Kadapa",
    description: "24x7 emergency care, advanced diagnostics, and specialized medical treatments in Kadapa.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://arjunhospital.com",
  },
};

export default function Home() {
  const siteUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        "url": siteUrl,
        "name": "Arjun Hospital",
      },
      {
        "@type": "MedicalClinic",
        "@id": `${siteUrl}#clinic`,
        "name": "Arjun Hospital",
        "url": siteUrl,
        "image": `${siteUrl}/logo.png`,
        "telephone": "+91 63058 00108",
        "areaServed": { "@type": "City", "name": "Kadapa" },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kadapa",
          "addressRegion": "Andhra Pradesh",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "priceRange": "₹₹"
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}#business`,
        "name": "Arjun Hospital",
        "url": siteUrl,
        "image": `${siteUrl}/logo.png`,
        "telephone": "+91 63058 00108",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kadapa",
          "addressRegion": "Andhra Pradesh",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <>
      <HomePage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
