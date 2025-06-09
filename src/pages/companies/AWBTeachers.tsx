
import CompanyPage from '@/components/CompanyPage';

const AWBTeachers = () => {
  return (
    <CompanyPage
      companyName="AWB Teachers"
      description="Leading the way in professional website development and digital solutions. We specialise in creating modern, responsive websites that drive business growth."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
      services={[
        'Custom Website Development',
        'E-commerce Solutions',
        'Mobile-Responsive Design',
        'SEO Optimisation',
        'Website Maintenance',
        'Digital Consulting'
      ]}
      mission="To empower businesses with cutting-edge web solutions whilst providing meaningful employment opportunities for our certified developers."
      achievements={[
        'Over 500 websites delivered',
        '98% client satisfaction rate',
        '200+ trained developers',
        'Serving clients across 15 countries',
        'Award-winning design team',
        '24/7 support service'
      ]}
    />
  );
};

export default AWBTeachers;
