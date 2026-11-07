"use client";

import { Bike, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FacebookHandoff } from "@/components/facebook-handoff";
import { ActionLink } from "@/components/ui";
import { cartLines, clearCart, setQuantity, useCart } from "@/lib/cart";
import { buildOrderMessage, freeSeaweedPacks, orderTotals, type OrderDetails } from "@/lib/order";
import { peso, site } from "@/lib/site";

export function OrderForm() {
  const lines = cartLines(useCart());
  const [details, setDetails] = useState<OrderDetails>({
    name: "",
    mobile: "",
    mode: "delivery",
    address: "",
    when: "",
    notes: "",
  });

  const update = (patch: Partial<OrderDetails>) => setDetails({ ...details, ...patch });

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-md py-10 text-center">
        <ShoppingBag aria-hidden size={40} strokeWidth={1} className="mx-auto text-gold" />
        <h2 className="display mt-6 text-2xl">Your order is empty</h2>
        <p className="mt-3 text-muted">Add a few favorites from the menu and they&apos;ll appear here.</p>
        <ActionLink href="/menu" solid className="mt-7">View menu</ActionLink>
      </div>
    );
  }

  const { subtotal, delivery, total } = orderTotals(lines, details.mode);
  const free = freeSeaweedPacks(lines);
  const missing = [
    ...(details.name.trim() ? [] : ["your name"]),
    ...(details.mobile.trim() ? [] : ["mobile number"]),
    ...(details.mode === "delivery" && !details.address.trim() ? ["delivery address"] : []),
  ];

  return (
    <div className="grid items-start gap-12 lg:grid-cols-[1fr_24rem] xl:grid-cols-[1fr_27rem] xl:gap-16">
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="display text-2xl">Your order</h2>
          <button type="button" onClick={clearCart} className="flex min-h-11 items-center gap-2 text-sm text-muted hover:text-gold">
            <Trash2 aria-hidden size={15} />
            Clear
          </button>
        </div>

        <ul className="mt-3 border-t border-line">
          {lines.map((line) => (
            <li key={line.id} className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-line py-4">
              <div className="min-w-full flex-1 sm:min-w-44">
                <p className="font-medium">{line.item.name}</p>
                <p className="text-sm text-muted">
                  {[line.option, line.item.portion, peso(line.item.price)].filter(Boolean).join(" · ")}
                </p>
              </div>
              <div className="flex items-center border border-line">
                <button type="button" aria-label={`One less ${line.item.name}`} onClick={() => setQuantity(line.id, line.qty - 1)} className="flex size-10 items-center justify-center hover:text-gold">
                  <Minus aria-hidden size={15} />
                </button>
                <span className="w-8 text-center tabular-nums">{line.qty}</span>
                <button type="button" aria-label={`One more ${line.item.name}`} onClick={() => setQuantity(line.id, line.qty + 1)} className="flex size-10 items-center justify-center hover:text-gold">
                  <Plus aria-hidden size={15} />
                </button>
              </div>
              <p className="ml-auto w-20 text-right font-medium tabular-nums text-gold sm:ml-0">{peso(line.total)}</p>
            </li>
          ))}
          {free > 0 && (
            <li className="flex items-center justify-between gap-5 border-b border-line py-4 text-sm">
              <p>{free} x Seaweed Sheet <span className="text-muted">(free with Baked Sushi)</span></p>
              <p className="font-medium text-gold">FREE</p>
            </li>
          )}
        </ul>
        <Link href="/menu" className="mt-4 inline-block text-sm text-gold underline-offset-4 hover:underline">
          Add more from the menu
        </Link>

        <fieldset className="mt-10">
          <legend className="display text-2xl">Delivery or pickup</legend>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(
              [
                { mode: "delivery", Icon: Bike, title: "Delivery", note: `${peso(site.deliveryFee)} within Pagadian City, via Boknoy Riders` },
                { mode: "pickup", Icon: ShoppingBag, title: "Pickup", note: "Free" },
              ] as const
            ).map(({ mode, Icon, title, note }) => (
              <label key={mode} className={`flex cursor-pointer items-start gap-4 border p-4 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold-bright ${details.mode === mode ? "border-gold bg-raised" : "border-line hover:border-gold/60"}`}>
                <input type="radio" name="mode" className="sr-only" checked={details.mode === mode} onChange={() => update({ mode })} />
                <Icon aria-hidden size={24} strokeWidth={1.25} className="mt-0.5 flex-none text-gold" />
                <span>
                  <span className="block font-medium">{title}</span>
                  <span className="block text-sm text-muted">{note}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="order-name" className="label">Name</label>
            <input id="order-name" className="field" autoComplete="name" value={details.name} onChange={(e) => update({ name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="order-mobile" className="label">Mobile number</label>
            <input id="order-mobile" type="tel" className="field" autoComplete="tel" value={details.mobile} onChange={(e) => update({ mobile: e.target.value })} />
          </div>
          {details.mode === "delivery" && (
            <div className="sm:col-span-2">
              <label htmlFor="order-address" className="label">Delivery address in Pagadian City</label>
              <input id="order-address" className="field" autoComplete="street-address" value={details.address} onChange={(e) => update({ address: e.target.value })} />
            </div>
          )}
          <div className="sm:col-span-2">
            <label htmlFor="order-when" className="label">Preferred date and time (optional)</label>
            <input id="order-when" className="field" placeholder="e.g. Saturday, 6 PM" value={details.when} onChange={(e) => update({ when: e.target.value })} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="order-notes" className="label">Notes (optional)</label>
            <textarea id="order-notes" rows={3} className="field" value={details.notes} onChange={(e) => update({ notes: e.target.value })} />
          </div>
        </div>
      </div>

      <aside className="border border-line bg-panel p-6 lg:sticky lg:top-28">
        <h2 className="display text-xl">Summary</h2>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted">Subtotal</dt>
            <dd className="tabular-nums">{peso(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted">{details.mode === "delivery" ? "Delivery" : "Pickup"}</dt>
            <dd className="tabular-nums">{details.mode === "delivery" ? peso(delivery) : "FREE"}</dd>
          </div>
          <div className="flex items-baseline justify-between border-t border-line pt-3">
            <dt className="font-display text-sm uppercase tracking-[0.2em]">Total</dt>
            <dd className="font-display text-2xl tabular-nums text-gold">{peso(total)}</dd>
          </div>
        </dl>
        <div className="mt-6">
          <FacebookHandoff
            message={buildOrderMessage(lines, details)}
            missing={missing}
            label="Copy & message on Facebook"
          />
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          No payment is taken on this site. SLICED. confirms every order through Facebook.
        </p>
      </aside>
    </div>
  );
}
