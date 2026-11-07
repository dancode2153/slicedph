"use client";

import { useSyncExternalStore } from "react";
import { allItems, type MenuItem } from "@/lib/menu";

/** Basket contents: line id ("baked-sushi:Spicy" or "kani-sushi") -> quantity. */
export type Cart = Record<string, number>;

export type CartLine = {
  id: string;
  item: MenuItem;
  option?: string;
  qty: number;
  total: number;
};

const STORAGE_KEY = "sliced-cart-v1";
const EMPTY: Cart = {};

let cart: Cart = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded) return;
  loaded = true;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) cart = JSON.parse(saved) as Cart;
  } catch {
    cart = EMPTY;
  }
}

function commit(next: Cart) {
  cart = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage can be blocked; the basket still works until the page is closed.
  }
  listeners.forEach((listener) => listener());
}

export function setQuantity(id: string, qty: number) {
  load();
  const next = { ...cart };
  if (qty > 0) next[id] = qty;
  else delete next[id];
  commit(next);
}

export function addToCart(id: string) {
  load();
  setQuantity(id, (cart[id] ?? 0) + 1);
}

export function clearCart() {
  commit(EMPTY);
}

export function useCart(): Cart {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => {
      load();
      return cart;
    },
    () => EMPTY,
  );
}

export function cartLines(current: Cart): CartLine[] {
  return Object.entries(current).flatMap(([id, qty]) => {
    const [itemId, option] = id.split(":");
    const item = allItems.find((candidate) => candidate.id === itemId);
    return item ? [{ id, item, option, qty, total: item.price * qty }] : [];
  });
}
