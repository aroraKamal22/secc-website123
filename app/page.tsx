import {
  HeroSlider,
  AboutSection,
  DoctorCards,
  ServicesGrid,
  MediaGallery,
  WhyChooseUs,
  GoogleReviews,
  Testimonials,
  VideoGallery,
  BlogSection,
  CTASection,
} from '@/components/home';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <DoctorCards />
      <ServicesGrid />
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
