import React from 'react';
import { Link } from 'react-router-dom';

export default function Sign_up() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-700 text-white px-4 py-20 space-y-20">
      {/* Welcome Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join <span className="text-red-400">Jatin's</span> Portal</h1>
        <p className="text-lg text-gray-300">
          Sign up to access exclusive features, get project updates, and connect with a growing tech community.
        </p>
      </section>

      {/* Sign-Up Form */}
      <section className="flex justify-center">
        <div
          className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-slate-800 to-gray-800 border border-slate-700"
          style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-300 font-medium">Full Name</label>
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
              <label htmlFor="password" className="block mb-1 text-gray-300 font-medium">Password</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full px-4 py-2 bg-slate-900 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/sign_in" className="text-red-400 hover:underline">Sign In</Link>
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto text-center"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        <h3 className="text-3xl font-semibold text-red-400 mb-6">Why Sign Up?</h3>
        <ul className="space-y-4 text-left md:text-center text-gray-300 list-disc list-inside px-4">
          <li>Access exclusive content and private updates.</li>
          <li>Connect with developers and share your projects.</li>
          <li>Track your submissions, requests, or feedback.</li>
          <li>Receive early access to upcoming tools and features.</li>
        </ul>
      </section>

      {/* Trust Assurance */}
      <section className="bg-slate-800 rounded-xl shadow-md max-w-3xl mx-auto p-8 text-center"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        <h3 className="text-2xl font-bold text-green-400 mb-3">Your Information is Safe</h3>
        <p className="text-gray-300">
          We follow strict security practices to protect your data. No spam. No third-party selling. Just clean, secure registration.
        </p>
      </section>

      {/* Final CTA */}
      <section className="text-center"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        <h3 className="text-3xl font-bold mb-3">Need Help Signing Up?</h3>
        <p className="text-gray-300 mb-6">If you're facing issues or have questions, feel free to reach out.</p>
        <Link to="/contact_us">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
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
