'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const HamburgerIcon = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Logo</Link>
        </div>

        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link href="#" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">
              O mně
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">
              Ceník
            </Link>
          </li>
        </ul>

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="text-white focus:outline-none focus:text-gray-400"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xl font-bold mb-2">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Logo</Link>
            </div>
            <ul className="flex flex-col items-center space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-400 block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  O mně
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Ceník
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
