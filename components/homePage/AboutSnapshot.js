import Link from 'next/link';
import Image from 'next/image';

export default function AboutSnapshot() {
  const highlights = [
    {
      number: '15+',
      label: 'Years of Excellence',
      description: 'Serving the community with dedication'
    },
    {
      number: '50+',
      label: 'Expert Doctors',
      description: 'Qualified specialists across departments'
    },
    {
      number: '10,000+',
      label: 'Happy Patients',
      description: 'Successful treatments and satisfied families'
    },
    {
      number: '24/7',
      label: 'Emergency Care',
      description: 'Round-the-clock medical assistance'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
                About Arjun Hospital
              </span>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Committed to Your Health & Well-being
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Arjun Hospital has been a trusted healthcare provider in Kadapa for over 15 years. We combine advanced medical technology with compassionate care to deliver exceptional healthcare services to our community.
              </p>
              <p className="text-gray-600 mb-8">
                Our state-of-the-art facility houses modern equipment, experienced medical professionals, and a dedicated support staff committed to providing personalized care for every patient. From emergency services to specialized treatments, we ensure the highest standards of medical excellence.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">NABH Accredited</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Insurance Accepted</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Advanced Equipment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Cashless Treatment</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/doctors"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-8 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Our Doctors
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </Link>
          </div>

          {/* Right Content - Photos & Stats */}
          <div>
            {/* Hospital Photos Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-blue-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                    <p className="text-sm font-medium text-blue-700">Modern Facilities</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-6 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-green-600 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <p className="text-xs font-medium text-green-700">ICU Ward</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-6 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-purple-600 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <p className="text-xs font-medium text-purple-700">Operation Theater</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-lg p-6 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-red-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
                    </svg>
                    <p className="text-sm font-medium text-red-700">Emergency Unit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{highlight.number}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{highlight.label}</div>
                  <div className="text-xs text-gray-600">{highlight.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}