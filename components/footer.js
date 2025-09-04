import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/departments", label: "Departments" },
    { href: "/doctors", label: "Doctors" },
    { href: "/facilities", label: "Facilities" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { href: "/diagnostics", label: "Diagnostics" },
    { href: "/insurance", label: "Insurance/Cashless" },
    { href: "/health-camps", label: "Health Camps" },
    { href: "/departments", label: "Emergency Care" },
    { href: "/departments", label: "ICU" },
    { href: "/departments", label: "Surgery" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Arjun Hospital logo"
                width={120}
                height={38}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mb-4 max-w-md">
              Providing quality healthcare services with 24x7 emergency care, advanced diagnostics, and specialized treatments in Kadapa.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Kollavaripalli, Kadapa 516002</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="flex gap-4">
                  <a href="tel:6305800108" className="text-gray-600 hover:text-gray-900">63058 00108</a>
                  <a href="tel:8142188108" className="text-gray-600 hover:text-gray-900">81421 88108</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:arjunhospitalkadapa@gmail.com" className="text-gray-600 hover:text-gray-900">arjunhospitalkadapa@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-gray-900">Need immediate medical attention?</p>
              <p className="text-sm text-gray-600">Our emergency services are available 24/7</p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:6305800108"
                className="inline-flex items-center justify-center rounded-md bg-red-600 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                24x7 Emergency
              </a>
              <a
                href="https://wa.me/6305800108"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Arjun Hospital, Kadapa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}