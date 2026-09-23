// Minimal honest JSON-LD: mirrors the page's own title/description, no
// factual claims beyond them. Used on pages that had no structured data.
export default function PageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `https://growagarden.robloxwikihub.com${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Grow a Garden Wiki',
      url: 'https://growagarden.robloxwikihub.com',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
