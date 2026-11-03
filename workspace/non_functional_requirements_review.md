# Part D: NFR review and second context round

**SIMULATED TUTORIAL DATA — assistant review and AI stakeholder role-play.**

Draft 1 covers all eight requested categories with twelve numbered NFRs. Every requirement has a measurable quantity, a threshold placeholder, conditions, a test method and references to existing FRs. The placeholders are appropriate because prompt 05 gives no numeric service targets.

| Check | Finding | Revision |
|---|---|---|
| Numeric provenance | Peak hours are supplied; performance, load, fault duration and usability numbers are not. | Attribute all new targets to the explicit NQ role-play answers, not the original brief. |
| Operating conditions | “Peak” alone cannot define a reproducible performance test. | NQ-01 defines an illustrative restaurant count, arrival rate and duration. |
| Confirmation versus attempt | A quick local response is not a service-confirmed update. | NFR-02 measures online service confirmation; FR-07 still distinguishes unconfirmed changes. |
| Recovery oracle | Fast replay can still duplicate a committed action. | NFR-04 includes zero duplicate commits alongside reconciliation latency. |
| Standing use | A lookup target needs tasks, sample size and conditions. | NQ-04 specifies a future task protocol; no test result is claimed. |
| Portability | Device families alone are not a pinned test matrix. | Keep exact devices and versions `[TBC]`, even with an explicit success threshold. |
| Privacy | A fictional stakeholder cannot approve a real retention schedule or certify GDPR compliance. | NFR-11 retains unknown durations/deadlines; NFR-12 requires actual field-policy approval. |
| Traceability | All referenced FR IDs exist in the revised set. | Preserve the references and map each NFR into backlog verification. |

The revised requirements use the provisional NQ answers recorded in `stakeholder_clarifications.md`. All twelve have a metric and either a stated target or an explicit `[TBC]` threshold with a question. NFR-10, NFR-11 and NFR-12 still need actual configuration/policy decisions; a document-completeness check cannot make those gates pass. No throughput, recovery, usability, security or compliance test has been executed against a SoopiFood application.
