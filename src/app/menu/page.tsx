import { Bike, ExternalLink, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { AddToCart } from "@/components/add-to-cart";
import { PageHero, SectionHeading } from "@/components/ui";
import { photos } from "@/lib/images";
import { fourFlavors, platters, regularMenu, seaweed } from "@/lib/menu";
import { peso, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "SLICED. menu and prices: Baked Sushi, Spam Volcano Gunkan, California Maki, Kani Sushi, Tuna Kimbap and Four Flavors platters.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero eyebrow="Our menu" title="A variety of flavors" photo={photos.rollPlate}>
        <p>Fresh ingredients. Bold flavors. Made with love. Build your order, then send it to us on Facebook.</p>
      </PageHero>

      <section className="shell py-14 lg:py-20">
        <SectionHeading eyebrow="Regular menu" title="Find your favorite slice" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {regularMenu.map((item) => (
            <li key={item.id} className="group flex flex-col border border-line bg-panel">
              {item.photo && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.photo.src} alt={item.photo.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl leading-snug">{item.name}</h3>
                <div className="mb-5 mt-2 flex items-baseline justify-between gap-3">
                  <p className="text-sm text-muted">{item.portion}</p>
                  <p className="font-display text-2xl text-gold">{peso(item.price)}</p>
                </div>
                <div className="mt-auto">
                  <AddToCart item={item} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="platters" className="waves border-y border-line">
        <div className="shell grid items-center gap-10 py-14 lg:grid-cols-[1.35fr_1fr] lg:py-20 xl:gap-16">
          <div className="border border-line">
            <Image src={photos.fourBoxes.src} alt={photos.fourBoxes.alt} placeholder="blur" sizes="(min-width: 1024px) 55vw, 100vw" className="h-auto w-full" />
          </div>
          <div>
            <SectionHeading eyebrow="Platters" title="Four flavors platter">
              <p>Includes {fourFlavors.join(", ").replace(/, ([^,]*)$/, " and $1")}.</p>
            </SectionHeading>
            <ul className="mt-7 space-y-5">
              {platters.map((platter) => (
                <li key={platter.id} className="border-t border-line pt-5">
                  <div className="mb-3 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg">{platter.name}</h3>
                    <p className="font-display text-2xl text-gold">{peso(platter.price)}</p>
                  </div>
                  <AddToCart item={platter} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell grid gap-5 py-14 md:grid-cols-2 lg:py-20">
        <div className="border border-line bg-panel p-6 md:p-8">
          <h2 className="display text-2xl">Add-ons</h2>
          <div className="mt-5 flex items-baseline justify-between gap-4">
            <p>Seaweed Sheet <span className="block text-sm text-muted">1 free pack with every Baked Sushi order</span></p>
            <p className="font-display text-lg text-gold">FREE</p>
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-4">
            <p>{seaweed.name}</p>
            <p className="whitespace-nowrap font-display text-lg text-gold">{peso(seaweed.price)} per pack</p>
          </div>
          <div className="mt-4">
            <AddToCart item={seaweed} />
          </div>
        </div>
        <div className="border border-line bg-panel p-6 md:p-8">
          <h2 className="display text-2xl">Delivery &amp; pickup</h2>
          <div className="mt-5 flex gap-4">
            <Bike aria-hidden size={28} strokeWidth={1.25} className="flex-none text-gold" />
            <p>Delivery within Pagadian City: <span className="font-display text-lg text-gold">{peso(site.deliveryFee)}</span><span className="block text-sm text-muted">via Boknoy Riders</span></p>
          </div>
          <div className="mt-4 flex gap-4 border-t border-line pt-4">
            <ShoppingBag aria-hidden size={28} strokeWidth={1.25} className="flex-none text-gold" />
            <p>Pickup: <span className="font-display text-lg text-gold">FREE</span></p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell grid items-center gap-10 py-14 md:grid-cols-[minmax(0,22rem)_1fr] lg:py-20 xl:gap-16">
          <Image src={photos.peanuts.src} alt={photos.peanuts.alt} sizes="(min-width: 768px) 22rem, 100vw" className="h-auto w-full max-w-sm border border-line" />
          <div>
            <SectionHeading eyebrow="Also from SLICED." title="Aromatic peanuts">
              <p>Crunchy, flavorful and addictive. Carefully roasted peanuts seasoned with aromatic herbs and bold spices. Message us on Facebook to ask about availability.</p>
            </SectionHeading>
            <a href={photos.menuPoster.src.src} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-8">
              See the full menu poster
              <ExternalLink aria-hidden size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
