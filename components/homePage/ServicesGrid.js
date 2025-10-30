import Link from 'next/link';

export default function ServicesGrid() {
  const services = [
    {
      name: 'Emergency',
      description: '24x7 emergency care with advanced life support',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
        </svg>
      ),
      href: '/departments/emergency',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      name: 'ICU',
      description: 'Intensive care with advanced monitoring systems',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      href: '/departments/icu',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      name: 'General Medicine',
      description: 'Comprehensive medical care for all age groups',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      href: '/departments/general-medicine',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      name: 'OBG',
      description: 'Obstetrics & gynecology with maternity care',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      href: '/departments/obg',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      name: 'Cosmetic Gynecology',
      description: 'Advanced cosmetic & aesthetic gynecological procedures',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      href: '/departments/cosmetic-gynecology',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      name: 'Surgery',
      description: 'Advanced surgical procedures with expert surgeons',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.46 6.28l-1.42-1.42C6.69 6.21 6 7.92 6 9.8c0 1.88.69 3.59 2.04 4.94l1.42-1.42C8.56 12.42 8 11.16 8 9.8s.56-2.62 1.46-3.52zM16.54 6.28C17.44 7.18 18 8.44 18 9.8s-.56 2.62-1.46 3.52l1.42 1.42C19.31 13.39 20 11.68 20 9.8c0-1.88-.69-3.59-2.04-4.94l-1.42 1.42zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      ),
      href: '/departments/surgery',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      name: 'Orthopedics',
      description: 'Bone, joint and muscle care specialists',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      href: '/departments/orthopedics',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      name: 'Pediatrics',
      description: 'Specialized care for infants, children & adolescents',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      href: '/departments/pediatrics',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      name: 'Dermatology',
      description: 'Skin, hair and nail treatment specialists',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      href: '/departments/dermatology',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      name: 'Diagnostics',
      description: 'Advanced lab tests and imaging services',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      href: '/diagnostics',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Our Top Services
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive healthcare services with state-of-the-art facilities and expert medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 border border-gray-200"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${service.bgColor} rounded-lg mb-3 sm:mb-4`}>
                <div className={service.iconColor}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}