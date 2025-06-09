
import { BookOpen } from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

interface CompanyPageProps {
  companyName: string;
  description: string;
  image: string;
  services: string[];
  mission: string;
  achievements: string[];
}

const CompanyPage = ({ companyName, description, image, services, mission, achievements }: CompanyPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Zylo Academy</h1>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{companyName}</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            {description}
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
            <img 
              src={image} 
              alt={companyName}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Services */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">{mission}</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl font-bold text-indigo-600 mb-2">✓</div>
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6">Interested in working with {companyName}? Explore opportunities through our training programmes.</p>
          <Link to="/courses" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
            View Courses
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CompanyPage;
