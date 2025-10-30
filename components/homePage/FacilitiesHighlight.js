import Link from 'next/link';

export default function FacilitiesHighlight() {
  const facilities = [
    {
      name: 'Intensive Care Unit (ICU)',
      description: 'State-of-the-art ICU with advanced monitoring systems, ventilators, and 24/7 critical care specialists.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      features: ['24/7 Monitoring', 'Advanced Ventilators', 'Critical Care Specialists', 'Emergency Response'],
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      name: 'Operation Theater (OT)',
      description: 'Modern operation theaters equipped with latest surgical instruments and laminar air flow systems.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
        </svg>
      ),
      features: ['Laminar Air Flow', 'Advanced Surgical Equipment', 'Sterile Environment', 'Expert Surgeons'],
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      name: 'Ambulance Service',
      description: 'Fully equipped ambulances with life support systems and trained paramedics for emergency transport.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
        </svg>
      ),
      features: ['24/7 Availability', 'Life Support Equipment', 'Trained Paramedics', 'Quick Response'],
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      borderColor: 'border-red-200'
    },
    {
      name: 'In-House Pharmacy',
      description: 'Complete pharmacy with all essential medicines, surgical supplies, and medical equipment.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      features: ['All Essential Medicines', 'Surgical Supplies', 'Medical Equipment', 'Quality Assured'],
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      name: 'Diagnostic Center',
      description: 'Advanced diagnostic facilities including X-ray, ultrasound, ECG, and comprehensive lab services.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      features: ['Digital X-ray', 'Ultrasound', 'ECG/EEG', 'Lab Services'],
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-200'
    },
    {
      name: 'Patient Rooms',
      description: 'Comfortable patient rooms with modern amenities, AC, and 24/7 nursing care for optimal recovery.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      features: ['AC Rooms', 'Modern Amenities', '24/7 Nursing', 'Comfortable Beds'],
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            Our Facilities
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            World-Class Healthcare Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience advanced medical care with our state-of-the-art facilities and modern equipment designed for your comfort and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border-2 ${facility.borderColor} hover:border-opacity-50`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${facility.bgColor} rounded-lg mb-4`}>
                <div className={facility.iconColor}>
                  {facility.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {facility.name}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {facility.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {facility.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Medical Attention?</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Our emergency services and ambulance are available 24/7. Don&apos;t hesitate to contact us for any medical emergency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916305800108"
              className="inline-flex items-center justify-center rounded-lg bg-white text-red-600 px-6 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Emergency: 63058 00108
            </a>
            <a
              href="tel:8142188108"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-6 py-3 text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Ambulance: 81421 88108
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}