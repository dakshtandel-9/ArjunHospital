import Link from 'next/link';

export const metadata = { title: "Contact - Arjun Hospital" };

export default function ContactPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Reach our team for appointments, admissions, or general queries. We’re available round‑the‑clock for urgent care and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">How To Reach</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Call our emergency desk</li>
                <li>WhatsApp for quick responses</li>
                <li>Email for documents and reports</li>
                <li>Visit our reception</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Quick Contacts</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>Phone: +91 63058 00108</li>
                <li>WhatsApp: +91 63058 00108</li>
                <li>Email: arjunhospitalmedchal@gmail.com</li>
                <li>Address: Medchal, Telangana</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link href="tel:+916305800108" className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-6 py-3 text-base font-semibold hover:bg-red-700 transition-colors">Call Us</Link>
              <Link href="https://api.whatsapp.com/send/?phone=916305800108&text=Hello&type=phone_number&app_absent=0" className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-6 py-3 text-base font-semibold hover:bg-blue-600 hover:text-white transition-colors">WhatsApp</Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Services</h3>
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