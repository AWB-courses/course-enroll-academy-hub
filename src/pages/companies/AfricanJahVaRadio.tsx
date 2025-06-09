
import CompanyPage from '@/components/CompanyPage';

const AfricanJahVaRadio = () => {
  return (
    <CompanyPage
      companyName="African JahVa Radio"
      description="Broadcasting authentic African and Caribbean culture to the world. We provide a platform for music, news, and community voices."
      image="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop"
      services={[
        'Live Radio Broadcasting',
        'Podcast Production',
        'Audio Content Creation',
        'Community Programming',
        'Event Coverage',
        'Music Promotion'
      ]}
      mission="To celebrate and preserve African and Caribbean culture through authentic broadcasting whilst creating opportunities for emerging talent."
      achievements={[
        '1M+ monthly listeners',
        '24/7 live broadcasting',
        '50+ regular presenters',
        'Coverage in 25 countries',
        'Community impact awards',
        'Digital streaming platform'
      ]}
    />
  );
};

export default AfricanJahVaRadio;
