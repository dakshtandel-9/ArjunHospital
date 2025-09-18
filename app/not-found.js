import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found - Arjun Hospital Kadapa | 404 Error",
  description: "The page you're looking for doesn't exist. Visit Arjun Hospital's homepage for healthcare services, emergency care, and medical treatments in Kadapa.",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full text-center">
        {/* Hospital Logo */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Arjun Hospital"
            width={120}
            height={40}
            className="mx-auto mb-6"
            priority
          />
        </div>

        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            {/* Large 404 Text */}
            <div className="text-8xl sm:text-9xl font-bold text-blue-100 select-none">
              404
            </div>
            
            {/* Medical Cross Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Page Not Found
          </h1>
          <p className="text-gray-600 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. Don&apos;t worry, our medical team is always here to help you find what you need.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          
          <div className="flex gap-3">
            <a
              href="tel:6305800108"
              className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-red-300 text-base font-medium rounded-lg text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Emergency
            </a>
            
            <a
              href="https://wa.me/6305800108"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-green-300 text-base font-medium rounded-lg text-green-700 bg-green-50 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-8">
          Need help? Contact us anytime - we&apos;re here 24/7 for your healthcare needs.
        </p>
      </div>
    </div>
  );
}