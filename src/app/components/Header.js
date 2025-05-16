'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-yellow-100 border-b border-amber-800 shadow-md">
      <div className="container mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.jpeg"
            alt="MITTALIS Research India Logo"
            width={50}
            height={50}
            className="rounded-md object-cover"
          />
          <Link href="/" className="text-amber-900 text-xl md:text-2xl font-bold">
            MITTALIS Research India
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-medium text-amber-900">
          <Link href="/" className="hover:text-amber-700 transition">Home</Link>
          <Link href="/about-us" className="hover:text-amber-700 transition">About Us</Link>        
          <Link href="/get-involved" className="hover:text-amber-700 transition">Get Involved</Link>
          <Link href="/contact" className="hover:text-amber-700 transition">Get in Touch</Link>
        </nav>

        {/* Donate Button */}
        <Link
          href="/donate"
          className="hidden md:inline-block border-2 border-amber-800 text-amber-800 px-4 py-2 rounded hover:bg-amber-800 hover:text-yellow-100 transition duration-300"
        >
          DONATE NOW
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-yellow-100 border-t border-amber-800 px-4 pb-4">
          <nav className="flex flex-col space-y-3 font-medium text-amber-900">
            <Link href="/" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about-us" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>About Us</Link>            
            <Link href="/get-involved" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>Get Involved</Link>
            <Link href="/contact" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>Get in Touch</Link>
            <Link
              href="/donate"
              className="mt-2 inline-block text-center border-2 border-amber-800 text-amber-800 px-4 py-2 rounded hover:bg-amber-800 hover:text-yellow-100 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              DONATE NOW
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
