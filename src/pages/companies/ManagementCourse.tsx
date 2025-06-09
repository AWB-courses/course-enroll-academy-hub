
import CompanyPage from '@/components/CompanyPage';

const ManagementCourse = () => {
  return (
    <CompanyPage
      companyName="Management Course"
      description="Developing the next generation of leaders through comprehensive management training and business consultancy services."
      image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop"
      services={[
        'Leadership Development',
        'Business Consultancy',
        'Team Training',
        'Strategic Planning',
        'Project Management',
        'Executive Coaching'
      ]}
      mission="To cultivate exceptional leaders who drive positive change in their organisations and communities."
      achievements={[
        '2000+ leaders trained',
        '150+ companies served',
        'Industry recognition',
        'Global training network',
        'Executive partnerships',
        'Leadership excellence awards'
      ]}
    />
  );
};

export default ManagementCourse;
