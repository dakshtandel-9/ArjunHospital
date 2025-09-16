export default function HealthCampsBanner() {
  const upcomingCamps = [
    {
      title: 'Free Fibro Scan Camp',
      description: 'Advanced liver health screening using FibroScan technology',
      date: 'January 25-27, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Arjun Hospital Main Campus',
      price: 'FREE',
      originalPrice: '₹2,500',
      features: ['No Radiation', 'Painless Procedure', 'Instant Results', 'Expert Consultation'],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Thyroid Screening Camp',
      description: 'Complete thyroid function tests and specialist consultation',
      date: 'February 2-4, 2024',
      time: '8:00 AM - 4:00 PM',
      location: 'Arjun Hospital Lab',
      price: '₹299',
      originalPrice: '₹800',
      features: ['TSH, T3, T4 Tests', 'Ultrasound Scan', 'Doctor Consultation', 'Diet Plan'],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'IUI Fertility Camp',
      description: 'Comprehensive fertility assessment and IUI consultation',
      date: 'February 10-12, 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'Fertility Center',
      price: '₹1,999',
      originalPrice: '₹5,000',
      features: ['Fertility Assessment', 'Hormone Tests', 'Ultrasound', 'IUI Counseling'],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const pastCamps = [
    { name: 'Diabetes Screening', participants: '250+', date: 'Dec 2023' },
    { name: 'Heart Health Camp', participants: '180+', date: 'Nov 2023' },
    { name: 'Women Health Camp', participants: '320+', date: 'Oct 2023' },
    { name: 'Eye Screening', participants: '150+', date: 'Sep 2023' }
  ];

  return (
    <section id="health-camps" className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full mb-4">
            Health Camps
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Upcoming Health Screening Camps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our specialized health camps for comprehensive screenings at discounted rates. Early detection saves lives.
          </p>
        </div>

        {/* Upcoming Camps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {upcomingCamps.map((camp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${camp.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    {camp.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{camp.price}</div>
                    {camp.originalPrice && (
                      <div className="text-sm line-through opacity-75">{camp.originalPrice}</div>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{camp.title}</h3>
                <p className="text-white text-opacity-90 text-sm">{camp.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date & Time */}
                <div className="mb-6">
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{camp.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{camp.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{camp.location}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {camp.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <a
                    href="tel:6305800108"
                    className={`w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r ${camp.color} text-white px-4 py-3 text-sm font-semibold hover:opacity-90 transition-opacity`}
                  >
                    Register Now
                  </a>
                  <a
                    href="https://wa.me/6305800108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-lg border border-gray-300 text-gray-700 px-4 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097" />
                    </svg>
                    WhatsApp Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Past Camps Success */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Recent Health Camp Success</h3>
            <p className="text-gray-600">We&apos;ve successfully conducted numerous health camps, helping thousands of people with early detection and prevention.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pastCamps.map((camp, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-4 mb-3">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{camp.participants}</div>
                  <div className="text-sm text-gray-600">Participants</div>
                </div>
                <div className="text-sm font-medium text-gray-900">{camp.name}</div>
                <div className="text-xs text-gray-500">{camp.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated on Health Camps</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming health camps, special offers, and health tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-blue-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}