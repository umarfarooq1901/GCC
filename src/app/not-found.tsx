import { Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { interestLink } from "@/config/routes";

export default function NotFound() {
  return (
    <section className="bg-navy-radial py-28 sm:py-36">
      <Container className="text-center">
        <Compass className="mx-auto size-14 text-saffron-400" strokeWidth={1.4} />
        <p className="mt-6 font-display text-sm font-bold tracking-[0.2em] text-saffron-400 uppercase">Error 404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">This page took a wrong turn</h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/75">The link may be old or mistyped. Let&apos;s get you back on track.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">Back to home</ButtonLink>
          <ButtonLink href={interestLink("delegate")} variant="outline-light" size="lg" arrow={false}>Register interest</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
