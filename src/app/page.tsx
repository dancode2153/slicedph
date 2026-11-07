import { BriefcaseBusiness, Cake, PartyPopper, Wine } from "lucide-react";
import Image from "next/image";
import { ActionLink, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/images";
import { fourFlavors, platters, regularMenu } from "@/lib/menu";
import { peso } from "@/lib/site";

const priceOf = (id: string) => regularMenu.find((item) => item.id === id)?.price ?? 0;

const priceList = [
  { name: "Tuna Kimbap", price: peso(priceOf("tuna-kimbap")) },
  { name: "California Maki", price: peso(priceOf("california-maki")) },
  { name: "Kani Sushi", price: peso(priceOf("kani-sushi")) },
  { name: "Spam Volcano Gunkan", price: peso(priceOf("spam-volcano-gunkan")) },
  { name: "Baked Sushi", price: peso(priceOf("baked-sushi")) },
  { name: "Platters", price: `from ${peso(platters[0].price)}` },
];

const eventTypes = [
  { label: "Birthdays", Icon: Cake },
  { label: "Events", Icon: Wine },
  { label: "Corporate", Icon: BriefcaseBusiness },
  { label: "Private Parties", Icon: PartyPopper },
];

const fromTheTable = [photos.closeupTable, photos.boatTable, photos.signTable, photos.bakedTable];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="relative aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[64%]">
          <Image
            src={photos.heroRolls.src} alt={photos.heroRolls.alt}
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="fade-bottom object-cover lg:fade-left"
          />
        </div>
        <div className="shell relative pb-14 lg:py-24 xl:py-32">
          <p className="eyebrow">Freshly made. Made with care.</p>
          <h1 className="mt-7 font-display text-[clamp(2.75rem,13vw,4.5rem)] font-medium uppercase leading-none tracking-[0.2em] lg:text-[clamp(4.5rem,7.6vw,7rem)]">
            Sliced.
          </h1>
          <p className="mt-4 font-display text-[clamp(1rem,4.6vw,1.75rem)] uppercase tracking-[0.42em] text-gold">
            The Last Slice.
          </p>
          <p className="mt-7 max-w-sm text-lg leading-relaxed text-cream/90">
            Premium sushi for everyday cravings and unforgettable celebrations.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ActionLink href="/menu" solid>Order sushi</ActionLink>
            <ActionLink href="/catering">Book catering</ActionLink>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="grid border-b border-line lg:grid-cols-[1.15fr_1fr_1fr]">
        <div className="relative aspect-[16/9] lg:aspect-auto">
          <Image
            src={photos.menuRolls.src} alt={photos.menuRolls.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="fade-bottom object-cover lg:fade-right"
          />
        </div>
        <div className="px-5 pb-10 pt-2 md:px-8 lg:py-16 lg:pl-4 xl:pl-8">
          <p className="eyebrow">Our menu</p>
          <h2 className="display mt-5 text-3xl md:text-4xl">A variety<br />of flavors</h2>
          <p className="mt-5 max-w-xs leading-relaxed text-cream/85">
            From classic rolls to signature creations, find your favorite slice.
          </p>
          <ActionLink href="/menu" className="mt-7">View full menu</ActionLink>
        </div>
        <div className="flex items-center px-5 pb-12 md:px-8 lg:py-14 xl:pr-14">
          <ul className="w-full border-line lg:border-l lg:pl-8 xl:pl-10">
            {priceList.map((row) => (
              <li key={row.name} className="flex items-center justify-between gap-4 border-b border-line py-3.5 text-[0.9375rem] last:border-0">
                <span>{row.name}</span>
                <span className="whitespace-nowrap text-cream/90">{row.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Catering */}
      <section className="grid border-b border-line lg:grid-cols-[1fr_auto_1.15fr]">
        <div className="order-2 px-5 pb-8 pt-2 md:px-8 lg:order-none lg:py-14 xl:pl-14">
          <p className="eyebrow">Sushi bar catering</p>
          <h2 className="display mt-5 text-3xl md:text-4xl">Bring the<br />sushi bar<br />to your event</h2>
          <p className="mt-5 max-w-xs leading-relaxed text-cream/85">
            Perfect for birthdays, celebrations, and special occasions.
          </p>
          <ActionLink href="/catering" className="mt-7">Inquire now</ActionLink>
        </div>
        <ul className="order-3 grid grid-cols-2 gap-x-4 gap-y-8 self-center px-5 pb-12 sm:grid-cols-4 md:px-8 lg:order-none lg:grid-cols-2 lg:border-l lg:border-line lg:py-2 xl:px-10">
          {eventTypes.map(({ label, Icon }) => (
            <li key={label} className="flex flex-col items-center gap-3 text-center">
              <Icon aria-hidden size={36} strokeWidth={1} className="text-gold" />
              <span className="font-display text-[0.6875rem] uppercase tracking-[0.16em]">{label}</span>
            </li>
          ))}
        </ul>
        <div className="relative order-1 aspect-[16/9] lg:order-none lg:aspect-auto">
          <Image
            src={photos.cateringRoom.src} alt={photos.cateringRoom.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="fade-bottom object-cover object-right lg:fade-left"
          />
        </div>
      </section>

      {/* Four Flavors platter */}
      <section className="waves border-b border-line">
        <div className="shell grid items-center gap-10 py-14 lg:grid-cols-[1fr_1.6fr] lg:py-20 xl:gap-16">
          <div>
            <SectionHeading eyebrow="Platters" title="Four flavors, one order">
              <p>{fourFlavors.join(", ").replace(/, ([^,]*)$/, " and $1")}.</p>
            </SectionHeading>
            <dl className="mt-7 max-w-sm">
              {platters.map((platter) => (
                <div key={platter.id} className="flex justify-between gap-4 border-b border-line py-3">
                  <dt>{platter.name.replace(" Four Flavors Platter", "")} platter</dt>
                  <dd className="font-display text-lg text-gold">{peso(platter.price)}</dd>
                </div>
              ))}
            </dl>
            <ActionLink href="/menu#platters" solid className="mt-8">Order a platter</ActionLink>
          </div>
          <div className="border border-line">
            <Image
              src={photos.fourBoxes.src} alt={photos.fourBoxes.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Real event photos */}
      <section>
        <div className="shell py-14 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="From our table" title="Good food. Good company. Great memories." />
            <ActionLink href="/gallery">View gallery</ActionLink>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
            {fromTheTable.map((photo) => (
              <li key={photo.src.src} className="group relative aspect-[3/4] overflow-hidden border border-line">
                <Image
                  src={photo.src} alt={photo.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
