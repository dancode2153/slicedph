import { Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { CateringPlanner } from "@/components/catering-planner";
import { ActionLink, PageHero, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/images";
import { eventSelections, occasions } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Sushi Bar Catering",
  description:
    "Bring the SLICED. sushi bar to your event in Pagadian City. Packages for up to 150 guests, from birthdays and weddings to corporate events.",
};

export default function CateringPage() {
  return (
    <>
      <PageHero eyebrow="Sushi bar catering" title="Bring the sushi bar to your event" photo={photos.cateringRoom}>
        <p>Premium sushi. Curated selections. Beautifully served.</p>
        <ActionLink href="#inquire" solid className="mt-7">Inquire now</ActionLink>
      </PageHero>

      <section className="shell py-14 lg:py-20">
        <SectionHeading eyebrow="Event packages" title="Choose your spread">
          <p>Every package is built around your choice of selections from the SLICED. event menu.</p>
        </SectionHeading>
        <CateringPlanner />
      </section>

      <section className="border-t border-line">
        <div className="shell grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20 xl:gap-16">
          <div>
            <SectionHeading eyebrow="Event menu" title="The selections" />
            <ol className="mt-7">
              {eventSelections.map((selection, index) => (
                <li key={selection} className="flex items-center gap-4 border-b border-line py-3.5">
                  <span aria-hidden className="flex size-8 flex-none items-center justify-center rounded-full bg-gold font-display text-sm font-semibold text-ink">{index + 1}</span>
                  {selection}
                </li>
              ))}
            </ol>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <Image src={photos.mangoNoirKatsu.src} alt={photos.mangoNoirKatsu.alt} placeholder="blur" sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[4/5] h-auto w-full border border-line object-cover" />
            <Image src={photos.crumbedLemon.src} alt={photos.crumbedLemon.alt} placeholder="blur" sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[4/5] h-auto w-full border border-line object-cover" />
          </div>
        </div>
      </section>

      <section className="waves border-t border-line">
        <div className="shell grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20 xl:gap-16">
          <Image src={photos.buffetTable.src} alt={photos.buffetTable.alt} placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full border border-line" />
          <div>
            <SectionHeading eyebrow="Custom catering" title="Made especially for you">
              <p>We offer customized sushi bar catering packages tailored to your event, guest count, and preferred menu selections. Tell us your needs and we&apos;ll create a SLICED. package made especially for you.</p>
            </SectionHeading>
            <h3 className="mt-8 font-display text-sm font-medium uppercase tracking-[0.2em] text-gold">Perfect for</h3>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {occasions.map((occasion) => (
                <li key={occasion} className="flex items-center gap-3">
                  <Check aria-hidden size={17} className="flex-none text-gold" />
                  {occasion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
