import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GetInvolved() {
  return (
    <div>
      <Header />
      <div className="h-px bg-gray-800"></div>

      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-yellow-400 py-14 text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-wide text-amber-900">
            Here's How You Can Contribute
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-800 max-w-2xl mx-auto">
            Join us in empowering underserved children by volunteering, interning, donating, or spreading awareness. Every action counts in building a brighter tomorrow.
          </p>
        </section>

        {/* Ways to Contribute */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Volunteer */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center">
              <img
                src="/BUD2.jpeg"
                alt="Volunteer"
                className="w-full h-64 object-cover rounded-xl mb-6 shadow"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Be a Volunteer!</h2>
              <p className="text-gray-700 mb-4">
                Turn compassion into action—support underserved communities by volunteering your time and skills.
              </p>
            </div>

            {/* Intern */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center">
              <img
                src="/INT6.jpg"
                alt="Internship"
                className="w-full h-64 object-cover rounded-xl mb-6 shadow"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Intern with Us!</h2>
              <p className="text-gray-700 mb-4">
                Learn. Engage. Grow. Make a lasting impact while gaining real-world experience with our team.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
