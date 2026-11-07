import { Gem, Heart, Leaf } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "SLICED. The Last Slice is a sushi kitchen and sushi bar caterer in Pagadian City. Freshly made, perfectly sliced, made for you.",
};

const promises = [
  { label: "Premium Quality", Icon: Gem },
  { label: "Fresh Ingredients", Icon: Leaf },
  { label: "Made with Love", Icon: Heart },
];

export default function AboutPage() {
  return (
    <>
      <section className="shell grid items-center gap-10 py-12 lg:grid-cols-[1fr_1.15fr] lg:py-20 xl:gap-16">
        <div>
          <p className="eyebrow">About SLICED.</p>
          <h1 className="display mt-5 text-4xl md:text-5xl">Freshly made. Perfectly sliced. Made for you.</h1>
          <p className="mt-6 max-w-lg leading-relaxed text-cream/85">
            SLICED. The Last Slice is a sushi kitchen in Pagadian City, making premium sushi for everyday cravings and unforgettable celebrations.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-cream/85">
            Order our rolls and platters for your table at home, or bring the full sushi bar to your next event. Thank you for supporting local.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ActionLink href="/menu" solid>View menu</ActionLink>
            <ActionLink href="/catering">Book catering</ActionLink>
          </div>
        </div>
        <Image src={photos.chefTable.src} alt={photos.chefTable.alt} preload placeholder="blur" sizes="(min-width: 1024px) 55vw, 100vw" className="h-auto w-full border border-line" />
      </section>

      <section className="waves border-y border-line">
        <div className="shell py-14 lg:py-16">
          <p className="eyebrow">Our promise</p>
          <ul className="mt-10 grid gap-10 sm:grid-cols-3">
            {promises.map(({ label, Icon }) => (
              <li key={label} className="flex flex-col items-center gap-4 text-center">
                <Icon aria-hidden size={42} strokeWidth={1} className="text-gold" />
                <span className="font-display text-sm uppercase tracking-[0.2em]">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell grid gap-10 py-14 md:grid-cols-2 md:items-center lg:py-20 xl:gap-16">
        <div>
          <SectionHeading eyebrow="Made with care" title="Every box, every tray">
            <p>From a single box for one craving to a full table for a hundred and fifty guests, every order is made to look as good as it tastes.</p>
          </SectionHeading>
          <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
            <Image src={photos.glovedHands.src} alt={photos.glovedHands.alt} placeholder="blur" sizes="(min-width: 768px) 25vw, 50vw" className="aspect-[4/3] h-auto w-full border border-line object-cover" />
            <Image src={photos.giftBox.src} alt={photos.giftBox.alt} placeholder="blur" sizes="(min-width: 768px) 25vw, 50vw" className="aspect-[4/3] h-auto w-full border border-line object-cover" />
          </div>
        </div>
        <Image src={photos.packagingPoster.src} alt={photos.packagingPoster.alt} placeholder="blur" sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full border border-line" />
      </section>
    </>
  );
}
