"use client";

import { Check, Users } from "lucide-react";
import { useState } from "react";
import { FacebookHandoff } from "@/components/facebook-handoff";
import { cateringPackages, eventSelections, occasions } from "@/lib/menu";
import { peso } from "@/lib/site";

const CUSTOM = "custom";

export function CateringPlanner() {
  const [packageId, setPackageId] = useState("premium");
  const [picks, setPicks] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", mobile: "", occasion: "", date: "", guests: "", venue: "", notes: "" });

  const update = (patch: Partial<typeof form>) => setForm({ ...form, ...patch });
  const chosen = cateringPackages.find((pkg) => pkg.id === packageId);

  function toggle(selection: string) {
    setPicks(picks.includes(selection) ? picks.filter((pick) => pick !== selection) : [...picks, selection]);
  }

  function choose(id: string) {
    setPackageId(id);
    document.getElementById("inquire")?.scrollIntoView();
  }

  const message = [
    "Hi SLICED.! I'd like to inquire about sushi bar catering.",
    "",
    `Package: ${chosen ? `${chosen.name}, up to ${chosen.guests} guests, ${peso(chosen.price)}` : "Custom package"}`,
    `Event: ${form.occasion || "-"}`,
    `Guests: ${form.guests || "-"}`,
    `Date: ${form.date || "-"}`,
    `Venue: ${form.venue || "-"}`,
    `Selections: ${picks.length ? picks.join(", ") : "-"}`,
    ...(form.notes ? [`Notes: ${form.notes}`] : []),
    "",
    `Name: ${form.name || "-"}`,
    `Mobile: ${form.mobile || "-"}`,
  ].join("\n");

  const missing = [
    ...(form.name.trim() ? [] : ["your name"]),
    ...(form.mobile.trim() ? [] : ["mobile number"]),
    ...(form.occasion ? [] : ["event type"]),
    ...(form.guests.trim() ? [] : ["guest count"]),
  ];

  return (
    <>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cateringPackages.map((pkg, index) => (
          <li
            key={pkg.id}
            className={`relative flex flex-col border bg-panel p-6 ${pkg.popular ? "border-gold" : "border-line"}`}
          >
            {pkg.popular && (
              <p className="absolute -top-3 right-5 bg-gold px-3 py-1 font-display text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-ink">
                Popular
              </p>
            )}
            <p className="font-display text-gold">0{index + 1}.</p>
            <h3 className="display mt-1 text-2xl">{pkg.name}</h3>
            <p className="mt-1 flex items-center gap-2 text-sm text-muted">
              <Users aria-hidden size={15} />
              Up to {pkg.guests} guests
            </p>
            <p className="mt-4 font-display text-3xl text-gold">{peso(pkg.price)}</p>
            <ul className="mt-5 flex-1 space-y-2 border-t border-line pt-5 text-sm">
              <li className="flex gap-2 font-medium">
                <Check aria-hidden size={15} className="mt-0.5 flex-none text-gold" />
                Choose {pkg.selections} selections
              </li>
              {pkg.includes.map((line) => (
                <li key={line} className="flex gap-2 text-cream/85">
                  <Check aria-hidden size={15} className="mt-0.5 flex-none text-gold" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-sm text-muted">
              Add-on per selection: <span className="font-medium text-cream">{peso(pkg.addOn)}</span>
            </p>
            <button
              type="button"
              onClick={() => choose(pkg.id)}
              className={`btn mt-4 w-full ${pkg.popular ? "btn-solid" : "btn-outline"}`}
            >
              Choose<span className="sr-only"> {pkg.name}</span>
            </button>
          </li>
        ))}
      </ol>

      <div id="inquire" className="waves mt-16 grid gap-10 border border-line bg-panel p-6 md:p-10 lg:grid-cols-[1fr_24rem] lg:gap-14">
        <div>
          <p className="eyebrow">Inquire now</p>
          <h2 className="display mt-5 text-3xl">Tell us about your event</h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="cater-package" className="label">Package</label>
              <select id="cater-package" className="field" value={packageId} onChange={(e) => setPackageId(e.target.value)}>
                {cateringPackages.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name}: up to {pkg.guests} guests, {peso(pkg.price)}
                  </option>
                ))}
                <option value={CUSTOM}>Custom package</option>
              </select>
              {chosen && (
                <p className="mt-2 text-sm text-muted">
                  Includes {chosen.selections} selections. Extra selections are {peso(chosen.addOn)} each.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="cater-occasion" className="label">Event type</label>
              <select id="cater-occasion" className="field" value={form.occasion} onChange={(e) => update({ occasion: e.target.value })}>
                <option value="">Select one</option>
                {occasions.map((occasion) => (
                  <option key={occasion}>{occasion}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="cater-guests" className="label">Guest count</label>
              <input id="cater-guests" type="number" min={1} className="field" value={form.guests} onChange={(e) => update({ guests: e.target.value })} />
            </div>
            <div>
              <label htmlFor="cater-date" className="label">Event date (optional)</label>
              <input id="cater-date" type="date" className="field" value={form.date} onChange={(e) => update({ date: e.target.value })} />
            </div>
            <div>
              <label htmlFor="cater-venue" className="label">Venue (optional)</label>
              <input id="cater-venue" className="field" value={form.venue} onChange={(e) => update({ venue: e.target.value })} />
            </div>
            <fieldset className="sm:col-span-2">
              <legend className="label">Preferred selections</legend>
              <div className="flex flex-wrap gap-2">
                {eventSelections.map((selection) => {
                  const on = picks.includes(selection);
                  return (
                    <label key={selection} className={`flex min-h-11 cursor-pointer items-center gap-2 border px-4 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold-bright ${on ? "border-gold text-gold" : "border-line hover:border-gold/60"}`}>
                      <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(selection)} />
                      {on && <Check aria-hidden size={15} />}
                      {selection}
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <div>
              <label htmlFor="cater-name" className="label">Name</label>
              <input id="cater-name" className="field" autoComplete="name" value={form.name} onChange={(e) => update({ name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="cater-mobile" className="label">Mobile number</label>
              <input id="cater-mobile" type="tel" className="field" autoComplete="tel" value={form.mobile} onChange={(e) => update({ mobile: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cater-notes" className="label">Notes (optional)</label>
              <textarea id="cater-notes" rows={3} className="field" value={form.notes} onChange={(e) => update({ notes: e.target.value })} />
            </div>
          </div>
        </div>

        <div className="lg:pt-24">
          <FacebookHandoff message={message} missing={missing} label="Copy & message on Facebook" />
        </div>
      </div>
    </>
  );
}
