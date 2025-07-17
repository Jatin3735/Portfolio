import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-700 text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 py-20 min-h-screen">
        <div
          className="max-w-3xl text-center"
          style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 transition-transform duration-500 hover:scale-105">
            Welcome to <span className="text-red-500">Jatin's</span> Website
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 transition-opacity duration-700 hover:opacity-80">
            Clean. Responsive. Fully Styled with Tailwind CSS. No libraries. Just smooth UI and experience.
          </p>
          <Link to="/about">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
              Explore More
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="px-6 py-20 bg-slate-800 text-center"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">What I Offer</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Responsive Design',
              desc: 'Optimized for all devices with a mobile-first approach.',
            },
            {
              title: 'Performance Focused',
              desc: 'Fast load times and lag-free interaction ensured.',
            },
            {
              title: 'Clean Code',
              desc: 'Built with readability and reusability in mind.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-700 p-6 rounded-2xl shadow-md border border-transparent transition-all duration-300 hover:scale-105 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/40"
            >
              <h3 className="text-xl font-semibold mb-3 text-red-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action / Contact Section */}
      <section
        className="px-6 py-20 bg-slate-900 text-center"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Let’s Work Together</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Whether you're looking for a personal portfolio, a business site, or a sleek UI, I'm here to help. Let's create something amazing.
        </p>
        <Link to="/contact_us">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
            Contact Me
          </button>
        </Link>
      </section>

      {/* Keyframe for fadeInUp */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
