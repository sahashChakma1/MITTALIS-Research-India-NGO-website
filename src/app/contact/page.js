'use client'; 
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function GetInTouch() {
  const [status, setStatus] = useState(""); // To show form submission status

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "1c1a0988-aca7-4446-a2f6-0670975fb774"); // Your Web3Forms access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Thank you for your message! We'll get back to you soon.");
        e.target.reset(); // Reset form on successful submission
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  }

  return (
    <div>
      <Header />
      <div className="h-px bg-gray-800"></div>
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-yellow-400 text-center py-10">
          <h1 className="text-gray-800 text-4xl font-extrabold uppercase tracking-wide">
            Get in Touch
          </h1>
          <p className="text-gray-700 mt-2 text-lg">We'd love to hear from you</p>
        </section>

        {/* Contact Info Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {/* Location */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-yellow-500 text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Location</h3>
              <p className="text-gray-600">58/1617, Koyappathody Building Beach Road, 
Kuttichira, Kozhikode, 673001
</p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <FaPhone className="text-yellow-500 text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
              <p className="text-gray-600">+91 9495625859</p>
            </div>

           <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300 ease-in-out">
  <FaEnvelope className="text-yellow-500 text-3xl mx-auto mb-4" />
  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
  <a
    href="mailto:president@mittalisresearchindia.org"
    className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 underline break-words"
  >
    president@mittalisresearchindia.org
  </a>
</div>
          </div>
        </section>

        <section className="bg-white text-center py-10">
          <h1 className="text-gray-800 text-4xl font-extrabold uppercase tracking-wide">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-gray-700 mt-2 text-lg">Stay updated with the latest news and offers!</p>
        </section>

        {/* Newsletter Subscription Form Section */}
        <section className="py-12 bg-gray-300">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Stay Informed</h2>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                Subscribe Now
              </button>
            </div>

            {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
          </form>
        </section>

        {/* Social Media Section */}
        <section className="py-10 bg-white text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect with us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/company/mittalis-re-search-india/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-700 transition transform hover:scale-110"
            >
              <FaLinkedin size={30} />
            </a>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
