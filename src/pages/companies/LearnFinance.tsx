
import CompanyPage from '@/components/CompanyPage';

const LearnFinance = () => {
  return (
    <CompanyPage
      companyName="Learn Finance"
      description="Empowering individuals and businesses with financial literacy and accounting expertise. We make finance accessible and understandable for everyone."
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop"
      services={[
        'Financial Consulting',
        'Bookkeeping Services',
        'Tax Preparation',
        'Investment Advice',
        'Business Finance Planning',
        'Personal Budgeting'
      ]}
      mission="To democratise financial knowledge and create pathways to financial independence for our community."
      achievements={[
        '5000+ clients served',
        '£50M+ in savings generated',
        'Certified financial advisors',
        'Award-winning service',
        'Community workshops',
        '99% client retention'
      ]}
    />
  );
};

export default LearnFinance;
