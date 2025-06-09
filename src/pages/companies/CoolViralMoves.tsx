
import CompanyPage from '@/components/CompanyPage';

const CoolViralMoves = () => {
  return (
    <CompanyPage
      companyName="Cool Viral Moves"
      description="Creating viral content and memorable dance experiences. We specialise in social media content creation and dance instruction."
      image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop"
      services={[
        'Viral Content Creation',
        'Dance Instruction',
        'Social Media Management',
        'Brand Collaborations',
        'Event Choreography',
        'Online Classes'
      ]}
      mission="To spread joy and creativity through dance whilst building successful careers for content creators and instructors."
      achievements={[
        '100M+ views generated',
        '500+ viral videos created',
        '10K+ students taught',
        'Brand partnerships worldwide',
        'Award-winning choreography',
        'Global dance community'
      ]}
    />
  );
};

export default CoolViralMoves;
