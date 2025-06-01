
import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const AIAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m AWB AI Assistant. How can I help you today?\n\nType "/" to see available commands or choose from:\n1. About AWB Academy\n2. Available Courses\n3. Enrollment Process\n4. Career Opportunities\n5. Contact Information'
    }
  ]);
  const [input, setInput] = useState('');

  const responses = {
    '/': 'Available commands:\n• Type "1" - Learn about AWB Academy\n• Type "2" - Explore our courses\n• Type "3" - Enrollment process\n• Type "4" - Career opportunities\n• Type "5" - Contact information\n• Type "/" - Show this menu',
    
    '1': 'AWB Academy is a comprehensive training institute empowering African and Caribbean students with modern skills. We operate 20+ companies including:\n\n🌐 AWB Teachers (Website Building)\n📻 African JahVa Radio\n💰 Learn Finance Course\n📊 Management Business Course\n🤝 GBE Partnerships\n✈️ Angel Travel\n❤️ Give to Get Foundation\n\nType "/" for menu or ask about specific areas!',
    
    '2': 'Our flagship courses include:\n\n🌐 Website Building - Learn to create professional websites\n💰 Financial Literacy - Master money management & accounting\n📊 Business Management - Time management & leadership\n📻 Radio & Media Training - Broadcasting skills\n🎵 Music Production - African JahVa genre\n💪 Fitness Instruction - Health & wellness\n🤝 Entrepreneurship (GBE) - Business partnerships\n\nEach course leads to certification and potential employment! Type "/" for menu.',
    
    '3': 'Enrollment is simple:\n\n1️⃣ Create your account on our platform\n2️⃣ Browse available courses\n3️⃣ Select your preferred course\n4️⃣ Complete the application\n5️⃣ Begin your training journey\n\n💡 Upon successful completion, you receive certification and potential job opportunities within our 20+ companies!\n\nType "/" for menu or "4" for career info.',
    
    '4': 'Career opportunities await! After certification, you can join:\n\n🌐 AWB Teachers - Website development roles\n📻 African JahVa Radio - Broadcasting positions\n💼 Financial consulting roles\n🎯 Sales and marketing positions\n✈️ Travel industry opportunities\n🤝 Partnership coordination roles\n\nWe have a 90% employment rate for certified graduates! Type "/" for menu.',
    
    '5': 'Contact AWB Academy:\n\n📧 Email: info@awbacademy.com\n📧 Admissions: admissions@awbacademy.com\n📧 Support: support@awbacademy.com\n\n🌍 Headquarters: United Kingdom\n🌍 Training Centers: Uganda & 10 African Countries\n\n💬 You can also use our Help Button for instant support!\n\nType "/" for menu.',
    
    'about': 'AWB Academy was founded by Mr. Angel, a tech entrepreneur and business owner based in the UK. Our mission is to empower motivated African and Caribbean students with modern skills needed to secure jobs and enhance their income through comprehensive training programs across 20+ business divisions.\n\nType "/" for menu or "1" for more details.',
    
    'courses': 'We offer specialized training in Website Building, Financial Literacy, Business Management, Radio Broadcasting, Music Production, Fitness Instruction, and Entrepreneurship. Each course includes hands-on training, certification, and employment opportunities.\n\nType "2" for detailed course list or "/" for menu.',
    
    'help': 'I\'m here to assist you! You can:\n• Ask about our courses\n• Learn about enrollment\n• Discover career opportunities\n• Get contact information\n\nType "/" to see all available commands!',
    
    'hello': 'Hello! Welcome to AWB Academy! I\'m excited to help you explore our training programs and career opportunities. Type "/" to see what I can help you with!',
    
    'hi': 'Hi there! Welcome to AWB Academy! I\'m your AI assistant, ready to guide you through our amazing courses and opportunities. Type "/" for available commands!'
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input
    };

    const inputLower = input.toLowerCase().trim();
    let botResponse = responses[input.trim()] || responses[inputLower];
    
    if (!botResponse) {
      if (inputLower.includes('course')) {
        botResponse = responses['courses'];
      } else if (inputLower.includes('about') || inputLower.includes('awb')) {
        botResponse = responses['about'];
      } else if (inputLower.includes('contact') || inputLower.includes('email')) {
        botResponse = responses['5'];
      } else if (inputLower.includes('career') || inputLower.includes('job')) {
        botResponse = responses['4'];
      } else if (inputLower.includes('enroll') || inputLower.includes('join')) {
        botResponse = responses['3'];
      } else if (inputLower.includes('help')) {
        botResponse = responses['help'];
      } else if (inputLower.includes('hello') || inputLower.includes('hi')) {
        botResponse = responses['hello'];
      } else {
        botResponse = 'I\'m not sure about that. Type "/" to see available commands or try asking about:\n• Courses\n• Enrollment\n• Career opportunities\n• Contact information\n• About AWB Academy';
      }
    }

    const botMessage = {
      id: messages.length + 2,
      type: 'bot',
      content: botResponse
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating AI Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </Button>
      </div>

      {/* AI Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 w-80 max-w-[calc(100vw-2rem)] sm:w-96">
          <Card className="bg-white/95 backdrop-blur-sm border-gray-200 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-semibold">AWB AI Assistant</h3>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm whitespace-pre-line ${
                        message.type === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type / for commands..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Type "/" for commands • "1-5" for quick options
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AIAgent;
