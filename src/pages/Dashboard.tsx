import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Clock, Award, Search, LogOut, User, Play, Star } from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate('/');
      return;
    }

    const userData = JSON.parse(currentUser);
    setUser(userData);

    // Initialize AWB Academy courses if not exists
    const existingCourses = localStorage.getItem('courses');
    if (!existingCourses) {
      const awbCourses = [
        {
          id: '1',
          title: 'AWB Teachers - Website Building',
          instructor: 'Mr. Zion',
          category: 'Technology',
          duration: '12 weeks',
          level: 'Beginner',
          rating: 4.9,
          enrolled: 1200,
          description: 'Learn professional website building skills and join our certified team of website builders across Africa.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
          lessons: 48,
          price: 99.99
        },
        {
          id: '2',
          title: 'African JahVa Radio',
          instructor: 'Radio Team',
          category: 'Media',
          duration: '8 weeks',
          level: 'Intermediate',
          rating: 4.8,
          enrolled: 500,
          description: 'Master radio broadcasting, audio production, and DJ skills for African JahVa electronic dance music.',
          image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop',
          lessons: 32,
          price: 79.99
        },
        {
          id: '3',
          title: 'Learn Finance',
          instructor: 'Financial Experts',
          category: 'Finance',
          duration: '10 weeks',
          level: 'Beginner',
          rating: 4.9,
          enrolled: 1000,
          description: 'Master money management, accounting, budgeting, and financial literacy for personal and business success.',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
          lessons: 40,
          price: 89.99
        },
        {
          id: '4',
          title: 'Management Course',
          instructor: 'Business Leaders',
          category: 'Business',
          duration: '6 weeks',
          level: 'Intermediate',
          rating: 4.7,
          enrolled: 800,
          description: 'Develop time management, leadership, and business strategy skills for personal and professional growth.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
          lessons: 24,
          price: 69.99
        },
        {
          id: '5',
          title: 'Cool Viral Moves',
          instructor: 'Dance Instructors',
          category: 'Entertainment',
          duration: '4 weeks',
          level: 'Beginner',
          rating: 4.6,
          enrolled: 300,
          description: 'Learn viral dance moves and social media content creation for African JahVa music promotion.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
          lessons: 16,
          price: 49.99
        },
        {
          id: '6',
          title: 'GBE Partnerships',
          instructor: 'Mr. Brown',
          category: 'Business',
          duration: '8 weeks',
          level: 'Advanced',
          rating: 4.8,
          enrolled: 200,
          description: 'Entrepreneur networking, business incubation, and partnership development for startups.',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
          lessons: 32,
          price: 149.99
        },
        {
          id: '7',
          title: 'Angel Travel',
          instructor: 'Travel Experts',
          category: 'Hospitality',
          duration: '6 weeks',
          level: 'Intermediate',
          rating: 4.7,
          enrolled: 400,
          description: 'Hotel management, travel planning, and hospitality services for the tourism industry.',
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
          lessons: 24,
          price: 79.99
        },
        {
          id: '8',
          title: 'Fitness Instructor Certification',
          instructor: 'Fitness Team',
          category: 'Health',
          duration: '8 weeks',
          level: 'Intermediate',
          rating: 4.8,
          enrolled: 600,
          description: 'Become a certified fitness instructor with comprehensive training in exercise science and wellness.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
          lessons: 32,
          price: 99.99
        }
      ];
      localStorage.setItem('courses', JSON.stringify(awbCourses));
    }
    
    setCourses(JSON.parse(localStorage.getItem('courses') || '[]'));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const handleEnrollCourse = (courseId: string) => {
    const updatedUser = { ...user };
    if (!updatedUser.enrolledCourses.includes(courseId)) {
      updatedUser.enrolledCourses.push(courseId);
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      
      // Update users array
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
      }

      toast({
        title: "Enrolled successfully!",
        description: "You have been enrolled in the course.",
      });
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const enrolledCourses = courses.filter(course => user?.enrolledCourses?.includes(course.id));
  const categories = ['all', ...Array.from(new Set(courses.map(c => c.category)))];

  if (!user) return null;

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
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                <span>{user.firstName} {user.lastName}</span>
              </div>
              <Button variant="outline" onClick={handleLogout} className="flex items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.firstName}! 👋
          </h2>
          <p className="text-gray-600">Continue your AWB Academy journey and explore our company training programs.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Enrolled Courses</p>
                  <p className="text-3xl font-bold">{enrolledCourses.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Completed</p>
                  <p className="text-3xl font-bold">{user.completedCourses?.length || 0}</p>
                </div>
                <Award className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Learning Hours</p>
                  <p className="text-3xl font-bold">{enrolledCourses.length * 8}</p>
                </div>
                <Clock className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Courses Section */}
        {enrolledCourses.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My AWB Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-500 hover:bg-green-600">Enrolled</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">{course.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{course.instructor}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Progress</span>
                        <span>25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700">
                      <Play className="h-4 w-4 mr-2" />
                      Continue Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Course Catalog */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore AWB Academy Courses</h3>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-white text-gray-900">£{course.price}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{course.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">{course.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{course.instructor}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </span>
                    <span>{course.lessons} lessons</span>
                  </div>
                  <Button
                    onClick={() => handleEnrollCourse(course.id)}
                    disabled={user.enrolledCourses?.includes(course.id)}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  >
                    {user.enrolledCourses?.includes(course.id) ? 'Enrolled' : 'Enroll Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
