
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseContent from '@/components/CourseContent';
import { 
  BookOpen, 
  Award, 
  Clock, 
  Users, 
  LogOut, 
  Star,
  TrendingUp,
  Calendar,
  MessageCircle
} from 'lucide-react';

const CourseDashboard = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate(`/${courseId}`);
      return;
    }
    setUser(JSON.parse(currentUser));
  }, [navigate, courseId]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  const courseData: { [key: string]: any } = {
    awb: {
      title: 'AWB Teachers - Website Building',
      description: 'Professional web development training',
      progress: 40,
      nextClass: 'JavaScript Fundamentals - Tomorrow 2:00 PM',
      instructor: 'Dr. Sarah Williams',
      totalModules: 12,
      completedModules: 5
    },
    radio: {
      title: 'African JahVa Radio',
      description: 'Radio broadcasting and audio production',
      progress: 25,
      nextClass: 'Audio Equipment Setup - Friday 10:00 AM',
      instructor: 'Marcus Johnson',
      totalModules: 10,
      completedModules: 3
    },
    finance: {
      title: 'Learn Finance',
      description: 'Personal and business financial management',
      progress: 50,
      nextClass: 'Investment Portfolio - Monday 9:00 AM',
      instructor: 'Jennifer Davis',
      totalModules: 8,
      completedModules: 4
    },
    management: {
      title: 'Management Course',
      description: 'Leadership and business management skills',
      progress: 25,
      nextClass: 'Team Building Workshop - Wednesday 1:00 PM',
      instructor: 'Robert Chen',
      totalModules: 10,
      completedModules: 3
    },
    fitness: {
      title: 'Fitness Instructor',
      description: 'Professional fitness training certification',
      progress: 75,
      nextClass: 'Practical Assessment - Thursday 8:00 AM',
      instructor: 'Amanda Rodriguez',
      totalModules: 8,
      completedModules: 6
    },
    travel: {
      title: 'Angel Travel',
      description: 'Hospitality and travel management',
      progress: 25,
      nextClass: 'Hotel Operations - Tuesday 11:00 AM',
      instructor: 'Michael Thompson',
      totalModules: 9,
      completedModules: 2
    }
  };

  const course = courseData[courseId || 'awb'] || courseData.awb;

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Zylo Academy</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.firstName}!</span>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h2>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">Instructor: {course.instructor}</Badge>
            <Badge variant="outline">{course.completedModules}/{course.totalModules} Modules Completed</Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{course.progress}%</span>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Next Class</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-2">
                <Calendar className="h-4 w-4 text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-medium">{course.nextClass}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Course Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium">
                  {course.progress >= 75 ? 'Excellent Progress' : 
                   course.progress >= 50 ? 'Good Progress' : 
                   course.progress >= 25 ? 'Getting Started' : 'Just Beginning'}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">Ask Questions</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList>
            <TabsTrigger value="content">Course Content</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <CourseContent courseId={courseId || 'awb'} />
          </TabsContent>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-indigo-600" />
                    <span>Certification</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Complete all modules to earn your professional certification in {course.title}.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress towards certification</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span>Class Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Instructor:</strong> {course.instructor}</p>
                    <p className="text-sm"><strong>Class Size:</strong> 25 students</p>
                    <p className="text-sm"><strong>Duration:</strong> 12 weeks</p>
                    <p className="text-sm"><strong>Format:</strong> Hybrid (Online + In-person)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Course Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold">Course Materials</h4>
                    <p className="text-gray-600">Download PDFs, worksheets, and additional reading materials.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Community Forum</h4>
                    <p className="text-gray-600">Connect with fellow students and ask questions.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Office Hours</h4>
                    <p className="text-gray-600">Join weekly Q&A sessions with your instructor.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDashboard;
