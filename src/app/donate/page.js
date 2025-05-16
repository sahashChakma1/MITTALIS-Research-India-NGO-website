import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Donate() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800">
      <Header />
      <div className="h-px bg-gray-800"></div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-yellow-400 py-8 text-center shadow-md">
          <h1 className="text-4xl font-extrabold uppercase text-gray-900">Support Our Cause</h1>
          <p className="text-lg text-gray-800 mt-2">Help us create a better future for children in need.</p>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="rounded-xl overflow-hidden shadow-lg mb-8">
            <img
              src="/ORP3.jpeg"
              alt="Children in need"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="text-center">
            <p className="mb-6 text-lg leading-relaxed">
              Your generous donation helps us provide education, healthcare, and hope to underprivileged children. Every contribution, no matter the size, makes a lasting difference. ❤️
            </p>

            <p className="text-md font-medium mb-4">Choose an amount to donate:</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
              {[{ amount: 100 }, { amount: 250 }, { amount: 500 }, { label: 'Other', link: 'https://www.paypal.com/donate?business=mittalisindia@gmail.com&currency_code=INR' }]
                .map(({ amount, label, link }) => {
                  const url = link || `https://www.paypal.com/donate?business=mittalisindia@gmail.com&currency_code=INR&amount=${amount}`;
                  return (
                    <a
                      key={label || amount}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-md transition"
                    >
                      {label || `₹${amount}`}
                    </a>
                  );
                })}
            </div>

            <p className="mt-8 text-sm text-gray-600">All donations are securely processed via PayPal.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
