'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DoctorsHighlight() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const doctors = [
    {
      name: 'Dr. Rajesh Kumar',
      specialization: 'Cardiologist',
      experience: '15+ Years',
      qualifications: 'MBBS, MD (Cardiology)',
      description: 'Expert in heart diseases, cardiac interventions, and preventive cardiology.',
      image: '/doctors/doctor-1.jpg', // Placeholder
      availability: 'Mon-Sat: 10 AM - 6 PM'
    },
    {
      name: 'Dr. Priya Sharma',
      specialization: 'Gynecologist & Obstetrician',
      experience: '12+ Years',
      qualifications: 'MBBS, MS (OBG)',
      description: 'Specialized in women\'s health, pregnancy care, and minimally invasive surgeries.',
      image: '/doctors/doctor-2.jpg', // Placeholder
      availability: 'Mon-Fri: 9 AM - 5 PM'
    },
    {
      name: 'Dr. Suresh Reddy',
      specialization: 'Orthopedic Surgeon',
      experience: '18+ Years',
      qualifications: 'MBBS, MS (Orthopedics)',
      description: 'Expert in joint replacement, sports injuries, and spine surgeries.',
      image: '/doctors/doctor-3.jpg', // Placeholder
      availability: 'Tue-Sun: 11 AM - 7 PM'
    },
    {
      name: 'Dr. Anitha Rao',
      specialization: 'Pediatrician',
      experience: '10+ Years',
      qualifications: 'MBBS, MD (Pediatrics)',
      description: 'Specialized in child healthcare, vaccinations, and developmental disorders.',
      image: '/doctors/doctor-4.jpg', // Placeholder
      availability: 'Mon-Sat: 8 AM - 4 PM'
    },
    {
      name: 'Dr. Venkat Rao',
      specialization: 'General Surgeon',
      experience: '20+ Years',
      qualifications: 'MBBS, MS (Surgery)',
      description: 'Expert in laparoscopic surgeries, trauma care, and emergency procedures.',
      image: '/doctors/doctor-5.jpg', // Placeholder
      availability: '24/7 Emergency'
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
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
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
                  <div className="bg-white rounded-2xl shadow-lg p-8 mx-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Doctor Image */}
                      <div className="text-center lg:text-left">
                        <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-6">
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                            <svg className="w-32 h-32 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Availability Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          Available
                        </div>
                      </div>

                      {/* Doctor Info */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                        <p className="text-lg font-semibold text-blue-600 mb-2">{doctor.specialization}</p>
                        <p className="text-sm text-gray-600 mb-4">{doctor.qualifications}</p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-600">{doctor.experience} Experience</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-600">{doctor.availability}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{doctor.description}</p>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            href={`/doctors/${doctor.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                            className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
                          >
                            View Profile
                          </Link>
                          <Link
                            href="/appointments"
                            className="inline-flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 px-6 py-2 text-sm font-semibold hover:bg-blue-50 transition-colors"
                          >
                            Book Appointment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
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

        {/* View All Doctors CTA */}
        <div className="text-center mt-12">
          <Link
            href="/doctors"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-8 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Doctors
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}