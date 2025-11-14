import Link from 'next/link';
import { getBaseUrl } from '@/lib/site';

export const metadata = { title: "Infertility Treatment in Kadapa - Arjun Hospital" };

export default function InfertilityTreatmentKadapaPage() {
  const siteUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Infertility Treatment in Kadapa",
    "serviceType": "Infertility Treatment",
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Infertility Treatment in Kadapa</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive fertility care including cycle tracking, ovulation induction, IUI, and pre‑conception counseling. Personalized plans, lifestyle optimization, and minimally invasive procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Services We Provide</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Fertility workup and hormonal assessment</li>
                <li>Ovulation induction and timed plans</li>
                <li>IUI with ultrasound guidance</li>
                <li>Pre‑conception and lifestyle counseling</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Who Should Consider Care</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>Irregular cycles or suspected PCOS</li>
                <li>Male factor concerns</li>
                <li>Unexplained infertility</li>
                <li>Pre‑conception optimization</li>
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
                <li><Link href="/gynecology" className="hover:underline">Gynecology</Link></li>
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