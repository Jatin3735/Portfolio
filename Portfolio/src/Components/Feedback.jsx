import React from 'react';

export default function Feedback() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-700 text-white px-6 py-20 space-y-20">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          We Value Your Feedback
        </h1>
        <p className="text-lg text-gray-300">
          Your thoughts help us improve. Please share your experience or suggestions about <span className="text-red-400 font-semibold">Jatin's</span> Website.
        </p>
      </section>

      {/* Feedback Form */}
      <section className="max-w-2xl mx-auto bg-slate-800 bg-opacity-50 p-8 rounded-2xl shadow-lg"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-300 font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-slate-900 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-300 font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-slate-900 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-gray-300 font-medium">Feedback</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Share your thoughts..."
              className="w-full px-4 py-2 bg-slate-900 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition duration-300 hover:scale-105"
          >
            Submit Feedback
          </button>
        </form>
      </section>

      {/* Why Feedback Matters */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-red-400 mb-6">Why Your Feedback Matters</h2>
        <ul className="text-left text-gray-300 space-y-3 list-disc list-inside px-4 md:px-0">
          <li>Helps us improve user experience and features.</li>
          <li>Guides our design and content decisions.</li>
          <li>Ensures we stay aligned with your expectations.</li>
          <li>Shows us what we’re doing right—or wrong.</li>
        </ul>
      </section>

      {/* Appreciation */}
      <section className="bg-slate-800 rounded-xl max-w-3xl mx-auto p-8 text-center shadow-lg">
        <h3 className="text-2xl font-bold text-green-400 mb-3">Thank You!</h3>
        <p className="text-gray-300">
          We appreciate you taking the time to share your feedback. We read every message and use it to improve!
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        <h3 className="text-3xl font-bold mb-3">Need Help or Want to Talk?</h3>
        <p className="text-gray-300 mb-6">You can always reach out directly for support or follow-up.</p>
        <a href="/contact_us">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105">
            Contact Us
          </button>
        </a>
      </section>

      {/* Animation Keyframes */}
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
