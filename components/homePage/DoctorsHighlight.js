'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DoctorsHighlight() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const doctors = [
    {
      name: 'Dr. Arjun Kumar Avvaru',
      specialization: 'General Medicine & Critical Care Specialist',
      experience: '15+ Years',
      qualifications: 'MD General Medicine, Senior Physician & Critical Care Specialist',
      description: 'Expert in general medicine, critical care, and emergency medical treatments with extensive experience in patient care.',
      image: '/doctor/arjun.png',
      availability: 'Mon-Sat: 9 AM - 6 PM'
    },
    {
      name: 'Dr. Sireesha Ratala',
      specialization: 'OBG, Laparoscopic and Infertility Specialist',
      experience: '12+ Years',
      qualifications: 'MS OBG, Laparoscopic and Infertility Specialist, Cosmetic Gynecologist',
      description: 'Specialized in women\'s health, laparoscopic surgeries, infertility treatments, and cosmetic gynecology procedures.',
      image: '/doctor/shreesha.png',
      availability: 'Mon-Fri: 10 AM - 5 PM'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="doctors" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            Our Medical Team
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of experienced specialists is dedicated to providing exceptional healthcare with compassion and expertise.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {doctors.map((doctor, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mx-2 sm:mx-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                      {/* Doctor Image */}
                      <div className="text-center lg:text-left">
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mx-auto lg:mx-0 mb-4 sm:mb-6">
                          <Image
                            src={doctor.image}
                            alt={`${doctor.name} - ${doctor.specialization}`}
                            width={256}
                            height={256}
                            className="w-full h-full object-cover rounded-full shadow-lg"
                            priority
                          />
                        </div>
                        
                        {/* Availability Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          Available
                        </div>
                      </div>

                      {/* Doctor Info */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                        <p className="text-base sm:text-lg font-semibold text-blue-600 mb-2">{doctor.specialization}</p>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{doctor.qualifications}</p>
                        
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs sm:text-sm text-gray-600">{doctor.experience} Experience</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs sm:text-sm text-gray-600">{doctor.availability}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{doctor.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {doctors.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>


      </div>
    </section>
  );
}