import { ActionLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="shell py-24 text-center">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Page not found</p>
      <h1 className="display mt-5 text-4xl">This slice is gone</h1>
      <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <ActionLink href="/" solid className="mt-8">Back to home</ActionLink>
    </div>
  );
}
