# Part E: Planned quality verification

**SIMULATED TUTORIAL TARGETS — procedures have not been run against an application.** This repository contains specifications and a text storyboard, not a working SoopiFood implementation. `verification_report.md` reports document checks separately.

| Procedure | NFR | Planned evidence and acceptance oracle | Prerequisite |
|---|---|---|---|
| QV-01 | NFR-01 | Capture request-to-usable-confirmed-data latency at the agreed peak workload; p95 ≤2 seconds. | Executable tablet/service and recorded fixture. |
| QV-02 | NFR-02 | Capture submission-to-service-confirmation online latency; p95 ≤1.5 seconds. Outage cases recorded separately. | Executable changes and available-network fixture. |
| QV-03 | NFR-03 | Snapshot known service-confirmed changes, disconnect for 2 minutes, reconnect and compare committed identifiers/contents; 0 lost. | Fault-injection harness and authoritative service records. |
| QV-04 | NFR-04 | Interrupt before/after commit, retry according to approved recovery rules, measure authoritative reconciliation; p95 ≤10 seconds and 0 duplicate committed changes. | FQ-06 recovery/conflict decision plus executable harness. |
| QV-05 | NFR-05 | Run every approved wrong-restaurant read/write identity combination; 0 successful unauthorised operations. | Approved restaurant/role matrix and identities. |
| QV-06 | NFR-06 | Seed synthetic card-like values in upstream test inputs and inspect tablet/service payloads, persistence and logs; 0 retained PAN/CVV occurrences. | Executable integration, synthetic inputs and approved inspection boundary. |
| QV-07 | NFR-07 | Offer 2,000 orders/minute across 100 restaurants for 30 minutes; report offered/accepted/completed counts and NFR-01/NFR-02 distributions. | Recorded read/update mix, environment and admission/backpressure semantics `[TBC]`. |
| QV-08 | NFR-08 | Six representative managers each perform 20 predefined lookup tasks standing at a simulated counter; ≥108 of 120 trials correct within 5 seconds. | Actual consented participants, tasks and executable prototype. None recruited here. |
| QV-09 | NFR-09 | Enumerate changed FRs; each has a linked automated regression result; coverage 100% and each linked check passes. | Implementation diff and real test results. |
| QV-10 | NFR-10 | Run the agreed core workflows on both approved device/browser configurations; 100% cases pass on each. | Exact device models and versions `[TBC]`; real configurations. |
| QV-11 | NFR-11 | Seed records with ages around the approved retention boundary; verify deletion by the approved deadline. | Actual retention and deletion values `[TBC]`; privacy/data-owner approval. |
| QV-12 | NFR-12 | Enumerate every personal-data field used; 100% have actual purpose/access/retention approval; compare inventory with implementation. | Field inventory and actual approvals `[TBC]`. |

The story criteria in `epics_stories.md` provide the functional test oracles. A role-play answer is a provisional target; it is not proof of performance, usability, security or compliance. Product verification remains unexecuted even if all document checks pass.
