'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Spustit handleScroll jednou při načtení pro případ, že stránka není na vrchu
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  // Dynamické třídy pro <nav> element
  const navClasses = `
    fixed w-full z-40 text-white p-4 transition-colors duration-300
    ${isScrolled || isMobileMenuOpen ? 'bg-gray-800' : 'bg-transparent'}
  `;

  // Třídy pro hamburger/close ikonu, aby byla vždy viditelná na mobilu
  const mobileIconClasses = `
    text-white focus:outline-none
    ${isScrolled || isMobileMenuOpen ? 'focus:text-gray-400' : 'focus:text-gray-300'}
  `;


  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-xl font-bold ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-gray-800 lg:text-white'}`}>
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
            className={mobileIconClasses}
          >
            {/* Zobrazit CloseIcon vždy, když je menu otevřené, jinak HamburgerIcon */}
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Celoobrazovkové mobilní menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 z-50 flex flex-col items-center justify-center">
          {/* Tlačítko pro zavření je nyní součástí celoobrazovkového menu a jeho pozice je řízena zde */}
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
              className="text-white focus:outline-none focus:text-gray-400"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4 text-white">
            <div className="text-2xl font-bold mb-4">
                <Link href="/" onClick={() => { setIsMobileMenuOpen(false); }}>Logo</Link>
            </div>
            <ul className="flex flex-col items-center space-y-3">
              <li>
                <Link href="#" className="text-xl hover:text-gray-400 block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xl hover:text-gray-400 block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  O mně
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xl hover:text-gray-400 block py-2" onClick={() => setIsMobileMenuOpen(false)}>
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
