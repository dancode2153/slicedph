/**
 * Business details used across the site. Edit them here and every page updates.
 *
 * STILL TO CONFIRM:
 * - facebookUrl: replace this search link with the real Facebook page URL.
 * - instagramUrl: add it to show the Instagram icon.
 * - phone: add it to show the number. The reference mockup and the photographed
 *   signs disagree, so no number is published until it is confirmed.
 */
type Site = {
  location: string;
  facebookUrl: string;
  instagramUrl: string | null;
  phone: string | null;
  deliveryFee: number;
};

export const site: Site = {
  location: "Pagadian City, Zamboanga del Sur",
  facebookUrl:
    "https://www.facebook.com/search/top?q=SLICED.%20The%20Last%20Slice",
  instagramUrl: null,
  phone: null,
  deliveryFee: 60,
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order Online" },
  { href: "/catering", label: "Sushi Bar Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const peso = (amount: number) => `₱${amount.toLocaleString("en-PH")}`;
