# MyMoneyAnswer Calculator Audit and Differentiation Plan

This audit covers the five core tool pages on MyMoneyAnswer. Each section reports the current on-page state, the top results currently ranking on Google for the primary query, a clear differentiation opportunity, and a prioritized task list. The goal is to make each calculator deserve to rank for at least one realistic query, then layer display ads on top of the resulting traffic.

## Shared Gaps Across All Five Calculators

These items are missing or weak on every tool page and should be fixed once, as a baseline, before per-calculator differentiation work.

- No `og:image` metadata. Social previews look bare. Add a branded image per page, ideally a screenshot of the tool itself.
- No `HowTo` Schema.org block. Every calculator has steps that can be expressed as `HowTo`, which is eligible for rich results.
- No visible "Last updated" date. Finance pages without dates lose trust and lose freshness signals.
- No site-wide author or reviewer block. The site uses "MyMoneyAnswer" as author with no human signal. This will not be solved by appearing as a personal author, but the `Organization` schema and `editorial-policy.html` block can be strengthened, and a paid contractor reviewer can be added later.

## 1. Money Decision Quiz — `index.html`

### Current State

- Title: "What Should I Do With My Money? Free Money Tool"
- Schema: `WebApplication` and `FAQPage`.
- Country toggle: yes, with `localStorage` persistence.
- H1: single, correct.
- Internal links: twenty-one, strong.
- Missing: `og:image`, `HowTo` schema, last updated date.
- Page weight: 155 KB single HTML file, on the heavy side. Mobile experience needs measurement.

### Top Google Results For This Query Space

Searching "what should I do with my money quiz tool":

- MyMoneyAnswer already ranks for this very specific tail.
- Ramsey Solutions: personality-style "What Would You Do" quiz, no decision output.
- Schwab MoneyWise: "Financial Fitness Quiz", knowledge test format.
- Fidelity: financial literacy quiz, knowledge format.
- AARP: budget challenge quiz.
- Ally: budgeting style quiz.
- Citizens Bank: savings personality quiz.

The pattern is clear: every competitor is a personality or knowledge quiz. Almost none of them returns a practical next-step decision for the user's actual money. That is MyMoneyAnswer's differentiator. The competitive space for "decision quiz that outputs an action plan" is wide open.

### Differentiation Opportunity

Lean harder into "decision quiz that produces a country-aware action plan" rather than "personality quiz". Specifically:

- Reframe the value proposition above the fold around the decision output, not the questions. Current copy is about the four questions. Better copy makes the answer the hero.
- Add a visual "your path" diagram of the recommended sequence after the result. Personality quizzes do not do this. A simple ordered step list with icons gives a tangible takeaway.
- Show a small comparison table of "what you should do" versus "what most people do" using public survey data. This adds context that other quizzes never include.
- Expose the country toggle more visibly at the top so it becomes part of the page identity. Most competitors are United States only.

### Target Queries

Primary: "what should I do with my money", "next best money move", "money decision tool".
Secondary: "what to do with my money tool", "what is my next money step", "what should I do with extra money".
Country tail: "what should I do with my money canada", "money decision tool canada".

### Prioritized Tasks

1. Add `og:image` with a screenshot of a sample result card.
2. Add `HowTo` schema describing the four-step quiz flow.
3. Add a visible "Last updated" date below the H1.
4. Add a static fallback summary of the decision logic in HTML below the interactive quiz so search engines can index the recommended path without depending on JavaScript.
5. Add three internal links from the result screen to the matching calculators: emergency fund, debt payoff, investment.

## 2. Investment Calculator — `calculator.html`

### Current State

- Title: "Investment Calculator — See How Your Money Grows | MyMoneyAnswer"
- Schema: `WebApplication`. No FAQ schema.
- Country toggle: present.
- H1: single, correct.
- Internal links: thirteen.
- Missing: FAQ schema, `og:image`, `HowTo` schema, last updated date.

### Top Google Results For This Query Space

Searching "compound interest calculator":

- Investor.gov (SEC official).
- Calculator.net.
- NerdWallet.
- SoFi.
- TD Canada Trust.
- Schwab MoneyWise.
- Financial Mentor.
- MD Financial Management (Canada).

This is one of the hardest SERPs to crack. Investor.gov is an official government source. Calculator.net is the dominant general-purpose calculator domain. NerdWallet is editorial authority. Pure "compound interest calculator" is not a realistic ranking target.

### Differentiation Opportunity

Stop competing for "compound interest calculator". Reframe this page around a more specific intent that the giants do not serve well:

- "How much will my investments grow with inflation adjusted?" Add an inflation toggle that shows nominal vs real returns side by side. Investor.gov shows nominal only. NerdWallet shows nominal only.
- "How much retirement income will my investments produce?" Add a translation of the final balance into a sustainable monthly income at 3.5 percent or 4 percent withdrawal. This converts an abstract number into something a beginner can feel.
- "What changes if I start now versus five years later?" Add a "delay cost" comparison. Show the user what skipping years costs them. This is a strong shareable moment.
- "Country-aware account context." Show a Canada column referencing TFSA, RRSP, FHSA contribution context, and a US column referencing Roth IRA and 401(k) limits. Calculator.net does not do this. The official sites do not do this.

### Target Queries

Primary, realistic: "investment calculator with inflation", "retirement income calculator", "compound interest calculator with monthly contribution and inflation".
Secondary: "how much will my investments grow", "delayed investing cost calculator", "compound interest calculator canada with tfsa".

### Prioritized Tasks

1. Add an inflation toggle and second result line "real return after inflation".
2. Add a "monthly retirement income at 4 percent" line.
3. Add a "delay cost" mini chart comparing starting now vs in five years.
4. Add `FAQPage` schema with six beginner questions about compound interest and contribution timing.
5. Add `og:image` with a screenshot of the growth chart.
6. Add a 1,000 word educational block below the calculator covering inflation, fees, taxable versus tax-advantaged accounts, with country tabs.

## 3. Emergency Fund Calculator — `emergency-fund-calculator.html`

### Current State

- Title: "Emergency Fund Calculator | MyMoneyAnswer"
- Schema: `WebApplication` and `FAQPage`.
- Country toggle: present.
- Inputs: housing, groceries, insurance, debt, other, current savings, monthly target.
- Internal links: seventeen.
- Missing: `og:image`, `HowTo` schema, last updated date.

### Top Google Results For This Query Space

Searching "emergency fund calculator":

- Navy Federal Credit Union.
- NerdWallet.
- PNC Bank.
- SoFi.
- Empower.
- Fifth Third Bank.
- USAA Educational Foundation.
- Ally.
- Western Southern.
- Flagstar.

These are almost entirely bank-owned calculators. They tend to be simple, mostly identical, and built primarily as lead gen for the bank's savings products. None of them adjusts the recommended months based on the user's situation in a meaningful way.

Searching "emergency fund calculator canada":

- GetSmarterAboutMoney.ca (OSC official).
- Canada.ca government guidance.
- Hardbacon.
- Prosper Canada.
- NerdWallet Canada.
- Dinkytown (Canadian variant).

The Canada SERP is less saturated than the United States SERP, especially for tail queries like "emergency fund calculator canada self employed".

### Differentiation Opportunity

The single strongest move is situation-aware recommended months. Bank calculators all use "3 to 6 months" as a static target. MyMoneyAnswer can adjust the recommendation automatically based on selectable situation tags:

- Single income household.
- Dual income household.
- Self-employed or variable income.
- Family with dependents.
- Renters versus owners.
- Industry stability rough estimate.

Each combination maps to a different recommended months range with a short explanation of why. This is the biggest content gap in the SERP.

Other strong moves:

- Show a side-by-side of "starter fund of $1,000" versus "three months" versus "six months" with months-to-build under three contribution scenarios.
- Show country-specific account options for where to keep the emergency fund: HYSA in US, HISA in Canada, with linked educational pages.
- Add a downloadable plan PDF that the user can keep, branded with the calculation inputs and timeline. This is a strong return-visit hook and an early product candidate.

### Target Queries

Primary: "emergency fund calculator", "how much emergency fund do I need calculator".
Realistic primary: "emergency fund calculator for self employed", "emergency fund calculator with situation".
Secondary: "emergency fund calculator canada", "starter emergency fund calculator".
Tail: "how much should I save before investing calculator", "emergency fund target by income".

### Prioritized Tasks

1. Add situation selector that adjusts the recommended months automatically. This is the headline differentiator.
2. Add the three-tier comparison: starter fund, three months, six months, with timeline at three contribution levels.
3. Add Canada and United States account context blocks below the tool.
4. Add `og:image`, `HowTo` schema, last updated date.
5. Add a 1,200 word educational block covering when to start, how to size, where to keep, and how to rebuild after use, with internal links to `where-to-keep-emergency-fund.html`, `emergency-fund-for-self-employed.html`, and `starter-emergency-fund.html`.

## 4. Debt Payoff Calculator — `debt-payoff-calculator.html`

### Current State

- Title: "Debt Payoff Calculator | MyMoneyAnswer"
- Schema: `WebApplication` and `FAQPage`.
- Country toggle: present.
- Multi-debt input with add-debt button.
- Avalanche versus snowball comparison logic appears to be implemented.
- Internal links: seventeen.
- Missing: `og:image`, `HowTo` schema, last updated date.

### Top Google Results For This Query Space

Searching "debt payoff calculator avalanche snowball":

- Debt Destroyer (US government, finred.usalearning.gov).
- MagnifyMoney.
- Monarch.
- Calculator.me.
- Financial Mentor.
- Affinity Plus Federal Credit Union.
- Ryan O'Connell Finance (CFA personal site).
- Undebt.it.
- Relief.app.
- Money Fit "Debt Racer".

Several of these calculators are visually weak or limited to a small number of debts. Undebt.it is functionally strong but cluttered. Monarch is clean but limited. Money Fit's "Debt Racer" is the strongest engagement-driven competitor because it animates the comparison.

Searching "debt payoff calculator canada":

- GetSmarterAboutMoney.ca.
- Credit Canada.
- Debt.ca.
- Ratehub.ca debt consolidation calculator.
- Calculator.net.
- Canada.ca official tools.

Again, the Canada SERP has more room.

### Differentiation Opportunity

The strongest move is interest difference clarity. Most calculators output two timelines side by side. Few output one large headline number: "Avalanche saves you $X versus snowball over the full payoff." That single number is more shareable and more aligned with intent than two timelines.

Other strong moves:

- A combined chart that overlays both methods on the same axis with shaded interest area, instead of two separate cards.
- A "what if I add $50, $100, $250 extra per month" slider that updates both timelines and the savings headline.
- Country-specific debt context: US average credit card APR versus Canadian credit card APR with the source dated, so the page stays freshness-signal positive.
- Worked examples for common debt mixes: "two credit cards plus one car loan", "three credit cards", "credit card plus student loan", each with a precomputed result that proves the calculator handles realistic situations.

### Target Queries

Primary, hard: "debt payoff calculator", "debt avalanche calculator".
Realistic primary: "debt payoff calculator avalanche vs snowball comparison", "avalanche vs snowball calculator", "debt payoff calculator with extra payments".
Country tail: "debt payoff calculator canada", "credit card debt payoff calculator canada".

### Prioritized Tasks

1. Add a single headline result "Avalanche saves you $X over snowball" prominently above the two timelines.
2. Add an extra payment slider that updates both methods.
3. Add three worked example presets the user can click to pre-fill realistic debts.
4. Add `og:image`, `HowTo` schema, last updated date.
5. Add country context blocks with sourced average APR ranges and clear date qualification.
6. Add a 1,200 word educational block linking to `debt-avalanche-vs-snowball.html`, `minimum-payment-trap.html`, `how-to-pay-off-credit-card-debt.html`.

## 5. Budget Planner — `budget-planner.html`

### Current State

- Title: "Monthly Budget Planner | Free Beginner Budget Tool"
- Schema: `WebApplication` and `FAQPage`.
- Country toggle: present.
- Inputs: income, housing, groceries, insurance, flexible, minimum debt, emergency savings.
- Visual: needs versus wants bars and percentages.
- Internal links: fifteen.
- Missing: `og:image`, `HowTo` schema, last updated date.

### Top Google Results For This Query Space

Searching "monthly budget planner calculator free":

- Quicken.
- Ramsey Solutions.
- Calculator.net.
- Money Management.
- Schwab MoneyWise.
- Citizens Bank.
- PocketGuard.
- SmartAsset.
- BankFive.
- SoFi.

This SERP is owned by software vendors (Quicken, PocketGuard), educators (Ramsey, MoneyManagement), banks, and SmartAsset. Most calculators are either rigid 50/30/20 fixed templates or oversimplified.

### Differentiation Opportunity

The strongest move is method comparison. Let the user toggle between three budgeting methods (50/30/20, 70/20/10, zero-based) and see how the same income redistributes under each. No one in the SERP does this clearly. Most pages assume one method.

Other strong moves:

- Auto-categorize entered expenses into needs, wants, and savings based on the field they were entered into, then color-code over- or under-allocation against the selected method.
- Show "leftover" as the most important headline number, with three suggested uses (starter emergency fund, debt extra, investing) that link to the matching calculator.
- Country toggle that adjusts examples: in Canada, replace 401(k) examples with RRSP; in the US, mention HYSAs.
- Downloadable budget sheet PDF as the secondary engagement hook and potential paid product.

### Target Queries

Primary, hard: "budget calculator", "monthly budget planner".
Realistic primary: "50/30/20 vs zero based budget calculator", "monthly budget planner with method comparison".
Tail: "beginner budget planner", "budget planner canada", "budget calculator with categories".

### Prioritized Tasks

1. Add a method toggle (50/30/20, 70/20/10, zero-based) that re-renders the allocation visualization.
2. Highlight the leftover amount as the headline result with three next-step links.
3. Add `og:image`, `HowTo` schema, last updated date.
4. Add the PDF download in a way that does not require email capture initially, then experiment later.
5. Add a 1,000 word educational block on how to pick a method, with internal links to `budget-categories.html`, `needs-vs-wants-budget.html`, `50-30-20-budget-rule.html`, `how-to-budget-money.html`.

## Recommended Implementation Order

If only one calculator can be upgraded first, choose **emergency fund calculator**. Reasons:

- Bank-owned competitors are functionally weak. Most ignore situation context.
- The "self employed", "variable income", and "Canada" tails are realistically winnable.
- The change has a clear, shippable scope: add a situation selector and three-tier comparison.
- The page is already medium quality, so the lift is incremental, not a rewrite.

Second priority: **debt payoff calculator**, because the avalanche-versus-snowball headline savings reframing is one focused change with high competitive payoff.

Third priority: **money decision quiz** improvements, because the SERP is wide open and the lift is mostly copy plus result visualization.

Fourth: **budget planner** method toggle.

Fifth: **investment calculator** inflation and retirement income overlay. This is the hardest SERP to crack, so make it last and treat traffic gains here as a bonus.

## Shared Baseline Tasks To Apply To All Five Pages

1. Add `og:image` per page with a tool screenshot.
2. Add `HowTo` schema describing the steps.
3. Add a visible "Last updated" date directly under the H1.
4. Verify mobile Core Web Vitals in Search Console once traffic exists.
5. Standardize an in-page footer block on each calculator that links to the other four tools and to `tools.html`.

## What Not To Do

- Do not chase "compound interest calculator" or "budget calculator" as primary queries. These SERPs are not winnable in the relevant timeframe.
- Do not add ad scripts to any calculator before its educational content block exists and Core Web Vitals are measured.
- Do not turn the differentiators into hidden features. They must be visible on first scroll for a user who lands cold from search.
