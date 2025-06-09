
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginForm from '@/components/LoginForm';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

interface CourseInfo {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const CourseLoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const courseId = location.pathname.substring(1); // Remove leading slash

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate(`/dashboard/${courseId}`);
      }
    }
  }, [navigate, courseId]);

  const courseData: { [key: string]: CourseInfo } = {
    awb: {
      id: 'awb',
      title: 'AWB Teachers - Website Building',
      description: 'Learn to build professional websites and join our team of certified website builders. Master HTML, CSS, JavaScript, and modern web development frameworks.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      features: [
        'Professional website development',
        'Modern web technologies',
        'Certification upon completion',
        'Direct employment opportunities',
        'Monthly training cohorts'
      ]
    },
    radio: {
      id: 'radio',
      title: 'African JahVa Radio',
      description: 'Master radio broadcasting, audio production, and media management. Learn to create engaging content and manage radio operations.',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop',
      features: [
        'Radio broadcasting techniques',
        'Audio production skills',
        'Media management',
        'Content creation',
        'Live show hosting'
      ]
    },
    finance: {
      id: 'finance',
      title: 'Learn Finance',
      description: 'Master money management, accounting, and financial literacy skills. Build a strong foundation in personal and business finance.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      features: [
        'Personal finance management',
        'Business accounting',
        'Investment strategies',
        'Financial planning',
        'Wealth building techniques'
      ]
    },
    management: {
      id: 'management',
      title: 'Management Course',
      description: 'Develop essential management and leadership skills. Learn time management, team leadership, and business strategy.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      features: [
        'Leadership development',
        'Time management',
        'Team coordination',
        'Business strategy',
        'Project management'
      ]
    },
    fitness: {
      id: 'fitness',
      title: 'Fitness Instructor',
      description: 'Become a certified fitness instructor. Learn exercise science, nutrition, and how to design effective workout programs.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      features: [
        'Exercise science fundamentals',
        'Nutrition guidance',
        'Workout program design',
        'Client assessment',
        'Professional certification'
      ]
    },
    travel: {
      id: 'travel',
      title: 'Angel Travel',
      description: 'Master hotel management, travel planning, and hospitality services. Join the growing tourism and hospitality industry.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      features: [
        'Hotel management',
        'Travel planning',
        'Customer service excellence',
        'Hospitality operations',
        'Tourism industry knowledge'
      ]
    }
  };

  const course = courseData[courseId] || courseData.awb;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Zylo Academy</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Course Hero & Login Section */}
        <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-center mb-12 sm:mb-20">
          {/* Login Form - First on mobile, right on desktop */}
          <div className="w-full lg:w-1/2 lg:order-2 mb-8 lg:mb-0 lg:pl-8">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enroll in {course.title}</h3>
                  <p className="text-gray-600">Sign in to start your learning journey</p>
                </div>
                <LoginForm courseId={courseId} />
              </CardContent>
            </Card>
          </div>

          {/* Course Info - Second on mobile, left on desktop */}
          <div className="w-full lg:w-1/2 lg:order-1 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {course.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Course Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Course Features */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">What You'll Learn:</h3>
              <ul className="space-y-2">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
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

export default CourseLoginPage;
