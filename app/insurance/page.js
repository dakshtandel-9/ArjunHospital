import Link from 'next/link';

export const metadata = { title: "Insurance - Arjun Hospital" };

export default function InsurancePage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Insurance & Panels</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            We assist with cashless and reimbursement claims across major insurance panels. Our billing team coordinates with TPAs to make your paperwork simple and stress‑free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">How We Help</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Cashless admission guidance</li>
                <li>Document review and submission</li>
                <li>Coordination with insurers/TPAs</li>
                <li>Transparent billing support</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">What To Bring</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <li>Insurance card and ID proof</li>
                <li>Policy/TPA details</li>
                <li>Previous medical records</li>
                <li>Referral letter if applicable</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link href="tel:+916305800108" className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-6 py-3 text-base font-semibold hover:bg-red-700 transition-colors">Call Billing Desk</Link>
              <Link href="https://api.whatsapp.com/send/?phone=916305800108&text=Insurance%20support&type=phone_number&app_absent=0" className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-6 py-3 text-base font-semibold hover:bg-blue-600 hover:text-white transition-colors">WhatsApp Support</Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Related Services</h3>
              <ul className="space-y-2 text-blue-700">
                <li><Link href="/emergency-care" className="hover:underline">Emergency Care</Link></li>
                <li><Link href="/icu" className="hover:underline">ICU</Link></li>
                <li><Link href="/general-medicine" className="hover:underline">General Medicine</Link></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Insurance FAQs</h3>
              <div className="space-y-3">
                <details>
                  <summary className="cursor-pointer font-medium text-gray-900">Do you support cashless admission?</summary>
                  <p className="mt-2 text-gray-700">Yes, for partnered panels. We confirm eligibility and guide the process.</p>
                </details>
                <details>
                  <summary className="cursor-pointer font-medium text-gray-900">How long do reimbursements take?</summary>
                  <p className="mt-2 text-gray-700">Timelines vary by insurer. Complete documentation helps speed the settlement.</p>
                </details>
                <details>
                  <summary className="cursor-pointer font-medium text-gray-900">What documents are mandatory?</summary>
                  <p className="mt-2 text-gray-700">ID proof, insurance card, policy details, medical records, and bills are essential.</p>
                </details>
              </div>
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