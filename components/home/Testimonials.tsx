'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Himantika Choudhary',
    text: 'Excellent experience at Saraswati Eye Care. Dr. Rajesh Garg performed my father\'s cataract surgery with great precision. Highly recommended!',
  },
  {
    name: 'Anjali Sharma',
    text: 'The doctors are highly skilled and caring. My vision has improved significantly. State-of-the-art equipment and friendly staff.',
  },
  {
    name: 'Rahul Kumar',
    text: 'Professional service and minimal waiting time. Everything was explained clearly. Very satisfied with the treatment.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="testimonials">
      <div className="container">
        <span className="label">Testimonials</span>
        <h2>What Our Patients Say</h2>

        <div className="testimonial-card">
          <div className="quote">"</div>
          <p className="text">{testimonials[current].text}</p>
          <p className="name">— {testimonials[current].name}</p>

          <div className="dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>

        <div className="rating-info">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating">4.9 / 5</span>
          <span className="reviews">Based on 500+ Google Reviews</span>
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          padding: 80px 20px;
          background: #f9f8fc;
        }

        .container {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .label {
          display: inline-block;
          color: #7157A0;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        h2 {
          font-size: 2.2rem;
          color: #1a1a2e;
          margin: 0 0 40px;
          font-weight: 700;
        }

        .testimonial-card {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          margin-bottom: 32px;
        }

        .quote {
          font-size: 4rem;
          color: #7157A0;
          opacity: 0.3;
          line-height: 1;
          margin-bottom: -20px;
        }

        .text {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.8;
          margin: 0 0 20px;
          font-style: italic;
        }

        .name {
          font-size: 1rem;
          color: #1a1a2e;
          font-weight: 600;
          margin: 0 0 24px;
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ddd;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          background: #7157A0;
          width: 24px;
          border-radius: 5px;
        }

        .rating-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .stars {
          font-size: 1.2rem;
        }

        .rating {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a2e;
        }

        .reviews {
          font-size: 0.9rem;
          color: #666;
        }

        @media (max-width: 600px) {
          .testimonials {
            padding: 60px 20px;
          }
          h2 {
            font-size: 1.8rem;
          }
          .testimonial-card {
            padding: 30px 24px;
          }
          .text {
            font-size: 1rem;
          }
          .rating-info {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
