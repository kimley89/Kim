const BASE = '/Kim';

export const nav = [
  { label: 'Reviews', link: `${BASE}/reviews/` },
  { label: 'Blog', link: `${BASE}/blogs/` },
] as const;

export type NavItem = (typeof nav)[number];
