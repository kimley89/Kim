const BASE = '/Kim';

export const nav = [
  { label: 'Books', link: '/#books' },
  { label: 'Reviews', link: `${BASE}/reviews/` },
  { label: 'Flowchart', link: `${BASE}/reviews/flowchart/` },
  { label: 'Tutorials', link: `${BASE}/tutorials/` },
  { label: 'Blog', link: `${BASE}/blogs/` },
  { label: 'Artists', link: `${BASE}/artists/` },
  { label: 'Courses', link: '/#courses' },
  { label: 'CV', link: '/static/resume/Samuel_Hinton_CV.pdf' },
] as const;

export type NavItem = (typeof nav)[number];
