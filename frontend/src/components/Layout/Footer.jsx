import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Link to="/" className="inline-flex items-center gap-3 group">
                <img
                  src="/assets/clients/Logo.png"
                  alt="Aapthi Marketing Solutions"
                  className="h-10 w-auto rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-xl font-black text-white">
                    Aapthi Marketing
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
                    Solutions Pvt Ltd
                  </span>
                </div>
              </Link>
            </motion.div>

            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Empowering Businesses with Smart IT & Workforce Solutions. We deliver
              premium IT staffing, digital development, and non-voice projects globally.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/aapthimarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white text-sm">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white text-sm">Projects</Link></li>
              <li><Link to="/awards" className="hover:text-white text-sm">Awards & Recognitions</Link></li>
              <li><Link to="/careers" className="hover:text-white text-sm">Careers</Link></li>
              <li><Link to="/contact#contact-form" className="hover:text-white text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li><Link to="/services#staffing" className="hover:text-white text-sm">IT Staffing Solutions</Link></li>
              <li><Link to="/services#development" className="hover:text-white text-sm">Website Designing & Development</Link></li>
              <li><Link to="/services#xml" className="hover:text-white text-sm">XML & Non-Voice Projects</Link></li>
              <li><Link to="/services#partnerships" className="hover:text-white text-sm">Subscrption/ Partner Projects</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-orange-500 mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-1">Hyderabad Office</h4>
                  <p className="text-sm leading-relaxed">
                    3rd Floor, Image Hospitals Ln, Pratap Nagar, Nagarjuna Nagar colony, Yella Reddy Guda, Hyderabad, Telangana 500073
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-gray-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-1">Indore Office</h4>
                  <p className="text-sm leading-relaxed">
                    PR2W+2RH, Nai Duniya, Revenue Colony, Indira Gandhi Nagar, Indore, Madhya Pradesh 452009
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-gray-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-1">Noida Office</h4>
                  <p className="text-sm leading-relaxed">
                    Hotel white castle, Dadri Main Rd, Bhangel, Sector 82, Noida, Uttar Pradesh 201304
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gray-400 shrink-0" />
                <span className="text-sm">+91 9154399144</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gray-400 shrink-0" />
                <a
                  href="mailto:hr@aapthisolutions.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  hr@aapthisolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Aapthi Marketing Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;