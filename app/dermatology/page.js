import Link from 'next/link';
import { getBaseUrl } from '@/lib/site';

export const metadata = { title: "Dermatology - Arjun Hospital" };

export default function DermatologyPage() {
  const siteUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dermatology",
    "serviceType": "Dermatology",
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Dermatology</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive care in Kadapa for skin, hair, and nail concerns including acne, pigmentation, eczema, psoriasis, hair fall, and nail disorders. We combine medical therapy with advanced procedures to achieve clear, healthy skin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Treatments</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Acne and scar management</li>
                <li>Hyperpigmentation and melasma care</li>
                <li>Eczema, psoriasis, and allergy control</li>
                <li>Hair fall and dandruff therapy</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Procedures</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>Chemical peels</li>
                <li>Micro‑needling</li>
                <li>Cryotherapy</li>
                <li>Minor lesion removal</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link href="tel:+916305800108" className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-6 py-3 text-base font-semibold hover:bg-red-700 transition-colors">Call to Book</Link>
              <Link href="https://api.whatsapp.com/send/?phone=916305800108&text&type=phone_number&app_absent=0" className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-6 py-3 text-base font-semibold hover:bg-blue-600 hover:text-white transition-colors">WhatsApp Us</Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Related Services</h3>
              <ul className="space-y-2 text-blue-700">
                <li><Link href="/cosmetology" className="hover:underline">Cosmetology</Link></li>
                <li><Link href="/general-medicine" className="hover:underline">General Medicine</Link></li>
                <li><Link href="/diabetology" className="hover:underline">Diabetology</Link></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dermatology FAQs</h3>
              <div className="space-y-3">
                <details>
                  <summary className="cursor-pointer font-medium text-gray-900">Will acne scars improve?</summary>
                  <p className="mt-2 text-gray-700">Combination therapy including peels and micro‑needling can reduce scars over time.</p>
                </details>
                <details>
                  <summary className="cursor-pointer font-medium text-gray-900">How do you treat melasma?</summary>
                  <p className="mt-2 text-gray-700">We use topical therapy, sun protection, and tailored procedures to manage pigmentation.</p>
                </details>
                <details>
                  <summary className="cursor-pointer font-medium text-gray-900">Is dandruff curable?</summary>
                  <p className="mt-2 text-gray-700">Dandruff is controllable with medicated shampoos and scalp care routines.</p>
                </details>
              </div>
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