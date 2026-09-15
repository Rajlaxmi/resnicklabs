# Resnick Labs

Marketing site for Resnick Labs, user foundation models for advertising.

A single-page, editorial site built with React, TypeScript, Vite and Tailwind CSS. The layout
(sticky index rail, hairline dividers, serif display type) is adapted from
[raila.io](https://github.com/rajlaxmisah/rajlaxmi.github.io). The palette bookends the page in a
dark charcoal-navy hero and closing contact section, standing in for a model's latent space, with
violet as the working accent through the paper-colored body sections and gold reserved for quotes.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Structure

- `src/components/`: one component per section (`Hero`, `Objective`, `Approach`,
  `Applications`, `Deployment`, `Leadership`, `Contact`), plus the shared `Section` layout,
  `Header`, `Footer` and the `EmbeddingField` hero graphic.
- `src/hooks/`: `useReveal` (scroll-triggered fade-in) and `useActiveSection` (nav highlighting).
- `src/index.css`: design tokens and the small set of shared component classes (`.eyebrow`,
  `.link`, `.link-accent`, `.chip-accent`, `.chip-gold`, `.icon-badge`).

`src/components/Contact.tsx` lists the real contact address (hi@resnicklabs.ai). The
Partnerships email and LinkedIn URL are still placeholders, swap in the real ones before
shipping.
