import Hero from './Hero';
import TrustBar from './TrustBar';
import ServicesGrid from './ServicesGrid';
import AboutSnapshot from './AboutSnapshot';
import DoctorsHighlight from './DoctorsHighlight';
import FacilitiesHighlight from './FacilitiesHighlight';
import PatientTestimonials from './PatientTestimonials';
import InsurancePanels from './InsurancePanels';
import HealthCampsBanner from './HealthCampsBanner';
import FAQPreview from './FAQPreview';
import StickyFooterBar from './StickyFooterBar';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AboutSnapshot />
      <DoctorsHighlight />
      <FacilitiesHighlight />
      <PatientTestimonials />
      <InsurancePanels />
      <FAQPreview />
      <StickyFooterBar />
    </div>
  );
}