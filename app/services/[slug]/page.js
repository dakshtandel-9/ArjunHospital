import Link from 'next/link';

const SERVICES = {
  emergency: {
    title: 'Emergency Services',
    description: '24x7 emergency care with advanced life support, trauma management, and rapid response team.',
    features: ['24/7 Availability', 'Advanced Life Support', 'Trauma Care', 'Rapid Response'],
    color: 'from-red-50 to-white'
  },
  icu: {
    title: 'Intensive Care Unit (ICU)',
    description: 'State-of-the-art ICU with advanced monitoring systems, ventilators, and critical care specialists.',
    features: ['Advanced Monitoring', 'Ventilators', 'Critical Care Specialists', 'Isolation Rooms'],
    color: 'from-blue-50 to-white'
  },
  'general-medicine': {
    title: 'General Medicine',
    description: 'Comprehensive medical care for all age groups, preventive health and disease management.',
    features: ['Comprehensive Care', 'Preventive Health', 'Chronic Disease Management', 'Lifestyle Counseling'],
    color: 'from-green-50 to-white'
  },
  obg: {
    title: 'Obstetrics & Gynecology',
    description: 'Maternity care, gynecology services, laparoscopic surgeries, and infertility treatments.',
    features: ['Maternity Care', 'Laparoscopy', 'Infertility', 'Cosmetic Gynecology'],
    color: 'from-pink-50 to-white'
  },
  'cosmetic-gynecology': {
    title: 'Cosmetic Gynecology',
    description: 'Advanced cosmetic & aesthetic gynecological procedures with expert specialists.',
    features: ['Aesthetic Procedures', 'Expert Specialists', 'Confidential Care', 'Post-op Support'],
    color: 'from-rose-50 to-white'
  },
  surgery: {
    title: 'Surgery',
    description: 'Advanced surgical procedures with modern OT and experienced surgeons.',
    features: ['Modern OT', 'Expert Surgeons', 'Minimally Invasive', 'Post-op Care'],
    color: 'from-purple-50 to-white'
  },
  orthopedics: {
    title: 'Orthopedics',
    description: 'Comprehensive bone, joint and muscle care with surgical and non-surgical treatments.',
    features: ['Joint Care', 'Fracture Management', 'Arthroscopy', 'Physiotherapy'],
    color: 'from-orange-50 to-white'
  },
  pediatrics: {
    title: 'Pediatrics',
    description: 'Specialized care for infants, children and adolescents with compassionate approach.',
    features: ['Newborn Care', 'Vaccinations', 'Growth Monitoring', 'Pediatric Emergencies'],
    color: 'from-yellow-50 to-white'
  },
  dermatology: {
    title: 'Dermatology',
    description: 'Skin, hair and nail treatments with advanced dermatological procedures.',
    features: ['Skin Treatments', 'Cosmetic Procedures', 'Hair Care', 'Nail Disorders'],
    color: 'from-teal-50 to-white'
  },
  diagnostics: {
    title: 'Diagnostics',
    description: 'Advanced lab tests and imaging services for accurate diagnosis.',
    features: ['Digital X-ray', 'Ultrasound', 'ECG/EEG', 'Lab Services'],
    color: 'from-indigo-50 to-white'
  }
};

export default function ServiceDetail({ params }) {
  const { slug } = params;
  const service = SERVICES[slug];

  if (!service) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The requested service does not exist. Please check the URL or browse available services.</p>
          <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold">Go to Home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-gradient-to-br ${service.color}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">Our Services</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{service.title}</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">{service.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
              <p className="text-sm text-gray-600">Detailed information on {feature.toLowerCase()} available at our facility.</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="tel:+916305800108" className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-6 py-3 text-lg font-semibold hover:bg-red-700 transition-colors">Call Emergency</Link>
          <Link href="https://api.whatsapp.com/send/?phone=916305800108&text&type=phone_number&app_absent=0" className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 text-blue-600 px-6 py-3 text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">Book Appointment</Link>
          <Link href="/" className="inline-flex items-center justify-center rounded-lg bg-gray-100 text-gray-800 px-6 py-3 text-lg font-semibold hover:bg-gray-200 transition-colors">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}