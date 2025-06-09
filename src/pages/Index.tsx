import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Star
} from 'lucide-react';

const Index = () => {
  const courses = [
    {
      id: 'awb',
      title: "AWB Teachers - Website Building",
      description: "Learn to build professional websites and join our team of certified website builders.",
      duration: "12 weeks",
      students: "1,200/year",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      features: ['HTML & CSS Mastery', 'JavaScript Fundamentals', 'React Development', 'Portfolio Creation']
    },
    {
      id: 'radio',
      title: "African JahVa Radio",
      description: "Radio broadcasting, audio production, and media management training.",
      duration: "8 weeks",
      students: "500/year",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop",
      features: ['Broadcasting Techniques', 'Audio Production', 'Live Presenting', 'Media Management']
    },
    {
      id: 'finance',
      title: "Learn Finance",
      description: "Master money management, accounting, and financial literacy skills.",
      duration: "10 weeks",
      students: "1,000/month",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      features: ['Personal Budgeting', 'Investment Planning', 'Business Finance', 'Wealth Building']
    },
    {
      id: 'management',
      title: "Management Course",
      description: "Personal and business management, time management, and leadership skills.",
      duration: "6 weeks",
      students: "800/month",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      features: ['Leadership Skills', 'Team Coordination', 'Project Planning', 'Strategic Thinking']
    },
    {
      id: 'fitness',
      title: "Fitness Instructor",
      description: "Become a certified fitness instructor with comprehensive training.",
      duration: "8 weeks",
      students: "400/month",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      features: ['Exercise Science', 'Nutrition Planning', 'Client Training', 'Safety Protocols']
    },
    {
      id: 'travel',
      title: "Angel Travel",
      description: "Hotel management, travel planning, and hospitality services.",
      duration: "8 weeks",
      students: "400/month",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
      features: ['Hotel Operations', 'Customer Service', 'Travel Planning', 'Tourism Management']
    }
  ];

  const affiliatePartners = [
    {
      name: "Global Tech Institute",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      url: "https://globaltechinstitute.com",
      description: "Advanced technology and AI courses"
    },
    {
      name: "Creative Arts Academy",
      logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=100&fit=crop",
      url: "https://creativearts.academy",
      description: "Digital art and design programmes"
    },
    {
      name: "Business Excellence Hub",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
      url: "https://businessexcellence.hub",
      description: "Executive and leadership training"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Zylo Academy</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link to="/courses" className="text-gray-600 hover:text-gray-900 transition-colors">Courses</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
              <Link to="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Future with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Zylo Academy
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our comprehensive training programmes designed to equip you with modern skills and direct pathways to employment in our network of 20+ companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium transition-all duration-200">
              <BookOpen className="h-5 w-5" />
              Browse Courses
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors">
              <Users className="h-5 w-5" />
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">5,000+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">20+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">95%</h3>
              <p className="text-gray-600">Employment Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Training Programmes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted programmes designed to give you practical skills and guaranteed employment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 group">
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
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                    <div className="space-y-1">
                      {course.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={`/${course.id}`} 
                    className="w-full inline-block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
                  >
                    Enrol Now
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Partners */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Programmes</h2>
            <p className="text-xl text-gray-600">Explore additional learning opportunities with our trusted partners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {affiliatePartners.map((partner, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-24 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <a 
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Visit Programme
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with Zylo Academy. Your future starts today.
          </p>
          <Link to="/courses" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-white text-indigo-600 hover:bg-gray-100 font-medium transition-colors">
            <Award className="h-5 w-5" />
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
