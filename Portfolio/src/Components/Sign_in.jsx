import React from 'react';
import { Link } from 'react-router-dom';

export default function Sign_in() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-700 text-white px-6 py-20 space-y-20">
      {/* Welcome Header */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome Back</h1>
        <p className="text-lg text-gray-300">
          Sign in to your <span className="text-red-400 font-semibold">Jatin's</span> Portal to access your dashboard, manage your services, and connect with our team.
        </p>
      </section>

      {/* Sign-in Form */}
      <section className="flex justify-center">
        <div
          className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-slate-800 to-gray-800 border border-slate-700"
          style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Sign In to <span className="text-red-500">Jatin's</span> Portal
          </h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-300 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-slate-900 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-gray-300 font-medium">
                Password
              </label>
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
              Sign In
            </button>
          </form>
          <p className="text-sm text-center text-gray-400 mt-4">
            Don't have an account?{' '}
            <Link to="/sign_up" className="text-red-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </section>

      {/* Why Sign Up Section */}
      <section className="max-w-4xl mx-auto text-center md:text-left"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        <h3 className="text-3xl font-semibold text-red-400 mb-6 text-center">Why Create an Account?</h3>
        <ul className="space-y-4 text-gray-300 list-disc list-inside px-6 md:px-0">
          <li>Access personalized services and saved preferences.</li>
          <li>Get priority support and feature access.</li>
          <li>Manage your profile and service requests easily.</li>
          <li>Track your orders, requests, or submissions in one place.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        <h3 className="text-3xl font-semibold text-yellow-300 mb-6 text-center">Having Trouble Logging In?</h3>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          <div className="bg-slate-800 p-5 rounded-xl shadow-md">
            <h4 className="font-bold mb-2">❓ I forgot my password</h4>
            <p>Click on "Forgot password?" on the login page to reset it via your email.</p>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl shadow-md">
            <h4 className="font-bold mb-2">❓ My email isn't recognized</h4>
            <p>Make sure you signed up first. If not, register a new account or contact support.</p>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl shadow-md">
            <h4 className="font-bold mb-2">❓ I’m getting an error</h4>
            <p>Clear your browser cache or try logging in from a different device.</p>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl shadow-md">
            <h4 className="font-bold mb-2">❓ Can I change my email?</h4>
            <p>Yes. Once logged in, go to profile settings to update your email address.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center"
      style={{
            animation: 'fadeInUp 1s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}>
        <h3 className="text-3xl font-bold mb-3">Need More Help?</h3>
        <p className="text-gray-300 mb-6">Still having issues signing in? Contact our support team for quick help.</p>
        <Link to="/contact_us">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
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
