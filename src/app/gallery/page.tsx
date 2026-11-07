import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { gallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Sushi bar tables, boxed sets and rolls from SLICED. in Pagadian City.",
};

export default function GalleryPage() {
  return (
    <div className="shell py-12 lg:py-16">
      <p className="eyebrow">Gallery</p>
      <h1 className="display mt-5 text-4xl md:text-5xl">Good food. Good company. Great memories.</h1>
      <div className="mt-10">
        <GalleryGrid items={gallery} />
      </div>
    </div>
  );
}
