import type { Metadata } from 'next';
import PageSchema from '@/components/PageSchema';
import CodesClient from './CodesClient';

export const metadata: Metadata = {
  title: { absolute: 'Grow a Garden Codes — Working Rewards List' },
  description: 'Working Grow a Garden codes with verified rewards, plus the expired archive. No invented code strings.',
  alternates: { canonical: 'https://growagarden.robloxwikihub.com/codes' },
};

export default function CodesPage() {
  return (
    <>
      <PageSchema title="Grow a Garden Codes — Working Rewards List" description="Working Grow a Garden codes with verified rewards, plus the expired archive. No invented code strings." path="/codes" />
      <CodesClient />
    </>
  );
}
