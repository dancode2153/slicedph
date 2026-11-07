import type { CartLine } from "@/lib/cart";
import { peso, site } from "@/lib/site";

export type OrderDetails = {
  name: string;
  mobile: string;
  mode: "delivery" | "pickup";
  address: string;
  when: string;
  notes: string;
};

/** One free seaweed pack comes with every Baked Sushi order. */
export function freeSeaweedPacks(lines: CartLine[]) {
  return lines
    .filter((line) => line.item.id === "baked-sushi")
    .reduce((packs, line) => packs + line.qty, 0);
}

export function orderTotals(lines: CartLine[], mode: OrderDetails["mode"]) {
  const subtotal = lines.reduce((sum, line) => sum + line.total, 0);
  const delivery = mode === "delivery" && lines.length > 0 ? site.deliveryFee : 0;
  return { subtotal, delivery, total: subtotal + delivery };
}

export function buildOrderMessage(lines: CartLine[], details: OrderDetails) {
  const { subtotal, delivery, total } = orderTotals(lines, details.mode);
  const free = freeSeaweedPacks(lines);

  return [
    "Hi SLICED.! I'd like to order:",
    "",
    ...lines.map(
      (line) =>
        `- ${line.qty} x ${line.item.name}${line.option ? ` (${line.option})` : ""}: ${peso(line.total)}`,
    ),
    ...(free > 0 ? [`- ${free} x Seaweed Sheet: FREE`] : []),
    "",
    `Subtotal: ${peso(subtotal)}`,
    details.mode === "delivery"
      ? `Delivery within Pagadian City: ${peso(delivery)}`
      : "Pickup: FREE",
    `Total: ${peso(total)}`,
    "",
    `Name: ${details.name || "-"}`,
    `Mobile: ${details.mobile || "-"}`,
    details.mode === "delivery"
      ? `Deliver to: ${details.address || "-"}`
      : "I'll pick up my order.",
    ...(details.when ? [`Preferred time: ${details.when}`] : []),
    ...(details.notes ? [`Notes: ${details.notes}`] : []),
  ].join("\n");
}
