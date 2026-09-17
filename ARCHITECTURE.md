# Architecture

## Current structure

This is a static, single-page portfolio site with no build step or runtime dependencies.

- `index.html` contains the document structure and the About section.
- `style.css` contains all presentation rules, including the centered social icon strip, responsive layout, and accessible focus states.
- `AGENTS.md` is the source of approved profile information and project constraints.
- `.github/skills/teaching-project-interview/SKILL.md` defines the repository-local interview workflow for documenting one teaching or instructional design project at a time.

## Feature boundary

The current implementation includes the About section and a small, static social-media icon strip at the top of the page. It uses semantic HTML and static content. JavaScript, external assets, and additional portfolio sections are intentionally excluded until a feature requires them.

## Design system

The page uses a warm academic palette:

- Navy for primary text and headings
- Cream for the page background
- Teal for accents and labels

The layout adapts from a two-column desktop presentation to a single-column mobile presentation at narrow widths.

## Repository-local skill

The teaching project interview skill is documentation-only. It has no runtime
dependencies or build step. It asks one focused question at a time, records
user-provided facts for the required project fields, and produces a concise
summary without inventing outcomes or accomplishments.
