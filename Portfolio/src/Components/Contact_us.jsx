import React from 'react';

export default function Contact_us() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-700 text-white px-6 py-20 space-y-20">
      {/* Header Section */}
      <section
        className="max-w-4xl mx-auto text-center"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}
      >
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-300 text-lg">
          We'd love to hear from you! Fill out the form below or reach out using the contact information.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto bg-slate-800 bg-opacity-50 p-8 rounded-2xl shadow-lg"
      style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 rounded-md border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="max-w-4xl mx-auto text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-4 text-red-400">Our Contact Details</h3>
        <div className="space-y-4 text-gray-300">
          <p><strong>Email:</strong> contact@jatinsite.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Address:</strong> New Delhi, India</p>
        </div>
      </section>

      {/* Google Maps or Placeholder */}
      <section className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-center text-red-400 mb-4">Find Us Here</h3>
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
      <iframe
      title="Jatin Location"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d884.7959322458046!2d76.29520871726352!3d29.89815779039126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1752819248249!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

</div>

      </section>

      {/* FAQs */}
      <section className="max-w-5xl mx-auto text-center"
      style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}>
        <h3 className="text-2xl font-semibold text-red-400 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-6 text-left text-gray-300">
          <div>
            <h4 className="font-bold">❓ How soon will I get a reply?</h4>
            <p>We usually respond within 24 hours on weekdays.</p>
          </div>
          <div>
            <h4 className="font-bold">❓ Can I request a custom design?</h4>
            <p>Absolutely! Custom designs are our specialty — just let us know your vision.</p>
          </div>
          <div>
            <h4 className="font-bold">❓ What technologies do you use?</h4>
            <p>We use React, Tailwind CSS, modern JavaScript (ES6+), and follow mobile-first responsive design principles.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto text-center mt-12"
      style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}>
        <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
        <p className="text-gray-400 mb-6">
          Reach out anytime and we’ll be happy to help you with your ideas or feedback.
        </p>
        <a href="mailto:contact@jatinsite.com">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
            Email Us Directly
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
