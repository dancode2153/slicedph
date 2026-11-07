"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FacebookIcon, InstagramIcon, Logo } from "@/components/ui";
import { useCart } from "@/lib/cart";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const cart = useCart();
  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/95 backdrop-blur">
      <div className="shell flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        <Link href="/" aria-label="SLICED. The Last Slice, home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 min-[1180px]:flex 2xl:gap-9">
          {nav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b py-2 font-display text-[0.6875rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold ${active ? "border-gold text-gold" : "border-transparent"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 md:gap-5">
          {site.instagramUrl && (
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hidden transition-colors hover:text-gold sm:block">
              <InstagramIcon size={18} />
            </a>
          )}
          <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hidden transition-colors hover:text-gold sm:block">
            <FacebookIcon size={18} />
          </a>
          <span aria-hidden className="hidden h-7 w-px bg-line sm:block" />
          <Link
            href="/order"
            aria-label={`Your order, ${count} ${count === 1 ? "item" : "items"}`}
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center gap-2 text-gold transition-colors hover:text-gold-bright"
          >
            <ShoppingCart aria-hidden size={22} strokeWidth={1.5} />
            <span className="font-display text-sm tabular-nums text-cream">{count}</span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex size-11 items-center justify-center min-[1180px]:hidden"
          >
            {open ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line bg-ink min-[1180px]:hidden">
          <ul className="shell py-3">
            {nav.map((link) => (
              <li key={link.href} className="border-b border-line/60 last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`block py-4 font-display text-sm uppercase tracking-[0.2em] ${pathname === link.href ? "text-gold" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
