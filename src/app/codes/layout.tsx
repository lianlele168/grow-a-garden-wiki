import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://growagarden.robloxwikihub.com/codes" },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
