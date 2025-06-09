
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, TrendingUp, ExternalLink } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }
    }
  }, [navigate]);

  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      id: 'awb',
      title: 'AWB Teachers - Website Building',
      description: 'Learn to build professional websites and join our team of certified website builders.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      students: '1,200/year',
      level: 'Beginner to Advanced'
    },
    {
      id: 'radio',
      title: 'African JahVa Radio',
      description: 'Radio broadcasting, audio production, and media management training.',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop',
      students: '500/year',
      level: 'Intermediate'
    },
    {
      id: 'finance',
      title: 'Learn Finance',
      description: 'Master money management, accounting, and financial literacy skills.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      students: '1,000/month',
      level: 'Beginner'
    },
    {
      id: 'management',
      title: 'Management Course',
      description: 'Personal and business management, time management, and leadership skills.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      students: '800/month',
      level: 'Intermediate'
    },
    {
      id: 'fitness',
      title: 'Fitness Instructor',
      description: 'Professional fitness training and wellness coaching certification.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      students: '400/month',
      level: 'Beginner'
    },
    {
      id: 'travel',
      title: 'Angel Travel',
      description: 'Hotel management, travel planning, and hospitality services.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
      students: '300/month',
      level: 'Intermediate'
    }
  ];

  const affiliateCourses = [
    {
      title: 'Cool Viral Moves',
      description: 'Dance and social media content creation for viral marketing.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop',
      externalUrl: 'https://coolviralmoves.com'
    },
    {
      title: 'GBE Partnerships',
      description: 'Entrepreneur networking and business partnership opportunities.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop',
      externalUrl: 'https://gbepartnerships.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">AWB Academy</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-20 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Master New Skills with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> AWB Academy</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            Empowering motivated African and Caribbean students with modern skills needed to secure jobs and enhance their income through our comprehensive training programs.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/50 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Active Students</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">20+</div>
                <div className="text-xs sm:text-sm text-gray-600">Business Divisions</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Employment Rate</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">Course Programs</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Available Courses Section */}
        <div className="mb-16 scroll-animate">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive courses designed to equip you with industry-relevant skills and direct pathways to employment.
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
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center justify-between">
                      <span>Students: {course.students}</span>
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">{course.level}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/${course.id}`} 
                    className="w-full inline-block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
                  >
                    Enroll Now
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Affiliate Courses Section */}
        <div className="mb-16 scroll-animate">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Partner Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore additional opportunities through our trusted affiliate partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {affiliateCourses.map((course, index) => (
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
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <a 
                    href={course.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    <span>Visit Partner Site</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <TeamSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
