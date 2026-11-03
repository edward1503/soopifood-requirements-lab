# Chapter 2 lab submission — Nguyễn Đôn Đức

**Topic:** Requirements Engineering with AI agents — SoopiFood

**Date:** 3 November 2026

**Format:** Individual artifacts with AI drafting and assistant review

This submission follows Parts A–I: discovery questions, source-traceable personas, restaurant-tablet requirements, quality targets, a backlog, stakeholder-informed prioritisation, funded changes, acceptance criteria and a Definition of Done audit. The README links outputs, drafts and reviews.

## Results

Sam, primarily the counter manager in fictional I1/O1, is the working persona. The revised specification contains 24 FRs in five categories and 12 NFRs across eight quality categories. Ten manager-visible backlog slices provide planned coverage for all 36 requirements. Business-rule, privacy and configuration gaps remain explicit.

The separate supplied release backlog plans 50 points at 29/10/11 Must/Should/Could initially, then 32/10/8 after stakeholder context. The mandatory allergen change is funded by dropping two points of reorder convenience, producing 34/10/6 with 50 points still planned. The optional split-bill request is deferred and the ratio exception is documented.

The revised promo feature tests exact minimum, cap activation just above its limit and the first expired day. Its successful scenarios also use the inclusive last valid day and include the unchanged delivery fee. A below-minimum rejection remains an additional-test gap under the three-scenario limit.

The supplied PR is **not Done**: acceptance fails, type checking is skipped, money arithmetic uses a float and staging was not run. Human approval is unproven; integration testing is the only DoD item with passing evidence.

## What context changed

| Activity | Missing context | Effect |
|---|---|---|
| Guide | Neutrality check on implied tracking, effects and outside opinions. | Questions now allow other experiences. |
| Personas | Limits of individual incidents and different settings. | Claims became more specific and traceable. |
| FRs | Walkthrough feedback and decision rules. | Fields/preconditions clarified; unknown rules stayed open. |
| NFRs | Load, quality targets and real policy decisions. | Role-play made assumptions explicit; privacy approval remained unresolved. |
| Backlog | Complete requirement-to-slice mapping. | Missing privacy obligations gained planned coverage. |
| MoSCoW | Campaign, cash-use and trust context. | Promo/review priorities increased with source-based reasons. |
| Changes | Mandatory work with unchanged capacity. | Added scope required a funded removal. |
| Acceptance | Minimum, cap, fee and inclusive validity rules. | Unsupported policies were removed and boundaries checked. |
| DoD | Evidence behind the author's claims. | CI/diff evidence overrode the “done” description. |

All generated research and stakeholder answers are simulations. The prototype is textual; reviews are by the assistant. No implementation, real study, live CI run or legal approval is represented. Product checks in `verification_plan.md` remain planned. Document/parser/coverage/arithmetic checks are in `verification_report.md`; AI assistance is disclosed in `../AI_USAGE.md`.
