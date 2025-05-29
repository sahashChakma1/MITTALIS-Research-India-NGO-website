import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
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

      <main className="flex-grow bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-yellow-400 py-16 text-center relative overflow-hidden">
  <div className="max-w-3xl mx-auto z-10 relative px-4">
    <h1 className="text-5xl font-extrabold uppercase tracking-wide text-amber-900 drop-shadow">
      Who We Are
    </h1>
    <p className="mt-4 text-xl font-medium text-gray-800">
      Empowering Dreams. Uplifting Futures.
    </p>
    <p className="mt-2 text-lg text-gray-700">
      At MITTALIS Research India, we believe that every child deserves the opportunity to learn, grow, and thrive.
    </p>
  </div>
  <div className="absolute inset-0 opacity-20 bg-[url('/INT7.jpg')] bg-cover bg-center"></div>
</section>


     <section className="bg-white py-20">
  <div className="container mx-auto px-6 max-w-6xl">
       <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-800 leading-relaxed">
      <div>
        <h3 className="text-2xl font-semibold text-yellow-500 mb-2">Our Philosophy</h3>
        <p>
          MITTALIS stands for <strong>Mindful Intervention for Tangible Transformation and Lifelong Impact for Sustainability</strong>. Our initiatives are rooted in the belief that true change comes from sustained, thoughtful engagement.
        </p>
        <p className="mt-4">
          We don’t just offer aid—we work to restore dignity and opportunity to children from
          marginalized communities across India.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-yellow-500 mb-2">Our Focus</h3>
        <p>
          Operating at the intersection of <strong>education, research, and rehabilitation</strong>,
          we serve children from tribal backgrounds, migrant families, orphanages, and rural settlements.
        </p>
        <p className="mt-4">
          From early learning to life skills and mental wellness, our holistic approach empowers children
          to thrive and lead with confidence.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-yellow-500 mb-2">Cultural Connection</h3>
        <p>
          Through our <em><strong>Knowing India</strong></em> initiative, we celebrate and safeguard
          indigenous knowledge systems while addressing modern social challenges with cultural sensitivity.
        </p>
        <p className="mt-4">
          We believe identity is power—and every child deserves to see their heritage valued and upheld.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-yellow-500 mb-2">Where We Work</h3>
        <p>
          Our on-ground programs currently operate in <strong>Kerala</strong> and <strong>Bengaluru</strong>,
          led by a growing network of educators, researchers, and volunteers dedicated to uplifting communities.
        </p>
        <p className="mt-4">
          We’re building a future that is inclusive, resilient, and rooted in hope.
        </p>
      </div>
    </div>

    <div className="mt-16 text-center">
      <p className="text-xl font-semibold text-gray-800">
        Join us in our mission to <span className="text-yellow-500">Educate, Engage, and Enrich</span>.
      </p>
      <p className="mt-2 text-gray-600">
        Your support can help shape a generation of changemakers.
      </p>
    </div>
  </div>
</section>




      {/* Mission Section */}
<Section title="Our Mission" bg="bg-yellow-100">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-2xl font-semibold text-amber-900 mb-4">
      Educate. Engage. Enrich.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      At MITTALIS Research India, our mission is to empower children from underserved communities through
      access to quality education, emotional well-being, and cultural dignity. We strive to create safe
      learning spaces, foster curiosity, and build a foundation for lifelong growth.
    </p>
  </div>
</Section>

        {/* Vision Section */}
<Section title="Our Vision" bg="bg-white">
  <div className="max-w-4xl mx-auto text-center px-4">
    <p className="text-2xl font-semibold text-amber-900 mb-4">
      A Future Rooted in Compassion and Possibility
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      To foster the holistic development of children from marginalized communities through
      <span className="font-medium text-yellow-600"> education</span>,
      <span className="font-medium text-yellow-600"> skill-building</span>,
      <span className="font-medium text-yellow-600"> environmental awareness</span>,
      <span className="font-medium text-yellow-600"> cultural preservation</span>,
      and <span className="font-medium text-yellow-600">research</span>.
    </p>
  </div>
</Section>


{/* Glimpse Section */}
<Section title="A Glimpse into MITTALIS 2024–25" bg="bg-yellow-50">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        src: '/MIG4.jpeg',
        alt: 'Cleanliness and hygiene awareness for children of migrant workers in Hegdenagar, Bengaluru.',
      },
      {
        src: '/BUD4.jpeg',
        alt: 'Remedial classes for children in Budigere, Bengaluru.',
      },
      {
        src: '/GEMS4.jpeg',
        alt: 'Well-being session by Ayurveda doctors at St. Gregorious English Medium School, Attappadi.',
      },
      {
        src: '/INT6.jpg',
        alt: 'MA English students at Kristu Jayanti College conducting sessions for children in Bengaluru.',
      },
      {
        src: '/MC6.jpeg',
        alt: 'Medical Camp in Mukkali and Sholayur regions of Attappadi.',
      },
    ].map(({ src, alt }, idx) => (
      <div
        key={idx}
        className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.01] bg-white"
      >
        <img src={src} alt={alt} className="w-full h-60 object-cover" />
        <div className="p-4">
          <p className="text-sm font-semibold text-gray-700 text-center">{alt}</p>
        </div>
      </div>
    ))}
  </div>
</Section>



        {/* Call to Action */}
        <Section title="Join Our Cause" bg="bg-yellow-100">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg mb-6">
              Help us make a difference in the lives of underserved children across India. Your support can
              transform lives through education and holistic development.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/get-involved"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg transition"
              >
                Volunteer With Us
              </Link>
              <Link
                href="/contact"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

// Reusable Section Component
function Section({ title, bg, children }) {
  return (
    <section className={`${bg} py-12 px-4`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 uppercase">{title}</h2>
        {children}
      </div>
    </section>
  );
}
