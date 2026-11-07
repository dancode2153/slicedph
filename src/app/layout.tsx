import type { Metadata } from "next";
import { Figtree, Jost } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "SLICED. The Last Slice | Sushi & Sushi Bar Catering in Pagadian City",
    template: "%s | SLICED. The Last Slice",
  },
  description:
    "Freshly made, perfectly sliced sushi in Pagadian City. Order rolls and platters, or bring the SLICED. sushi bar to your next event.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
