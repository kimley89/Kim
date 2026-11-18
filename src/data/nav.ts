import { withBase } from '../config';

export const nav = [
  { label: 'My Reading Nook', link: withBase('/reviews/') },
  { label: 'All Posts', link: withBase('/blogs/') },
] as const;

export type NavItem = (typeof nav)[number];
