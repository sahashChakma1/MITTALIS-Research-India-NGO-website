'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'; // ✅ Added import for Next.js Image component
import Header from '../components/Header';
import Footer from '../components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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
      <div className="h-px bg-gray-800" />

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-amber-100 py-10 text-center shadow-md"
        >
          <motion.h1
            variants={childVariants}
            className="text-4xl font-montserrat font-bold uppercase text-amber-900"
          >
            Support Our Cause
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto"
          >
            Help us create a better future for children in need. Every donation counts.
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
            className="rounded-xl overflow-hidden shadow-lg mb-10"
          >
            <Image
              src="/ORP3.jpeg"
              alt="Children in need"
              width={1200}
              height={400}
              className="w-full h-64 object-cover"
            />
          </motion.div>

          {/* QR Code Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-amber-50 border border-amber-200 shadow-lg rounded-xl p-8 md:p-10 mt-12"
          >
            <motion.h2
              variants={childVariants}
              className="text-2xl font-amaranth font-bold text-center text-amber-900 mb-6"
            >
              Donate Instantly via UPI
            </motion.h2>

            <motion.div
              variants={childVariants}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <Image
                src="/QR.png" // ✅ Replace with actual QR image (PNG, JPG, etc.)
                alt="UPI QR Code"
                width={240}
                height={240}
                className="border border-gray-300 rounded-md shadow"
              />
              <p className="text-gray-800 text-lg font-semibold">
                UPI ID: <span className="text-amber-800">mittalisresearchindia@sbi</span>
              </p>
              <p className="text-sm text-gray-600 text-center max-w-md">
                Scan the QR code above using any UPI app (Paytm, PhonePe, GPay, BHIM, etc.) to donate instantly.
              </p>
            </motion.div>
          </motion.div>

          {/* Bank Details Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 md:p-10"
          >
            <motion.h2
              variants={childVariants}
              className="text-2xl font-amaranth font-bold text-center text-amber-900 mb-6"
            >
              Donate via Bank Transfer
            </motion.h2>

            <motion.div variants={childVariants} className="space-y-4 text-base text-gray-800">
              <p>
                <span className="font-semibold">Account Name:</span> MITTALIS Research India
              </p>
              <p>
                <span className="font-semibold">Bank:</span> State Bank of India
              </p>
              <p>
                <span className="font-semibold">Branch:</span><br />
                West Hill, Shilpi Building,<br />
                CHAKKORATHUKULAM, NADAKKAVU PO,<br />
                KOZHIKODE – 673011
              </p>
              <p>
                <span className="font-semibold">Account Number:</span>{' '}
                <span className="text-lg font-bold text-amber-800">43373286122</span>
              </p>
              <p>
                <span className="font-semibold">IFSC Code:</span>{' '}
                <span className="text-lg font-bold text-amber-800">SBIN0070857</span>
              </p>
            </motion.div>

            <motion.p
              variants={childVariants}
              className="mt-8 text-sm text-center text-gray-600"
            >
              Thank you for supporting our mission. Every contribution helps us reach more children with education, care, and opportunities.
            </motion.p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
