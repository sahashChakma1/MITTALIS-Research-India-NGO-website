"use client";

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutUs() {
  // Animation variants for Hero Section
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20, duration: 1.8 } },
  };

  const bgImageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.2, transition: { duration: 2, ease: 'easeInOut' } },
  };

  // Animation variants for Philosophy/Focus Section
  const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 1.5, ease: 'easeInOut' },
    }),
  };

  // Animation variants for Mission/Vision Sections
  const sectionTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
  };

  // Animation variants for Glimpse Section
  const glimpseCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.3, duration: 1.2, type: 'spring', stiffness: 120, damping: 15 },
    }),
    hover: { scale: 1.03, transition: { type: 'spring', stiffness: 200, damping: 10 } },
  };

  // Animation variants for Call to Action
  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 1.5, ease: 'easeInOut' },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us - MITTALIS Research India</title>
        <meta
          name="description"
          content="Learn more about MITTALIS Research India and our mission to empower underserved children through education and holistic development."
        />
      </Head>

      <Header />

      <main className="flex-grow bg-white text-gray-900">
        {/* Hero Section */}
        <section className="bg-amber-100 py-20 text-center relative overflow-hidden">
          <motion.div
            className="max-w-3xl mx-auto z-10 relative px-4"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.h1
              className="text-5xl font-extrabold uppercase tracking-wide text-amber-900 drop-shadow"
              variants={heroVariants}
            >
              Who We Are
            </motion.h1>
            <motion.p
              className="mt-4 text-xl font-medium text-gray-800"
              variants={heroVariants}
              transition={{ delay: 0.2 }}
            >
              Empowering Dreams. Uplifting Futures.
            </motion.p>
            <motion.p
              className="mt-2 text-lg text-gray-700 leading-relaxed"
              variants={heroVariants}
              transition={{ delay: 0.4 }}
            >
              At MITTALIS Research India, we believe that every child deserves the opportunity to learn, grow, and thrive.
            </motion.p>
          </motion.div>
          <motion.div
            className="absolute inset-0 opacity-20 bg-[url('/INT7.jpg')] bg-cover bg-center"
            variants={bgImageVariants}
            initial="hidden"
            animate="visible"
            style={{ willChange: 'opacity' }}
          />
        </section>

        {/* Philosophy and Focus Section */}
        <section className="bg-amber-50 py-20">
  <div className="container mx-auto px-6 max-w-6xl">
    <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-900 leading-relaxed">
      {[
        {
          title: 'Our Philosophy',
          content: [
            'MITTALIS stands for <strong>Mindful Intervention for Tangible Transformation and Lifelong Impact for Sustainability</strong>. Our initiatives are rooted in the belief that true change comes from sustained, thoughtful engagement.',
            'We don’t just offer aid—we work to restore dignity and opportunity to children from marginalized communities across India.',
          ],
        },
        {
          title: 'Our Focus',
          content: [
            'Operating at the intersection of <strong>education, research, and rehabilitation</strong>, we serve children from tribal backgrounds, migrant families, orphanages, and rural settlements.',
            'From early learning to life skills and mental wellness, our holistic approach empowers children to thrive and lead with confidence.',
          ],
        },
        {
          title: 'Cultural Connection',
          content: [
            'Through our <em><strong>Knowing India</strong></em> initiative, we celebrate and safeguard indigenous knowledge systems while addressing modern social challenges with cultural sensitivity.',
            'We believe identity is power—and every child deserves to see their heritage valued and upheld.',
          ],
        },
        {
          title: 'Where We Work',
          content: [
            'Our on-ground programs currently operate in <strong>Kerala</strong> and <strong>Bengaluru</strong>, led by a growing network of educators, researchers, and volunteers dedicated to uplifting communities.',
            'We’re building a future that is inclusive, resilient, and rooted in hope.',
          ],
        },
      ].map(({ title, content }, index) => (
        <motion.div
          key={title}
          variants={gridItemVariants}
          initial="hidden"
          animate="visible" // Immediate animation
          custom={index}
          style={{ willChange: 'transform, opacity' }}
        >
          <h3 className="text-2xl font-semibold text-amber-600 mb-4">{title}</h3>
          {content.map((paragraph, idx) => (
            <p key={idx} className="mt-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </motion.div>
      ))}
    </div>

    <motion.div
      className="mt-16 text-center"
      initial="hidden"
      animate="visible" // Immediate animation
      variants={sectionTextVariants}
      style={{ willChange: 'transform, opacity' }}
    >
      <p className="text-xl font-semibold text-gray-900">
        Join us in our mission to <span className="text-amber-600">Educate, Engage, and Enrich</span>.
      </p>
      <p className="mt-2 text-gray-700">
        Your support can help shape a generation of changemakers.
      </p>
    </motion.div>
  </div>
</section>

        {/* Mission Section */}
<Section title="Our Mission" bg="bg-amber-100">
  <motion.div
    className="max-w-4xl mx-auto text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionTextVariants}
    style={{ willChange: 'transform, opacity' }}
  >
    <img
      src="/logo/logo.jpg" // Replace with your actual logo path
      alt="MITTALIS Logo"
      className="mx-auto w-24 h-24 mb-6"
    />
    <p className="text-2xl font-semibold text-amber-900 mb-4">
      Educate. Engage. Enrich.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      At MITTALIS Research India, our mission is to empower children from underserved communities through
      access to quality education, emotional well-being, and cultural dignity. We strive to create safe
      learning spaces, foster curiosity, and build a foundation for lifelong growth.
    </p>
  </motion.div>
</Section>


        {/* Vision Section */}
        <Section title="Our Vision" bg="bg-white">
          <motion.div
            className="max-w-4xl mx-auto text-center px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionTextVariants}
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="text-2xl font-semibold text-amber-900 mb-4">
              A Future Rooted in Compassion and Possibility
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              To foster the holistic development of children from marginalized communities through
              <span className="font-medium text-amber-600"> education</span>,
              <span className="font-medium text-amber-600"> skill-building</span>,
              <span className="font-medium text-amber-600"> environmental awareness</span>,
              <span className="font-medium text-amber-600"> cultural preservation</span>,
              and <span className="font-medium text-amber-600">research</span>.
            </p>
          </motion.div>
        </Section>

        {/* Glimpse Section */}
        <Section title="A Glimpse into MITTALIS 2024–25" bg="bg-amber-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {[
                {
                  src: '/about/MIG4.jpeg',
                  alt: 'Cleanliness and hygiene awareness for children of migrant workers in Hegdenagar, Bengaluru.',
                },
                {
                  src: '/about/BUD4.jpeg',
                  alt: 'Remedial classes for children in Budigere, Bengaluru.',
                },
                {
                  src: '/about/GEMS4.jpeg',
                  alt: 'Well-being session by Ayurveda doctors at St. Gregorious English Medium School, Attappadi.',
                },
                {
                  src: '/about/INT6.jpg',
                  alt: 'MA English students at Kristu Jayanti College conducting sessions for children in Bengaluru.',
                },
                {
                  src: '/about/MC6.jpeg',
                  alt: 'Medical Camp in Mukkali and Sholayur regions of Attappadi.',
                },
              ].map(({ src, alt }, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform bg-white"
                  variants={glimpseCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  whileHover="hover"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <p className="text-sm font-semibold text-gray-700 text-center">{alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Section>

        {/* Call to Action Section */}
        <Section title="Join Our Cause" bg="bg-amber-100">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ctaVariants}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.p
              className="text-lg mb-6 text-gray-700"
              variants={ctaVariants}
              custom={0}
            >
              Help us make a difference in the lives of underserved children across India. Your support can
              transform lives through education and holistic development.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row justify-center gap-4"
              variants={ctaVariants}
              custom={1}
            >
              <Link
                href="/get-involved"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Volunteer With Us
              </Link>
              <Link
                href="/contact"
                className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

// Reusable Section Component
function Section({ title, bg, children }) {
  return (
    <section className={`${bg} py-16 px-4`}>
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-amber-900 mb-8 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ willChange: 'transform, opacity' }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}