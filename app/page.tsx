import {
  HeroSlider,
  AboutSection,
  DoctorCards,
  ServicesGrid,
  MediaGallery,
  WhyChooseUs,
  GoogleReviews,
  // HospitalShowcase,
  Testimonials,
  VideoGallery,
  BlogSection,
  CTASection,
  StatsSection,
  InsuranceLogos,
} from '@/components/home';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      {/* <HospitalShowcase /> */}
      <AboutSection />
      <DoctorCards />
      <ServicesGrid />
      <InsuranceLogos />
      <MediaGallery />
      <WhyChooseUs />
      <GoogleReviews />
      <Testimonials />
      <VideoGallery />
      <BlogSection />
      <CTASection />
    </>
  );
}
