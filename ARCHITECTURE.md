# Architecture

## Current structure

This is a static, single-page portfolio site with no build step or runtime dependencies.

- `index.html` contains the document structure, primary navigation, About
  section, and Projects placeholder.
- `style.css` contains all presentation rules, including the centered social
  icon strip, primary navigation, responsive layout, and accessible focus
  states.
- `plan.html` is a standalone visual roadmap for the reduced four-week portfolio plan; it is not part of the visitor-facing portfolio.
- `plan.css` contains the roadmap's presentation rules, responsive layout, print styles, and accessible focus states.
- `plan.js` adds the copy-to-clipboard action for each planning session; it has a text-area fallback when the browser clipboard is unavailable.
- `AGENTS.md` is the source of approved profile information and project constraints.
- `.github/skills/teaching-project-interview/SKILL.md` defines the repository-local interview workflow for documenting one teaching or instructional design project at a time.
- `.github/skills/teach-me/SKILL.md` defines the repository-local teaching workflow for explaining code, repositories, AI, and GitHub concepts.

## Feature boundary

The current implementation includes the About section, a primary menu with
working About and Projects anchors, a factual Projects-coming-soon
placeholder, and a small static social-media icon strip at the top of the page.
It uses semantic HTML and static content. JavaScript and external assets are
intentionally excluded from the visitor-facing portfolio until a feature
requires them.

The planning visualizer is intentionally separate from the portfolio page. It is a static HTML/CSS/JavaScript artifact with no external runtime dependencies.

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

The teach-me skill is documentation-only. It has no runtime dependencies or
build step. It explains concepts in focused steps, uses practical examples and
official resources when relevant, and ends with three multiple-choice
understanding checks.
