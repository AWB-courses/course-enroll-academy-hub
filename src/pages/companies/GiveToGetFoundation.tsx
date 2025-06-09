
import CompanyPage from '@/components/CompanyPage';

const GiveToGetFoundation = () => {
  return (
    <CompanyPage
      companyName="Give to Get Foundation"
      description="A charitable foundation dedicated to empowering communities through education, skills development, and sustainable economic opportunities."
      image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=500&fit=crop"
      services={[
        'Community Development',
        'Educational Scholarships',
        'Skills Training Programmes',
        'Microfinance Support',
        'Youth Mentorship',
        'Social Impact Projects'
      ]}
      mission="To break the cycle of poverty through education, training, and sustainable economic empowerment programmes."
      achievements={[
        '5,000+ lives impacted',
        '200+ scholarships awarded',
        '50+ community projects',
        'Sustainable livelihoods created',
        'International recognition',
        'Partnership with global NGOs'
      ]}
    />
  );
};

export default GiveToGetFoundation;
