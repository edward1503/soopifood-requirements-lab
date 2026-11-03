# Part D: Non-functional requirements — draft 1

**SIMULATED TUTORIAL DATA.** Scope: restaurant tablet plus the order service behind it. Prompt 05 supplies peak hours, interrupted shared Wi-Fi, standing/glancing use, EU personal-data context and third-party payment handling. It supplies no numeric service targets. Every missing threshold is therefore `[TBC]` in this first draft.

| ID | Category | Requirement | Conditions | How to test it | Related FRs |
|---|---|---|---|---|---|
| NFR-01 | Performance | p95 order/state retrieval latency shall be at most `[TBC]` seconds. | Dinner peak 18:00–21:00; workload `[TBC]`. | Measure end-to-end retrieval samples under an agreed load. | FR-01, FR-02, FR-03, FR-11, FR-14, FR-15, FR-16, FR-23 |
| NFR-02 | Performance | p95 online change-confirmation latency shall be at most `[TBC]` seconds. | Available network; agreed peak workload `[TBC]`. | Time request-to-service-confirmation for decisions and updates. | FR-04, FR-05, FR-06, FR-09, FR-10, FR-12, FR-13, FR-17, FR-19, FR-21, FR-22, FR-24 |
| NFR-03 | Reliability | The number of previously confirmed changes lost during an interruption shall be at most `[TBC]`. | Shared Wi-Fi interruption of `[TBC]` minutes. | Compare confirmed records before/after a fault-injection drill. | FR-07, FR-11, FR-14, FR-20 |
| NFR-04 | Reliability | p95 attempted-change reconciliation time shall be at most `[TBC]` seconds after reconnection. | Recovery and duplicate policy `[TBC]`. | Replay interrupted submissions and inspect service outcomes. | FR-07, FR-12, FR-13, FR-19 |
| NFR-05 | Security | Successful unauthorised cross-restaurant operations shall total `[TBC]` in the approved test matrix. | Restaurant and role matrix `[TBC]`. | Attempt reads and writes with wrong-restaurant identities. | FR-01, FR-04, FR-05, FR-08, FR-09, FR-10, FR-16, FR-19, FR-21, FR-22, FR-23, FR-24 |
| NFR-06 | Security | Retained PAN/CVV occurrences in tablet/order-service storage or logs shall total `[TBC]`. | Card handling remains with a third-party provider. | Inspect captured data and logs using synthetic card data. | FR-01, FR-02, FR-16, FR-20, FR-21, FR-24 |
| NFR-07 | Scalability | The service shall sustain `[TBC]` restaurants at `[TBC]` orders/minute each for `[TBC]` minutes within agreed latency targets. | Dinner peak. | Load test while measuring NFR-01/NFR-02. | FR-01, FR-04, FR-05, FR-07, FR-11, FR-12, FR-13 |
| NFR-08 | Usability | At least `[TBC]`% of reference/state lookup tasks shall finish correctly within `[TBC]` seconds. | Standing counter simulation; tasks and participant count `[TBC]`. | Observe timed tasks with representative managers. | FR-01, FR-02, FR-11, FR-14, FR-15, FR-16, FR-23 |
| NFR-09 | Maintainability | `[TBC]`% of changed FRs shall link to passing automated regression checks before release. | Each behaviour change. | Audit change-to-FR-to-test traceability and results. | FR-04, FR-05, FR-09, FR-10, FR-12, FR-13, FR-19, FR-24 |
| NFR-10 | Portability | `[TBC]`% of agreed core workflow cases shall pass on each approved tablet/browser configuration. | Device/browser matrix `[TBC]`. | Repeat the same functional cases across the matrix. | FR-01, FR-04, FR-08, FR-09, FR-10, FR-11, FR-14, FR-16, FR-19 |
| NFR-11 | Compliance | Personal records shall be deleted within `[TBC]` of their approved retention limit. | Data categories and retention durations `[TBC]`. | Seed expired records and inspect deletion at the approved deadline. | FR-20, FR-21, FR-22, FR-23, FR-24 |
| NFR-12 | Compliance | `[TBC]`% of personal-data fields shall have an approved purpose, access rule and retention decision before rollout. | EU-customer context from prompt 05. | Review field inventory against actual approvals. | FR-01, FR-02, FR-03, FR-16, FR-20, FR-21, FR-22, FR-24 |

## Stakeholder questions

Resolve workload and latency (NQ-01–NQ-02), loss/recovery tolerance (NQ-03), lookup task conditions (NQ-04), access/payment boundaries (NQ-05), regression gate (NQ-06), device matrix (NQ-07) and privacy decisions (NQ-08–NQ-09). The role-play round and its limitations are recorded in `stakeholder_clarifications.md`.
