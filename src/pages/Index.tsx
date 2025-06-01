
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/LoginForm';
import SignupForm from '@/components/SignupForm';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import HelpButton from '@/components/HelpButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">AWB Academy</h1>
            </div>
            <div className="flex space-x-4">
              <Button
                variant={isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(true)}
                className="transition-all duration-200"
              >
                Sign In
              </Button>
              <Button
                variant={!isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(false)}
                className="transition-all duration-200"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Hero Content */}
          <div className="space-y-8 scroll-animate">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Master New Skills with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> AWB Academy</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empowering motivated African and Caribbean students with modern skills needed to secure jobs and enhance their income through our comprehensive training programs.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/50 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Active Students</div>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">20+</div>
                  <div className="text-sm text-gray-600">Business Divisions</div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Track your learning progress</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Get certified and join our companies</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">Earn certificates and employment opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <div className="lg:pl-8 scroll-animate">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
              <CardContent className="p-8">
                {isLogin ? <LoginForm /> : <SignupForm />}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <TeamSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Help Button */}
      <HelpButton />
    </div>
  );
};

export default Index;
