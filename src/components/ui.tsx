import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Photo } from "@/lib/images";

export function Logo({ large = false }: { large?: boolean }) {
  return (
    <span className="inline-flex flex-col items-center font-display uppercase">
      <span
        className={`font-medium leading-none tracking-[0.26em] ${large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}
      >
        Sliced.
      </span>
      <span
        className={`mt-1.5 tracking-[0.42em] text-gold ${large ? "text-xs" : "text-[0.5625rem]"}`}
      >
        The Last Slice.
      </span>
    </span>
  );
}

export function ActionLink({
  href,
  children,
  solid = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  solid?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`btn ${solid ? "btn-solid" : "btn-outline"} ${className}`}
    >
      {children}
      <ArrowRight aria-hidden size={16} strokeWidth={1.5} />
    </Link>
  );
}

export function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.23 2.68.23v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
    </svg>
  );
}

/** Inner-page banner: headline on the left, photo melting in from the right. */
export function PageHero({
  eyebrow,
  title,
  children,
  photo,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  photo: Photo;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="relative aspect-[16/9] md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[62%]">
        <Image
          src={photo.src} alt={photo.alt}
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 768px) 62vw, 100vw"
          className="fade-bottom object-cover md:fade-left"
        />
      </div>
      <div className="shell relative pb-12 pt-4 md:py-24 xl:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-6 max-w-xl text-4xl md:text-5xl xl:text-6xl">{title}</h1>
        {children && (
          <div className="mt-5 max-w-md leading-relaxed text-cream/85">{children}</div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-5 text-3xl md:text-4xl">{title}</h2>
      {children && <div className="mt-4 leading-relaxed text-muted">{children}</div>}
    </header>
  );
}
