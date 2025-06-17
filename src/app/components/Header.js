'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Linkedin , Phone, Mail  } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/contact', label: 'Get in Touch' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b shadow-sm" style={{ backgroundColor: '#fcf9f2', borderColor: '#7E5857' }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3 md:-ml-8">
          <Image
            src="/logo/logo.jpeg"
            alt="MITTALIS Research India Logo"
            width={48}
            height={48}
            className="rounded-md object-cover w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10"
          />
          <Link
              href="/"
              className="text-base sm:text-lg md:text-lg font-semibold leading-tight"
              style={{
                color: '#673838',
                fontFamily: 'var(--font-montserrat)',
              }}
            >
              MITTALIS Research India
            </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 text-sm font-medium" style={{ color: '#673838' }}>
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`group relative transition ${
                  isActive ? 'font-bold' : ''
                }`}
                style={{ color: isActive ? '#6C2928' : '#673838' }}
              >
                <span className="transition" style={{ '&:hover': { color: '#7E5857' } }}>{label}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 transition-all ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{ backgroundColor: '#7E5857' }}
                />
              </Link>
            );
          })}
        </div>
       {/* Right Section: Contact + Donate + LinkedIn */}
<div className="hidden md:flex items-center space-x-6 text-sm ml-6" style={{ color: '#673838' }}>
  {/* Contact Info */}
  <div className="flex flex-col items-end leading-tight space-y-0.5">
    <a href="tel:+919495625859" className="flex items-center gap-1 transition font-medium hover:opacity-75">
      <Phone size={14} className="mt-[1px]" />
      +91 9495625859
    </a>
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=president@mittalisresearchindia.org&su=Inquiry%20from%20Website&body=Dear%20Mittalis%20Research%20India%2C%0D%0A%0D%0AI%20would%20like%20to%20know%20more%20about%20your%20organization.%0D%0A%0D%0AThank%20you%2C%0D%0A[Your%20Name]"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 transition font-medium hover:opacity-75"
    >
      <Mail size={14} className="mt-[1px]" />
      Email via Gmail
    </a>
  </div>

  {/* Donate and LinkedIn */}
  <div className="flex items-center space-x-3">
    <a
      href="https://www.linkedin.com/company/mittalis-re-search-india/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on LinkedIn"
      className="transition hover:opacity-75"
      style={{ color: '#673838' }}
    >
      <Linkedin size={20} />
    </a>
    <Link
      href="/donate"
      className="px-3 py-1.5 text-sm font-bold rounded transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
      style={{ backgroundColor: '#6C2928', color: '#F5F2F0' }}
    >
      DONATE NOW
    </Link>
  </div>
</div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden ml-4"
          style={{ color: '#673838' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={mobileNavVariants}
      className="md:hidden border-t px-4 pb-4 overflow-hidden"
      style={{ backgroundColor: '#F5F2F0', borderColor: '#7E5857' }}
    >
      <motion.nav
        className="flex flex-col space-y-3 font-medium"
        style={{ color: '#673838' }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {/* Nav Links */}
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <motion.div key={href} variants={linkVariant}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block transition ${
                  isActive ? 'font-bold' : 'hover:opacity-75'
                }`}
                style={{ color: isActive ? '#6C2928' : '#673838' }}
              >
                {label}
              </Link>
            </motion.div>
          );
        })}

        {/* Contact Info */}
          <motion.div variants={linkVariant} className="mt-3 space-y-1">
            <a href="tel:+919495625859" className="flex items-center gap-2 transition hover:opacity-75">
              <Phone size={16} />
              +91 9495625859
            </a>            
        <a 
          href="mailto:president@mittalisresearchindia.org?subject=Inquiry from Website&body=Dear Mittalis Research India,%0D%0A%0D%0AI would like to know more about your organization and services.%0D%0A%0D%0APlease provide me with more information.%0D%0A%0D%0AThank you,%0D%0A[Your Name]"
          className="flex items-center gap-1 transition font-medium hover:opacity-75"
        >
         <Mail size={14} className="mt-[1px]" />
          Email via Gmail
        </a>
          </motion.div>

        {/* LinkedIn */}
        <motion.div variants={linkVariant}>
          <a
            href="https://www.linkedin.com/company/mittalis-re-search-india/"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition hover:opacity-75"
          >
            Follow us on LinkedIn
          </a>
        </motion.div>

        {/* Donate Button */}
        <motion.div variants={linkVariant}>
          <Link
            href="/donate"
            className="mt-2 inline-block text-center px-4 py-2 rounded transition font-bold"
            style={{ backgroundColor: '#6C2928', color: '#F5F2F0' }}
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