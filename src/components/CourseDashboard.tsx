
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Award, 
  Clock, 
  Users, 
  LogOut, 
  Play,
  CheckCircle,
  Star,
  TrendingUp
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
      modules: [
        { id: 1, title: 'HTML Fundamentals', completed: true, duration: '2 hours' },
        { id: 2, title: 'CSS Styling', completed: true, duration: '3 hours' },
        { id: 3, title: 'JavaScript Basics', completed: false, duration: '4 hours' },
        { id: 4, title: 'React Framework', completed: false, duration: '5 hours' },
        { id: 5, title: 'Portfolio Project', completed: false, duration: '6 hours' }
      ],
      progress: 40,
      nextClass: 'JavaScript Fundamentals - Tomorrow 2:00 PM',
      instructor: 'Dr. Sarah Williams'
    },
    radio: {
      title: 'African JahVa Radio',
      description: 'Radio broadcasting and audio production',
      modules: [
        { id: 1, title: 'Radio Broadcasting Basics', completed: true, duration: '2 hours' },
        { id: 2, title: 'Audio Equipment', completed: false, duration: '3 hours' },
        { id: 3, title: 'Content Creation', completed: false, duration: '4 hours' },
        { id: 4, title: 'Live Show Hosting', completed: false, duration: '5 hours' }
      ],
      progress: 25,
      nextClass: 'Audio Equipment Setup - Friday 10:00 AM',
      instructor: 'Marcus Johnson'
    },
    finance: {
      title: 'Learn Finance',
      description: 'Personal and business financial management',
      modules: [
        { id: 1, title: 'Financial Fundamentals', completed: true, duration: '2 hours' },
        { id: 2, title: 'Budgeting & Planning', completed: true, duration: '3 hours' },
        { id: 3, title: 'Investment Strategies', completed: false, duration: '4 hours' },
        { id: 4, title: 'Business Finance', completed: false, duration: '5 hours' }
      ],
      progress: 50,
      nextClass: 'Investment Portfolio - Monday 9:00 AM',
      instructor: 'Jennifer Davis'
    },
    management: {
      title: 'Management Course',
      description: 'Leadership and business management skills',
      modules: [
        { id: 1, title: 'Leadership Principles', completed: true, duration: '3 hours' },
        { id: 2, title: 'Team Management', completed: false, duration: '4 hours' },
        { id: 3, title: 'Project Planning', completed: false, duration: '3 hours' },
        { id: 4, title: 'Business Strategy', completed: false, duration: '5 hours' }
      ],
      progress: 25,
      nextClass: 'Team Building Workshop - Wednesday 1:00 PM',
      instructor: 'Robert Chen'
    },
    fitness: {
      title: 'Fitness Instructor',
      description: 'Professional fitness training certification',
      modules: [
        { id: 1, title: 'Exercise Science', completed: true, duration: '4 hours' },
        { id: 2, title: 'Nutrition Basics', completed: true, duration: '3 hours' },
        { id: 3, title: 'Program Design', completed: true, duration: '5 hours' },
        { id: 4, title: 'Client Assessment', completed: false, duration: '4 hours' }
      ],
      progress: 75,
      nextClass: 'Practical Assessment - Thursday 8:00 AM',
      instructor: 'Amanda Rodriguez'
    },
    travel: {
      title: 'Angel Travel',
      description: 'Hospitality and travel management',
      modules: [
        { id: 1, title: 'Tourism Industry Overview', completed: true, duration: '2 hours' },
        { id: 2, title: 'Hotel Management', completed: false, duration: '4 hours' },
        { id: 3, title: 'Customer Service', completed: false, duration: '3 hours' },
        { id: 4, title: 'Travel Planning', completed: false, duration: '5 hours' }
      ],
      progress: 25,
      nextClass: 'Hotel Operations - Tuesday 11:00 AM',
      instructor: 'Michael Thompson'
    }
  };

  const course = courseData[courseId || 'awb'] || courseData.awb;
  const completedModules = course.modules.filter((m: any) => m.completed).length;

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
            <Badge variant="outline">{completedModules}/{course.modules.length} Modules Completed</Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                <Clock className="h-4 w-4 text-blue-600 mt-1" />
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
        </div>

        {/* Course Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Course Modules</h3>
            <div className="space-y-4">
              {course.modules.map((module: any) => (
                <Card key={module.id} className={`transition-all duration-200 ${module.completed ? 'bg-green-50 border-green-200' : 'hover:shadow-md'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {module.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Play className="h-5 w-5 text-gray-400" />
                        )}
                        <div>
                          <h4 className="font-medium text-gray-900">{module.title}</h4>
                          <p className="text-sm text-gray-600">{module.duration}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant={module.completed ? "outline" : "default"}
                        disabled={module.completed}
                      >
                        {module.completed ? 'Completed' : 'Start'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Course Information</h3>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-indigo-600" />
                    <span>Certification</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Complete all modules to earn your professional certification in {course.title}.</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
