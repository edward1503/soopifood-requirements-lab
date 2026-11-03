# Submission verification

**Status: PASS — 21/21 document checks passed.**

Run with `npm ci` followed by `npm run verify`. Results are reproducible from the tracked inputs and artifacts.

| Check | Status | Detail |
|---|---|---|
| Required output files exist | PASS | 35 non-empty activity outputs |
| Interview guide structure | PASS | 10 questions, 20 optional probes, 6 sections in each guide |
| Simulated research and walkthrough source identifiers | PASS | 8 interviews, 2 observations, 80 interview entries, 4 walkthroughs |
| Revised persona structure and source tags | PASS | 3 personas; 4 sections each; all 48 bullets source-tagged |
| Functional requirements: IDs, source references and behaviour form | PASS | 24 unique, source-linked atomic FR rows |
| NFR IDs, categories, thresholds, procedures and FR references | PASS | 12 NFRs, 8 categories; real privacy threshold remains TBC |
| Stories: vertical-role text, criterion count and references | PASS | 10 manager-visible stories, 3–4 criteria each, no point estimates |
| Complete planned requirement coverage | PASS | 24/24 FRs and 12/12 NFRs have story owners; execution unclaimed |
| Supplied YAML IDs and estimates | PASS | 15 stories / 58 source points, 2 requests, capacity 50 |
| Planning allocations preserve titles, estimates and uniqueness | PASS | All allocations use exactly 50 points; 29/10/11 → 32/10/8 → 34/10/6 |
| Planning summaries match recalculated totals and percentages | PASS | Summary arithmetic and all percentage denominators agree |
| Changed markers, reasons and funded scope | PASS | Changed sets agree; +2 funded by −2; optional +8 deferred; ratio exception explicit |
| Preserved first-round artifacts | PASS | First-round MoSCoW and feature hashes unchanged |
| Provided course files unchanged | PASS | 34 supplied files match normalised hashes |
| Gherkin syntax and required scenario structure | PASS | Official Cucumber parser: 2 valid features, 3 scenarios each, one of each tag |
| Rewritten feature expectations against an integer reference oracle | PASS | 5 concrete expectations checked; reference model only, no application run |
| Additional reference-model boundary cross-checks | PASS | Five oracle boundaries; below-minimum remains absent from the mandated feature scenarios |
| DoD evidence quotations and six statuses | PASS | All exact quotes found; D4 met, D2 unknown, four failures, three next-step groups |
| Generated submission content has no credential-shaped strings | PASS | No GitHub-token-shaped strings in submission documents |
| README credits and output links | PASS | Author, description and A–I output links present |
| Local Markdown links resolve | PASS | 66 local Markdown links resolve |

## Practical limits

These checks cover documents, syntax, references, arithmetic and fixture evidence. They do not run a SoopiFood implementation or its Gherkin steps. Product checks in `verification_plan.md` remain unexecuted. Simulated research, assistant reviews, provisional targets and unresolved policy decisions retain those labels. The reference oracle adds a below-minimum check without claiming the feature itself contains that scenario. The supplied PR remains not Done.
