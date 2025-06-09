import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import AIAgent from "@/components/AIAgent";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CourseDashboard from "./components/CourseDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import CourseLoginPage from "./components/CourseLoginPage";
import AWBTeachers from "./pages/companies/AWBTeachers";
import AfricanJahVaRadio from "./pages/companies/AfricanJahVaRadio";
import CoolViralMoves from "./pages/companies/CoolViralMoves";
import LearnFinance from "./pages/companies/LearnFinance";
import ManagementCourse from "./pages/companies/ManagementCourse";
import GBEPartnerships from "./pages/companies/GBEPartnerships";
import AngelTravel from "./pages/companies/AngelTravel";
import GiveToGetFoundation from "./pages/companies/GiveToGetFoundation";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:courseId" element={<CourseDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/legal" element={<Legal />} />
        
        {/* Company pages */}
        <Route path="/companies/awb-teachers" element={<AWBTeachers />} />
        <Route path="/companies/african-jahva-radio" element={<AfricanJahVaRadio />} />
        <Route path="/companies/cool-viral-moves" element={<CoolViralMoves />} />
        <Route path="/companies/learn-finance" element={<LearnFinance />} />
        <Route path="/companies/management-course" element={<ManagementCourse />} />
        <Route path="/companies/gbe-partnerships" element={<GBEPartnerships />} />
        <Route path="/companies/angel-travel" element={<AngelTravel />} />
        <Route path="/companies/give-to-get-foundation" element={<GiveToGetFoundation />} />
        
        {/* Course-specific login pages */}
        <Route path="/awb" element={<CourseLoginPage />} />
        <Route path="/radio" element={<CourseLoginPage />} />
        <Route path="/finance" element={<CourseLoginPage />} />
        <Route path="/management" element={<CourseLoginPage />} />
        <Route path="/fitness" element={<CourseLoginPage />} />
        <Route path="/travel" element={<CourseLoginPage />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AIAgent />
    </>
  );
};

const App = () => {
  useEffect(() => {
    // Initialize demo users for each course
    const existingUsers = localStorage.getItem('users');
    if (!existingUsers) {
      const demoUsers = [
        // AWB Course Users
        {
          id: '1',
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'janedoe@awb.com',
          password: 'student123',
          role: 'student',
          courseId: 'awb',
          enrolledCourses: ['awb'],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        {
          id: '2',
          firstName: 'Admin',
          lastName: 'AWB',
          email: 'admin@awb.com',
          password: 'admin123',
          role: 'admin',
          courseId: 'awb',
          enrolledCourses: [],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        // Radio Course Users
        {
          id: '3',
          firstName: 'Mike',
          lastName: 'Johnson',
          email: 'mikejohnson@radio.com',
          password: 'student123',
          role: 'student',
          courseId: 'radio',
          enrolledCourses: ['radio'],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        {
          id: '4',
          firstName: 'Admin',
          lastName: 'Radio',
          email: 'admin@radio.com',
          password: 'admin123',
          role: 'admin',
          courseId: 'radio',
          enrolledCourses: [],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        // Finance Course Users
        {
          id: '5',
          firstName: 'Sarah',
          lastName: 'Smith',
          email: 'sarahsmith@finance.com',
          password: 'student123',
          role: 'student',
          courseId: 'finance',
          enrolledCourses: ['finance'],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        {
          id: '6',
          firstName: 'Admin',
          lastName: 'Finance',
          email: 'admin@finance.com',
          password: 'admin123',
          role: 'admin',
          courseId: 'finance',
          enrolledCourses: [],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        // Management Course Users
        {
          id: '7',
          firstName: 'David',
          lastName: 'Brown',
          email: 'davidbrown@management.com',
          password: 'student123',
          role: 'student',
          courseId: 'management',
          enrolledCourses: ['management'],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        {
          id: '8',
          firstName: 'Admin',
          lastName: 'Management',
          email: 'admin@management.com',
          password: 'admin123',
          role: 'admin',
          courseId: 'management',
          enrolledCourses: [],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        // Fitness Course Users
        {
          id: '9',
          firstName: 'Emily',
          lastName: 'Davis',
          email: 'emilydavis@fitness.com',
          password: 'student123',
          role: 'student',
          courseId: 'fitness',
          enrolledCourses: ['fitness'],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        {
          id: '10',
          firstName: 'Admin',
          lastName: 'Fitness',
          email: 'admin@fitness.com',
          password: 'admin123',
          role: 'admin',
          courseId: 'fitness',
          enrolledCourses: [],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        // Travel Course Users
        {
          id: '11',
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@travel.com',
          password: 'student123',
          role: 'student',
          courseId: 'travel',
          enrolledCourses: ['travel'],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        },
        {
          id: '12',
          firstName: 'Admin',
          lastName: 'Travel',
          email: 'admin@travel.com',
          password: 'admin123',
          role: 'admin',
          courseId: 'travel',
          enrolledCourses: [],
          completedCourses: [],
          joinedDate: new Date().toISOString(),
          progress: {}
        }
      ];
      localStorage.setItem('users', JSON.stringify(demoUsers));
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
