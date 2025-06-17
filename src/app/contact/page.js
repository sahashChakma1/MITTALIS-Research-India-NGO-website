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

    try {
      const response = await fetch("/api/contact", {
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
        <section className="bg-amber-50 text-center py-10">
          <h1 className="text-amber-900 text-4xl font-montserrat font-bold uppercase tracking-wide">Get in Touch</h1>
          <p className="text-gray-700 mt-2 text-lg">We'd love to hear from you</p>
        </section>

        {/* Contact Info Section */}
        <section className="py-12 bg-amber-50">
          <div className="max-w-3xl mx-auto px-6 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-yellow-500 text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Location</h3>
              <p className="text-gray-600">58/1617, Koyappathody Building Beach Road, Kuttichira, Kozhikode, 673001</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <FaPhone className="text-yellow-500 text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
              <p className="text-gray-600">+91 9495625859</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <FaEnvelope className="text-yellow-500 text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <a href="mailto:president@mittalisresearchindia.org" className="text-gray-700 hover:text-yellow-600 underline break-words">
                president@mittalisresearchindia.org
              </a>
            </div>
          </div>
        </section>
       
        {/* Google Map Section */}
<section className="bg-white py-12 px-4"> 
  <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
    <iframe
      title="MITTALIS Location - Kozhikode"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4395179033314!2d75.77517957426749!3d11.244703850914222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65e5ecf3f73df%3A0x3e76fdfe75d81061!2sKoyappathody%20Building%2C%20Beach%20Rd%2C%20Kuttichira%2C%20Kozhikode%2C%20Kerala%20673001!5e0!3m2!1sen!2sin!4v1718637274379!5m2!1sen!2sin"
      width="100%"
      height="400"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-[400px] border-none"
    ></iframe>
  </div>

  <div className="text-center mt-6">
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=Koyappathody+Building,+Beach+Road,+Kuttichira,+Kozhikode,+Kerala+673001"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#673838] hover:bg-[#4e2a2a] text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
    >
      Get Directions
    </a>
  </div>
</section>
        {/* Newsletter Section */}
        <section className="bg-white text-center py-8 sm:py-10 px-4">
          <h1
            className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide"
            style={{ color: '#673838' }}
            >
              Subscribe to Our Newsletter
            </h1>

          <p className="text-gray-700 mt-2 text-sm sm:text-lg">Stay updated with the latest news and offers!</p>
        </section>

        {/* Contact Form */}
        <section className="py-12 bg-white ">
  <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 sm:space-y-5 px-4">
    {/* First & Last Name */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-300 bg-white text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-300 bg-white text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500"
        required
      />
    </div>

    {/* Email */}
    <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-300 bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l-4-4m4 4l-4 4" />
      </svg>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="w-full bg-transparent outline-none text-sm sm:text-base text-gray-800 placeholder-gray-500"
        required
      />
    </div>

    {/* Country Code + Phone */}
    <div className="flex flex-col sm:flex-row gap-3">
      <select
  name="countryCode"
  className="px-4 py-3 rounded-full border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
  defaultValue="+91"
>
  <option value="+1">+1 (USA/Canada)</option>
  <option value="+44">+44 (UK)</option>
  <option value="+61">+61 (Australia)</option>
  <option value="+81">+81 (Japan)</option>
  <option value="+49">+49 (Germany)</option>
  <option value="+33">+33 (France)</option>
  <option value="+34">+34 (Spain)</option>
  <option value="+91">+91 (India)</option>
  <option value="+92">+92 (Pakistan)</option>
  <option value="+86">+86 (China)</option>
  <option value="+971">+971 (UAE)</option>
  <option value="+974">+974 (Qatar)</option>
  <option value="+966">+966 (Saudi Arabia)</option>
  <option value="+880">+880 (Bangladesh)</option>
  <option value="+94">+94 (Sri Lanka)</option>
  <option value="+7">+7 (Russia)</option>
  <option value="+82">+82 (South Korea)</option>
  <option value="+351">+351 (Portugal)</option>
  <option value="+48">+48 (Poland)</option>
  <option value="+55">+55 (Brazil)</option>
  <option value="+52">+52 (Mexico)</option>
  <option value="+39">+39 (Italy)</option>
  <option value="+20">+20 (Egypt)</option>
  <option value="+27">+27 (South Africa)</option>
</select>

      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-300 bg-white text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500"
        required
      />
    </div>

    {/* Submit */}
    <div className="text-center">
      <button
        type="submit"
        className="bg-black text-white font-medium sm:font-semibold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full hover:bg-gray-800 transition"
      >
        Submit
      </button>
    </div>

    {status && <p className="text-center text-gray-600 text-sm">{status}</p>}
  </form>
</section>
        {/* Social Media */}
        <section className="py-10 bg-amber-50 text-center">
          <h2 className="text-2xl font-montserrat font-bold text-gray-800 mb-4">Connect with us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/company/mittalis-re-search-india/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition transform hover:scale-110">
              <FaLinkedin size={30} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
