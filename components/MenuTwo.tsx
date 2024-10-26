"use client"; // Indicates this component can use client-side state

import mobile_menu_data from "@/data/menu-data"; // Import the menu data
import Link from "next/link"; // Import Next.js Link component
import React, { useState } from "react"; // Import React and useState hook
import { motion } from "framer-motion"; // Import Framer Motion for animations

const MenuTwo = () => {
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null); // State to track which submenu is open
  const [menuOpen, setMenuOpen] = useState(false); // State to track if the mobile menu is open

  const handleMenuToggle = (id: number) => {
    // Toggle the submenu open/close
    if (submenuOpen === id) {
      setSubmenuOpen(null); // If the same menu is clicked, close it
    } else {
      setSubmenuOpen(id); // Open the clicked submenu
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle the main mobile menu
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col items-center justify-center p-2 rounded focus:outline-none"
        onClick={toggleMenu}
      >
        <motion.div
          className={`h-1 w-6 bg-gray-900 mb-1 transition-transform duration-200 ${menuOpen ? "rotate-45" : ""}`}
        />
        <motion.div
          className={`h-1 w-6 bg-gray-900 mb-1 transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`}
        />
        <motion.div
          className={`h-1 w-6 bg-gray-900 mb-1 transition-transform duration-200 ${menuOpen ? "-rotate-45" : ""}`}
        />
      </button>

      {/* Main Menu */}
      {menuOpen && (
        <ul className="absolute left-0 top-12 bg-white shadow-lg w-full md:hidden z-10 rounded-md">
          {mobile_menu_data.map((item) => (
            <li
              key={item.id}
              className={`menu-item relative ${item.hasDropdown ? "has-dropdown" : ""} ${
                submenuOpen === item.id ? "active" : ""
              }`}
              onClick={() => item.hasDropdown && handleMenuToggle(item.id)} // Toggle the submenu if it has dropdown
            >
              <Link href={item.link} className="block px-4 py-2 text-gray-900 hover:bg-gray-200">
                {item.title}
              </Link> {/* Main menu link */}
              {item.hasDropdown && ( // Conditional rendering for dropdown
                <ul
                  className={`submenu absolute left-0 top-full bg-white shadow-md rounded-md w-full ${submenuOpen === item.id ? "block" : "hidden"}`} // Show/hide submenu based on state
                >
                  {item.submenus?.map((submenu, index) => (
                    <li key={index}>
                      <Link
                        href={submenu.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        {submenu.title}
                      </Link> {/* Submenu link */}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuTwo;
