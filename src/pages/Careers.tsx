
import { BookOpen, Briefcase, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Careers = () => {
  const positions = [
    {
      title: "Website Developer",
      company: "AWB Teachers",
      type: "Full-time",
      location: "Remote/Uganda",
      description: "Join our team of certified website builders after completing our training program."
    },
    {
      title: "Radio Host",
      company: "African JahVa Radio",
      type: "Part-time",
      location: "Remote",
      description: "Host shows and create content for our growing radio platform."
    },
    {
      title: "Financial Advisor",
      company: "Learn Finance",
      type: "Full-time",
      location: "Multiple Locations",
      description: "Help clients with financial planning and literacy after certification."
    },
    {
      title: "Travel Coordinator",
      company: "Angel Travel",
      type: "Full-time",
      location: "UK/Remote",
      description: "Manage travel experiences and hotel partnerships."
    }
  ];

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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Build your career with AWB Academy and our network of 20+ companies. Complete our training programs and join our growing team of professionals.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200 text-center">
            <CardContent className="p-8">
              <Briefcase className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
              <p className="text-gray-600">Advance your career across our network of companies with continuous learning opportunities.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200 text-center">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Team</h3>
              <p className="text-gray-600">Work with talented professionals from Africa, Caribbean, and the UK in a diverse environment.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200 text-center">
            <CardContent className="p-8">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-600">Make a difference by empowering students and communities through education and skill development.</p>
            </CardContent>
          </Card>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <p className="text-indigo-600 font-semibold mb-2">{position.company}</p>
                      <p className="text-gray-600 mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{position.type}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Link to="/courses" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Career?</h2>
          <p className="text-gray-600 mb-6">Complete our training programs and join our team of certified professionals.</p>
          <Link to="/courses" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
            View Training Programs
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
