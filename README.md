# SoopiFood Requirements Engineering Lab

**Submitted by:** Nguyễn Đôn Đức (Nguyen Don Duc)

**Lab:** Chapter 2 — Requirements Engineering with AI agents

**Date:** 3 November 2026

**Repository:** [edward1503/soopifood-requirements-lab](https://github.com/edward1503/soopifood-requirements-lab)

**Working persona:** Sam, the Manager Covering the Counter

Individual lab submission covering Parts A–I: interview design, research synthesis, personas, functional and non-functional requirements, backlog decomposition, MoSCoW prioritisation, change trade-offs, Gherkin acceptance criteria and a Definition of Done audit.

Start with the [submission summary](workspace/submission_summary.md), [activity record](workspace/activity_log.md) and [AI-use disclosure](AI_USAGE.md). Generated research, walkthroughs and stakeholder answers are **simulated tutorial data**. Reviews are assistant-performed; independent student or teammate approval is not asserted.

## Submission outputs

| Part | Main output | Drafts, inputs and reviews |
|---|---|---|
| A — Interview guide | [Revised guide](workspace/interview_guide_v2.md) | [Draft 1](workspace/interview_guide_v1.md), [review](workspace/interview_guide_review.md) |
| B — Personas | [Revised personas](workspace/personas_v2.md) | [I1–I8/O1–O2 simulations](workspace/research_notes.md), [draft 1](workspace/personas_v1.md), [source audit](workspace/personas_review.md) |
| C — Functional requirements | [24 revised FRs](workspace/functional_requirements.md) | [Stories](workspace/user_stories_v1.md), [storyboard](workspace/prototype_storyboard.md), [W1–W4](workspace/walkthrough_notes.md), [draft 1](workspace/functional_requirements_v1.md), [review](workspace/requirements_review.md) |
| D — Non-functional requirements | [12 revised NFRs](workspace/non_functional_requirements.md) | [Draft 1](workspace/non_functional_requirements_v1.md), [review](workspace/non_functional_requirements_review.md), [questions and simulated answers](workspace/stakeholder_clarifications.md) |
| E — Epics and stories | [Revised backlog](workspace/epics_stories.md) | [Draft 1](workspace/epics_stories_v1.md), [review](workspace/backlog_review.md), [coverage](workspace/coverage_matrix.md), [planned product checks](workspace/verification_plan.md) |
| F — MoSCoW | [Stakeholder-informed plan](workspace/moscow.md) | [Round 1](workspace/moscow_round1.md), [review](workspace/moscow_review.md) |
| G — Scope changes | [Decisions and allocation](workspace/scope_changes.md) | [Arithmetic review](workspace/scope_changes_review.md) |
| H — Acceptance criteria | [Rewritten Gherkin](workspace/discount_v2.feature) | [Rule-free draft](workspace/discount.feature), [rule review](workspace/review.md), [boundary check](workspace/acceptance_criteria_check.md) |
| I — Definition of Done | [Audit and next steps](workspace/dod_audit.md) | [Claim/evidence cross-check](workspace/dod_review.md) |

Additional records: [sample comparison](workspace/sample_comparison.md), [first-round hashes](workspace/first_round_manifest.json), [input hashes](workspace/input_manifest.json), [verification report](workspace/verification_report.md) and [machine-readable results](workspace/verification_results.json).

## Main results and limits

- All 24 FRs and 12 NFRs have planned backlog coverage; no tablet story points or completed-story claims are assigned.
- The supplied release backlog plans 50/50 points at 32 Must, 10 Should, 8 Could after context. The mandatory change yields 34/10/6, still 50/50, with an explicit ratio exception.
- The final feature has three rule-boundary scenarios. Syntax and arithmetic checks do not execute a checkout application.
- The supplied mock PR is **not Done**; its acceptance failure, skipped type check, float arithmetic, missing approval evidence and unrun staging are documented.
- Quality targets are provisional; several rules and privacy/configuration approvals remain `[TBC]`.

## Reproduce document verification

Requires Node.js 22 or later. From this repository root:

```powershell
npm ci
npm run verify
```

The command parses YAML and Gherkin, checks references and coverage, recalculates points and promo examples, checks DoD quotations and validates local Markdown links. It regenerates coverage and verification reports. It does not run the hypothetical application or certify the simulations.

## Original tutorial run guide

Chapter 2, Requirements Engineering with AI agents (SoopiFood). The tutorial has 12 numbered prompts, grouped into Parts A–I. The handout with the learning objectives and review questions is [`TUTORIAL.md`](TUTORIAL.md). Provided prompts, inputs and sample solutions are course materials, distinguished from the AI-assisted submission outputs.

## Setup

1. Clone the repository and open it with your AI coding agent. The agent must be able to read and write files.
2. Work from this repository root. Output is in `workspace/`, deliberately tracked for this submission. Prompts use `tutorial/` paths for a parent-directory setup; resolve them here as `starter/` and `workspace/`.
3. The tutorial recommends a new agent session for each part (A–I), with H's rewrite continuing its writer session. This submission used one conversation; context-order and review limitations are disclosed in the activity record and AI-use disclosure.

## Layout

```
tutorial/
├── TUTORIAL.md          handout: objectives, plan, review questions
├── README.md            this file
├── starter/
│   ├── prompts/         01 … 12: copy-paste prompts, in order
│   └── backlog.yaml, stakeholder_notes.md, change_requests.yaml,
│       business_rules.md, DEFINITION_OF_DONE.md, pr_sf06.md   input files
├── solutions/           sample outputs, same numbering as the prompts
└── workspace/           your agent's output goes here
```

## Steps

Each step: paste the prompt (or tell the agent to read it), check the output in `workspace/`, then compare with `solutions/` **only after** you have reviewed it yourself.

### Parts A–E: Elicit and specify

These parts must be run in order, and each needs the output of the one before: **B needs A's interview guide** (use it to run the interviews and write notes I1–I8, O1–O2), **C needs B's persona** (write its user stories and walkthrough notes W1–W4), **D needs C's FRs**, and **E needs B, C and D**. Paste the inputs where the prompt says `[Paste … here]`.

| # | Part | Prompt in `starter/prompts/` | Input you provide | Compare with `solutions/` |
|---|---|---|---|---|
| 1 | A | `01_interview_guide.md` | none | `01_interview_guide.md` |
| 2 | A | `02_interview_guide_iterate.md` (in the same session) | the guide from step 1 | `02_interview_guide_iterate.md` |
| 3 | B | `03_personas.md` | interview and observation notes (I1–I8, O1–O2), from running the interviews with the guide from step 2 | `03_personas.md` |
| 4 | C | `04_functional_requirements.md` | the persona from step 3 → its user stories, plus walkthrough notes (W1–W4) | `04_functional_requirements.md` |
| 5 | D | `05_non_functional_requirements.md` | the FRs from step 4 | `05_non_functional_requirements.md` |
| 6 | E | `06_epics_stories.md` | persona, FRs, NFRs from steps 3–5 | `06_epics_stories.md` |

### Parts F–I: Plan, specify, verify

All inputs are in `starter/`. Output file names below are the ones the prompts tell the agent to write in `workspace/`.

| # | Part | Prompt | Agent output (`workspace/`) | Compare with `solutions/` |
|---|---|---|---|---|
| 7 | F | `07_moscow_round1.md`: backlog only | `moscow_round1.md` | `07_moscow_round1.md` |
| 8 | F | `08_moscow_round2.md`: add `stakeholder_notes.md` | `moscow.md` | `08_moscow_round2.md` |
| 9 | G | `09_change_requests.md` | `scope_changes.md` | `09_scope_changes.md` |
| 10 | H | `10_criteria_writer.md`: writer, no business rules | `discount.feature` | `10_discount_v1.feature` |
| 11 | H | `11_criteria_review_rewrite.md`: **same window**; gives the agent `business_rules.md` | `review.md`, `discount_v2.feature` | `11_review.md`, `11_discount_v2.feature` |
| 12 | I | `12_dod_audit.md` | `dod_audit.md` | `12_dod_audit.md` |

## Review after every step

Use the loop from the handout: **Round 1 → Review → Iterate with more context → Review**. Always ask: *what did the agent not know?* Details and the checks for each part are in [`TUTORIAL.md`](TUTORIAL.md).

## Notes

- Agent output differs from run to run, so the files in `solutions/` are samples, not expected answers.
- Do not edit `solutions/`; the student's own outputs in `workspace/` are tracked in this individual submission.
- Nothing in this folder is committed automatically.
