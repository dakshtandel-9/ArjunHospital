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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Quality Healthcare
              <span className="block text-blue-600">You Can Trust</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl">
              Arjun Hospital provides 24x7 emergency care, advanced diagnostics, and specialized medical treatments in Kadapa. Your health is our priority.
            </p>
            
            {/* Primary CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="tel:6305800108"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 24x7 Emergency
              </a>
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Book Appointment
              </Link>
            </div>

            {/* Quick Links to Departments */}
            <div className="mt-6 sm:mt-8">
              <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Quick Access to Departments:</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                {departments.map((dept) => (
                  <Link
                    key={dept.name}
                    href={dept.href}
                    className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Visual */}
          <div className="relative">
            {/* Hospital Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/1.jpg"
                alt="Arjun Hospital - Modern Healthcare Facility in Kadapa"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Overlay with Stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-white">
                  <div>
                    <div className="text-lg sm:text-2xl font-bold">15+</div>
                    <div className="text-xs sm:text-sm opacity-90">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold">50+</div>
                    <div className="text-xs sm:text-sm opacity-90">Expert Doctors</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold">24/7</div>
                    <div className="text-xs sm:text-sm opacity-90">Emergency Care</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-10 sm:h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
              </svg>
            </div>
            
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-8 sm:h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}