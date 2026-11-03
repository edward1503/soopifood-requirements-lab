# Part E: Backlog review and iteration

**SIMULATED TUTORIAL DATA — assistant review, no implementation evidence.**

| Check | Draft 1 finding | Revised treatment |
|---|---|---|
| Hierarchy | Four epics, five features and nine manager-visible stories. | Retain the hierarchy; split issue recording from resolution for ten delivery slices. |
| FR coverage | All 24 FRs are listed. BL-05's criteria omit an explicit ready-update example; BL-08's criteria omit retained record fields. | Add those observable cases. |
| NFR coverage | NFR-11/NFR-12 explicitly uncovered; some other NFRs are listed without an acceptance-to-verification link. | Add privacy gates to the affected slices and a verification-plan link for every story. |
| Story size | BL-09 combines creating/owning an issue with resolution. | BL-09 delivers recording/ownership/open issues; BL-10 delivers the resolution outcome. |
| Criteria | Each story has two Given/When/Then criteria, but broad words such as “approved policy” need a decision gate. | Use 3–4 criteria per story, including quality verification and an explicit `[TBC]` gate. |
| Vertical slices | Stories describe visible manager outcomes rather than database-only or API-only work. | Preserve this shape; include dependent service work inside the slice. |
| Points and capacity | No points assigned, as prompt 06 requires. | Keep Part E unestimated. Part F uses a different ready-made full-app backlog. |
| Claim boundary | Coverage can be mistaken for executed verification. | State that the matrix is planned coverage; unknown policy blocks completion. |

The revised `epics_stories.md` covers every FR-01–FR-24 and NFR-01–NFR-12 through named slices and QV-01–QV-12 in `verification_plan.md`. NFR coverage is an obligation to verify, not a claim of passing tests. Unresolved privacy and matching/recovery policies remain open.
