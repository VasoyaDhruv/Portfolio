import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Name',
      position: 'Position, Company',
      text: 'Add your testimonial text here.',
      image: 'path-to-image.jpg' // Add actual image path
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <h2 className="section__title">Testimonials</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial__card">
              <div className="testimonial__content">
                <p className="testimonial__text">{testimonial.text}</p>
                <div className="testimonial__author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
