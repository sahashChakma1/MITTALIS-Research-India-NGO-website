import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function GetInvolved() {
  return (
    <div>
      <Header />
      <div className="h-px bg-gray-800"></div>
      <main className="bg-white">
        <section className="bg-yellow-400 text-center py-4">
          <h1 className="text-gray-800 text-3xl font-bold uppercase">Here's How You Can Contribute</h1>
        </section>
       <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Volunteer Block */}
  <div className="space-y-4 text-center">
    <img
      src="/INT6.jpg"
      alt="Volunteer"
      className="w-full max-w-[400px] mx-auto rounded-lg"
    />
    <h2 className="text-gray-800 text-xl font-bold">Be a volunteer!</h2>
    <p className="text-black">Together, we can turn compassion into action—join us as a volunteer!</p>
  </div>

  {/* Internship Block */}
  <div className="space-y-4 text-center">
    <img
      src="/BUD2.jpeg"
      alt="Internship"
      className="w-full max-w-[400px] mx-auto rounded-lg"
    />
    <h2 className="text-gray-800 text-xl font-bold">Intern with Us!</h2>
    <p className="text-black">Ready to make a difference? Intern with us and ignite your passion for social change!</p>
  </div>
</section>


      </main>
      <Footer />
    </div>
  );
}