import type { Metadata } from 'next';
import HomeClient from "@/components/HomeClient";
import PageSchema from "@/components/PageSchema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Grow a Garden Wiki — Crop Values, Codes, Mutation Calculator & Guides",
  },
  description:
    "Fan wiki for Roblox Grow a Garden: crop and seed values, working codes, the official mutation multiplier calculator and practical farming guides.",
  alternates: { canonical: "https://growagarden.robloxwikihub.com" },
};

export default function HomePage() {
  return (
    <>
      <PageSchema
        title="Grow a Garden Wiki — Crop Values, Codes, Mutation Calculator & Guides"
        description="Fan wiki for Roblox Grow a Garden: crop and seed values, working codes, the official mutation multiplier calculator and practical farming guides."
        path="/"
      />
      <HomeClient />
    </>
  );
}
