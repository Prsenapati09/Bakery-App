// Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">YourBrand</h2>
          <p className="text-sm">
            Building beautiful, accessible web experiences with React and
            Tailwind CSS.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Explore</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/premium" className="hover:text-orange-400">
                  Premium
                </Link>
              </li>
              <li>
                <Link to="/category" className="hover:text-orange-400">
                  Category
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-orange-400">
                  Product
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/contact" className="hover:text-orange-400">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@yourbrand.com"
                  className="hover:text-orange-400"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-orange-400">
                  Call Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col justify-between">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-blue-500">
              Twitter
            </a>
            <a href="#" className="hover:text-red-400">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-500">
              LinkedIn
            </a>
          </div>
        <p className="text-sm text-center w-full flex">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
        </div>
      </div>
      <div className="h-10 w-full bg-amber-300 mt-5 flex items-center justify-center text-gray-600">
        <p className="hover:text-pink-600 transition">Made by Pr senapati</p>
      </div>
    </footer>
  );
};

export default Footer;

