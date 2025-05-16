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
        <section className="bg-yellow-400 py-10 text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-wide">About Us</h1>
          <p className="mt-2 text-lg font-medium text-gray-700">
            Empowering through Education and Holistic Growth
          </p>
        </section>

        {/* About Content */}
<section className="container mx-auto px-4 py-12 max-w-4xl">
  <div className="space-y-8 text-lg leading-relaxed">
    <p>
      <strong>MITTALIS Research India</strong> is a purpose-driven organization committed to transforming the lives of underserved children across India through mindful, inclusive, and sustainable interventions. Founded on the principle of <strong>Mindful Intervention for Tangible Transformation and Lifelong Impact for Sustainability</strong>, MITTALIS works at the intersection of education, research, and rehabilitation to create meaningful and lasting change. With a deep-rooted belief in the potential of every child, the organization’s efforts are centered on empowering young minds to dream big, rise above their circumstances, and build a brighter future.
    </p>
    <p>
      Our work focuses on three interconnected pillars—<strong>Education, Upskilling, and Research</strong>. MITTALIS provides access to quality learning resources, life skills training, and creative arts programs to help children grow into capable, confident individuals. Through our <strong>Knowing India</strong> initiative, we document traditional knowledge systems and explore the challenges faced by marginalized communities, offering sustainable solutions rooted in cultural understanding. We especially support tribal children, orphans, children of migrant workers, and children from other disadvantaged sections who face multiple barriers to education and well-being.
    </p>
    <p>
      At MITTALIS, we believe true change goes beyond temporary assistance. Our work is anchored in sustainable development and cultural preservation, ensuring that each intervention contributes to a future that is equitable, inclusive, and enduring.
    </p>
    <p>
      With current initiatives in <strong>Kerala</strong> and <strong>Bengaluru</strong>, MITTALIS Research India continues to evolve as a community-rooted organization driven by compassion and commitment. Through every step, we remain focused on our core mission—to <strong>Educate, Engage, and Enrich</strong> the lives of children, nurturing a generation that carries forward both knowledge and hope.
    </p>   
  </div>
</section>


        {/* Mission Section */}
        <Section title="Our Mission" bg="bg-yellow-100">
          <p className="text-xl font-medium text-center">Educate, Engage, Enrich!</p>
        </Section>

        {/* Vision Section */}
        <Section title="Our Vision" bg="bg-white">
          <p className="text-lg text-center max-w-3xl mx-auto">
           To foster the holistic development of children from marginalized communities through education, skill-building, environmental awareness, cultural preservation, and research.
          </p>
        </Section>

        {/* Glimpse Section */}
        <Section title="A Glimpse into MITTALIS 2024" bg="bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                src: '/MIG4.jpeg',
                alt: 'Awareness program on cleanliness and hygiene for the children of migrant workers in Hegdenagar, Bengaluru.',
              },
              {
                src: '/ORP 2.jpeg',
                alt: 'Remedial classes for children in Budigere, Bengaluru',
              },
              {
                src: '/MC6.jpeg',
                alt: 'Session on mental, emotional & physical well-being  by Ayurveda physicians, Dr Arjun Chand and Dr Arya Krishnan at St. Gregorious English Medium School, Attappadi, a major tribal belt in Kerala.',
              },
              {
                src: '/INT6.jpg',
                alt: 'MA English students at Kristu Jayanti College, Bengaluru, conducting learning sessions for kids at Modala Shala Ananda Sagara Charitable Trust, Bengaluru as a part of their internshipp.',

              },
              {
                src: '/MC3.jpeg',
                alt: 'Medical Camp in Mukkali and Sholayur regions of Attappadi.',
              },
            ].map(({ src, alt }, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <img src={src} alt={alt} className="w-full h-64 object-cover" />
                <p className="text-center text-sm mt-2 px-2 pb-4">{alt}</p>
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
