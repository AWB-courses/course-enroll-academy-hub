import { BookOpen, Clock, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      title: "AWB Teachers - Website Building",
      description: "Learn to build professional websites and join our team of certified website builders.",
      duration: "12 weeks",
      students: "1,200/year",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "African JahVa Radio",
      description: "Radio broadcasting, audio production, and media management training.",
      duration: "8 weeks",
      students: "500/year",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop"
    },
    {
      title: "Learn Finance",
      description: "Master money management, accounting, and financial literacy skills.",
      duration: "10 weeks",
      students: "1,000/month",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    },
    {
      title: "Management Course",
      description: "Personal and business management, time management, and leadership skills.",
      duration: "6 weeks",
      students: "800/month",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      title: "Cool Viral Moves",
      description: "Dance and social media content creation for viral marketing.",
      duration: "4 weeks",
      students: "300/month",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    },
    {
      title: "Angel Travel",
      description: "Hotel management, travel planning, and hospitality services.",
      duration: "8 weeks",
      students: "400/month",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop"
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive training programmes designed to equip you with modern skills and direct pathways to employment in our network of 20+ companies.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{course.students}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/dashboard" className="w-full inline-block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                    Enrol Now
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6">Join thousands of students who have transformed their careers with Zylo Academy.</p>
          <Link to="/" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
            Get Started Today
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
