# Parts C–D: clarification questions and simulated stakeholder answers

**SIMULATED TUTORIAL DATA — AI role-play, not a real stakeholder or legal approval.** This file records a second context round. The operational and service-lead answers below are illustrative assumptions for the exercise. Where the role-play cannot justify a rule, `[TBC]` remains. They are targets for later verification, not measured results.

## Functional-rule questions

| ID | Question and source | Simulated response | Final treatment |
|---|---|---|---|
| FQ-01 | What is the automatic acceptance/rejection timeout? W1.3 | No decision. Opening an order does not accept it. | FR-04 retains decision rules `[TBC]`; no auto-timeout is assumed. |
| FQ-02 | What rejection reasons and format are mandatory? W1.4 | Capacity/unavailable are examples only. | FR-05 reason rules `[TBC]`. |
| FQ-03 | What units and limits apply to an estimate? W1.5 | Treat it as approximate; no bounds or units approved. | FR-06 keeps `[TBC]`. |
| FQ-04 | What does availability change do to existing orders? W2.1 | Record the restaurant's decision; do not infer cancellation or downstream timing. | FR-09/FR-10 scope to that decision; effect and propagation `[TBC]`. |
| FQ-05 | Which preparation transitions/corrections are allowed? W2.2 | Cooking and ready are useful discussion states; full state model unapproved. | FR-12/FR-13 transition rules `[TBC]`. |
| FQ-06 | What confirms a change and what happens offline? W2.4–W2.5 | Service confirmation distinguishes success; durable queuing and conflict rules undecided. | FR-07/FR-11/FR-14 distinguish state; offline policy `[TBC]`. |
| FQ-07 | What gates handover, and can a mismatch be overridden? W3.2–W3.4 | Retain the fictional manager's match-plus-check gate; no override or normalisation approved. | FR-18 matching `[TBC]`; FR-19 explicit gate and override `[TBC]`. |
| FQ-08 | Who can own an issue and what may be written? W4.2–W4.5 | Colleague ownership and an outcome account are wanted; permissions and content policy undecided. | FR-22/FR-24 keep policy `[TBC]`. |
| FQ-09 | How long are handover/issue records retained? W3.5/W4.5 | Requires actual privacy/data-owner review. | FR-20 and NFR-11 retain `[TBC]`. |

## Quality-target questions

Given constraints from prompt 05: dinner peak 18:00–21:00, shared Wi-Fi with interruptions, standing/glancing manager use, EU customer personal data and external payment-card handling. Those constraints contain no numeric performance, retention or usability thresholds.

| ID | Question | Simulated answer for the exercise | Status |
|---|---|---|---|
| NQ-01 | What load should define the peak test? | Service-lead role: 100 active restaurants, each receiving 20 orders/minute, for 30 minutes within the 18:00–21:00 test window. | Illustrative workload, not a measured demand forecast. |
| NQ-02 | How quickly must confirmed information appear online? | Manager role: p95 order/state retrieval at most 2 seconds; p95 decision/update confirmation at most 1.5 seconds under NQ-01 load. | Provisional targets. |
| NQ-03 | What consistency/recovery evidence is needed for an interruption? | Service-lead role: zero previously service-confirmed changes lost in a 2-minute disconnection drill; p95 reconciliation of an attempted change within 10 seconds of reconnection, with zero duplicate committed changes. | Provisional targets; recovery/conflict design still requires FQ-06. |
| NQ-04 | What is acceptable glance-task performance? | Manager role: at least 90% of order-reference/state lookup tasks completed correctly within 5 seconds, over 20 predefined tasks by each of 6 representative managers, standing in a counter simulation. | Proposed future study; no participants were tested. |
| NQ-05 | What access and payment-data boundaries are required? | Service-lead role: zero successful cross-restaurant unauthorised operations in the approved access-test matrix; zero PAN/CVV values retained in tablet/order-service storage or logs. | Tutorial security targets; access matrix and real approval `[TBC]`. |
| NQ-06 | What regression evidence supports maintainability? | Service-lead role: 100% of changed FRs linked to passing automated regression checks before release. | Provisional quality gate; no application tests exist here. |
| NQ-07 | Which tablet configurations must work? | Manager role: Android tablet with Chrome and iPad with Safari; 100% of the agreed core workflow cases must pass on each. | Exact devices/browser versions `[TBC]`; these are proposed families, not verified support. |
| NQ-08 | What retention/deletion policy applies? | Privacy-owner role: cannot approve a policy from these notes. Record types, retention durations and deletion deadlines need actual approval. | Keep `[TBC]`; do not claim legal compliance. |
| NQ-09 | How is permitted personal-data use checked? | Privacy-owner role: 100% of personal-data fields used by the tablet need a recorded purpose, access rule and approved retention decision before real rollout. | Proposed review gate; field inventory and actual approval `[TBC]`. |

These role-play answers make quality targets explicit for the lab. They do not turn an unresolved policy into a real stakeholder decision, nor do they establish that any target is technically achievable.
