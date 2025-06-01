
import { BookOpen, Users, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About AWB Academy</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering motivated African and Caribbean students with modern skills needed to secure jobs and enhance their income through our comprehensive training programs across 20+ business divisions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class training and certification programs that equip African and Caribbean students with the modern skills needed to secure employment and build successful careers in the digital economy.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading educational platform across Africa and the Caribbean, connecting talented individuals with opportunities in our growing network of 20+ companies and business divisions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200">
            <p className="text-gray-600 leading-relaxed mb-6">
              AWB Academy was founded by Mr. Angel, a tech entrepreneur, business owner, and record producer based in the UK. Recognizing the gap between traditional education and the skills needed in today's digital economy, he created AWB to empower motivated students with practical, job-ready skills.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Under the leadership of Mr. Zion, our CEO and digital nomad entrepreneur, AWB has expanded to offer comprehensive training across multiple industries including web development, financial literacy, business management, media production, and more.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With expert mentors like Mr. Brown, our sales mentor with 15 years of experience and millions in revenue generation, we provide students with real-world expertise and direct pathways to employment within our network of companies.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-blue-100">Students Trained</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">20+</div>
              <div className="text-green-100">Companies</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">10</div>
              <div className="text-purple-100">African Countries</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white border-0">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">95%</div>
              <div className="text-indigo-100">Employment Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Our Companies */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Network of Companies</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200">
            <p className="text-gray-600 leading-relaxed mb-6">
              AWB Academy is more than just an educational platform - we're a complete ecosystem of businesses that provide real employment opportunities for our graduates. From website building to radio broadcasting, financial services to travel, our students can build careers across multiple industries.
            </p>
            <Link to="/courses" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
              Explore Our Courses
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
