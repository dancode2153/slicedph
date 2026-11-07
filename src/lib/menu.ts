import { photos, type Photo } from "@/lib/images";

/** All prices and packages come from the SLICED. menu poster. */
export type MenuItem = {
  id: string;
  name: string;
  portion?: string;
  price: number;
  photo?: Photo;
  options?: string[];
};

export const regularMenu: MenuItem[] = [
  { id: "baked-sushi", name: "Baked Sushi", portion: "8 slices", price: 280, photo: photos.rollLantern, options: ["Spicy", "Not Spicy"] },
  { id: "spam-volcano-gunkan", name: "Spam Volcano Gunkan", portion: "5 pieces", price: 210, photo: photos.spamGunkan },
  { id: "california-maki", name: "California Maki", portion: "8 slices", price: 220, photo: photos.californiaMaki },
  { id: "kani-sushi", name: "Kani Sushi", portion: "6 pieces", price: 198, photo: photos.kaniCloseup },
  { id: "tuna-kimbap", name: "Tuna Kimbap", portion: "1 roll", price: 200, photo: photos.kimbapCloseup },
];

export const platters: MenuItem[] = [
  { id: "half-four-flavors", name: "Half Four Flavors Platter", price: 875 },
  { id: "whole-four-flavors", name: "Whole Four Flavors Platter", price: 1750 },
];

export const fourFlavors = ["Kani", "Tuna Kimbap", "California Maki", "Spam Volcano Gunkan"];

export const seaweed: MenuItem = {
  id: "additional-seaweed",
  name: "Additional Seaweed Sheet",
  portion: "per pack",
  price: 40,
};

export const allItems = [...regularMenu, ...platters, seaweed];

export type CateringPackage = {
  id: string;
  name: string;
  guests: number;
  price: number;
  selections: number;
  addOn: number;
  popular?: boolean;
  includes: string[];
};

export const cateringPackages: CateringPackage[] = [
  { id: "intimate", name: "Intimate", guests: 30, price: 7000, selections: 3, addOn: 500, includes: ["Sushi bar display", "Serving trays & presentation", "Sauces and garnishes", "Basic setup"] },
  { id: "celebration", name: "Celebration", guests: 40, price: 8000, selections: 4, addOn: 450, includes: ["Sushi bar display", "Serving trays & presentation", "Sauces and garnishes", "Styled setup"] },
  { id: "essential", name: "Essential", guests: 60, price: 10000, selections: 5, addOn: 400, includes: ["Sushi bar display", "Premium presentation", "Sauces and garnishes", "Styled buffet arrangement"] },
  { id: "premium", name: "Premium", guests: 100, price: 15000, selections: 6, addOn: 350, popular: true, includes: ["Premium sushi bar display", "Elevated presentation", "Serving trays", "Sauces and garnishes", "Styled buffet arrangement", "On-site setup"] },
  { id: "grand", name: "Grand", guests: 150, price: 20000, selections: 7, addOn: 300, includes: ["Grand sushi bar presentation", "Premium display & serving setup", "Sauces and garnishes", "Styled buffet arrangement", "On-site setup"] },
];

export const eventSelections = [
  "California Maki",
  "Mango Noir Katsu",
  "Spam Volcano Gunkan",
  "Tuna Kimbap",
  "Kaniva Sushi",
];

export const occasions = [
  "Birthdays",
  "Weddings",
  "Debuts",
  "Anniversaries",
  "Corporate Events",
  "Private Celebrations",
  "Family Gatherings",
  "Special Occasions",
];
