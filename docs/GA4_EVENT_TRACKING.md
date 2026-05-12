# GA4 Event Tracking Plan

Last updated: 2026-05-12

This document defines the analytics events used to measure the tool-first growth plan. The goal is to understand which pages attract users, which tools they start, which results they save, and which internal calls to action move readers toward a useful next step.

## Measurement ID

- Google Analytics 4 property: `G-337VQV0EV8`
- Shared client-side tracking helper: `site.js`

Do not add new analytics scripts without approval. Event tracking should reuse the existing `gtag` setup and the shared `window.trackEvent()` helper.

## Recommended Key Events

Mark these as key events in GA4:

- `money_tool_completed`
- `money_plan_downloaded`
- `emergency_results_downloaded`
- `debt_results_downloaded`
- `budget_csv_downloaded`
- `wealthsimple_affiliate_clicked`

Optional key events once there is more traffic:

- `tool_started`
- `internal_cta_clicked`
- `account_resource_clicked`

## Core Events

| Event | Purpose | Important parameters |
| --- | --- | --- |
| `tool_page_viewed` | A user landed on a priority tool or tools hub page. | `tool_name`, `page_path`, `page_title` |
| `tool_started` | A user interacted with a tool input, toggle, or option. | `tool_name`, `start_source` |
| `tool_option_selected` | A user selected a method, preset, or tool option. | `tool_name`, `option_type`, `option_value` |
| `internal_cta_clicked` | A user clicked a prominent internal call to action. | `link_url`, `link_text`, `source_tool` |
| `internal_recommendation_clicked` | A user clicked a related card, next card, or lesson card. | `link_url`, `link_text` |
| `tool_card_clicked` | A user clicked a tool card on the tools hub. | `tool_url`, `tool_name` |
| `account_resource_clicked` | A user clicked an account or platform resource card. | `link_url`, `link_text`, `is_affiliate` |
| `wealthsimple_affiliate_clicked` | A user clicked a Wealthsimple affiliate invite link. | `link_url`, `link_text` |
| `outbound_link_clicked` | A user clicked a non-affiliate external source/resource. | `link_url`, `link_text` |
| `faq_opened` | A user opened a frequently asked question. | `question` |

## Money Decision Tool Events

| Event | Purpose | Important parameters |
| --- | --- | --- |
| `money_tool_started` | A user answered the first quiz question. | `tool_name`, `start_source` |
| `money_tool_answered` | A user selected a quiz answer. | `country`, `question_id`, `answer_value`, `step_number` |
| `money_tool_completed` | A user reached the final educational plan. | `country`, `result_key`, `result_title` |
| `money_plan_downloaded` | A user downloaded the generated plan. | `country`, `result_key`, `result_title` |

## Calculator Download Events

| Event | Purpose | Important parameters |
| --- | --- | --- |
| `emergency_results_downloaded` | A user downloaded emergency fund results. | `country`, `monthly_essentials`, `recommended_target`, `savings_gap` |
| `debt_results_downloaded` | A user downloaded debt payoff results. | `country`, `payoff_method`, `total_debt`, `monthly_payment`, `interest_paid` |
| `budget_csv_downloaded` | A user downloaded budget planner results. | `country`, `income`, `planned`, `leftover` |

## Weekly Review

Review these questions weekly:

- Which landing pages are getting organic users?
- Which tool pages have `tool_page_viewed` but low `tool_started`?
- Which tools get started but do not produce downloads or next-step clicks?
- Which internal calls to action send users toward calculators or pillar pages?
- Are Wealthsimple clicks coming from the Canada investing flow, Wealthsimple review, or unrelated pages?

## Notes

- Event names are intentionally plain and stable so they can be marked as key events in GA4.
- The site does not currently add display ad scripts or new affiliate scripts.
- Events are educational-product behavior signals, not personalized financial data.
