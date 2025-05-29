'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileNavVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut', staggerChildren: 0.05 }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeOut' }
    }
  };

  const linkVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <header className="sticky top-0 z-50 bg-yellow-100 border-b border-amber-800 shadow-md">
      <div className="container mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.jpeg"
            alt="MITTALIS Research India Logo"
            width={80}
            height={80}
            className="rounded-md object-cover"
          />
          <Link href="/" className="text-amber-900 text-xl md:text-2xl font-bold">
            MITTALIS Research India
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-medium text-amber-900">
          {['/', '/about-us', '/get-involved', '/contact'].map((href, idx) => (
            <Link
              key={idx}
              href={href}
              className="group relative transition text-amber-900"
            >
              <span className="hover:text-amber-700 transition">{href === '/' ? 'Home' : href.replace('/', '').replace('-', ' ')}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-700 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Donate Button */}
        <Link
          href="/donate"
          className="hidden md:inline-block border-2 border-amber-800 text-amber-800 px-4 py-2 rounded hover:bg-amber-800 hover:text-yellow-100 transition duration-300"
        >
          DONATE NOW
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-amber-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileNavVariants}
            className="md:hidden bg-yellow-100 border-t border-amber-800 px-4 pb-4 overflow-hidden"
          >
            <motion.nav
              className="flex flex-col space-y-3 font-medium text-amber-900"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
            >
              {[
                { href: '/', label: 'Home' },
                { href: '/about-us', label: 'About Us' },
                { href: '/get-involved', label: 'Get Involved' },
                { href: '/contact', label: 'Get in Touch' }
              ].map(({ href, label }) => (
                <motion.div key={href} variants={linkVariant}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-amber-700 transition"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVariant}>
                <Link
                  href="/donate"
                  className="mt-2 inline-block text-center border-2 border-amber-800 text-amber-800 px-4 py-2 rounded hover:bg-amber-800 hover:text-yellow-100 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  DONATE NOW
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
