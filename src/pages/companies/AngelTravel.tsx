
import CompanyPage from '@/components/CompanyPage';

const AngelTravel = () => {
  return (
    <CompanyPage
      companyName="Angel Travel"
      description="Creating exceptional travel experiences and hospitality services. We specialise in luxury travel planning and hotel management."
      image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop"
      services={[
        'Luxury Travel Planning',
        'Hotel Management',
        'Corporate Travel',
        'Event Planning',
        'Hospitality Consulting',
        'Concierge Services'
      ]}
      mission="To create unforgettable travel experiences whilst developing careers in the hospitality and tourism industry."
      achievements={[
        '10,000+ trips planned',
        '50+ hotel partnerships',
        '5-star service rating',
        'Luxury travel awards',
        'Global destination network',
        'VIP client services'
      ]}
    />
  );
};

export default AngelTravel;
