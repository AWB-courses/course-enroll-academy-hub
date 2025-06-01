
import { BookOpen } from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Legal = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal Information</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Information</h2>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p><strong>Company Name:</strong> AWB Academy Limited</p>
                <p><strong>Registration:</strong> United Kingdom</p>
                <p><strong>Business Address:</strong> London, United Kingdom</p>
                <p><strong>Contact Email:</strong> legal@awbacademy.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from the use of our services will be subject to the jurisdiction of UK courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Operations</h2>
              <p className="text-gray-600 leading-relaxed">
                AWB Academy operates across multiple countries including the United Kingdom and various African nations. Local laws and regulations may apply to specific programs and services offered in different regions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AWB Academy is committed to compliance with applicable laws and regulations including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Data Protection Regulations (GDPR)</li>
                <li>Educational Standards and Accreditation</li>
                <li>Employment and Labor Laws</li>
                <li>Consumer Protection Laws</li>
                <li>Anti-Discrimination Policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed">
                In the event of any disputes, we encourage resolution through direct communication. If formal proceedings are necessary, disputes will be resolved through arbitration or in the appropriate courts of the United Kingdom.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Documents</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This page should be read in conjunction with our other legal documents:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><Link to="/terms" className="text-indigo-600 hover:underline">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link></li>
                <li><Link to="/disclaimer" className="text-indigo-600 hover:underline">Disclaimer</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Legal Department</h2>
              <p className="text-gray-600 leading-relaxed">
                For legal inquiries, contract matters, or compliance questions, please contact our legal department at legal@awbacademy.com.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Legal;
