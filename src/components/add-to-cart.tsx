"use client";

import { Check, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { addToCart } from "@/lib/cart";
import type { MenuItem } from "@/lib/menu";

export function AddToCart({ item }: { item: MenuItem }) {
  const [option, setOption] = useState(item.options?.[0]);
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  function add() {
    addToCart(option ? `${item.id}:${option}` : item.id);
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="flex flex-col gap-3">
      {item.options && (
        <fieldset className="grid grid-cols-2 gap-2">
          <legend className="sr-only">{item.name} option</legend>
          {item.options.map((choice) => (
            <label
              key={choice}
              className={`flex min-h-10 cursor-pointer items-center justify-center border px-2 text-center font-display text-[0.6875rem] uppercase tracking-[0.14em] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold-bright ${option === choice ? "border-gold text-gold" : "border-line text-muted hover:border-gold/60"}`}
            >
              <input
                type="radio"
                name={`${item.id}-option`}
                className="sr-only"
                checked={option === choice}
                onChange={() => setOption(choice)}
              />
              {choice}
            </label>
          ))}
        </fieldset>
      )}
      <button type="button" onClick={add} className="btn btn-outline w-full">
        {added ? <Check aria-hidden size={16} /> : <Plus aria-hidden size={16} />}
        <span aria-live="polite">{added ? "Added" : "Add to order"}</span>
      </button>
    </div>
  );
}
