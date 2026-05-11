# Indexing Audit

Last updated: 2026-05-11

Google Search Console is reporting `Discovered - currently not indexed` for 51 pages, with examples showing `Last crawled: N/A`. That usually means Google knows the URLs exist, but has not crawled them yet or has not decided they are important enough to crawl immediately. This is different from a manual penalty or an explicit indexing block.

## Local Audit Result

Checked against the current static site:

- No `noindex` directive was found on sitemap pages.
- No sitemap URL points to a missing local HTML file.
- Canonical tags match the expected production URLs.
- No duplicate page titles were found.
- No duplicate meta descriptions were found.
- Priority tool pages have strong internal linking from hubs, articles, and shared navigation.
- The only sitemap page with fewer than three unique internal source pages was `what-to-do-after-saving-1000-dollars.html`.

## Interpretation

The current issue is most likely crawl priority and site freshness, not a blocking technical error. Many pages were added or changed recently, and Search Console validation began on 2026-05-11. Pages listed with `Last crawled: N/A` may simply be waiting for Google's first crawl.

## Changes Made From This Audit

- Added a contextual link from `budgeting.html` to `what-to-do-after-saving-1000-dollars.html`.
- Added a contextual link from `emergency-fund.html` to `what-to-do-after-saving-1000-dollars.html`.
- Added contextual United States account links inside `investing.html`, including a direct link to `401k-for-beginners.html`.
- Updated `sitemap.xml` lastmod dates for the changed pages and a Search Console example URL.

## Search Console Priority Queue

Request indexing manually for a small set first instead of all 51 URLs:

1. `https://mymoneyanswer.com/`
2. `https://mymoneyanswer.com/tools.html`
3. `https://mymoneyanswer.com/emergency-fund-calculator.html`
4. `https://mymoneyanswer.com/debt-payoff-calculator.html`
5. `https://mymoneyanswer.com/budget-planner.html`
6. `https://mymoneyanswer.com/calculator.html`
7. `https://mymoneyanswer.com/how-much-emergency-fund-do-i-need.html`
8. `https://mymoneyanswer.com/emergency-fund.html`
9. `https://mymoneyanswer.com/budgeting.html`
10. `https://mymoneyanswer.com/50-30-20-budget-rule.html`
11. `https://mymoneyanswer.com/investing.html`
12. `https://mymoneyanswer.com/401k-for-beginners.html`
13. `https://mymoneyanswer.com/debt-avalanche-vs-snowball.html`

Do not spend manual indexing requests on legal or trust pages such as `affiliate-disclosure.html`, `privacy-policy.html`, `terms.html`, or `disclaimer.html` unless Google flags a specific issue. They should remain crawlable and linked, but they do not need urgent search visibility.

## Next Fixes If The Status Persists

If many important pages are still `Discovered - currently not indexed` after two to four weeks:

- Strengthen the emergency fund cluster article by article, starting with `how-much-emergency-fund-do-i-need.html`.
- Add short "related next step" blocks inside each article, not only footer links.
- Refresh sitemap lastmod dates only when a page receives meaningful content or internal-link updates.
- Compare the affected URLs against Search Console's `Crawled - currently not indexed` report. If pages move from discovered to crawled but remain unindexed, focus on content depth and differentiation rather than crawl discovery.
