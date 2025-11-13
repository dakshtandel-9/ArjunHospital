import Link from 'next/link';

export const metadata = { title: "About - Arjun Hospital" };

export default function AboutPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">About Arjun Hospital</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            We are a patient‑first hospital serving Medchal and surrounding communities. Our departments collaborate to deliver timely diagnoses, compassionate care, and dependable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Integrity and transparency</li>
                <li>Clinical excellence</li>
                <li>Respect and empathy</li>
                <li>Continuous improvement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">What We Offer</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>Emergency & ICU services</li>
                <li>General and specialized care</li>
                <li>Insurance assistance</li>
                <li>Doctor‑led guidance</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link href="tel:+916305800108" className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-6 py-3 text-base font-semibold hover:bg-red-700 transition-colors">Call Us</Link>
              <Link href="https://api.whatsapp.com/send/?phone=916305800108&text=Hello&type=phone_number&app_absent=0" className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-6 py-3 text-base font-semibold hover:bg-blue-600 hover:text-white transition-colors">WhatsApp</Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Services</h3>
              <ul className="space-y-2 text-blue-700">
                <li><Link href="/emergency-care" className="hover:underline">Emergency Care</Link></li>
                <li><Link href="/icu" className="hover:underline">ICU</Link></li>
                <li><Link href="/general-medicine" className="hover:underline">General Medicine</Link></li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="text-blue-600 font-semibold hover:underline">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}