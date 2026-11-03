# Part E: Epics, features and user stories — revised

**SIMULATED TUTORIAL DATA — proposed backlog, no implemented or completed stories.**

Persona: Sam from `personas_v2.md`, primarily I1/O1. Inputs: FR-01–FR-24 and NFR-01–NFR-12. Team context: five developers in two-week sprints. No story points or sprint commitments are assigned. Each slice includes the tablet and any supporting service behaviour needed for the manager-visible outcome.

Quality procedures QV-01–QV-12 are defined in `verification_plan.md`. An unresolved `[TBC]` blocks the relevant criterion; a planned test is not passing evidence.

## Epic EP-01 — Understand incoming work

### Feature F-01 — Receipt and fulfilment decisions

#### BL-01 — Inspect an incoming order

**Story:** As a restaurant manager, I want incoming order details so that I can establish what the kitchen is being asked to prepare.
**Covers:** FR-01, FR-02, FR-03; NFR-01, NFR-05, NFR-06, NFR-08, NFR-10, NFR-12.

- Given an incoming order for my restaurant, when I inspect it, then each dish identity is available with its ordered quantity.
- Given an order with a preparation note, when I inspect it, then that order's note is available without being treated as an accepted feasible request.
- Given an order from another restaurant, when my identity attempts to retrieve it, then access is denied under the approved access matrix `[TBC]`.
- Given a release candidate, when QV-01/QV-05/QV-06/QV-08/QV-10/QV-12 are performed, then recorded results meet each linked NFR's target with all required configuration/policy approvals present.

#### BL-02 — Decide whether to fulfil an order

**Story:** As a restaurant manager, I want an explicit fulfilment decision so that an unfulfillable order is not silently accepted.
**Covers:** FR-04, FR-05; NFR-02, NFR-05, NFR-09, NFR-12.

- Given an undecided order, when I submit acceptance under decision rules `[TBC: FQ-01]`, then a service-confirmed acceptance decision belongs to that order.
- Given an undecided order, when I reject it using an allowed reason `[TBC: FQ-02]`, then the rejection record contains that reason.
- Given an order I have only opened, when no decision is submitted, then opening it has not recorded acceptance.
- Given a release candidate, when QV-02/QV-05/QV-09/QV-12 are performed, then recorded results meet each linked NFR's target with approvals present.

#### BL-03 — Share a preparation estimate

**Story:** As a restaurant manager, I want the current approximate estimate associated with an order so that I can answer readiness queries consistently.
**Covers:** FR-06, FR-15; NFR-01, NFR-02, NFR-08.

- Given an accepted order, when I supply an estimate within agreed units/bounds `[TBC: FQ-03]`, then it is associated with that order after service confirmation.
- Given a confirmed estimate, when I revisit the order, then the current approximate estimate is available.
- Given a release candidate, when QV-01/QV-02/QV-08 are performed, then retrieval, confirmation and lookup-task results meet their linked NFR targets.

## Epic EP-02 — Communicate kitchen capability

### Feature F-02 — Availability decisions

#### BL-04 — Maintain dish availability

**Story:** As a restaurant manager, I want the restaurant's dish availability recorded so that its current preparation capability is explicit.
**Covers:** FR-08, FR-09, FR-10; NFR-02, NFR-05, NFR-09, NFR-10.

- Given a dish of my restaurant, when I inspect availability, then its recorded availability is available to me.
- Given an available dish, when I confirm an unavailable decision, then that restaurant's decision is recorded.
- Given an unavailable dish, when I confirm an available decision, then that restaurant's decision is recorded.
- Given a release candidate, when QV-02/QV-05/QV-09/QV-10 are performed, then recorded results meet the linked quality targets; downstream effects remain `[TBC: FQ-04]`.

## Epic EP-03 — Prepare and hand over complete orders

### Feature F-03 — Confirmed progress

#### BL-05 — Resume preparation work

**Story:** As a restaurant manager, I want confirmed progress available after an interruption so that I can resume the right order.
**Covers:** FR-11, FR-12, FR-13, FR-14; NFR-01, NFR-02, NFR-07, NFR-08, NFR-09, NFR-10.

- Given an accepted order, when I record a permitted cooking update `[TBC: FQ-05]`, then cooking becomes its state after service confirmation.
- Given a cooking order, when I record a permitted ready update `[TBC: FQ-05]`, then ready becomes its state after service confirmation.
- Given a previously confirmed state, when I return after an interruption, then that state is available without automatically confirming a physical bag check.
- Given a release candidate, when QV-01/QV-02/QV-07/QV-08/QV-09/QV-10 are performed, then recorded results meet each linked NFR's target.

#### BL-06 — Recognise an unconfirmed change

**Story:** As a restaurant manager, I want to recognise an unconfirmed update so that I do not act on an assumed success.
**Covers:** FR-07; NFR-02, NFR-03, NFR-04, NFR-07, NFR-10.

- Given a submitted change without service confirmation, when its outcome is presented, then it is identified as unconfirmed.
- Given a restored connection, when reconciliation runs under recovery policy `[TBC: FQ-06]`, then the authoritative outcome is established without a duplicate committed change.
- Given a release candidate, when QV-02/QV-03/QV-04/QV-07/QV-10 are performed, then recorded results meet each linked NFR's target.

### Feature F-04 — Collection checks

#### BL-07 — Compare collection references

**Story:** As a restaurant manager, I want a collector's reference checked against an order so that I can identify the intended collection.
**Covers:** FR-16, FR-18; NFR-01, NFR-05, NFR-06, NFR-08, NFR-10.

- Given a selected order, when I inspect its collection information, then the stored collection reference is available.
- Given a supplied reference for a different order, when matching is evaluated under rules `[TBC: FQ-07]`, then a mismatch is identified without altering the original reference.
- Given a release candidate, when QV-01/QV-05/QV-06/QV-08/QV-10 are performed, then recorded results meet each linked NFR's target.

#### BL-08 — Confirm a checked handover

**Story:** As a restaurant manager, I want a checked handover recorded so that an incomplete bag is not released by mistake.
**Covers:** FR-17, FR-19, FR-20; NFR-02, NFR-03, NFR-05, NFR-09, NFR-11, NFR-12.

- Given a matching reference, when I explicitly confirm the physical bag check and submit handover, then the handover is recorded with the order reference and event time.
- Given no physical-check confirmation, when I attempt handover, then handover is not recorded under the simulated gate.
- Given a mismatching reference, when I attempt ordinary handover, then handover is not recorded; any override requires policy `[TBC: FQ-07]`.
- Given a release candidate, when QV-02/QV-03/QV-05/QV-09/QV-11/QV-12 are performed, then recorded results meet the linked quality targets with an actually approved retention policy.

## Epic EP-04 — Account for order issues

### Feature F-05 — Issue ownership and outcomes

#### BL-09 — Record and own an unresolved issue

**Story:** As a restaurant manager, I want an unresolved order issue to have a responsible colleague so that it remains accounted for when duties change.
**Covers:** FR-21, FR-22, FR-23; NFR-01, NFR-02, NFR-05, NFR-08, NFR-11, NFR-12.

- Given a selected order, when I report an issue, then the issue belongs to that order.
- Given an unresolved issue, when I assign a permitted colleague `[TBC: FQ-08]`, then the issue identifies that responsible colleague.
- Given an order with an unresolved issue, when the next colleague inspects it, then the unresolved issue is available.
- Given a release candidate, when QV-01/QV-02/QV-05/QV-08/QV-11/QV-12 are performed, then recorded results meet each linked NFR's target with policy approvals present.

#### BL-10 — Record an issue's resolution

**Story:** As a restaurant manager, I want an issue's agreed resolution recorded so that a colleague can understand its outcome.
**Covers:** FR-24; NFR-02, NFR-05, NFR-09, NFR-11, NFR-12.

- Given an unresolved issue, when I confirm its resolution under content rules `[TBC: FQ-08]`, then its resolution record contains the account of the agreed outcome.
- Given a resolved issue, when unresolved issues are retrieved for its order, then that issue is no longer represented as unresolved.
- Given a release candidate, when QV-02/QV-05/QV-09/QV-11/QV-12 are performed, then recorded results meet each linked NFR's target with policy approvals present.

## Uncovered requirements

Uncovered FRs: **none**. Uncovered NFRs: **none in planned story/verification coverage**. All 24 FRs and 12 NFRs have named obligations; unresolved rules and unavailable test evidence still block completion. The generated `coverage_matrix.md` lists each requirement's story owners. Part F separately prioritises the supplied SF-01–SF-15 backlog using its supplied points.
