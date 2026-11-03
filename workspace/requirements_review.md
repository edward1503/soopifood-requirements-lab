# Part C: Functional-requirements review

**SIMULATED TUTORIAL DATA — assistant review of draft 1.** Sources checked: Sam in `personas_v2.md`, US-01–US-12, W1–W4 and prompt 04. Draft 1 has 24 requirements, five required groups and the required four table columns. Each row has one principal system action; no UI layout or technology is prescribed.

| Finding | Evidence or ambiguity | Revision in `functional_requirements.md` |
|---|---|---|
| FR-02 should identify which dish a quantity belongs to. | W1.1 asks to read each dish's quantity. | Make the dish identity and its quantity one structured information item. |
| FR-05 records a reason but leaves the rejection decision implicit. | W1.4 concerns rejecting an order, not saving a detached note. | Record a rejection decision with its reason as one record. |
| FR-06 leaves estimate bounds unstated. | W1.5 explicitly leaves units and bounds open. | Keep both as `[TBC]`; do not invent minutes or a maximum. |
| FR-09/FR-10 need explicit restaurant scope. | W2.1 concerns that restaurant's dishes. | Scope the recorded availability decision; downstream propagation remains open. |
| “Current” in FR-11 could include an unconfirmed update. | W2.3–W2.4 distinguishes service-confirmed state from an attempted change. | Require the latest service-confirmed state; FR-07 covers unconfirmed changes. |
| FR-18 needs one comparison behaviour and unresolved normalisation rules. | W3.2 only establishes the illustrative mismatch. | State mismatch identification; leave normalisation `[TBC]`. |
| FR-19's “required collection checks” is vague. | W3.4 states reference match plus physical-check confirmation. | Name both preconditions, retaining override authority as `[TBC]`. |
| FR-20 omits required record fields. | W3.5 requests order reference and event time. | Include those fields in the retained record; retention stays `[TBC]`. |
| FR-24 should retain the agreed outcome. | W4.4 asks what was agreed, not only a resolved flag. | Include the manager's account in the resolution record. |

## Review outcome

All US-01–US-12 map to at least one final FR. All FR-01–FR-24 have a story and a walkthrough source. Distinct actions such as acceptance/rejection, unavailable/available and cooking/ready already have separate rows, so no artificial combined-behaviour defect was introduced for the iteration. Preconditions and fields of a single record are not treated as separate behaviours.

Questions and their provisional answers are in `stakeholder_clarifications.md`. Several decisions remain open, including automatic acceptance, reference normalisation, offline conflicts and privacy/retention. The simulated handover gate is explicitly sourced to W3.4 and is not attributed to the earlier interviews. A real stakeholder review remains outstanding.
