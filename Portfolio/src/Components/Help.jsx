import React from 'react';
import { Link } from 'react-router-dom';
export default function Help() {
  const helpTopics = [
    {
      title: "Getting Started",
      content: "Learn how to navigate the site, create an account, and explore services.",
    },
    {
      title: "Account Issues",
      content: "Having trouble signing in or signing up? We’re here to help!",
    },
    {
      title: "Technical Support",
      content: "Report bugs, broken links, or performance issues.",
    },
    {
      title: "Billing & Payments",
      content: "Questions about invoices, payment methods, or subscriptions.",
    },
    {
      title: "Privacy & Security",
      content: "Understand how your data is used and how we keep it safe.",
    },
    {
      title: "Customization Help",
      content: "Need something custom? Get help with your specific requirements.",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to get a response?",
      a: "We typically respond within 24 hours, excluding weekends and holidays.",
    },
    {
      q: "Can I request a feature?",
      a: "Absolutely! We welcome feature suggestions and ideas.",
    },
    {
      q: "Is support free?",
      a: "Yes, basic support and troubleshooting is completely free.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-700 text-white px-6 py-20 space-y-20">
      {/* Header */}
      <section className="text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          Help & Support
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Need help? Browse topics, find answers, or get in touch with our support team.
        </p>

        {/* Search Bar UI (static for now) */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search support topics..."
            className="w-full max-w-xl px-4 py-2 rounded-md border border-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </section>

      {/* Help Topics Grid */}
      <section className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 w-full max-w-6xl mx-auto"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}>
        {helpTopics.map(({ title, content }, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700 transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/30"
            style={{
              animation: 'fadeInUp 1s ease-out forwards',
              animationDelay: `${index * 0.2}s`,
              animationFillMode: 'forwards',
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-yellow-300">{title}</h3>
            <p className="text-gray-300">{content}</p>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}>
        <h3 className="text-3xl font-semibold text-center text-yellow-300 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map(({ q, a }, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-white mb-2">❓ {q}</h4>
              <p className="text-gray-300">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="bg-slate-800 rounded-xl max-w-4xl mx-auto py-12 px-6 text-center shadow-lg"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}>
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">Still Need Help?</h3>
        <p className="text-gray-300 mb-6">If you couldn’t find the answer, feel free to reach out directly.</p>
        <Link to="/contact_us">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
            Contact Support
          </button>
        </Link>
      </section>

      {/* Inline animation keyframes */}
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
