import HomePage from "@/components/homePage/HomePage";

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
  return (
    <HomePage />
  );
}
