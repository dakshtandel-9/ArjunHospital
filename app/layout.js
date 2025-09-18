import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arjun Hospital - Quality Healthcare in Kadapa | 24x7 Emergency Care",
  description: "Arjun Hospital provides 24x7 emergency care, advanced diagnostics, specialized medical treatments, and comprehensive healthcare services in Kadapa. Expert doctors, modern facilities, and patient-centered care.",
  keywords: "Arjun Hospital, Kadapa hospital, emergency care, healthcare, medical treatment, diagnostics, doctors, ICU, surgery, health checkup, medical services",
  authors: [{ name: "Arjun Hospital" }],
  creator: "Arjun Hospital",
  publisher: "Arjun Hospital",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
    ],
    apple: '/favicon.svg',
    shortcut: '/favicon.svg'
  },
  
  // Open Graph tags
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arjunhospital.com",
    siteName: "Arjun Hospital",
    title: "Arjun Hospital - Quality Healthcare in Kadapa | 24x7 Emergency Care",
    description: "Arjun Hospital provides 24x7 emergency care, advanced diagnostics, specialized medical treatments, and comprehensive healthcare services in Kadapa.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Arjun Hospital - Quality Healthcare in Kadapa",
      },
    ],
  },
  
  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    site: "@ArjunHospital",
    creator: "@ArjunHospital",
    title: "Arjun Hospital - Quality Healthcare in Kadapa",
    description: "24x7 emergency care, advanced diagnostics, and specialized medical treatments in Kadapa.",
    images: ["/logo.png"],
  },
  
  // Additional meta tags
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Kadapa",
    "geo.position": "14.4673;78.8242",
    "ICBM": "14.4673, 78.8242",
    "contact": "6305800108",
    "coverage": "Worldwide",
    "distribution": "Global",
    "rating": "General",
    "revisit-after": "7 days",
    "language": "English",
    "theme-color": "#2563eb",
    "msapplication-TileColor": "#2563eb",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Arjun Hospital",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Arjun Hospital",
    "description": "Arjun Hospital provides 24x7 emergency care, advanced diagnostics, specialized medical treatments, and comprehensive healthcare services in Kadapa.",
    "url": "https://arjunhospital.com",
    "logo": "https://arjunhospital.com/logo.png",
    "image": "https://arjunhospital.com/logo.png",
    "telephone": "+91-6305800108",
    "email": "info@arjunhospital.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hospital Street",
      "addressLocality": "Kadapa",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "516001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "14.4673",
      "longitude": "78.8242"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Insurance",
    "medicalSpecialty": [
      "Emergency Medicine",
      "Internal Medicine",
      "Surgery",
      "Cardiology",
      "Orthopedics",
      "Pediatrics",
      "Gynecology",
      "Radiology"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Emergency Care"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "Diagnostic Services"
      },
      {
        "@type": "MedicalProcedure",
        "name": "ICU Services"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Surgical Procedures"
      }
    ],
    "hasCredential": "Licensed Hospital",
    "founder": "Dr. Arjun",
    "foundingDate": "2010",
    "sameAs": [
      "https://www.facebook.com/arjunhospital",
      "https://www.instagram.com/arjunhospital",
      "https://twitter.com/arjunhospital"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
