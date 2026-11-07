import { Bike, MapPin, MessageCircle, Phone, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import { FacebookIcon, PageHero } from "@/components/ui";
import { photos } from "@/lib/images";
import { peso, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message SLICED. on Facebook for orders and reservations. Delivery within Pagadian City, free pickup.",
};

export default function ContactPage() {
  const cards = [
    { Icon: MessageCircle, title: "Orders & reservations", body: "Message SLICED. on Facebook." },
    { Icon: MapPin, title: "Location", body: site.location },
    { Icon: Bike, title: "Delivery", body: `${peso(site.deliveryFee)} within Pagadian City, via Boknoy Riders` },
    { Icon: ShoppingBag, title: "Pickup", body: "Free. Message us to arrange your pickup." },
    ...(site.phone ? [{ Icon: Phone, title: "Phone", body: site.phone }] : []),
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's get you a slice" photo={photos.chopsticksRoll}>
        <p>For orders and reservations, the fastest way to reach us is on Facebook.</p>
        <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-solid mt-7">
          <FacebookIcon size={16} />
          Message on Facebook
        </a>
      </PageHero>

      <section className="shell py-14 lg:py-20">
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ Icon, title, body }) => (
            <li key={title} className="border border-line bg-panel p-6">
              <Icon aria-hidden size={28} strokeWidth={1.25} className="text-gold" />
              <h2 className="mt-4 font-display text-sm font-medium uppercase tracking-[0.2em]">{title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
