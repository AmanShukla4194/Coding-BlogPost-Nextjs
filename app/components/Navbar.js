"use client"
import Link from 'next/link';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const shouldShowHamburgerMenu = isMobile; // Only show the hamburger menu on mobile devices

  return (
    <nav className="bg-blue-800 p-6" style={{ width: '100%' }}>
      <div className="container mx-auto flex justify-between items-center relative">
        <Link href="/" className="text-white font-bold text-xl">Blog Hunter</Link>
        {shouldShowHamburgerMenu ? (
          <>
            <button
              className="lg:hidden text-white font-bold text-xl ml-6 focus:outline-none"
              onClick={handleMenuToggle}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
            {menuOpen && (
              <div className="absolute top-full right-0 bg-blue-600 text-white text-center">
                <Link href="/" className="block p-4 font-bold hover:bg-blue-700">Home</Link>
                <Link href="/allblogs" className="block p-4 font-bold hover:bg-blue-700">Blogs</Link>
                <Link href="/about" className="block p-4 font-bold hover:bg-blue-700">About</Link>
                <Link href="/contact" className="block p-4 font-bold hover:bg-blue-700">Contact</Link>
              </div>
            )}
          </>
        ) : (
          <div className="flex space-x-4">
            <Link href="/" className="text-white font-bold text-xl hover:text-white">Home</Link>
            <Link href="/allblogs" className="text-white font-bold text-xl hover:text-white">Blogs</Link>
            <Link href="/about" className="text-white font-bold text-xl hover:text-white">About</Link>
            <Link href="/contact" className="text-white font-bold text-xl hover:text-white">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
