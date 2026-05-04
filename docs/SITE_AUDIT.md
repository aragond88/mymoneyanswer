# MyMoneyAnswer Site Audit

## 1. Current file inventory

Important files currently in the repository:

- `index.html`: Main money decision quiz/tool.
- `calculator.html`: Investment growth calculator.
- `directory.html`: Personal finance YouTube channel directory.
- `blog.html`: Blog hub with in-page article views.
- `.gitignore`: Local development ignore rules.
- `README.md`: Project overview and rules.
- `AGENTS.md`: Project instructions for Codex and other coding agents.
- `CLAUDE.md`: Claude Code workflow instructions.
- `docs/PROJECT_CONTEXT.md`: Project objective, market, monetization, search, geo-targeting, and brand context.
- `docs/TASKS.md`: Phased implementation checklist.
- `docs/CONTENT_RULES.md`: Public content, disclaimer, affiliate, comparison, and search content rules.
- `docs/ROADMAP.md`: High-level phased roadmap.

## 2. Current pages and purpose

- `index.html`: Main quiz tool. It asks users a short set of questions and generates a suggested money plan, account/resource cards, frequently asked questions, and a downloadable/printable plan.
- `calculator.html`: Investment calculator. It lets users model compound growth using a starting amount, contribution amount, return rate, and time period.
- `directory.html`: YouTube channel directory. It lists personal finance YouTube channels and lets users filter them by topic.
- `blog.html`: Blog hub. It shows article cards and reveals full article content inside the same file using JavaScript-powered in-page views.

## 3. What already matches AGENTS.md

- The site is built with plain HTML, CSS, and JavaScript.
- There is no framework, backend, database, or build step visible in the repository.
- Public website copy is in English.
- The site already focuses on United States and Canada finance topics.
- The current pages generally use Inter.
- The primary green `#16A34A` appears throughout the pages.
- The main navigation uses relative links such as `./index.html`, `./calculator.html`, and `./blog.html`.
- The pages are mobile-aware and include responsive navigation patterns.
- The site includes educational footer disclaimer text on all four current pages.
- `index.html` includes a manual country toggle pattern and JavaScript logic that stores country selection in `localStorage`.
- The public pages include internal links between the tool, calculator, directory, and blog.

## 4. What conflicts with AGENTS.md

- Navigation labels do not fully match the required shared navigation target: `Money Lessons` currently links to `./directory.html`, while AGENTS.md says it should link to `./money-lessons.html`.
- `money-lessons.html` does not exist yet, so changing the shared navigation immediately would create a broken link.
- `index.html` and `calculator.html` use placeholder canonical/Open Graph URLs with `https://yourdomain.com`.
- Some public copy uses "personalized" language, such as "personalized step-by-step financial plan." This should be softened because the site must not present itself as personalized financial, tax, legal, or investment advice.
- Footer and generated-plan disclaimers use the phrase "financial advice." AGENTS.md says not to say "financial advice" and to use "educational information" or "general information."
- Some copy mentions strong return expectations, guaranteed return framing, or current annual percentage yield figures. These claims should be reviewed and softened so the site does not promise investment returns or imply guaranteed income.
- Affiliate/product links exist in `index.html` and `blog.html`, but the current monetization direction should be limited: no broad affiliate program for now, with Wealthsimple as the only approved affiliate candidate if it is clearly disclosed.
- Some affiliate/product comparison areas use dark or black blocks in `blog.html`; calls to action should be green `#16A34A` or white with a green border.

## 5. Navigation inconsistencies

Current desktop navigation appears on all four public pages with the same visible labels:

- Tool
- Investment Calculator
- Money Lessons
- Blog

Current links:

- Tool: `./index.html`
- Investment Calculator: `./calculator.html`
- Money Lessons: `./directory.html`
- Blog: `./blog.html`

Main inconsistency:

- AGENTS.md requires `Money Lessons` to link to `./money-lessons.html`, but the existing site links that label to `./directory.html`.

Other notes:

- `directory.html` is currently functioning as the Money Lessons destination, even though its content is a YouTube channel directory.
- The required planned page `money-lessons.html` is missing, so navigation should not be changed until that page exists or a temporary navigation decision is approved.

## 6. Footer inconsistencies

All four current pages include a footer with links to the main tool, calculator, directory/Money Lessons, and blog.

Inconsistencies and risks:

- Footer labels use "Financial Plan Tool" while the navigation uses "Tool."
- Footer links use `./directory.html` for Money Lessons, which conflicts with the planned shared navigation target `./money-lessons.html`.
- Footer disclaimer copy says "Not financial advice," which conflicts with the AGENTS.md writing rule that says not to say "financial advice."
- The footer is implemented separately in each HTML file, which increases the risk of future drift because there is no shared include or build step.

## 7. Missing trust and legal pages

The following required trust/legal pages are missing:

- `about.html`
- `contact.html`
- `privacy-policy.html`
- `terms.html`
- `disclaimer.html`
- `affiliate-disclosure.html`
- `editorial-policy.html`

Related missing foundation files:

- `robots.txt`
- `sitemap.xml`

## 8. Search Engine Optimization gaps

Strategic search objective:

- The business goal is to compete for high-intent Google searches and eventually monetize with Google Ads and selected partners. This is a long-term organic search project, not a quick traffic play.
- No page or implementation should promise a number one ranking or guaranteed revenue. The practical goal is to build the conditions that make rankings and monetization more likely: useful original content, clear site structure, crawlable pages, strong trust signals, fast pages, and clean internal linking.
- Google Search Central guidance emphasizes people-first content, clear site organization, descriptive URLs, canonicalization, structured data where relevant, and page experience. MyMoneyAnswer should use Search Engine Optimization to help search engines understand genuinely useful pages, not to create thin pages for keywords.
- Because personal finance is a high-trust topic, content should be especially careful with accuracy, transparency, disclaimers, and product neutrality.

Page-level findings:

- `index.html`
  - Has a title and meta description.
  - Has canonical and Open Graph tags, but they use `https://yourdomain.com`.
  - Has structured data and frequently asked questions.
  - Has one visible page H1, plus another H1 inside generated printable-plan markup.
  - Uses "personalized" language in meta and Open Graph copy that should be reviewed.

- `calculator.html`
  - Has a title and meta description.
  - Has canonical URL, but it uses `https://yourdomain.com/calculator.html`.
  - Has Open Graph title and description, but appears to be missing Open Graph URL, type, and image.
  - Has structured data.
  - Has one H1 and a frequently asked questions section.

- `directory.html`
  - Has a title and meta description.
  - Appears to be missing canonical URL.
  - Appears to be missing Open Graph tags.
  - Appears to be missing structured data.
  - Has one H1.
  - Does not appear to have a frequently asked questions section.

- `blog.html`
  - Has a title, meta description, and canonical URL.
  - Has Open Graph title and description, but appears to be missing Open Graph URL, type, and image.
  - Appears to be missing structured data.
  - Contains multiple H1 elements because the blog hub and each in-page article have H1 tags in the same HTML document.
  - Article cards use `href="#"` with JavaScript `onclick` handlers, so individual articles do not have crawlable URLs.

General Search Engine Optimization gaps:

- Canonical domains should be standardized to `https://mymoneyanswer.com/...`.
- Each indexable page should get complete Open Graph metadata.
- `directory.html` needs canonical, Open Graph, and relevant structured data.
- `blog.html` needs a safer article structure before scaling content.
- Frequently asked questions are useful on `index.html`, `calculator.html`, and articles, but structured FAQ data is not consistent across pages.
- Internal links are present, but planned pages and trust pages are not available yet.
- Article content in `blog.html` should eventually move to dedicated crawlable static article pages or a simple static article structure. JavaScript-only `href="#"` article navigation is not a strong foundation for organic search.
- The site should build topical clusters around emergency funds, debt payoff, beginner investing, United States accounts, Canada accounts, calculators, and decision tools before attempting programmatic Search Engine Optimization.
- Before creating many pages, define reusable page standards for title, description, H1, canonical URL, Open Graph tags, schema, disclaimer block, related links, and update notes.

## 9. Mobile responsiveness risks

- All current public pages include mobile menu patterns and hide desktop navigation on smaller screens.
- Navigation links are hidden on mobile and replaced with a burger menu, which matches the project rule.
- Because each page has its own duplicated navigation and mobile menu code, mobile behavior can drift across pages.
- `blog.html` contains multiple article sections in one file. Long hidden sections can make page management and mobile testing harder.
- The calculator uses wide controls, chart elements, tables, and result cards that should be manually tested on small screens.
- The directory grid and filter buttons may wrap on small screens and should be checked for tap spacing and horizontal overflow.

## 10. Design consistency issues

What matches:

- Inter is used across the current pages.
- The green accent `#16A34A` is used heavily.
- Background and surface colors generally match the documented system.
- Cards commonly use white backgrounds and borders.
- The hero sections generally use a dark green base.
- Calls to action are often green.

Issues to review:

- Card radius is not fully standardized. Some elements use 10px, 12px, 16px, 18px, 20px, and larger tokenized radii.
- AGENTS.md says cards should use an 18px border radius, but implementation varies across pages.
- `blog.html` uses black/dark affiliate blocks. These may conflict with the rule that calls to action must be green or white with a green border.
- Wealthsimple affiliate placements should be treated as the only near-term affiliate exception. Other platform/product mentions should stay neutral and non-affiliate unless explicitly approved later.
- Footer backgrounds are black/dark. This is probably acceptable for a footer, but footer calls to action should not become black buttons.
- Navigation is sticky and frosted, but it is duplicated instead of standardized.

## 11. Finance trust and disclaimer risks

Primary risks:

- Existing disclaimers say "Not financial advice," while AGENTS.md says not to say "financial advice." A safer phrase would be "For general educational information only."
- Some copy describes a "personalized" plan. This should be changed to "general suggested next steps" or similar language.
- Some content gives strong recommendations for specific accounts, funds, products, and platforms. These pages need stronger educational disclaimers and neutral language.
- `index.html` and `blog.html` include affiliate/product links before the dedicated affiliate disclosure and editorial policy pages exist. Best practice for now is to remove or neutralize non-Wealthsimple affiliate intent, keep any Wealthsimple affiliate link clearly labeled, and place a short disclosure before or near the link.
- Some copy references current rates, such as 4-5% annual percentage yield, which can become stale and should be date-qualified or generalized.
- Some copy describes debt payoff as a "guaranteed return." Even if mathematically common, the wording should be softened to avoid guaranteed-result framing.
- The generated plan disclaimer is more complete than the footer disclaimer, but it still uses restricted wording and refers users to a financial advisor.

Near-term monetization best practices:

- Do not add display ads, analytics scripts, affiliate scripts, or broad affiliate programs yet.
- Use Wealthsimple as the only approved affiliate candidate for now.
- Place a plain-English affiliate disclosure before or near every Wealthsimple affiliate link.
- Do not rank Wealthsimple above alternatives only because it may pay a commission.
- Keep Wealthsimple mentions useful even if the affiliate link is removed.
- Keep United States product mentions neutral and non-affiliate unless a specific partner is approved later.
- Create `affiliate-disclosure.html` and `editorial-policy.html` before expanding monetization.
- Do not apply for or implement Google AdSense until the site has enough original content, clear navigation, trust pages, a privacy policy, and a stable sitemap.
- Plan for AdSense readiness, but keep the first development phase focused on content quality and user experience. Google AdSense guidance highlights unique content, clear navigation, site ownership, and policy compliance before ads can run.
- When ads are eventually approved, place them conservatively so they do not look like navigation, buttons, calculators, or tool results.

## 12. Broken or risky internal links

Risky internal links and routing patterns:

- `Money Lessons` navigation and footer links point to `./directory.html`, while AGENTS.md requires `./money-lessons.html`.
- `money-lessons.html` is missing.
- `tools.html` is missing.
- Trust/legal page links are not present because the trust/legal pages are missing.
- `blog.html` article cards use `href="#"` and JavaScript `onclick` handlers. These are not stable crawlable article URLs.
- No `robots.txt` exists.
- No `sitemap.xml` exists.

External or metadata link risks:

- `index.html` and `calculator.html` use `https://yourdomain.com` in canonical/Open Graph metadata.
- Several outbound product/resource links are present. They should be reviewed so Wealthsimple is the only affiliate candidate for now, all other product links remain neutral, and disclosure/editorial policy pages are added before monetization expands.

## 13. First 10 safest implementation tasks

1. Task name: Add `docs/SITE_AUDIT.md`
   - Why it matters: Creates the planning baseline for safe future work.
   - Files likely touched: `docs/SITE_AUDIT.md`.
   - Risk level: Low.
   - Should be done before monetization: Yes.

2. Task name: Add missing trust pages as simple static pages
   - Why it matters: Builds credibility and creates the foundation required before using even limited Wealthsimple affiliate links.
   - Files likely touched: `about.html`, `contact.html`, `privacy-policy.html`, `terms.html`, `disclaimer.html`, `affiliate-disclosure.html`, `editorial-policy.html`.
   - Risk level: Medium.
   - Should be done before monetization: Yes.

3. Task name: Add `robots.txt` and `sitemap.xml`
   - Why it matters: Helps search engines discover the current site structure.
   - Files likely touched: `robots.txt`, `sitemap.xml`.
   - Risk level: Low.
   - Should be done before monetization: Yes.

4. Task name: Standardize disclaimer wording
   - Why it matters: Aligns the site with the rule to use educational/general information language and avoid financial advice claims.
   - Files likely touched: `index.html`, `calculator.html`, `directory.html`, `blog.html`.
   - Risk level: Medium.
   - Should be done before monetization: Yes.

5. Task name: Fix placeholder canonical and Open Graph URLs
   - Why it matters: Prevents search engines and social platforms from seeing placeholder domain metadata.
   - Files likely touched: `index.html`, `calculator.html`, `directory.html`, `blog.html`.
   - Risk level: Low.
   - Should be done before monetization: Yes.

6. Task name: Decide and standardize the Money Lessons navigation path
   - Why it matters: Resolves the conflict between current `directory.html` behavior and the planned `money-lessons.html` page.
   - Files likely touched: `index.html`, `calculator.html`, `directory.html`, `blog.html`, possibly `money-lessons.html`.
   - Risk level: Medium.
   - Should be done before monetization: Yes.

7. Task name: Standardize footer links and labels
   - Why it matters: Reduces trust and navigation drift across pages.
   - Files likely touched: `index.html`, `calculator.html`, `directory.html`, `blog.html`.
   - Risk level: Medium.
   - Should be done before monetization: Yes.

8. Task name: Create `money-lessons.html` as a real static page
   - Why it matters: Supports the required navigation and separates educational lessons from the YouTube directory.
   - Files likely touched: `money-lessons.html`, possibly navigation links after approval.
   - Risk level: Medium.
   - Should be done before monetization: Yes.

9. Task name: Create `tools.html` as a static tools hub
   - Why it matters: Gives calculators and decision tools a clear destination before adding more calculators.
   - Files likely touched: `tools.html`.
   - Risk level: Medium.
   - Should be done before monetization: Yes.

10. Task name: Review and soften high-risk finance claims
    - Why it matters: Reduces trust risk around returns, guarantees, rates, Wealthsimple affiliate placement, other product mentions, and personalized recommendations.
    - Files likely touched: `index.html`, `calculator.html`, `blog.html`, possibly `directory.html`.
    - Risk level: Medium.
    - Should be done before monetization: Yes.

## 14. One-year growth and monetization direction

The owner wants MyMoneyAnswer to become a Google-first organic search asset that can eventually monetize through Google Ads and selected partners, with a target of at least $2,000 per month within one year. That target should guide prioritization, but it should not be treated as guaranteed.

Best strategic path:

- Build trust first. Add about, contact, privacy, terms, disclaimer, affiliate disclosure, and editorial policy pages before expanding product recommendations or ads.
- Fix technical Search Engine Optimization basics next. Standardize canonical URLs, Open Graph tags, H1 usage, schema, sitemap, robots file, and internal links.
- Make the main tool and calculators genuinely useful. The site should keep feeling like a financial decision tool, not a generic blog.
- Build crawlable content hubs. Prioritize `money-lessons.html`, `tools.html`, dedicated calculator pages, and static article pages that answer specific beginner questions.
- Publish fewer, better pages first. Each page should have original explanations, examples, disclaimers, related links, and a clear next action.
- Use Search Console data before scaling. Start with a small batch of high-quality pages, review impressions/clicks/queries, then expand only the topics that show traction.
- Keep monetization secondary until trust and traffic exist. Wealthsimple can remain the only near-term affiliate candidate with clear disclosure. Google Ads should wait until the site has enough original content and stable navigation.
- Avoid programmatic page spam. Do not create hundreds of near-duplicate pages that only swap amounts, locations, or keywords.

Suggested one-year sequence:

- Months 1-2: Foundation, trust pages, sitemap, metadata cleanup, navigation/footer standardization, disclaimer cleanup.
- Months 2-4: Core pages and content hubs, including money lessons, tools hub, emergency fund calculator, and debt payoff calculator.
- Months 3-8: Publish high-quality article clusters for emergency funds, debt payoff, beginner investing, United States accounts, Canada accounts, and calculator-led questions.
- Months 6-9: Review Search Console data, improve pages with impressions but low click-through rate, strengthen internal links, and create the first small programmatic test batch only where content can stay unique.
- Months 9-12: Prepare Google AdSense only after content depth, trust pages, and navigation are stable. Keep ad placement conservative and user-first.

Useful official references:

- Google Search Central SEO Starter Guide: `https://developers.google.com/search/docs/fundamentals/seo-starter-guide`
- Google Search Central helpful content guidance: `https://developers.google.com/search/docs/fundamentals/creating-helpful-content`
- Google Search Central structured data documentation: `https://developers.google.com/search/docs/guides/search-gallery`
- Google AdSense page readiness guidance: `https://support.google.com/adsense/answer/7299563`
- Google AdSense eligibility requirements: `https://support.google.com/adsense/answer/9724`

Best-practice monetization note:

- Until the trust pages are live, treat monetization as paused except for clearly disclosed Wealthsimple references that the owner explicitly wants to keep.
- After trust pages are live, review all current product links and convert only approved Wealthsimple links into affiliate placements.
- Do not add Amazon Associates, display ads, finance affiliate networks, tracking pixels, analytics, or scripts without explicit approval.
