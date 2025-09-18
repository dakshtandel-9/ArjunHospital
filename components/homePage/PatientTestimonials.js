'use client';
import { useState } from 'react';

export default function PatientTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Anitha Reddy',
      age: 29,
      treatment: 'Pediatric Care',
      rating: 5,
      comment: 'The pediatric team at Arjun Hospital is exceptional. My 3-year-old son received the best care during his treatment. The doctors were patient and gentle, making the whole experience stress-free for our family.',
      location: 'Kadapa'
    },
    {
      name: 'Ramesh Naidu',
      age: 52,
      treatment: 'Neurology',
      rating: 5,
      comment: 'After suffering from severe headaches for months, the neurology department diagnosed and treated my condition perfectly. Dr. Prasad and his team provided excellent care and follow-up. I am completely recovered now.',
      location: 'Cuddapah'
    },
    {
      name: 'Kavitha Devi',
      age: 35,
      treatment: 'Gastroenterology',
      rating: 5,
      comment: 'The gastroenterology department helped me overcome my digestive issues with their advanced treatment methods. The staff was compassionate and the facilities are top-notch. Highly recommend this hospital.',
      location: 'Proddatur'
    },
    {
      name: 'Srinivas Rao',
      age: 61,
      treatment: 'Urology',
      rating: 5,
      comment: 'Had a successful kidney stone removal surgery here. The urologist explained everything clearly and the post-operative care was outstanding. The nursing staff was very attentive throughout my stay.',
      location: 'Rayachoty'
    },
    {
      name: 'Madhavi Latha',
      age: 28,
      treatment: 'Dermatology',
      rating: 5,
      comment: 'The dermatology department helped me with my skin condition that I had been struggling with for years. The treatment was effective and the doctors were very knowledgeable. Thank you for giving me my confidence back.',
      location: 'Jammalamadugu'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            Patient Stories
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our patients who have received exceptional care at Arjun Hospital.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-yellow-50 rounded-lg p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-1">4.9</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-sm text-gray-600">Overall Rating</div>
            </div>
            <div className="h-12 w-px bg-yellow-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
            </div>
            <div className="h-12 w-px bg-yellow-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mx-4 border border-blue-100">
                    <div className="max-w-4xl mx-auto">
                      {/* Quote Icon */}
                      <div className="text-center mb-6">
                        <svg className="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      {/* Testimonial Content */}
                      <blockquote className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                        &quot;{testimonial.comment}&quot;
                      </blockquote>
                      
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      {/* Patient Info */}
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 mb-1">Age: {testimonial.age} | {testimonial.location}</p>
                        <p className="text-sm font-medium text-blue-600">{testimonial.treatment}</p>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Join thousands of satisfied patients who trust Arjun Hospital for their healthcare needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6305800108"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Your Appointment
            </a>
            <a
              href="https://wa.me/6305800108"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 px-6 py-3 text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}