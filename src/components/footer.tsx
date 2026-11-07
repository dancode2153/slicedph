import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, Logo } from "@/components/ui";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell grid items-center gap-8 py-10 text-center lg:grid-cols-[auto_1fr_auto] lg:gap-10 lg:text-left">
        <Link href="/" aria-label="SLICED. home" className="justify-self-center lg:border-r lg:border-line lg:pr-10">
          <Logo large />
        </Link>
        <div className="flex flex-col items-center gap-5 lg:items-start xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-gold">Stay updated</p>
            <p className="mt-1.5 text-sm text-cream/85">Get the latest menu, promos, and events.</p>
          </div>
          <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-solid whitespace-nowrap">
            <FacebookIcon size={16} />
            Follow on Facebook
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 lg:border-l lg:border-line lg:pl-10">
          <p className="font-display text-xs uppercase tracking-[0.24em]">Follow us</p>
          <div className="flex gap-5">
            {site.instagramUrl && (
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="SLICED. on Instagram" className="flex size-11 items-center justify-center transition-colors hover:text-gold">
                <InstagramIcon size={24} />
              </a>
            )}
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="SLICED. on Facebook" className="flex size-11 items-center justify-center transition-colors hover:text-gold">
              <FacebookIcon size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell grid items-center gap-4 py-6 text-center text-sm md:grid-cols-2 md:text-left xl:grid-cols-[auto_auto_1fr_auto] xl:gap-10">
          <p className="flex items-center justify-center gap-3 md:justify-start">
            <MapPin aria-hidden size={18} className="text-gold" />
            {site.location}
          </p>
          {site.phone ? (
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-3 hover:text-gold md:justify-start">
              <Phone aria-hidden size={18} className="text-gold" />
              {site.phone}
            </a>
          ) : (
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 hover:text-gold md:justify-start">
              <MessageCircle aria-hidden size={18} className="text-gold" />
              Message SLICED. on Facebook
            </a>
          )}
          <p className="font-display text-xs uppercase tracking-[0.34em] text-gold xl:text-center">
            Freshly made. Made with care.
          </p>
          <p className="flex justify-center gap-5 text-cream/85 md:justify-start xl:justify-end">
            <Link href="/about" className="hover:text-gold">About</Link>
            <Link href="/contact" className="hover:text-gold">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
