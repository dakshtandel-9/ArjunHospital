import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const departments = [
    { name: 'Emergency', href: '/departments/emergency' },
    { name: 'ICU', href: '/departments/icu' },
    { name: 'General Medicine', href: '/departments/general-medicine' },
    { name: 'OBG', href: '/departments/obg' },
    { name: 'Surgery', href: '/departments/surgery' },
    { name: 'Orthopedics', href: '/departments/orthopedics' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Quality Healthcare
              <span className="block text-blue-600">You Can Trust</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Arjun Hospital provides 24x7 emergency care, advanced diagnostics, and specialized medical treatments in Kadapa. Your health is our priority.
            </p>
            
            {/* Primary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:6305800108"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 24x7 Emergency
              </a>
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Book Appointment
              </Link>
            </div>

            {/* Quick Links to Departments */}
            <div className="mt-8">
              <p className="text-sm font-medium text-gray-700 mb-3">Quick Access to Departments:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {departments.map((dept) => (
                  <Link
                    key={dept.name}
                    href={dept.href}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 lg:p-12">
              {/* Hospital Building Illustration */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6">
                  <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Award-Winning Care</h3>
                <p className="text-gray-600 mb-6">Trusted by thousands of patients in Kadapa and surrounding areas</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Expert Doctors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Emergency Care</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
              </svg>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}