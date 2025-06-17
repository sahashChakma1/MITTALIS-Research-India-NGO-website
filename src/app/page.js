"use client";

import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const heroVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { delay: i * 0.2, duration: 0.8 }
        : { delay: i * 0.3, duration: 1.2, type: 'spring', stiffness: 100, damping: 20 },
    }),
    hover: {
      scale: 1.05,
      transition: shouldReduceMotion
        ? { duration: 0.3 }
        : { type: 'spring', stiffness: 200, damping: 15 },
    },
  };

  const beneficiaryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: shouldReduceMotion
        ? { delay: i * 0.3, duration: 1 }
        : { delay: i * 0.4, duration: 1.5, type: 'spring', stiffness: 90, damping: 25 },
    }),
  };

  return (
    <main className="min-h-screen bg-[#f4f1ed] flex flex-col">
      <Header />

      {/* Hero Section */}
     <section
  className="py-40 min-h-screen flex items-center"
  style={{
    background: 'linear-gradient(to right, #cbb431, #d8d6d6)',
  }}
>
  <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center gap-16">
    {/* Larger Image */}
    <motion.div
      className="w-full md:w-[55%]"
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      style={{ willChange: 'transform, opacity' }}
    >
      <Image
        src="/home/home.jpg"
        alt="Children silhouette"
        width={600}
        height={600}
        className="rounded-3xl w-full h-auto object-cover shadow-xl"
        loading="lazy"
      />
    </motion.div>
{/* Text Content */}
<div className="w-full md:w-[45%] space-y-10 text-center md:text-left">
  {/* Heading */}
 <motion.h1
  className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-bold leading-snug tracking-tight text-[#722f2f]"
  variants={heroVariants}
  initial="hidden"
  animate="visible"  
>
  Educate, Engage, <span className="ml-40">Enrich</span>
</motion.h1>
  {/* Quote */}
  <motion.div
    className="bg-[#f4f1ed] p-8 md:p-10 rounded-3xl shadow-inner"
    variants={quoteVariants}
    initial="hidden"
    animate="visible"
  >
    <p className="text-xl md:text-2xl text-[#4a3400] font-medium leading-relaxed tracking-wide">
      Every Child holds a Dream<br />
      Every Dream needs a Chance<br />
      Every Chance changes Tomorrow
    </p>
  </motion.div>
</div>
  </div>
</section>

{/* What We Do Section */}
<section className="pt-10 bg-[#ffffff]">
  {/* Header with reddish background and white text spanning full width */}
  <div className="bg-[#381f05] py-10 w-full">
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={
        shouldReduceMotion
          ? { duration: 0.8 }
          : { duration: 1.2, type: 'spring', stiffness: 100, damping: 20 }
      }
      style={{ willChange: 'opacity' }}
    >
      <h2 className="text-4xl font-bold text-white font-amaranth tracking-tight">What We Do</h2>
      <div className="mt-2 w-24 h-1 bg-white mx-auto rounded-full" />
    </motion.div>
  </div>

  {/* Section Content */}
  <div className="container mx-auto px-4 md:px-20 mt-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <AnimatePresence>
        {[
          {
            title: 'EDUCATION',
            img: '/home/Education.jpg',
            bg: 'bg-[#f9f5d7]',
            desc: 'We are dedicated to empowering children from underserved communities through education and holistic development. By providing access to quality learning resources, mentorship, and life skills, we inspire them to dream big and realize their potential. We believe in nurturing future leaders and fostering brighter futures for underprivileged children everywhere.',
          },
          {
            title: 'UPSKILLING',
            img: '/home/Upskilling.jpg',
            bg: 'bg-[#d2ead2]',
            desc: 'We aim to provide children and youth with cutting-edge training in areas like life skills, creative arts, and sustainable practices. By equipping them withpractical skills and developing their confidence, we empower them to navigate complex challenges, seize opportunities, and become changemakers in their communities.',
          },
          {
            title: 'RESEARCH',
            img: '/home/knowing_india.jpg',
            bg: 'bg-[#d8e6f2]',
            desc: 'Our ‘Knowing India’ research initiative explores and documents traditional knowledge systems and their relevance in contemporary society. We focus on the challenges faced by marginalized communities, working toward actionable and sustainable solutions. The initiative also seeks to revive indigenous environmental wisdom while uplifting disadvantaged children by integrating cultural understanding and developmental goals.',
          },
        ].map(({ title, img, bg, desc }, index) => (
          <motion.div
            key={title}
            className="bg-[#fbf5e4] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col items-center text-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover="hover"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className={`w-full h-48 ${bg} rounded-xl overflow-hidden mb-4`}>
              <img src={img} alt={title} className="w-full h-full object-cover rounded-xl" loading="lazy" />
            </div>
            <h3 className="text-xl font-amaranth text-[#4a3400]">{title}</h3>
            <p className="text-sm text-[#333333] mt-4 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  </div>
</section>
      {/* Target Beneficiaries Section */}
<section className="py-20 bg-[#ffffff]">
  <div className="container mx-auto px-4 md:px-20">
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={
        shouldReduceMotion
          ? { duration: 0.8 }
          : { duration: 1.2, type: 'spring', stiffness: 100, damping: 20 }
      }
      style={{ willChange: 'opacity' }}
    >
      <h2 className="text-4xl font-amaranth font-bold text-[#4a3400] tracking-tight">Our Target Beneficiaries</h2>
      <div className="mt-2 w-24 h-1 bg-[#4a3400] mx-auto rounded-full" />
    </motion.div>
   <AnimatePresence>
  {[
    {
      title: 'Tribal Children',
      img: '/home/Tribal_Children.jpg',
      text: 'Children from tribal communities across India face significant barriers to accessing quality education, healthcare, and financial stability. These challenges often lead to interrupted education, with many discontinuing their studies before or shortly after school.Our efforts focus on reducing school dropout rates and providing these children access to quality education. We also work to preserve their cultural heritage by engaging tribal elders to impart traditional knowledge and wisdom to the younger generation.',
    },
    {
      title: 'Orphans',
      img: '/home/Orphans.jpeg',
      text: 'In addition to lacking access to quality education, orphaned children often miss the emotional security and consistent care that a stable, loving family provides. The absence of such nurturing can deeply impact their emotional and mental well-being.At MITTALIS, we are committed to healing these wounds in their young hearts by offering them continuous care, support, and guidance to help them dream and reach greater heights.',
    },
    {
      title: 'Children of Migrant Workers',
      img: '/home/Children.jpg',
      text: 'Due to frequent relocations, children of migrant workers often experience interruptions in their education. They may miss critical academic milestones, resulting in learning gaps and, eventually, dropping out of schools. Our goal is to bridge these gaps by offering supplementary learning sessions and providing essential resources to create a conducive environment that fosters their education and overall development.',
    },
    {
      title: 'Children from Disadvantaged Sections',
      img: '/home/Children_dis.jpg',
      text: 'Beyond those already mentioned, countless children from diverse backgrounds also require material, financial, or emotional support to realize their dreams. We are dedicated to providing tailored assistance, whether through access to quality education, healthcare, mentorship, or basic necessities, ensuring that each child has the resources and care needed to overcome challenges and achieve their goals.',
    },
  ].map(({ title, img, text }, index) => (
    <motion.div
      key={title}
      className="bg-[#fbf5e4] rounded-2xl p-6 mb-6 flex flex-col md:flex-row md:items-center gap-6 shadow-md"
      variants={beneficiaryVariants}
      initial="hidden"
      whileInView="visible"
      style={{ willChange: 'transform, opacity' }}
      viewport={{ once: true }}
      custom={index}
    >
      <div className="w-full md:w-1/3">
        <Image
          src={img}
          alt={title}
          width={500}
          height={350}
          className="rounded-xl w-full h-64 object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-amaranth text-[#4a3400] mb-2">{title}</h3>
        <p className="text-[#333333] leading-relaxed">{text}</p>
      </div>
    </motion.div>
  ))}
</AnimatePresence>
  </div>
</section>


      <Footer />
    </main>
  );
}
