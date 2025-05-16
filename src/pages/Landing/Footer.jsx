import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md text-gray-300 pt-10 mt-15">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About</h3>
          <p className="text-sm">
            A modern digital library where you can explore, reserve, and
            discover your next great read.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Featured
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
          <p className="text-sm">Email: contact@library.com</p>
          <p className="text-sm">Phone: +212 6 00 00 00 00</p>
          <p className="text-sm">Morocco</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="#">
              <FaGithub className="hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DigitalBook. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
