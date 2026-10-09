# In development!

# [Kim's Journal](https://kimley89.github.io/Kim/)

Source for [Kim's Journal]([https://kimley89.github.io/Kim/])) — Kim's
personal site. Books, reviews, blog posts.

The site is a static build produced by **Astro v5** with **Svelte 5**
islands for the interactive bits (reviews explorer, artists explorer, mobile
menu). It deploys to GitHub Pages from `master`
via `.github/workflows/gh-pages.yml`.

It used to be a Hugo site. The migration is documented under [`plans/`](plans/).

## To use the default GitHub URL, you need to add your repository name to the links:
- in file astro.config.mjs:
  ```bash
    site: 'https://<username>.github.io/<repo name>',
    base: '/<repo name>/',
  ```
- in file src/data/nav.ts and src/pages/reviews/index.astro to use the BASE to the links:
  ```bash
    const BASE = '/Kim';
    export const nav = [
      { label: 'Books', link: '${BASE}/#books' },
      { label: 'Reviews', link: `${BASE}/reviews/` },
      { label: 'Blog', link: `${BASE}/blogs/` },
      { label: 'Artists', link: `${BASE}/artists/` },
    ] as const;
  ``` 

## Quick start

```bash
make install   # installs casks, node deps, python deps via uv
make blog      # `npm run dev` — local Astro dev server with HMR
make prod      # clean build into `dist/`
```

## Layout

- `src/content/` — Astro content collections (`reviews/`, `blogs/`).
- `src/pages/` — routes; dynamic `[...slug].astro` files render collection items.
- `src/components/` — Astro components, with Svelte islands under `components/islands/`.
- `src/data/` — typed YAML-replacement data files (books, artists, podcasts, …).
- `src/lib/` — shared helpers (covers, content sorting, types, the `fancy-card` 3-D effect).
- `src/styles/` — Tailwind v4 entrypoint plus plain-CSS partials, all imported from `main.css`. The CSS-first `@theme` block in `main.css` replaces what used to live in `tailwind.config.cjs`.
- `src/assets/` — images and SVGs that go through `astro:assets` for hashing/optimisation.
- `astro-public/` — verbatim static files (favicons, podcast thumbnails).
- `content/` — markdown sources. Tutorials are generated from notebooks via `builder/convert.py`.
- `plans/` — phase-by-phase migration plan, kept around for context.
- `skills/` — authoritative operational playbooks (book reviews, find-artists, humanizer, …). `make install` symlinks these into `.claude/skills/` and `.cursor/skills/`.

## Operational playbooks

- Drafting a new review — see `skills/book-review/`.
- Refreshing the cover-artist database from r/ProgressionFantasy — see `skills/find-artists/`.
- Editing review prose without sounding AI-generated — see `skills/humanizer/`.
