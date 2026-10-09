const BASE = '/Kim';

export const nav = [
  { label: 'Books', link: '/#books' },
  { label: 'Reviews', link: `${BASE}/reviews/` },
  { label: 'Blog', link: `${BASE}/blogs/` },
  { label: 'Artists', link: `${BASE}/artists/` },
] as const;

export type NavItem = (typeof nav)[number];
