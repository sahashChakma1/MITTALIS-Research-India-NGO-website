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
          {/* Banner Image */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-8">
            <img
              src="/ORP3.jpeg"
              alt="Children in need"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* UPI QR Code Donation */}
          <div className="text-center">
            <p className="mb-6 text-lg leading-relaxed">
              Your generous donation helps us provide education, healthcare, and hope to underprivileged children. Every contribution, no matter the size, makes a lasting difference. ❤️
            </p>

            <div className="mt-12">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Donate via UPI QR Code</h2>
              <div className="flex flex-col items-center">
                <img
                  src="/images/qr-code.png"
                  alt="Donate via UPI QR Code"
                  className="w-64 h-64 object-contain border border-gray-300 rounded-lg shadow-md"
                />
                <p className="mt-4 text-sm text-gray-600">
                  Scan this QR using any UPI app (Google Pay, PhonePe, Paytm, etc.)
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  UPI ID: <span className="font-semibold">mittalisindia@upi</span>
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-600">We appreciate your support.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
