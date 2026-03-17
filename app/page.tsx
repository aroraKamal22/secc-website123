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
  // StatsSection,
  InsuranceLogos,
} from '@/components/home';

export default function Home() {
  return (
    <>
      <HeroSlider />
      {/* <StatsSection /> */}
      <AboutSection />
      <DoctorCards />
      <ServicesGrid />
      <InsuranceLogos />
      <WhyChooseUs />
      <MediaGallery />
      <GoogleReviews />
      <Testimonials />
      <BlogSection />
      <VideoGallery />
      <CTASection />
    </>
  );
}
