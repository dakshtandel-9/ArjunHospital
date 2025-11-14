import Link from 'next/link';
import { getBaseUrl } from '@/lib/site';

export const metadata = { title: "Gynecology – Dr. Sireesha in Kadapa - Arjun Hospital" };

export default function GynecologyDrSireeshaKadapaPage() {
  const siteUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gynecology – Dr. Sireesha in Kadapa",
    "serviceType": "Gynecology",
    "provider": {
      "@type": "MedicalClinic",
      "name": "Arjun Hospital",
      "url": siteUrl,
      "telephone": "+91 63058 00108",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kadapa",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      }
    },
    "areaServed": { "@type": "City", "name": "Kadapa" }
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Gynecology – Dr. Sireesha, Kadapa</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Compassionate gynecology and maternity care led by Dr. Sireesha. Antenatal care, deliveries, laparoscopy for fibroids and cysts, PCOS management, and adolescent health with privacy‑focused consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Core Services</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Antenatal checkups and high‑risk pregnancy management</li>
                <li>Normal and C‑section deliveries</li>
                <li>Laparoscopy for fibroids, cysts, endometriosis</li>
                <li>PCOS, menstrual disorders, and adolescent health</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Why Patients Choose Us</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>Experienced gynecologist and caring nurses</li>
                <li>Modern OT and recovery facilities</li>
                <li>Privacy‑focused consultations</li>
                <li>Post‑partum and newborn care guidance</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link href="tel:+916305800108" className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-6 py-3 text-base font-semibold hover:bg-red-700 transition-colors">Call to Book</Link>
              <Link href="https://api.whatsapp.com/send/?phone=916305800108&text&type=phone_number&app_absent=0" className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-6 py-3 text-base font-semibold hover:bg-blue-600 hover:text-white transition-colors">WhatsApp</Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Related Services</h3>
              <ul className="space-y-2 text-blue-700">
                <li><Link href="/infertility" className="hover:underline">Infertility</Link></li>
                <li><Link href="/cosmetology" className="hover:underline">Cosmetology</Link></li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="text-blue-600 font-semibold hover:underline">Back to Home</Link>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
    </section>
  );
}