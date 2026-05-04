# Agent Instructions

These instructions apply to Codex, Claude Code, and other coding agents working on MyMoneyAnswer.

## Project Identity

- MyMoneyAnswer is a personal finance education website for users in the United States and Canada.
- Public website copy must be in English.
- The main promise is: "Helping beginners decide their next best money move in 5 minutes."
- The website should feel like a financial decision tool, not a generic finance blog.
- All finance content is educational information only.
- Do not present the website as personalized financial, tax, legal, or investment advice.

## Tech Stack

- Pure HTML, CSS, and JavaScript.
- No frameworks.
- No backend.
- No database.
- No build step.
- Hosted on Vercel.
- Use relative paths only, for example `./calculator.html`, never `/calculator.html`.

## Current Pages

- `index.html`: main quiz tool.
- `calculator.html`: investment calculator.
- `directory.html`: YouTube channel directory.
- `blog.html`: blog hub.

## Planned Pages

- `money-lessons.html`
- `tools.html`
- `emergency-fund-calculator.html`
- `debt-payoff-calculator.html`
- `about.html`
- `contact.html`
- `privacy-policy.html`
- `terms.html`
- `disclaimer.html`
- `affiliate-disclosure.html`
- `editorial-policy.html`

## Design System

- Font: Inter everywhere.
- No serif fonts.
- Primary green: `#16A34A`.
- Background: `#FAFAFA`.
- Surface: `#FFFFFF`.
- Main text: `#09090B`.
- Secondary text: `#3F3F46`.
- Muted text: `#71717A`.
- Border: `#E4E4E7`.
- Cards: white background, 1px border, 18px border radius.
- Hero: dark green mesh gradient with `#0a2e1a` base.
- All calls to action must be green `#16A34A` or white with green border.
- Never use black buttons for calls to action.
- Navigation must be sticky, frosted glass style, with centered links.
- Mobile responsive.
- Navigation links hide below 768px.

## Shared Navigation

Every page must use the same navigation:

- Tool
- Investment Calculator
- Money Lessons
- Blog

Use relative links:

- `./index.html`
- `./calculator.html`
- `./money-lessons.html`
- `./blog.html`

## Writing Rules

- Never use abbreviations without explaining them first.
- Keep content simple and beginner-friendly.
- Do not make guaranteed income claims.
- Do not promise investment returns.
- Do not say "financial advice."
- Use "educational information" or "general information."
- Add a disclaimer when content discusses investing, debt, taxes, affiliate products, or financial decisions.

## Search Engine Optimization Rules

- Search Engine Optimization means optimizing pages so search engines can understand and rank them.
- Each indexable page should have:
  - Unique title.
  - Unique meta description.
  - One clear H1.
  - Canonical URL.
  - Open Graph tags.
  - Helpful introduction.
  - Internal links to related pages.
  - Frequently asked questions section when useful.
  - Schema.org structured data when relevant.
- Do not create thin pages that only swap dollar amounts.
- Every programmatic Search Engine Optimization page must have unique, useful content.

## Geo-targeting Rules

- The site supports United States and Canada users.
- Use country detection only to personalize the experience.
- Do not hide important content from search engines.
- Always provide a manual country toggle.
- If country detection fails, default to United States.
- Store user choice in `localStorage`.

## Monetization Rules

- Monetization methods may include display ads, affiliate links, finance books, and finance platform comparison blocks.
- Affiliate disclosure must appear before or near affiliate links.
- Do not make misleading claims.
- Do not rank products only by commission.
- Content must remain useful even if affiliate links are removed.
- Do not add advertising scripts, analytics scripts, or affiliate scripts without approval.

## Code Style

- Keep HTML semantic.
- Use accessible labels for forms and buttons.
- Use descriptive class names.
- Keep JavaScript simple and readable.
- Avoid unnecessary dependencies.
- Do not add a framework unless explicitly requested.

## Git Workflow

- Work on a feature branch.
- Keep changes small.
- Commit after completing a logical task.
- Push the branch to GitHub only when asked.
- Do not overwrite user changes.
- Before editing, inspect current files because the user may have already made updates.
