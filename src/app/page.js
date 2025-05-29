import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-yellow-100">
        <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/home.jpg"
              alt="Children silhouette"
              width={500}
              height={500}
              className="rounded-2xl w-full h-auto object-cover shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-900 tracking-tight text-center leading-tight">
              Educate, Engage, Enrich!
            </h1>
            <div className="bg-yellow-50 p-6 rounded-2xl shadow-inner">
              <p className="text-xl md:text-2xl text-amber-900 leading-relaxed">
                "Every child deserves a future rooted in hope and rich with possibilities. While their past may be written, their future is a canvas waiting to be shaped through care, knowledge, and opportunity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 md:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 tracking-tight">What We Do</h2>
            <div className="mt-2 w-24 h-1 bg-yellow-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Each Card */}
            {[
              {
                title: 'EDUCATION',
                img: '/Education.jpg',
                bg: 'bg-amber-100',
                desc: 'We empower children from underserved communities through quality education, resources, and mentorship, helping them realize their full potential.'
              },
              {
                title: 'UPSKILLING',
                img: '/Upskilling.jpg',
                bg: 'bg-green-100',
                desc: 'We provide life skills, creative arts, and sustainable training, building confidence and creating changemakers in communities.'
              },
              {
                title: 'KNOWING INDIA',
                img: '/knowing_india.jpg',
                bg: 'bg-blue-100',
                desc: 'This research initiative revives traditional knowledge and environmental wisdom, addressing challenges faced by marginalized communities.'
              }
            ].map(({ title, img, bg, desc }) => (
              <div key={title} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col items-center text-center">
                <div className={`w-full h-48 ${bg} rounded-xl overflow-hidden mb-4`}>
                  <img src={img} alt={title} className="w-full h-full object-cover rounded-xl" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900">{title}</h3>
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Beneficiaries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-20">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-amber-900 tracking-tight">Our Target Beneficiaries</h2>
            <div className="mt-2 w-24 h-1 bg-yellow-400 mx-auto rounded-full" />
          </div>

          {[
            {
              title: 'Tribal Children',
              img: '/Tribal_Children.jpg',
              text: 'Children from tribal communities across India face significantbarriers to accessing quality education, healthcare, and financial stability. These challenges often lead to interrupted education, with many discontinuing theirstudies before or shortly after school. Our efforts focus on reducing school dropoutrates and providing these children access to quality education. We also work topreserve their cultural heritage by engaging tribal elders to impart traditionalknowledge and wisdom to the younger generation'
            },
            {
              title: 'Orphans',
              img: '/Orphans.jpeg',
              text: 'In addition to lacking access to quality education, orphaned children often miss the emotional security and consistent care that a stable, loving family provides.The absence of such nurturing can deeply impact their emotional and mental well-being. At MITTALIS, we are committed to healing these young hearts by offeringcontinuous care, support, and guidance—helping them dream and reach greaterheights.'
            },
            {
              title: 'Children of Migrant Workers',
              img: '/Children.jpg',
              text: 'Due to frequent relocations, children of migrant workers often experience interruptions in their education. They may miss critical academic milestones, resulting in learning gaps and, eventually, dropping out of school. Our goal is to bridge these gaps by offering supplementary learning sessions and providing essential resources to create a supportive environment that fosters their education and overall development.'
            },
            {
              title: 'Children from Disadvantaged Sections',
              img: '/Children_dis.jpg',
              text: 'Beyond those already mentioned, countless children from diverse backgrounds also require material, financial, or emotional support to realize their dreams. We are dedicated to providing tailored assistance, whether through access to quality education, healthcare, mentorship, or basic necessities, ensuring that each child has the resources and care needed to overcome challenges and achieve their goals.'
            }
          ].map(({ title, img, text }) => (
            <div key={title} className="bg-gray-100 rounded-2xl p-6 mb-6 flex flex-col md:flex-row gap-6 shadow-md">
              <div className="w-full md:w-1/4">
                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={300}
                  className="rounded-xl w-full h-48 object-cover"
                />
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{title}</h3>
                <p className="text-amber-900 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
