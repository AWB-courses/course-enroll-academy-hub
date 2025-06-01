
import { BookOpen } from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Terms = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using AWB Academy's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Course Enrollment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Enrollment in our courses is subject to availability and completion of prerequisites. Students must:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate personal and contact information</li>
                <li>Meet age requirements (18+ or parental consent)</li>
                <li>Complete payment before course access</li>
                <li>Adhere to course schedules and requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Certification and Employment</h2>
              <p className="text-gray-600 leading-relaxed">
                Upon successful completion of courses, students receive certificates. Employment opportunities within our network are available but not guaranteed and depend on performance, availability, and business needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All course materials, content, and resources are the intellectual property of AWB Academy and its partners. Students may not redistribute, sell, or share course materials without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Refunds</h2>
              <p className="text-gray-600 leading-relaxed">
                Course fees are due upon enrollment. Refund policies vary by program and are detailed in individual course descriptions. Generally, refunds are available within 14 days of enrollment if no course materials have been accessed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these terms, please contact us at info@awbacademy.com or through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
