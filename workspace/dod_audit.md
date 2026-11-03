# Part I: Definition of Done audit — SF-06 Apply a promo code at checkout

Sources limited to the supplied `DEFINITION_OF_DONE.md` and `pr_sf06.md`. The PR is a tutorial fixture, not a live GitHub pull request.

| DoD item | Status | Exact evidence from PR or CI |
|---|---|---|
| D1 All acceptance criteria pass | ❌ not met | `13 scenarios (12 passed, 1 failed)`; `FAILED: Code still valid on its valid-until date`. |
| D2 Reviewed by at least one other team member | ❓ cannot tell | `**Reviewers:** none requested`. No approving non-author team-member review is supplied. The author's self/Copilot-review claim does not establish one. |
| D3 Linter and type checker pass | ❌ not met | `[lint]         ruff check src tests ........................... passed`; `[typecheck]    mypy src ....................................... SKIPPED (job disabled in ci.yml)`. |
| D4 Integration tests pass | ✅ met | `[integration]  pytest tests/integration ....................... 4 passed`. |
| D5 Money is integer VND, no floating point | ❌ not met | `raw = cart.food_subtotal * promo.value / 100`. The division creates floating-point arithmetic; later integer conversion does not remove it. |
| D6 Deployed to staging and manually tested | ❌ not met | `[deploy]       staging ........................................ not run (manual trigger)`. No staging link or manual test note is supplied. |

**Verdict: SF-06 Apply a promo code at checkout is not Done.** Four items fail, one has missing evidence and only integration testing is evidenced as met.

| Order | Next task for the author | DoD item closed |
|---|---|---|
| 1 | Fix floating-point money arithmetic and the inclusive-expiry defect, then rerun every acceptance scenario successfully. | D5 Money is integer VND, no floating point; D1 All acceptance criteria pass. |
| 2 | Enable and pass type checking, then obtain a recorded approving review from another team member. | D3 Linter and type checker pass; D2 Reviewed by at least one other team member. |
| 3 | Deploy the corrected candidate to staging and attach its link plus a manual test note. | D6 Deployed to staging and manually tested. |
