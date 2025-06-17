'use client';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GetInvolved() {
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <Header />
      <div className="h-px bg-gray-800" />

      <main className="bg-white">
        {/* Hero Section */}
        <motion.section
          className="bg-amber-50 py-14 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-4xl font-montserrat font-bold  uppercase tracking-wide text-amber-800"
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

        {/* Volunteer & Intern Cards */}
        <section className="py-20 px-6 bg-amber-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Volunteer */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleIn}
            >
              <motion.img
                src="/BUD2.jpeg"
                alt="Volunteer"
                className="w-full h-64 object-cover rounded-xl mb-6 shadow"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              />
              <motion.h2
                className="text-2xl font-amaranth font-bold text-amber-900 mb-2"
                variants={fadeInUp}
              >
                Be a Volunteer!
              </motion.h2>
              <motion.p className="text-gray-700 mb-4" variants={fadeInUp}>
                Together, we can turn compassion into action—join us as a volunteer!
              </motion.p>
            </motion.div>

            {/* Intern */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleIn}
            >
              <motion.img
                src="/about/INT6.jpg"
                alt="Internship"
                className="w-full h-64 object-cover rounded-xl mb-6 shadow"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              />
              <motion.h2
                className="text-2xl font-amaranth font-bold text-amber-900 mb-2"
                variants={fadeInUp}
              >
                Intern with Us!
              </motion.h2>
              <motion.p className="text-gray-700 mb-4" variants={fadeInUp}>
                Ready to make a difference? Intern with us and ignite your passion for social change!
              </motion.p>
            </motion.div>
          </div>
        </section>
        {/* Testimonials Section */}
<motion.section
  className="bg-white py-16 px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeInUp}
>
  <h2 className="text-3xl font-montserrat font-bold text-center text-amber-800 mb-10">
    What Our Interns Say About Us!
    <div className="mt-2 w-24 h-1 bg-amber-900 mx-auto rounded-full" />
  </h2>
  <div className="max-w-5xl mx-auto space-y-12">
    <div className="bg-amber-50 p-6 rounded-xl shadow-sm">
      <p className="text-gray-700 text-lg italic mb-4">
        "This internship was a memorable experience for me, and I would like to express my
        gratitude to the MITTALIS team. Working with the children taught me the importance of
        sharing what we have to support the underprivileged, and it motivates me to think of
        them."
      </p>
      <p className="text-right font-semibold text-amber-800">
        — Sriram Kumar, MA English, Kristu Jayanti College
      </p>
    </div>

    <div className="bg-amber-50 p-6 rounded-xl shadow-sm">
      <p className="text-gray-700 text-lg italic mb-4">
        "I would like to express my heartfelt gratitude to Krishna Prabha ma'am and the MITTALIS
        Team for the incredible opportunity to intern at your organization. This experience has
        been invaluable, and I truly appreciate the support and guidance I received during my
        time here."
      </p>
      <p className="text-right font-semibold text-amber-800">
        — Achsah Mathew, MA English, Kristu Jayanti College
      </p>
    </div>

    <div className="bg-amber-50 p-6 rounded-xl shadow-sm">
      <p className="text-gray-700 text-lg italic mb-4">
        "Doing an internship with MITTALIS was an incredibly grounding and spectacular learning
        experience for me. It enabled me to dive deeper into the extensive territories of knowledge
        wherein I was able to gain first-hand access to indigenous knowledge of tribal women in
        ecological, cultural and medicinal arenas. This experience instilled a heightened sense of
        responsibility which shaped my approach to learning and collaboration."
      </p>
      <p className="text-right font-semibold text-amber-800">
        — Athulya, BA English, Kristu Jayanti College
      </p>
    </div>
  </div>
</motion.section>


        {/* Simple Donate Section */}
        <motion.section
          className="bg-amber-100 py-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-amaranth font-bold text-amber-800 mb-4">
            Help Us Make a Bigger Impact
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-xl mx-auto">
            Every contribution supports education, research, and rehabilitation for underserved children.
          </p>
          <a
            href="/donate"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
          >
            Donate Now
          </a>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
