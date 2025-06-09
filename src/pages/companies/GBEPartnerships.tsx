
import CompanyPage from '@/components/CompanyPage';

const GBEPartnerships = () => {
  return (
    <CompanyPage
      companyName="GBE Partnerships"
      description="Building strategic partnerships that drive business growth and community development across diverse industries and sectors."
      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop"
      services={[
        'Strategic Partnerships',
        'Business Development',
        'Market Entry Support',
        'Joint Ventures',
        'Investment Facilitation',
        'Growth Consulting'
      ]}
      mission="To create meaningful partnerships that foster economic growth and sustainable development in our communities."
      achievements={[
        '300+ partnerships facilitated',
        '£100M+ in deals closed',
        'Multi-sector expertise',
        'International reach',
        'Sustainable impact focus',
        'Award-winning partnerships'
      ]}
    />
  );
};

export default GBEPartnerships;
