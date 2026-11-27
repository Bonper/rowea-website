# Design System — ROWEA Website

## Brand Identity

- **Brand Name**: ROWEA
- **Product Name**: ROWEA Weather
- **Positioning**: Global Weather Platform
- **Slogan**: *Weather. Everywhere.*
- **Supporting Phrase**: *A smarter view of our world.*

## Color Palette

| Token | Hex | Usage |
| :--- | :--- | :--- |
| Navy | `#10243B` | Primary display ink (Light), primary CTAs, brand dark surfaces |
| Blue | `#246B9E` | Interactive links, section kickers, active borders |
| Sky | `#75C8D9` | Dark-mode primary CTAs, dark-mode accents, wordmark highlight |
| Light | `#F3F6FA` | Light-mode canvas & alternating structural sections |
| White | `#FFFFFF` | Light-mode elevated cards & hero canvas |

### Theme Architecture

- Uses Tailwind CSS v4 with `@custom-variant dark (&:where(.dark, .dark *));`.
- Default theme follows `prefers-color-scheme`, persisted via `localStorage` (`rowea-theme`).
- An inline `<script>` in `index.html` applies `.dark` before first paint to prevent flashing.

## Typography

- **Display & Headings**: `Plus Jakarta Sans` (`text-wrap: balance`, tight tracking).
- **Body Prose**: `Manrope` (`15px–16px`, `leading-relaxed`).
- **Technical & Checksums**: `JetBrains Mono` with `tabular-nums` for version numbers, sizes, and SHA-256 slots.

## Component & Layout Rules

- **Strict 3-Zone Header**: Wordmark on left, 5 concise single-line navigation links in center, 1 primary CTA on right (collapsing cleanly into a mobile drawer).
- **Zero-Pill Metadata**: Static status indicators (`Coming Soon`, `Planned`, `Demo`) render as crisp unboxed typography rather than rounded pill capsules.
- **Accessibility**: WCAG AA contrast, `focus-visible` outlines, 44px+ touch targets on mobile, skip-to-content link, and full `prefers-reduced-motion` support.
