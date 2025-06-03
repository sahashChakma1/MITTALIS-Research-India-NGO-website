'use client'; 
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GetInvolved() {
  // Animation variants for fading in and sliding up
  const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};


  return (
    <div>
      <Header />
      <div className="h-px bg-gray-800"></div>

      <main className="bg-white">
       <motion.section
  className="bg-amber-50  py-14 text-center"
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  <motion.h1
    className="text-4xl font-extrabold uppercase tracking-wide text-amber-800"
    variants={fadeInUp}
  >
    Here's How You Can Contribute
  </motion.h1>
  <motion.p
    className="mt-4 text-lg font-medium text-gray-700 max-w-2xl mx-auto"
    variants={fadeInUp}
  >
    Join us in empowering underserved children by volunteering, interning, donating, or spreading awareness. Every action counts in building a brighter tomorrow.
  </motion.p>
</motion.section>

        {/* Ways to Contribute with staggered animations */}
        <section className="py-20 px-6 bg-amber-50 ">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Volunteer */}
    <motion.div
      className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={scaleIn}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.img
        src="/BUD2.jpeg"
        alt="Volunteer"
        className="w-full h-64 object-cover rounded-xl mb-6 shadow"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      />
      <motion.h2
        className="text-2xl font-bold text-amber-600 mb-2"
        variants={fadeInUp}
      >
        Be a Volunteer!
      </motion.h2>
      <motion.p
        className="text-gray-700 mb-4"
        variants={fadeInUp}
      >
        Turn compassion into action—support underserved communities by volunteering your time and skills.
      </motion.p>
    </motion.div>

    {/* Intern */}
    <motion.div
      className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={scaleIn}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.img
        src="/about/INT6.jpg"
        alt="Internship"
        className="w-full h-64 object-cover rounded-xl mb-6 shadow"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      />
      <motion.h2
        className="text-2xl font-bold text-amber-600 mb-2"
        variants={fadeInUp}
      >
        Intern with Us!
      </motion.h2>
      <motion.p
        className="text-gray-700 mb-4"
        variants={fadeInUp}
      >
        Learn. Engage. Grow. Make a lasting impact while gaining real-world experience with our team.
      </motion.p>
    </motion.div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
}