
import { BookOpen, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' }
  ];

  const legalLinks = [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Legal', href: '/legal' }
  ];

  const companies = [
    { name: 'AWB Teachers', href: '/companies/awb-teachers' },
    { name: 'African JahVa Radio', href: '/companies/african-jahva-radio' },
    { name: 'Cool Viral Moves', href: '/companies/cool-viral-moves' },
    { name: 'Learn Finance', href: '/companies/learn-finance' },
    { name: 'Management Course', href: '/companies/management-course' },
    { name: 'GBE Partnerships', href: '/companies/gbe-partnerships' },
    { name: 'Angel Travel', href: '/companies/angel-travel' },
    { name: 'Give to Get Foundation', href: '/companies/give-to-get-foundation' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-400" />
              <h3 className="text-2xl font-bold">Zylo Academy</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering African and Caribbean students with modern skills for career success and financial growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-300 hover:text-indigo-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-300 hover:text-indigo-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Companies</h4>
            <ul className="space-y-1 text-sm">
              {companies.map((company, index) => (
                <li key={index}>
                  <Link to={company.href} className="text-gray-300 hover:text-indigo-400 transition-colors">
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Zylo Academy. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Building the future of African and Caribbean talent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
