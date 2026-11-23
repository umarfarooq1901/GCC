import { MessageCircleQuestion } from "lucide-react";
import { FAQ } from "@/content/home";
import { interestLink } from "@/config/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-44 lg:self-start">
          <SectionHeading eyebrow="FAQs" title={<span id="faq-title">Frequently asked questions</span>} />
          <Reveal delay={0.1} className="mt-8 rounded-3xl bg-mist p-7">
            <MessageCircleQuestion className="size-8 text-azure" strokeWidth={1.6} />
            <p className="mt-4 font-display text-lg font-bold text-navy">Still have a question?</p>
            <p className="mt-2 text-body">Drop us your details and we&apos;ll get back to you personally.</p>
            <ButtonLink href={interestLink("delegate")} variant="navy" arrow className="mt-5">
              Ask our team
            </ButtonLink>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Accordion items={FAQ} />
        </Reveal>
      </Container>
    </section>
  );
}
