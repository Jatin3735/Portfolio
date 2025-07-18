import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { MdScreenshotMonitor } from "react-icons/md";
import { SiHtml5, SiVite } from "react-icons/si";
import { IoAccessibility } from "react-icons/io5";

export default function About() {
  const values = [
    {
      title: 'Simplicity',
      desc: 'We believe simplicity is the key to clarity. Our designs are minimal and intentional.',
    },
    {
      title: 'Performance',
      desc: 'Speed and optimization are central to every line of code we write.',
    },
    {
      title: 'Responsiveness',
      desc: 'Every page and component adapts perfectly across all devices and screen sizes.',
    },
  ];

  const skills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "JavaScript (ES6+)", icon: <TbBrandJavascript /> },
    { name: "Responsive Web Design", icon: <MdScreenshotMonitor /> },
    { name: "HTML5 / CSS3", icon: <SiHtml5 /> },
    { name: "Vite / Webpack", icon: <SiVite /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Accessibility (A11y)", icon: <IoAccessibility /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-700 text-white px-6 py-20 space-y-20">
      {/* Intro Section */}
      <section
        className="max-w-4xl mx-auto text-center"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to <span className="text-red-400 font-semibold">Jatin's Website</span> — your go-to destination for clean, responsive, and modern web design using React and Tailwind CSS.
        </p>
        <p className="text-md text-gray-400 leading-relaxed">
          We are passionate about building smooth user interfaces with great design principles. This website demonstrates clean code structure, component reusability, and mobile-first responsive layouts — all with zero external UI libraries.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="max-w-5xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-4 text-red-400">Our Mission</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Our mission is simple: to craft web experiences that are beautiful, fast, and accessible. We focus on usability and performance by writing minimal and optimized code. We don’t rely on bulky UI kits — every component is designed from scratch with Tailwind CSS and animated for an engaging user experience.
        </p>
      </section>

      {/* Core Values Section */}
      <section
        className="max-w-5xl mx-auto"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-red-400">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section
        className="max-w-5xl mx-auto text-center"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}
      >
        <h2 className="text-3xl font-semibold text-red-400 mb-6">Technologies We Use</h2>
        <p className="text-gray-300 mb-8">
          We use modern, cutting-edge tools to build future-proof websites:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-gray-400">
          {skills.map(({ name, icon }, index) => (
            <li
              key={index}
              className="bg-gray-800 py-3 px-4 rounded-xl hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="text-xl">{icon}</span>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA Section */}
      <section
        className="max-w-3xl mx-auto text-center mt-16"
        style={{
          animation: 'fadeInUp 1s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)',
        }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Let’s Build Something Great</h2>
        <p className="text-gray-400 mb-6">
          Whether you're a business owner, a student, or just someone with an idea — let’s turn it into reality.
        </p>
        <Link to="/contact_us">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
            Contact Us
          </button>
        </Link>
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
