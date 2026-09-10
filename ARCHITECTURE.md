# Architecture

## Current structure

This is a static, single-page portfolio site with no build step or runtime dependencies.

- `index.html` contains the document structure and the About section.
- `style.css` contains all presentation rules, including responsive layout and accessible focus states.
- `AGENTS.md` is the source of approved profile information and project constraints.

## Feature boundary

The current implementation includes only the About section. It uses semantic HTML and static content. JavaScript, external assets, and additional portfolio sections are intentionally excluded until a feature requires them.

## Design system

The page uses a warm academic palette:

- Navy for primary text and headings
- Cream for the page background
- Teal for accents and labels

The layout adapts from a two-column desktop presentation to a single-column mobile presentation at narrow widths.
