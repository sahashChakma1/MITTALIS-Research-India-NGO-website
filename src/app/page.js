import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-100 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-yellow-100 py-16">
        <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <Image 
              src="/MC4.jpeg" 
              alt="Children silhouette" 
              width={500} 
              height={500}
              className="rounded-md w-full h-auto"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-900 tracking-tight text-center leading-tight">
  Educate, Engage, Enrich!
</h1>

            <div className="bg-yellow-50 p-6 rounded-md">
              <p className="text-xl md:text-2xl text-amber-900">
                "Every child deserves a future rooted in hope and rich with possibilities. While their past may be written, their future is a canvas waiting to be shaped through care, knowledge, and opportunity."
              </p>
            </div>
          </div>
        </div>
      </section>
      
    <section className="py-12 bg-amber-50">
  <div className="container mx-auto px-4 md:px-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-amber-900">WHAT WE DO?</h2>
      <div className="mt-2 w-24 h-1 bg-yellow-400 mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Education */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">
        <div className="w-full h-48 rounded-xl bg-amber-100 flex items-center justify-center">
          <span className="text-amber-500 text-5xl">📚</span>
        </div>
        <h3 className="text-xl font-semibold mt-6 text-amber-900">EDUCATION</h3>
        <p className="text-sm text-gray-700 mt-4">
          We are committed to empowering children from underserved communities through quality education and holistic development. By offering access to learning resources, mentorship, and life skills training, we inspire them to dream big and realize their full potential. 
        </p>
      </div>

      {/* Upskilling */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">
        <div className="w-full h-48 rounded-xl bg-green-100 flex items-center justify-center">
          <span className="text-green-500 text-5xl">🛠️</span>
        </div>
        <h3 className="text-xl font-semibold mt-6 text-amber-900">UPSKILLING</h3>
        <p className="text-sm text-gray-700 mt-4">
          We provide children and youth with innovative training in life skills, creative arts, and sustainable practices. By equipping them with practical abilities and confidence, we enable them to overcome challenges, seize opportunities, and become changemakers in their communities.
        </p>
      </div>

      {/* Knowing India */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">
        <div className="w-full h-48 rounded-xl bg-blue-100 flex items-center justify-center">
          <span className="text-blue-500 text-5xl">🌏</span>
        </div>
        <h3 className="text-xl font-semibold mt-6 text-amber-900">KNOWING INDIA</h3>
        <p className="text-sm text-gray-700 mt-4">
          Our flagship "Knowing India" research initiative explores and documents traditional knowledge systems and their relevance in contemporary society. We focus on the challenges faced by marginalized communities, working toward actionable and sustainable solutions. The initiative also seeks to revive indigenous environmental wisdom while uplifting disadvantaged children by integrating cultural understanding into developmental goals.
        </p>
      </div>
    </div>
  </div>
</section>


{/* Target Beneficiaries Section */}
<section className="py-8">
  <div className="container mx-auto px-4 md:px-16">
    <div className="bg-yellow-300 py-2 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center">
        OUR TARGET BENEFICIARIES
      </h2>
    </div>
    
    {/* Tribal Children */}
    <div className="bg-gray-100 p-4 mb-4 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/4">
        <Image 
          src="/BUD2.jpeg" 
          alt="Tribal Children"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="w-full md:w-3/4">
        <h3 className="text-xl font-bold text-amber-900 mb-2">Tribal Children</h3>
        <p className="text-amber-900 mb-4">
          - Children from tribal communities across India face significant barriers to accessing quality education, healthcare, and financial stability. These challenges often lead to interrupted education, with many discontinuing their studies before or shortly after school. Our efforts focus on reducing school dropout rates and providing these children access to quality education. We also work to preserve their cultural heritage by engaging tribal elders to impart traditional knowledge and wisdom to the younger generation.
        </p>
      </div>
    </div>
    
    {/* Orphans */}
    <div className="bg-gray-100 p-4 mb-4 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/4">
        <Image 
          src="/INT8.JPG" 
          alt="Orphans" 
          width={400} 
          height={300}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="w-full md:w-3/4">
        <h3 className="text-xl font-bold text-amber-900 mb-2">Orphans</h3>
        <p className="text-amber-900 mb-4">
          In addition to lacking access to quality education, orphaned children often miss the emotional security and consistent care that a stable, loving family provides. The absence of such nurturing can deeply impact their emotional and mental well-being. At MITTALIS, we are committed to healing these young hearts by offering continuous care, support, and guidance—helping them dream and reach greater heights.
        </p>
        </div>
    </div>
    
    {/* Children of Migrant Workers */}
    <div className="bg-gray-100 p-4 mb-4 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/4">
        <Image 
          src="/INT7.jpg" 
          alt="Children of Migrant Workers"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="w-full md:w-3/4">
        <h3 className="text-xl font-bold text-amber-900 mb-2">Children of Migrant Workers</h3>
        <p className="text-amber-900 mb-4">
         Due to frequent relocations, children of migrant workers often experience interruptions in their education. They may miss critical academic milestones, resulting in learning gaps and, eventually, dropping out of school. Our goal is to bridge these gaps by offering supplementary learning sessions and providing essential resources to create a supportive environment that fosters their education and overall development.
        </p>
        </div>
    </div>
    
    {/* Children from Economically Disadvantaged Sections */}
    <div className="bg-gray-100 p-4 mb-4 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/4">
        <Image 
          src="/MC6.jpeg" 
          alt="Children from Economically Disadvantaged Sections"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="w-full md:w-3/4">
        <h3 className="text-xl font-bold text-amber-900 mb-2">Children from Economically Disadvantaged Sections</h3>
        <p className="text-amber-900 mb-4">
          Beyond those already mentioned, countless children from diverse backgrounds also require material, financial, or emotional support to realize their dreams. We are dedicated to providing tailored assistance, whether through access to quality education, healthcare, mentorship, or basic necessities, ensuring that each child has the resources and care needed to overcome challenges and achieve their goals.
        </p>       
      </div>
    </div>
  </div>
</section>


      <Footer />
    </main>
  );
}
