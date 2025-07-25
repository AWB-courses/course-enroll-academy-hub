
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { LogIn, Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  courseId?: string;
}

const LoginForm = ({ courseId = 'general' }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password && u.courseId === courseId);

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        toast({
          title: "Welcome to Zylo Academy!",
          description: `Successfully logged in as ${user.firstName} ${user.lastName}`,
        });
        
        if (user.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate(`/dashboard/${courseId}`);
        }
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password for this course. Please try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  // Course-specific demo credentials
  const getDemoCredentials = () => {
    const courseCredentials: { [key: string]: { student: { email: string; password: string }, admin: { email: string; password: string } } } = {
      awb: {
        student: { email: 'janedoe@awb.com', password: 'student123' },
        admin: { email: 'admin@awb.com', password: 'admin123' }
      },
      radio: {
        student: { email: 'mikejohnson@radio.com', password: 'student123' },
        admin: { email: 'admin@radio.com', password: 'admin123' }
      },
      finance: {
        student: { email: 'sarahsmith@finance.com', password: 'student123' },
        admin: { email: 'admin@finance.com', password: 'admin123' }
      },
      management: {
        student: { email: 'davidbrown@management.com', password: 'student123' },
        admin: { email: 'admin@management.com', password: 'admin123' }
      },
      fitness: {
        student: { email: 'emilydavis@fitness.com', password: 'student123' },
        admin: { email: 'admin@fitness.com', password: 'admin123' }
      },
      travel: {
        student: { email: 'johndoe@travel.com', password: 'student123' },
        admin: { email: 'admin@travel.com', password: 'admin123' }
      }
    };

    return courseCredentials[courseId] || courseCredentials.awb;
  };

  const fillDemoCredentials = (role: 'student' | 'admin') => {
    const credentials = getDemoCredentials();
    if (role === 'admin') {
      setEmail(credentials.admin.email);
      setPassword(credentials.admin.password);
    } else {
      setEmail(credentials.student.email);
      setPassword(credentials.student.password);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">Welcome Back</h3>
        <p className="text-gray-600">Sign in to continue your Zylo Academy journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Signing In...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <LogIn size={16} />
              <span>Sign In</span>
            </div>
          )}
        </Button>
      </form>

      {/* Demo Credentials */}
      <div className="border-t pt-4 space-y-2">
        <p className="text-sm text-gray-600 text-center">Try demo accounts for {courseId.toUpperCase()}:</p>
        <div className="flex space-x-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fillDemoCredentials('student')}
            className="flex-1 text-xs"
          >
            Student Demo
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fillDemoCredentials('admin')}
            className="flex-1 text-xs"
          >
            Admin Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
