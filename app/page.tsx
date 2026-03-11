import {
  HeroSlider,
  AboutSection,
  ServicesGrid,
  DoctorCards,
  WhyChooseUs,
  Testimonials,
  CTASection,
} from '@/components/home';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <DoctorCards />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
