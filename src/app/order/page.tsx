import type { Metadata } from "next";
import { OrderForm } from "@/components/order-form";

export const metadata: Metadata = {
  title: "Order Online",
  description:
    "Build your SLICED. sushi order, then send it through Facebook for delivery within Pagadian City or free pickup.",
};

export default function OrderPage() {
  return (
    <div className="shell py-12 lg:py-16">
      <p className="eyebrow">Order online</p>
      <h1 className="display mt-5 text-4xl md:text-5xl">Your slice, your way</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        Review your order and add your details. We&apos;ll prepare a message for you to send to SLICED. on Facebook.
      </p>
      <div className="mt-10 border-t border-line pt-10">
        <OrderForm />
      </div>
    </div>
  );
}
