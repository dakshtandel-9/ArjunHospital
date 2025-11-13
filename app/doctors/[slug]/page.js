import Image from 'next/image';
import Link from 'next/link';

const DOCTORS = {
  'dr-arjun-avvaru-general-medicine': {
    name: 'Dr. Arjun Kumar Avvaru',
    specialization: 'General Medicine & Critical Care Specialist',
    experience: '15+ Years',
    qualifications: 'MD General Medicine, Senior Physician & Critical Care Specialist',
    description:
      'Expert in general medicine, critical care, and emergency medical treatments with extensive experience in patient care.',
    availability: 'Mon-Sat: 9 AM - 6 PM',
    image: '/doctor/arjun.png',
    color: 'from-blue-50 to-white'
  },
  'dr-sireesha-gynecology': {
    name: 'Dr. Sireesha Ratala',
    specialization: 'OBG, Laparoscopic and Infertility Specialist',
    experience: '12+ Years',
    qualifications: 'MS OBG, Laparoscopic and Infertility Specialist, Cosmetic Gynecologist',
    description:
      "Specialized in women's health, laparoscopic surgeries, infertility treatments, and cosmetic gynecology procedures.",
    availability: 'Mon-Fri: 10 AM - 5 PM',
    image: '/doctor/shreesha.png',
    color: 'from-pink-50 to-white'
  }
};

export default function DoctorDetail({ params }) {
  const { slug } = params;
  const doctor = DOCTORS[slug];

  if (!doctor) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Doctor Not Found</h1>
          <p className="text-gray-600 mb-6">The requested doctor page does not exist. Please check the URL or browse available doctors.</p>
          <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold">Go to Home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-gradient-to-br ${doctor.color}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 mx-auto lg:mx-0 mb-6">
              <Image
                src={doctor.image}
                alt={`${doctor.name} - ${doctor.specialization}`}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-full shadow-xl"
                priority
              />
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Available
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
            <p className="text-base sm:text-lg font-semibold text-blue-600 mb-2">{doctor.specialization}</p>
            <p className="text-sm sm:text-base text-gray-600 mb-4">{doctor.qualifications}</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base text-gray-700">{doctor.experience} Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base text-gray-700">{doctor.availability}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-6">{doctor.description}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="tel:+916305800108" className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-6 py-3 text-base sm:text-lg font-semibold hover:bg-red-700 transition-colors">
                Call 24x7 Emergency
              </Link>
              <Link href="https://api.whatsapp.com/send/?phone=916305800108&text&type=phone_number&app_absent=0" className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-6 py-3 text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Book Appointment
              </Link>
              <Link href="/" className="inline-flex items-center justify-center rounded-lg bg-gray-100 text-gray-800 px-6 py-3 text-base sm:text-lg font-semibold hover:bg-gray-200 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return Object.keys(DOCTORS).map((slug) => ({ slug }));
}