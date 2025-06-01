
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, X, MessageCircle, ArrowLeft } from 'lucide-react';

const HelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('main');
  const [selectedTopic, setSelectedTopic] = useState('');

  const helpTopics = {
    about: {
      title: 'About AWB Academy',
      options: [
        { id: 'awb-teachers', label: 'AWB Teachers - Website Building', description: 'Learn website building skills with certified training across Africa' },
        { id: 'radio-station', label: 'African JahVa Radio', description: 'Electronic dance music showcasing 50 talented African DJs' },
        { id: 'financial-literacy', label: 'Learn Finance Course', description: 'Master money management and accounting skills' },
        { id: 'business-management', label: 'Management Business Course', description: 'Time management and business strategy training' },
        { id: 'travel-clubs', label: 'Angel Travel', description: 'Exclusive travel clubs with curated experiences' },
        { id: 'donation-site', label: 'Give to Get Foundation', description: 'Donation platform supporting educational initiatives' }
      ]
    },
    courses: {
      title: 'Available Courses',
      options: [
        { id: 'website-building', label: 'Website Building', description: 'Build professional websites and get certified' },
        { id: 'financial-accounting', label: 'Financial Accounting', description: 'Learn budgeting, investing, and financial management' },
        { id: 'business-management', label: 'Business Management', description: 'Master time management and business strategy' },
        { id: 'radio-media', label: 'Radio & Media', description: 'Broadcasting and media production training' },
        { id: 'sales-training', label: 'Sales Training', description: 'Professional sales coaching and techniques' }
      ]
    },
    enrollment: {
      title: 'Enrollment Information',
      options: [
        { id: 'how-to-enroll', label: 'How to Enroll', description: 'Step-by-step enrollment process' },
        { id: 'pricing', label: 'Course Pricing', description: 'Affordable pricing starting at £10 per course' },
        { id: 'certification', label: 'Certification Process', description: 'Get certified and join our companies' },
        { id: 'job-placement', label: 'Job Placement', description: 'Employment opportunities after certification' }
      ]
    }
  };

  const mainOptions = [
    { id: 'about', label: 'About Our Companies', icon: '🏢' },
    { id: 'courses', label: 'Available Courses', icon: '📚' },
    { id: 'enrollment', label: 'Enrollment Help', icon: '✍️' },
    { id: 'contact', label: 'Contact Support', icon: '📞' }
  ];

  const handleTopicSelect = (topicId: string) => {
    if (topicId === 'contact') {
      alert('Please email us at support@awbacademy.com or call +44 123 456 7890');
      return;
    }
    setSelectedTopic(topicId);
    setCurrentStep('options');
  };

  const handleOptionSelect = (optionId: string) => {
    const topic = helpTopics[selectedTopic as keyof typeof helpTopics];
    const option = topic?.options.find(opt => opt.id === optionId);
    if (option) {
      alert(`${option.label}: ${option.description}`);
    }
  };

  const goBack = () => {
    if (currentStep === 'options') {
      setCurrentStep('main');
      setSelectedTopic('');
    }
  };

  return (
    <>
      {/* Help Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          <HelpCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Help Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80">
          <Card className="shadow-xl border-gray-200">
            <CardHeader className="bg-indigo-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {currentStep === 'options' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={goBack}
                      className="text-white hover:bg-indigo-700 p-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  )}
                  <MessageCircle className="h-5 w-5" />
                  <CardTitle className="text-lg">AWB Help Center</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentStep('main');
                    setSelectedTopic('');
                  }}
                  className="text-white hover:bg-indigo-700 p-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 max-h-96 overflow-y-auto">
              {currentStep === 'main' && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 mb-4">
                    Welcome! How can we help you today?
                  </p>
                  {mainOptions.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      onClick={() => handleTopicSelect(option.id)}
                      className="w-full justify-start text-left h-auto p-3"
                    >
                      <span className="mr-3 text-lg">{option.icon}</span>
                      <span>{option.label}</span>
                    </Button>
                  ))}
                </div>
              )}

              {currentStep === 'options' && helpTopics[selectedTopic as keyof typeof helpTopics] && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 mb-4">
                    {helpTopics[selectedTopic as keyof typeof helpTopics].title}
                  </p>
                  {helpTopics[selectedTopic as keyof typeof helpTopics].options.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      onClick={() => handleOptionSelect(option.id)}
                      className="w-full justify-start text-left h-auto p-3"
                    >
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default HelpButton;
