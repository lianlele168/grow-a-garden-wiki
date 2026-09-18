import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://growagarden.robloxwikihub.com/mutation-calculator" },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
