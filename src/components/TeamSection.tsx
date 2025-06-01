
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Mr Angel",
      role: "FOUNDER",
      description: "Tech entrepreneur, business owner, and record producer based in the UK, Mr. Angel founded the AWB Course to empower motivated African and Caribbean students with the modern skills needed to secure jobs and enhance their income.",
      image: "https://africanwebsitebuilders.com/elements/images/uploads/9/6756fe630aee4_796559053204674862-copy.png"
    },
    {
      name: "Mr Zion",
      role: "C.E.O",
      description: "Entrepreneur, digital nomad & professional street skater, instructor, and based in the UK, Mr. Zion takes the lead of AWB by training teachers & managing staff within the program, developing tutorials & driving AWB expansion.",
      image: "https://africanwebsitebuilders.com/elements/images/uploads/9/66f9ec46e4e7d_03c85133a448489db2a2f9a856f24623.jpg"
    },
    {
      name: "Mr Brown",
      role: "SALES MENTOR",
      description: "Professional sales coach Mr. Brown, boasts 15 years of extensive experience in sales. Throughout his career, he has successfully generated millions of dollars in revenue for a variety of well-known companies across the U.S.",
      image: "https://africanwebsitebuilders.com/elements/images/uploads/2/66fbfc59e57d9_redzen_s_cinematic_realistic_photo_Canon_shot_of_a_Caribbean__e2716a77-c92b-421c-bf2b-13ca9801759a_2-(3).jpg?0.3047133218949525"
    }
  ];

  return (
    <section className="py-20 scroll-animate">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our experienced leaders are dedicated to empowering students with the skills and knowledge needed for success in the modern economy.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-100 group-hover:border-indigo-300 transition-colors duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <div className="text-sm font-semibold text-indigo-600 mb-4 uppercase tracking-wide">{member.role}</div>
              <p className="text-gray-600 leading-relaxed">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
