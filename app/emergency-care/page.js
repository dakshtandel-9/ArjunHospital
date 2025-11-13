import Link from 'next/link';
import { getBaseUrl } from '@/lib/site';

export const metadata = { title: "Emergency Care - Arjun Hospital" };

export default function EmergencyCarePage() {
  const siteUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Care",
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Emergency Care</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our 24x7 Emergency Department in Kadapa provides immediate, life‑saving care with trained physicians, advanced monitoring, and rapid response protocols. From trauma and cardiac events to severe infections and respiratory distress, our team stabilizes patients quickly and coordinates seamless transfer to ICU or specialist care when required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Why Choose Our Emergency Department</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Round‑the‑clock emergency physicians and paramedical staff</li>
                <li>Advanced life support, oxygen, defibrillator, and rapid triage</li>
                <li>Fast diagnostics: ECG, X‑ray, ultrasound, and lab support</li>
                <li>Direct handoff to ICU and specialist teams when needed</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Conditions We Treat</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>Heart attack, chest pain</li>
                <li>Stroke‑like symptoms</li>
                <li>Accidents and trauma</li>
                <li>Breathing difficulty, asthma</li>
                <li>High fever, severe infections</li>
                <li>Poisoning, dehydration, seizures</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">What to Expect</h2>
              <p className="text-gray-700">
                On arrival, our triage nurse assesses urgency and initiates stabilization. The duty physician orders immediate investigations and treatment while keeping family informed. If intensive care is indicated, we coordinate transfer to our ICU and continue close monitoring.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link href="tel:+916305800108" className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-6 py-3 text-base font-semibold hover:bg-red-700 transition-colors">Call 24x7 Emergency</Link>
              <Link href="https://api.whatsapp.com/send/?phone=916305800108&text&type=phone_number&app_absent=0" className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-6 py-3 text-base font-semibold hover:bg-blue-600 hover:text-white transition-colors">WhatsApp Us</Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Related Services</h3>
              <ul className="space-y-2 text-blue-700">
                <li><Link href="/icu" className="hover:underline">ICU</Link></li>
                <li><Link href="/general-medicine" className="hover:underline">General Medicine</Link></li>
                <li><Link href="/orthopedics" className="hover:underline">Orthopedics</Link></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Care FAQs</h3>
              <div className="space-y-3">
                <details className="group">
                  <summary className="cursor-pointer font-medium text-gray-900">Do you have 24x7 ambulance support?</summary>
                  <p className="mt-2 text-gray-700">Yes. Our ambulances are staffed by trained paramedics with oxygen and life‑support equipment. Call +916305800108 for immediate dispatch.</p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-medium text-gray-900">How quickly will a doctor see the patient?</summary>
                  <p className="mt-2 text-gray-700">We follow rapid triage. Critical cases are attended immediately; other cases are prioritized based on urgency.</p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-medium text-gray-900">Can you manage heart attack and stroke?</summary>
                  <p className="mt-2 text-gray-700">Yes. We stabilize, start evidence‑based protocols, and coordinate urgent specialist care and ICU admission when indicated.</p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-medium text-gray-900">Do you accept insurance for emergencies?</summary>
                  <p className="mt-2 text-gray-700">We support cashless admission for eligible policies. Our insurance desk assists with pre‑authorization round the clock.</p>
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