'use client';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Donate() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800">
      <Header />
      <div className="h-px bg-gray-800"></div>

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white py-8 text-center shadow-md"
        >
          <motion.h1
            variants={childVariants}
            className="text-4xl font-extrabold uppercase text-amber-900"
          >
            Support Our Cause
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="text-lg text-gray-800 mt-2"
          >
            Help us create a better future for children in need.
          </motion.p>
        </motion.section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          {/* Banner Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg mb-8"
          >
            <img
              src="/ORP3.jpeg"
              alt="Children in need"
              className="w-full h-64 object-cover"
            />
          </motion.div>

          {/* UPI QR Code Donation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.p
              variants={childVariants}
              className="mb-6 text-lg leading-relaxed"
            >
              Your generous donation helps us provide education, healthcare, and hope to underprivileged children. Every contribution, no matter the size, makes a lasting difference. ❤️
            </motion.p>

            <motion.div
              variants={childVariants}
              className="mt-12"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Donate via UPI QR Code</h2>
              <div className="flex flex-col items-center">
                <motion.img
                  src="/images/qr-code.png"
                  alt="Donate via UPI QR Code"
                  className="w-64 h-64 object-contain border border-gray-300 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <p className="mt-4 text-sm text-gray-600">
                  Scan this QR using any UPI app (Google Pay, PhonePe, Paytm, etc.)
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  UPI ID: <span className="font-semibold">mittalisindia@upi</span>
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={childVariants}
              className="mt-8 text-sm text-gray-600"
            >
              We appreciate your support.
            </motion.p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}