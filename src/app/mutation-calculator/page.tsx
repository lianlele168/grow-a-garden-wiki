import type { Metadata } from 'next';
import PageSchema from '@/components/PageSchema';
import MutationCalculatorClient from './MutationCalculatorClient';

export const metadata: Metadata = {
  title: { absolute: 'Grow a Garden Mutation Value Calculator' },
  description: 'Stack official Grow a Garden mutation multipliers — Wet, Chilled, Golden, Rainbow and more — to price any crop.',
  alternates: { canonical: 'https://growagarden.robloxwikihub.com/mutation-calculator' },
};

export default function MutationCalculatorPage() {
  return (
    <>
      <PageSchema title="Grow a Garden Mutation Value Calculator" description="Stack official Grow a Garden mutation multipliers — Wet, Chilled, Golden, Rainbow and more — to price any crop." path="/mutation-calculator" />
      <MutationCalculatorClient />
    </>
  );
}
