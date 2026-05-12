# Post-Deploy QA Checklist

Last updated: 2026-05-12

This checklist covers the tool-first pages that were upgraded for search and future display ads monetization. The goal is to confirm that the live site is crawlable, shareable, fast, and ready for Google Search Console reindexing before adding ads or creating more content.

## Pages To Validate

- `https://mymoneyanswer.com/`
- `https://mymoneyanswer.com/tools.html`
- `https://mymoneyanswer.com/calculator.html`
- `https://mymoneyanswer.com/budget-planner.html`
- `https://mymoneyanswer.com/debt-payoff-calculator.html`
- `https://mymoneyanswer.com/emergency-fund-calculator.html`

## Local QA Completed

- Each page has exactly one H1.
- Each page has a canonical URL.
- Each page has `og:image` and `twitter:image`.
- Each referenced Open Graph image exists locally.
- Each Open Graph image is `1200x630`.
- JSON-LD parses locally on all six pages.
- Tool pages include `WebApplication`, `FAQPage`, and `HowTo` schema where appropriate.
- `tools.html` includes `CollectionPage`, `BreadcrumbList`, and `FAQPage` schema.
- `sitemap.xml` includes all six priority pages.
- `sitemap.xml` lastmod dates for the six priority pages were updated to `2026-05-11`.

## Production HTTP Checks

Run these after each deploy:

```bash
curl -I https://mymoneyanswer.com/
curl -I https://mymoneyanswer.com/tools.html
curl -I https://mymoneyanswer.com/calculator.html
curl -I https://mymoneyanswer.com/budget-planner.html
curl -I https://mymoneyanswer.com/debt-payoff-calculator.html
curl -I https://mymoneyanswer.com/emergency-fund-calculator.html
curl -I https://mymoneyanswer.com/sitemap.xml
```

Expected result: `HTTP/2 200`, `content-type: text/html; charset=utf-8` for pages, and a fresh `last-modified` date from Vercel.

## Open Graph Checks

Use a social preview debugger after deploy:

- Facebook Sharing Debugger.
- LinkedIn Post Inspector.
- X Card Validator, if available.

Confirm:

- The preview image is not `assets/money-logo.png`.
- The image is not cropped in a way that hides the page title.
- The page title and description match the page intent.
- The image URL resolves with `HTTP/2 200` and `content-type: image/png`.

## Rich Results Checks

Use Google Rich Results Test for each priority page:

- `https://search.google.com/test/rich-results`

Confirm:

- JSON-LD is valid.
- FAQ and HowTo entities are detected where eligible.
- No malformed structured data warnings were introduced.

## PageSpeed Checks

Use PageSpeed Insights mobile for each priority page:

- `https://pagespeed.web.dev/`

Target:

- Mobile performance score: 90 or higher.
- Largest Contentful Paint below 2.5 seconds.
- Cumulative Layout Shift below 0.1.
- Interaction to Next Paint below 200 milliseconds.

If a page fails:

- Check whether the Open Graph images are affecting preload behavior. They should not be rendered in-page.
- Check whether JavaScript event listeners are throwing errors.
- Check whether large content blocks or embedded assets are affecting mobile layout.

## Google Search Console Actions

After production is confirmed:

- Submit or resubmit `https://mymoneyanswer.com/sitemap.xml`.
- Request indexing for the six priority pages.
- Inspect each URL and confirm it is indexable.
- Check the canonical chosen by Google after crawling.
- Monitor impressions and average position weekly.

## GA4 Event Checks

Use DebugView or Realtime after deploy and confirm these events fire on the matching interactions:

- `tool_page_viewed` when opening the home tool, tools hub, and calculator pages.
- `tool_started` after changing a calculator or planner input.
- `money_tool_started`, `money_tool_answered`, and `money_tool_completed` through the quiz flow.
- `internal_cta_clicked` when clicking prominent internal calls to action.
- `emergency_results_downloaded`, `debt_results_downloaded`, `budget_csv_downloaded`, or `money_plan_downloaded` when downloading results.
- `wealthsimple_affiliate_clicked` only when clicking the Wealthsimple invite link.

Recommended GA4 key events are documented in `docs/GA4_EVENT_TRACKING.md`.

## Do Not Add Yet

- No display ad scripts.
- No analytics scripts unless explicitly approved.
- No new affiliate scripts or affiliate networks.
- No mass programmatic pages.

## Next Content Cluster

Start with the emergency fund cluster because it is the most realistic near-term ranking path:

- Improve or publish `how-much-emergency-fund-do-i-need.html` with a strong link to `emergency-fund-calculator.html`.
- Add above-the-fold internal link blocks from emergency fund articles to the calculator.
- Use varied anchors such as "calculate your emergency fund target", "estimate your emergency savings gap", and "compare starter, 3-month, and 6-month targets".
