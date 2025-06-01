
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Web Developer",
      company: "Graduated from AWB Teachers",
      content: "AWB Academy completely transformed my career. The website building course was comprehensive and practical. Now I'm working as a certified web developer for one of their partner companies!",
      rating: 5,
      image: "https://africanwebsitebuilders.com/elements/images/uploads/9/6757022a7146d_A-Biz2-h.png"
    },
    {
      name: "Michael Kwame",
      role: "Financial Analyst",
      company: "Learn Finance Graduate",
      content: "The financial literacy course gave me the confidence to manage my personal finances and even start my own consulting business. The instructors were amazing and the content was world-class.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Aisha Okonkwo",
      role: "Business Manager",
      company: "Management Course Alumni",
      content: "Thanks to AWB's business management course, I was able to scale my startup from idea to profitable business. The time management and leadership skills I learned were invaluable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Radio Host",
      company: "African JahVa Radio",
      content: "The radio and media training at AWB opened doors I never imagined. I'm now hosting my own show on African JahVa Radio and connecting with audiences across Africa!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-r from-indigo-50 to-purple-50 scroll-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who have transformed their careers and lives through AWB Academy's comprehensive training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic text-sm">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-indigo-600">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
