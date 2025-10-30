'use client';
import { useState } from 'react';

export default function FAQPreview() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: 'What are your emergency services hours?',
      answer: 'Our emergency services are available 24x7, 365 days a year. We have a dedicated emergency team including doctors, nurses, and support staff available round the clock to handle all types of medical emergencies.'
    },
    {
      question: 'Do you accept insurance and provide cashless treatment?',
      answer: 'Yes, we accept all major insurance plans and provide cashless treatment. We work with 50+ insurance providers including Star Health, ICICI Lombard, HDFC ERGO, and many more. Our insurance desk helps with pre-authorization and claim processing.'
    },
    {
      question: 'How can I book an appointment with a specialist?',
      answer: 'You can book appointments through multiple ways: Call us at +916305800108, WhatsApp us, visit our hospital directly, or use our online booking system. We offer same-day appointments for urgent cases and advance booking for routine consultations.'
    },
    {
      question: 'What diagnostic services do you offer?',
      answer: 'We offer comprehensive diagnostic services including X-Ray, CT Scan, MRI, Ultrasound, ECG, Echo, Laboratory tests, Pathology services, and specialized tests. Most reports are available within 24 hours, with some urgent tests available within 2-4 hours.'
    },
    {
      question: 'Do you have ambulance services?',
      answer: 'Yes, we provide 24x7 ambulance services with trained paramedical staff and life support equipment. Our ambulances are equipped with oxygen, cardiac monitors, and emergency medications. Call +916305800108 for immediate ambulance service.'
    },
    {
      question: 'What are your visiting hours for patients?',
      answer: 'General visiting hours are 10:00 AM to 12:00 PM and 4:00 PM to 7:00 PM. ICU visiting hours are 11:00 AM to 12:00 PM and 5:00 PM to 6:00 PM. Only 2 visitors are allowed at a time. Special arrangements can be made for critical patients.'
    },
    {
      question: 'Do you provide home healthcare services?',
      answer: 'Yes, we offer home healthcare services including nursing care, physiotherapy, diagnostic sample collection, and doctor visits at home. Our trained healthcare professionals provide quality care in the comfort of your home.'
    },
    {
      question: 'What safety measures do you follow for patient care?',
      answer: 'We follow strict safety protocols including regular sanitization, infection control measures, proper waste management, and adherence to medical guidelines. Our hospital is NABH accredited, ensuring the highest standards of patient safety and care quality.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, facilities, and procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact & Support */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our support team is available 24x7 to help you with any questions or concerns you may have.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:+916305800108"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-sm text-gray-600">+916305800108 (24x7)</div>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/6305800108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-sm text-gray-600">Quick Response</div>
                  </div>
                </a>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-600 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-sm text-gray-600">info@arjunhospital.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Why Choose Arjun Hospital?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">15+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm text-blue-100">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24x7</div>
                  <div className="text-sm text-blue-100">Emergency Care</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">NABH</div>
                  <div className="text-sm text-blue-100">Accredited</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}