# DoD audit: SF-06 Apply a promo code at checkout (PR #42)

| Item | Status | Evidence |
|---|---|---|
| D1 All acceptance criteria pass | ❌ not met | `13 scenarios (12 passed, 1 failed)` and `FAILED: Code still valid on its valid-until date` (`got:      rejected with reason EXPIRED`). The "All acceptance tests pass ✅" claim in the description is contradicted by the log. |
| D2 Reviewed by at least one other team member | ❌ not met | `**Reviewers:** none requested`. `Self-reviewed, and reviewed by Copilot` is not an approving review from a non-author. |
| D3 Linter and type checker pass | ❌ not met | Lint: `ruff check src tests ... passed`. Type checker: `mypy src ... SKIPPED (job disabled in ci.yml)`. |
| D4 Integration tests pass | ✅ met | `[integration]  pytest tests/integration ....... 4 passed` |
| D5 Money is integer VND, no floating point | ❌ not met | `raw = cart.food_subtotal * promo.value / 100` (`/` returns a float), then `discount = int(raw // 1000) * 1000`. |
| D6 Deployed to staging and manually tested | ❌ not met | `[deploy]       staging ... not run (manual trigger)`. There is no staging link or test note, and the description says `Will deploy to staging after merge`. |

**Verdict: SF-06 is not Done. Only 1 of 6 items (D4 Integration tests pass) has evidence, even though the PR is labelled `ready-to-merge`.**

## Next steps for the author

| # | Task | Closes |
|---|---|---|
| 1 | Fix the expiry check so a code is accepted on its valid-until date, then re-run the acceptance job. | D1 All acceptance criteria pass |
| 2 | Replace the float `/ 100` in `discount_for` with integer arithmetic (`//`). | D5 Money is integer VND, no floating point |
| 3 | Re-enable the mypy job, request an approving review from a non-author, and deploy to staging with a link and test note. | D3 Linter and type checker pass, D2 Reviewed by at least one other team member, D6 Deployed to staging and manually tested |
