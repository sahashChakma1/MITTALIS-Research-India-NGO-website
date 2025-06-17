'use client';

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation Variants
const sectionTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
};

export default function AboutUs() {
  const imageSections = [
    { src: '/about/BUD1.jpeg', label: 'Remedial classes for children in Budigere, Bengaluru.' },
    { src: '/home/Tribal_Children.jpg', label: 'A Visit to Tribal Children in Attappadi, Kerala' },
    { src: '/about/MC6.jpeg', label: 'Medical Camp in Mukkali and Sholayur regions of Attappadi.' },
    { src: '/home/Orphans.jpeg', label: 'A Visit to Aryan Ashraya Orphanage, Devanahalli, Bengaluru.' },
    { src: '/about/health.jpeg', label: 'Session on Health &amp; Well-Being at St. Gregorious English Medium School, Attappadi.' },
    { src: '/about/hegde.jpeg', label: 'Awareness program on cleanliness and hygiene for the children of migrant workers in Hegdenagar, Bengaluru.' },
    { src: '/about/shala.jpg', label: 'Learning sessions for kids at Modala Shala Ananda Sagara Charitable Trust,Bengaluru.' },
    { src: '/about/knowing.jpg', label: 'A Knowing India Research Visit to Padmashree Awardee, Lakshmi Amma of Kaani Tribe, Attappadi' }, 
    { src: '/about/INT6.jpg', label: 'Girls Empowerment Sessions' },       
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900"> 
      <Header />

      <main className="flex-grow">
       {/* Hero Background Section */}
<section
  className="relative bg-cover bg-center bg-no-repeat py-32 md:py-15 px-4"
  style={{ backgroundImage: "url('/about/about_us.jpg')" }}
>
  <div className="max-w-3xl md:max-w-4xl mx-auto bg-[#fff7e6]/90 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg">
    <h2 className="text-2xl md:text-3xl font-extrabold font-montserrat text-center text-[#673838] uppercase mb-6 tracking-wide">
      About Us
      <div className="mt-2 w-24 h-1 bg-[#673838] mx-auto rounded-full" />
    </h2>
    <div className="text-[#3b2f1c] text-base md:text-lg space-y-4 leading-relaxed">
     <p>
        <strong>Our Philosophy</strong>–MITTALIS Research India is a purpose-driven organization
        committed to transforming the lives of underserved children across India through
        mindful, inclusive, and sustainable interventions. Founded on the principle of
        Mindful Intervention for Tangible Transformation And Lifelong Impact for
        Sustainability, we work at the intersection of education, research, and rehabilitation
        to create meaningful and lasting impact. With a deep-rooted belief in the potential
        of every child, our efforts are centered on empowering young minds to dream big,
        rise above their circumstances, and build a brighter future.
      </p>
      <p>
        <strong>Our Focus</strong> –Our work is anchored in three interconnected pillars—Education,
        Upskilling, and Research. We believe that access to quality learning, life skills, and
        creative expression is essential for children to grow into confident and capable
        individuals. That’s why we strive to ensure that every child receives the resources
        and support they need to flourish. Recognizing that a child’s well-being is closely tied
        to the stability and health of their family, we also extend our support to families in
        crisis. Through this integrated approach, we aim to build a nurturing ecosystem
        where every child has a fair and sustained opportunity to thrive.
      </p>
      <p>
        <strong>Our Commitment to Research</strong> – Through <em>Knowing India</em>, the flagship research
        initiative of MITTALIS, we seek to unearth and document India’s traditional
        knowledge systems while exploring the challenges faced by marginalized
        communities. By offering sustainable solutions rooted in cultural understanding, this
        initiative bridges heritage and progress. Our work is grounded in the principles of
        sustainable development and cultural preservation, ensuring that every intervention
        contributes to a future that is equitable, inclusive, and enduring.
      </p>
      <p>
        <strong>Our Reach</strong> –At MITTALIS, we believe that true change goes beyond temporary
        assistance. With current initiatives in Kerala and Bengaluru, MITTALIS Research India
        continues to evolve as a community-rooted organization driven by compassion and
        commitment. Through every step, we remain focused on our core mission—to
        educate, engage, and enrich the lives of children, nurturing a generation that carries
        forward both knowledge and hope.
      </p>

    </div>
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
          >
            <img
              src="/logo/logo.jpg"
              alt="MITTALIS Logo"
              className="mx-auto w-24 h-24 mb-6 rounded-full shadow-md"
              loading="lazy"
            />
            <p className="text-2xl font-semibold text-amber-900 mb-4">Educate. Engage. Enrich.</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At MITTALIS Research India, our mission is to empower children from underserved communities through
              access to quality education, emotional well-being, and cultural dignity.
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
          >
            <p className="text-2xl font-semibold text-amber-900 mb-4">A Future Rooted in Compassion and Possibility</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              To foster holistic development through
              <span className="font-medium text-amber-600"> education</span>,
              <span className="font-medium text-amber-600"> skill-building</span>,
              <span className="font-medium text-amber-600"> environmental awareness</span>,
              <span className="font-medium text-amber-600"> cultural preservation</span>, and
              <span className="font-medium text-amber-600"> research</span>.
            </p>
          </motion.div>
        </Section>

        {/* Interventions Glimpse Title */}
        <section className="bg-[#8B5E3C] py-10 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-montserrat font-bold  uppercase">
            A Glimpse into Our Interventions
          </h2>
        </section>

        {/* Image Grid Section */}
        <section className="bg-white py-12 px-4">
          <div className="flex flex-wrap -mx-2">
            {imageSections.map((item, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.2, duration: 1.2 },
                  }),
                }}
              >
                <div className="relative rounded-lg shadow-md overflow-hidden group">
                 <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-80 md:h-[22rem] object-cover opacity-90 group-hover:opacity-100 transition duration-300"
                  />

                  <div className="absolute bottom-0 w-full bg-black/60 text-white text-sm md:text-base font-medium p-2 text-center">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
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
          className="text-3xl font-amaranth font-bold text-center text-amber-900 mb-8 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}
