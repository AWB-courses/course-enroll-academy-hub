
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  CheckCircle, 
  Lock, 
  Award, 
  Clock, 
  BookOpen,
  Video,
  FileText,
  Trophy,
  Star
} from 'lucide-react';

interface Module {
  id: number;
  title: string;
  type: 'video' | 'text' | 'quiz';
  duration: string;
  completed: boolean;
  locked: boolean;
  videoUrl?: string;
  content?: string;
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
}

interface CourseContentProps {
  courseId: string;
}

const CourseContent = ({ courseId }: CourseContentProps) => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [userProgress, setUserProgress] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true
  });

  const courseModules: { [key: string]: Module[] } = {
    awb: [
      {
        id: 1,
        title: 'Introduction to Web Development',
        type: 'video',
        duration: '15 min',
        completed: true,
        locked: false,
        videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE',
        content: 'Welcome to web development! In this module, we\'ll explore the fundamentals of creating websites.'
      },
      {
        id: 2,
        title: 'HTML Fundamentals',
        type: 'text',
        duration: '30 min',
        completed: true,
        locked: false,
        content: `
          <h3>HTML Basics</h3>
          <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for its appearance.</p>
          
          <h4>Basic HTML Structure:</h4>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;My First Heading&lt;/h1&gt;
    &lt;p&gt;My first paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          
          <h4>Common HTML Elements:</h4>
          <ul>
            <li>&lt;h1&gt; to &lt;h6&gt; - Headings</li>
            <li>&lt;p&gt; - Paragraphs</li>
            <li>&lt;a&gt; - Links</li>
            <li>&lt;img&gt; - Images</li>
            <li>&lt;div&gt; - Division/Container</li>
          </ul>
        `
      },
      {
        id: 3,
        title: 'HTML Knowledge Check',
        type: 'quiz',
        duration: '5 min',
        completed: false,
        locked: false,
        quiz: {
          question: 'Which HTML element is used to create the largest heading?',
          options: ['<h6>', '<heading>', '<h1>', '<header>'],
          correctAnswer: 2
        }
      },
      {
        id: 4,
        title: 'CSS Styling Basics',
        type: 'video',
        duration: '25 min',
        completed: false,
        locked: true,
        videoUrl: 'https://www.youtube.com/embed/1PnVor36_40',
        content: 'Learn how to style your HTML elements with CSS to create beautiful, responsive designs.'
      },
      {
        id: 5,
        title: 'CSS Selectors and Properties',
        type: 'text',
        duration: '20 min',
        completed: false,
        locked: true,
        content: `
          <h3>CSS Selectors</h3>
          <p>CSS selectors are used to target HTML elements for styling. Here are the most common types:</p>
          
          <h4>Element Selector:</h4>
          <pre><code>p {
    color: blue;
    font-size: 16px;
}</code></pre>
          
          <h4>Class Selector:</h4>
          <pre><code>.my-class {
    background-color: yellow;
    padding: 10px;
}</code></pre>
          
          <h4>ID Selector:</h4>
          <pre><code>#my-id {
    border: 1px solid red;
    margin: 20px;
}</code></pre>
        `
      }
    ],
    finance: [
      {
        id: 1,
        title: 'Personal Finance Fundamentals',
        type: 'video',
        duration: '20 min',
        completed: true,
        locked: false,
        videoUrl: 'https://www.youtube.com/embed/HQzoXaba78o',
        content: 'Understanding the basics of personal finance and why it matters for your future.'
      },
      {
        id: 2,
        title: 'Budgeting Essentials',
        type: 'text',
        duration: '25 min',
        completed: true,
        locked: false,
        content: `
          <h3>Creating Your First Budget</h3>
          <p>A budget is a plan for how you'll spend your money each month. It helps you:</p>
          <ul>
            <li>Track your income and expenses</li>
            <li>Identify areas where you can save money</li>
            <li>Plan for future goals</li>
            <li>Avoid debt and financial stress</li>
          </ul>
          
          <h4>The 50/30/20 Rule</h4>
          <p>A simple budgeting framework:</p>
          <ul>
            <li><strong>50%</strong> - Needs (rent, utilities, groceries)</li>
            <li><strong>30%</strong> - Wants (entertainment, dining out)</li>
            <li><strong>20%</strong> - Savings and debt repayment</li>
          </ul>
        `
      },
      {
        id: 3,
        title: 'Budgeting Quiz',
        type: 'quiz',
        duration: '5 min',
        completed: false,
        locked: false,
        quiz: {
          question: 'According to the 50/30/20 rule, what percentage should go to savings?',
          options: ['50%', '30%', '20%', '10%'],
          correctAnswer: 2
        }
      }
    ]
  };

  const achievements = [
    { name: 'First Steps', description: 'Completed your first module', icon: Star, earned: true },
    { name: 'Quiz Master', description: 'Passed your first quiz', icon: Trophy, earned: false },
    { name: 'Dedicated Learner', description: 'Completed 5 modules', icon: Award, earned: false },
    { name: 'Course Completion', description: 'Finished the entire course', icon: CheckCircle, earned: false }
  ];

  const modules = courseModules[courseId] || courseModules.awb;
  const completedModules = modules.filter(m => m.completed).length;
  const progressPercentage = (completedModules / modules.length) * 100;

  const handleModuleComplete = (moduleId: number) => {
    setUserProgress(prev => ({ ...prev, [moduleId]: true }));
    
    // Unlock next module
    const currentIndex = modules.findIndex(m => m.id === moduleId);
    if (currentIndex < modules.length - 1) {
      const nextModule = modules[currentIndex + 1];
      nextModule.locked = false;
    }
  };

  const handleQuizSubmit = () => {
    if (selectedModule?.quiz && quizAnswer !== null) {
      setShowQuizResult(true);
      if (quizAnswer === selectedModule.quiz.correctAnswer) {
        selectedModule.completed = true;
        handleModuleComplete(selectedModule.id);
      }
    }
  };

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'text': return FileText;
      case 'quiz': return BookOpen;
      default: return BookOpen;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Module List */}
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Course Modules</span>
            </CardTitle>
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-sm text-gray-600">{completedModules}/{modules.length} completed</p>
          </CardHeader>
          <CardContent className="space-y-2">
            {modules.map((module) => {
              const Icon = getModuleIcon(module.type);
              return (
                <div
                  key={module.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    module.locked 
                      ? 'bg-gray-50 border-gray-200 opacity-50' 
                      : selectedModule?.id === module.id
                      ? 'bg-indigo-50 border-indigo-200'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => !module.locked && setSelectedModule(module)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {module.locked ? (
                        <Lock className="h-4 w-4 text-gray-400" />
                      ) : module.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Icon className="h-4 w-4 text-gray-600" />
                      )}
                      <div>
                        <p className="font-medium text-sm">{module.title}</p>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{module.duration}</span>
                          <Badge variant="outline" className="text-xs">
                            {module.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-2 rounded-lg ${
                    achievement.earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${achievement.earned ? 'text-yellow-600' : 'text-gray-400'}`} />
                  <div>
                    <p className="font-medium text-sm">{achievement.name}</p>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Content Area */}
      <div className="lg:col-span-2">
        {selectedModule ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{selectedModule.title}</span>
                <Badge variant={selectedModule.completed ? "default" : "secondary"}>
                  {selectedModule.completed ? 'Completed' : 'In Progress'}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedModule.type === 'video' && (
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={selectedModule.videoUrl}
                      className="w-full h-full"
                      allowFullScreen
                      title={selectedModule.title}
                    />
                  </div>
                  <p className="text-gray-600">{selectedModule.content}</p>
                  {!selectedModule.completed && (
                    <Button onClick={() => handleModuleComplete(selectedModule.id)}>
                      Mark as Complete
                    </Button>
                  )}
                </div>
              )}

              {selectedModule.type === 'text' && (
                <div className="space-y-4">
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedModule.content || '' }}
                  />
                  {!selectedModule.completed && (
                    <Button onClick={() => handleModuleComplete(selectedModule.id)}>
                      Mark as Complete
                    </Button>
                  )}
                </div>
              )}

              {selectedModule.type === 'quiz' && selectedModule.quiz && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">{selectedModule.quiz.question}</h3>
                    <div className="space-y-2">
                      {selectedModule.quiz.options.map((option, index) => (
                        <label key={index} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="quiz-answer"
                            value={index}
                            onChange={() => setQuizAnswer(index)}
                            className="text-indigo-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {!showQuizResult && (
                    <Button 
                      onClick={handleQuizSubmit}
                      disabled={quizAnswer === null}
                    >
                      Submit Answer
                    </Button>
                  )}

                  {showQuizResult && (
                    <div className={`p-4 rounded-lg ${
                      quizAnswer === selectedModule.quiz.correctAnswer 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-red-50 border border-red-200'
                    }`}>
                      {quizAnswer === selectedModule.quiz.correctAnswer ? (
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-medium text-green-800">Correct! Well done!</span>
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium text-red-800">Incorrect. The correct answer is: {selectedModule.quiz.options[selectedModule.quiz.correctAnswer]}</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-2"
                            onClick={() => {
                              setShowQuizResult(false);
                              setQuizAnswer(null);
                            }}
                          >
                            Try Again
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Module</h3>
              <p className="text-gray-600">Choose a module from the left to start learning</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CourseContent;
