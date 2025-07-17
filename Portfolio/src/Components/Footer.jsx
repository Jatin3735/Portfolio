import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Logo or Title */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Jatin's Website</h2>
          <p className="text-sm">Crafted with React and Tailwind CSS. Fully responsive and modern.</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className='flex flex-col items-center'>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/contact_us" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Social Media Icons */}
        <div className='flex flex-col items-center'>
          <h3 className="text-xl font-semibold text-white mb-5">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4 text-white">
            <Link to="#" className="hover:text-blue-700 hover:translate-y-[-5px] duration-300 text-xl "><FaFacebookF /></Link>
            <Link to="#" className="hover:text-blue-400 hover:translate-y-[-5px] duration-300 text-xl "><FaTwitter /></Link>
            <Link to="https:instagram.com/x_jangra" className="hover:text-pink-500 text-xl hover:translate-y-[-5px] duration-300"><FaInstagram /></Link>
            <Link to="https:github.com/jatin3735" className="hover:text-black text-xl hover:translate-y-[-5px] duration-300"><FaGithub /></Link>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm mt-10 border-t border-slate-600 pt-6">
        © {new Date().getFullYear()} Jatin. All rights reserved.
      </div>
    </footer>
  );
}
