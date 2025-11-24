
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Category", "Product", "Premium"];

  return (
    <nav className="w-full bg-[#abbc11]">
      <div className="flex items-center justify-between md:justify-around px-4 py-3 md:py-4">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold">
            Crust & <span className="text-white">Crumb</span>
          </h2>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
          >
            <Menu size={30} color="black" strokeWidth={3}  />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li
                key={item}
                className="list-none h-10 w-24 flex items-center justify-center hover:bg-red-100 rounded-3xl transition text-lg"
              >
                <NavLink
                  to={`/${item === "Home" ? "" : item}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-pink-600 font-semibold"
                      : "text-gray-700"
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Separated Contact Button */}
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `ml-4 h-10 w-28 flex items-center justify-center rounded-xl transition text-lg font-medium ${
                isActive
                  ? "bg-orange-200  text-orange-700"
                  : "bg-white text-gray-700 hover:bg-red-100"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4">
          {navItems.map((item) => (
            <li
              key={item}
              className="list-none h-10 w-40 flex items-center justify-center hover:bg-red-100 rounded-3xl transition text-lg"
            >
              <NavLink
                to={`/${item === "Home" ? "" : item}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}

          {/* Separated Contact Button in Mobile */}
          <li className="list-none h-10 w-40 flex items-center justify-center rounded-xl bg-white hover:bg-red-100 transition text-lg font-medium">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "text-gray-700"
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
