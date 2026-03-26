export interface SearchEntry {
  title: string;
  href: string;
  section: string;
  content: string;
}

export function buildSearchIndex(pages: SearchEntry[]): SearchEntry[] {
  return pages;
}

export function search(query: string, index: SearchEntry[]): SearchEntry[] {
  const lower = query.toLowerCase();
  return index.filter(
    (entry) =>
      entry.title.toLowerCase().includes(lower) ||
      entry.content.toLowerCase().includes(lower),
  );
}
