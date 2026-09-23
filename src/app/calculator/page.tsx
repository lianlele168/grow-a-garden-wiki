import type { Metadata } from 'next';
import PageSchema from '@/components/PageSchema';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: { absolute: 'Grow a Garden Crop Mutation & Profit Calculator' },
  description: 'Compute crop profit and stacked mutation multipliers in Grow a Garden using the official multiplier table.',
  alternates: { canonical: 'https://growagarden.robloxwikihub.com/calculator' },
};

export default function CalculatorPage() {
  return (
    <>
      <PageSchema title="Grow a Garden Crop Mutation & Profit Calculator" description="Compute crop profit and stacked mutation multipliers in Grow a Garden using the official multiplier table." path="/calculator" />
      <CalculatorClient />
    </>
  );
}
