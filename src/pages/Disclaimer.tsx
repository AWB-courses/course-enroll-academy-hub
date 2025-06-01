
import { BookOpen } from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">AWB Academy</h1>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Content</h2>
              <p className="text-gray-600 leading-relaxed">
                The information provided in our courses is for educational purposes only. While we strive for accuracy and current information, the rapidly changing nature of technology and business means some content may become outdated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Employment Opportunities</h2>
              <p className="text-gray-600 leading-relaxed">
                While AWB Academy provides pathways to employment within our network of companies, completion of courses does not guarantee employment. Job opportunities depend on business needs, performance, and availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Results</h2>
              <p className="text-gray-600 leading-relaxed">
                Any income examples or earning potential mentioned are estimates based on various factors. Individual results may vary significantly based on effort, market conditions, and other factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Our platform may integrate with third-party services. We are not responsible for the availability, content, or practices of these external services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                AWB Academy shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be posted on this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Disclaimer;
