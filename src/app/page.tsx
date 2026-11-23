import { Hero } from "@/components/sections/home/hero";
import { AboutIntro } from "@/components/sections/home/about-intro";
import { ShiftSection } from "@/components/sections/home/shift-section";
import { Highlights } from "@/components/sections/home/highlights";
import { Speakers } from "@/components/sections/home/speakers";
import { FocusSectors } from "@/components/sections/home/focus-sectors";
import { Audience } from "@/components/sections/home/audience";
import { WhyBengaluru } from "@/components/sections/home/why-bengaluru";
import { PartnerWithUs } from "@/components/sections/home/partner-with-us";
import { Faq } from "@/components/sections/home/faq";
import { RegisterInterest } from "@/components/sections/home/register-interest";
import { EventJsonLd } from "@/components/shared/event-json-ld";

export default function HomePage() {
  return (
    <>
      <EventJsonLd />
      <Hero />
      <AboutIntro />
      <ShiftSection />
      <Highlights />
      <Speakers />
      <FocusSectors />
      <Audience />
      <WhyBengaluru />
      <PartnerWithUs />
      <Faq />
      <RegisterInterest />
    </>
  );
}
