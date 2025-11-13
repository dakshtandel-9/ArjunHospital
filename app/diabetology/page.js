import Link from 'next/link';
import { getBaseUrl } from '@/lib/site';

export const metadata = { title: "Diabetology - Arjun Hospital" };

export default function DiabetologyPage() {
  const siteUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Diabetology",
    "serviceType": "Diabetology",
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Diabetology</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Holistic care in Kadapa for diabetes and metabolic health. We focus on personalized lifestyle plans, medication optimization, and complication prevention for long‑term well‑being.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">What We Offer</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Type 1 and Type 2 management</li>
                <li>Gestational diabetes care</li>
                <li>Complication screening</li>
                <li>Dietary and activity coaching</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Care Approach</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>Evidence‑based medications</li>
                <li>Education and monitoring</li>
                <li>Weight and lipid control</li>
                <li>Foot and eye care referrals</li>
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
                <li><Link href="/general-medicine" className="hover:underline">General Medicine</Link></li>
                <li><Link href="/orthopedics" className="hover:underline">Orthopedics</Link></li>
                <li><Link href="/emergency-care" className="hover:underline">Emergency Care</Link></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Diabetology FAQs</h3>
              <div className="space-y-3">
                <details>
                  <summary className="cursor-pointer font-medium text-gray-900">How often should I monitor glucose?</summary>
                  <p className="mt-2 text-gray-700">Frequency depends on treatment. We guide monitoring plans suited to your regimen.</p>
                </details>
                <details>
                  <summary className="cursor-pointer font-medium text-gray-900">Can diabetes be reversed?</summary>
                  <p className="mt-2 text-gray-700">Remission is possible in some Type 2 cases with weight, diet, and activity changes.</p>
                </details>
                <details>
                  <summary className="cursor-pointer font-medium text-gray-900">What are warning signs of complications?</summary>
                  <p className="mt-2 text-gray-700">Foot numbness, vision changes, kidney issues. Early screening helps prevent progression.</p>
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