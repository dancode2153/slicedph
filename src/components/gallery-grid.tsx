"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Photo } from "@/lib/images";

export function GalleryGrid({ items }: { items: Photo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Photo | null>(null);

  function open(photo: Photo) {
    setActive(photo);
    dialog.current?.showModal();
  }

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((photo) => (
          <li key={photo.src.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => open(photo)}
              aria-label={`View larger: ${photo.alt}`}
              className="group block w-full cursor-zoom-in overflow-hidden border border-line"
            >
              <Image
                src={photo.src} alt={photo.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close();
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-4 backdrop:bg-black/90"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => dialog.current?.close()}
          className="fixed right-4 top-4 z-10 flex size-11 items-center justify-center bg-ink text-cream hover:text-gold"
        >
          <X aria-hidden size={24} />
        </button>
        {active && (
          <Image
            src={active.src} alt={active.alt}
            sizes="100vw"
            className="h-auto max-h-[90vh] w-auto max-w-[92vw] object-contain"
          />
        )}
      </dialog>
    </>
  );
}
