import Link from 'next/link';
import { getBaseUrl } from '@/lib/site';

export const metadata = { title: "Emergency Hospital in Kadapa - Arjun Hospital" };

export default function EmergencyHospitalKadapaPage() {
  const siteUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Hospital in Kadapa",
    "serviceType": "Emergency Care",
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Emergency Hospital in Kadapa</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            24x7 emergency hospital in Kadapa with rapid triage, trained physicians, advanced monitoring, and seamless ICU handoff. Immediate care for trauma, cardiac events, stroke‑like symptoms, severe infections, and breathing difficulty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">What We Manage</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Heart attack, chest pain, and arrhythmias</li>
                <li>Stroke‑like symptoms and seizures</li>
                <li>Accidents, trauma, and fractures</li>
                <li>High fever, severe infections, and sepsis</li>
                <li>Breathing difficulty, asthma, and pneumonia</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Why Choose Us</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>Round‑the‑clock emergency doctors and paramedical staff</li>
                <li>Advanced life support, oxygen, and defibrillator</li>
                <li>Fast diagnostics: ECG, X‑ray, ultrasound, lab</li>
                <li>Direct ICU admission when indicated</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link href="tel:+916305800108" className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-6 py-3 text-base font-semibold hover:bg-red-700 transition-colors">Call 24x7 Emergency</Link>
              <Link href="https://api.whatsapp.com/send/?phone=916305800108&text&type=phone_number&app_absent=0" className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-6 py-3 text-base font-semibold hover:bg-blue-600 hover:text-white transition-colors">WhatsApp</Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Related Services</h3>
              <ul className="space-y-2 text-blue-700">
                <li><Link href="/icu" className="hover:underline">ICU</Link></li>
                <li><Link href="/orthopedics" className="hover:underline">Orthopedics</Link></li>
                <li><Link href="/general-medicine" className="hover:underline">General Medicine</Link></li>
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