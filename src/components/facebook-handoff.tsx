"use client";

import { Check } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { FacebookIcon } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * SLICED. takes orders over Facebook, so this copies the finished message and
 * opens the page in a new tab. The message stays visible as a manual fallback.
 */
export function FacebookHandoff({
  message,
  missing,
  label,
}: {
  message: string;
  missing: string[];
  label: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed" | "incomplete">("idle");

  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (missing.length > 0) {
      event.preventDefault();
      setStatus("incomplete");
      return;
    }
    try {
      await navigator.clipboard.writeText(message);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div>
      <label htmlFor="handoff-message" className="label">Your message</label>
      <textarea
        id="handoff-message"
        readOnly
        rows={9}
        value={message}
        className="field resize-y font-mono text-xs leading-relaxed text-muted"
      />
      <a
        href={site.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="btn btn-solid mt-4 w-full"
      >
        <FacebookIcon size={16} />
        {label}
      </a>
      <p aria-live="polite" className="mt-3 min-h-5 text-sm">
        {status === "incomplete" && missing.length > 0 && (
          <span className="text-gold-bright">Still needed: {missing.join(", ")}.</span>
        )}
        {status === "copied" && (
          <span className="flex items-center gap-2 text-gold-bright">
            <Check aria-hidden size={16} />
            Copied. Paste it into your message to SLICED. on Facebook.
          </span>
        )}
        {status === "failed" && (
          <span className="text-gold-bright">
            We couldn&apos;t copy it automatically. Please select the message above and copy it.
          </span>
        )}
      </p>
    </div>
  );
}
