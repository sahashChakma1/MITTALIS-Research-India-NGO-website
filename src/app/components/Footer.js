import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-yellow-100 py-4 sm:py-8">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">About MITTALIS</h3>
            <p className="text-sm sm:text-base mb-4">
              MITTALIS Research India is dedicated to empowering underprivileged children 
              through education, skill development, and research initiatives.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/" className="text-sm sm:text-base hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm sm:text-base hover:text-yellow-300">
                  About Us
                </Link>
              </li>             
              <li>
                <Link href="/get-involved" className="text-sm sm:text-base hover:text-yellow-300">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Contact Us</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Email: president@mittalisresearchindia.org</li>
              <li>Phone: +91 9495625859</li>
              <li>Address: 58/1617, Koyappathody Building Beach Road, 
                    Kuttichira, Kozhikode, 673001
              </li>
            </ul>
          </div>
        </div>

        {/* Follow Us */}
        <div className="mt-4 sm:mt-8 text-center">
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <Link href="https://www.linkedin.com/company/mittalis-re-search-india/?viewAsMember=true" target="_blank" className="text-sm sm:text-base hover:text-yellow-300">
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="border-t border-yellow-200/30 mt-4 sm:mt-8 pt-4 sm:pt-6 text-center">
          <p className="text-sm sm:text-base">© {new Date().getFullYear()} MITTALIS Research India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;