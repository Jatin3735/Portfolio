import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "We create fast, responsive, and SEO-optimized websites using React and modern web tools.",
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive and beautiful designs tailored for user satisfaction and clean interfaces.",
    },
    {
      title: "SEO Optimization",
      desc: "Improve your website visibility with industry-standard search engine optimization techniques.",
    },
    {
      title: "Performance Tuning",
      desc: "Optimizing front-end performance for blazing fast page loads across all devices.",
    },
    {
      title: "Responsive Design",
      desc: "Fully adaptive designs ensuring a seamless experience on mobile, tablet, and desktop.",
    },
    {
      title: "Maintenance & Support",
      desc: "Reliable ongoing maintenance and updates to keep your site fresh and secure.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-700 text-white px-6 py-20 space-y-20">
      {/* Page Title */}
      <section className="text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          Our Services
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We provide a wide range of modern web services to turn your ideas into fully functional digital experiences.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 w-full max-w-6xl mx-auto"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        {services.map(({ title, desc }, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-red-500 hover:shadow-red-500/30"
            style={{
              animation: 'fadeInUp 1s ease-out forwards',
              animationDelay: `${index * 0.2}s`,
              animationFillMode: 'forwards',
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-red-400">{title}</h3>
            <p className="text-gray-300">{desc}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto text-center md:text-left"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        <h3 className="text-3xl font-semibold text-red-400 mb-6 text-center">Why Choose Us?</h3>
        <ul className="text-gray-300 space-y-4 list-disc list-inside md:px-6">
          <li>We use the latest technologies to build scalable and fast web applications.</li>
          <li>We prioritize user experience and visual polish, all without heavy libraries.</li>
          <li>100% mobile-first and responsive — always optimized for every screen size.</li>
          <li>Transparent pricing and reliable timelines with ongoing support.</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-800 py-12 px-6 rounded-2xl max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-red-400 mb-6">What Our Clients Say</h3>
        <blockquote className="text-lg text-gray-300 italic mb-4">
          “The site they delivered was beyond our expectations — fast, beautiful, and easy to manage. Jatin's team made the whole process smooth and fun.”
        </blockquote>
        <p className="text-gray-400">— Aman Sharma, Startup Founder</p>
      </section>

      {/* Final CTA */}
      <section className="text-center mt-16"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
        <p className="text-gray-300 mb-6">Let’s build something great. Reach out and let's make your vision a reality.</p>
        <Link to="/contact_us">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
            Contact Us
          </button>
        </Link>
      </section>

      {/* Keyframes */}
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
