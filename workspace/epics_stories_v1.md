# Part E: Backlog — draft 1

**SIMULATED TUTORIAL DATA — planned work only.** Inputs: Sam, final FRs and revised NFRs. Team context: five developers, two-week sprints. No story points or sprint commitments are assigned. Quality references name planned verification, not completed tests.

## Epic EP-01 — Understand incoming work

### Feature F-01 — Receipt and fulfilment decisions

#### BL-01 — Inspect an incoming order
**Story:** As a restaurant manager, I want incoming order details so that I can establish what the kitchen is being asked to prepare.
**Covers:** FR-01, FR-02, FR-03; NFR-01, NFR-05, NFR-06, NFR-08, NFR-10.
- Given an incoming restaurant order, when I inspect it, then its dish quantities are available.
- Given an order with a preparation note, when I inspect it, then the associated note is available.

#### BL-02 — Decide whether to fulfil an order
**Story:** As a restaurant manager, I want an explicit fulfilment decision so that an unfulfillable order is not silently accepted.
**Covers:** FR-04, FR-05; NFR-02, NFR-05, NFR-09.
- Given an undecided order, when I accept it, then an acceptance decision is recorded.
- Given an undecided order, when I reject it with a permitted reason, then the rejection is recorded with that reason.

#### BL-03 — Share a preparation estimate
**Story:** As a restaurant manager, I want the current approximate estimate associated with an order so that I can answer readiness queries consistently.
**Covers:** FR-06, FR-15; NFR-01, NFR-02, NFR-08.
- Given an accepted order, when I supply an estimate under agreed bounds, then the estimate belongs to that order.
- Given a saved estimate, when I revisit the order, then that estimate is available.

## Epic EP-02 — Communicate kitchen capability

### Feature F-02 — Availability decisions

#### BL-04 — Maintain dish availability
**Story:** As a restaurant manager, I want current dish availability recorded so that the restaurant's preparation capability is explicit.
**Covers:** FR-08, FR-09, FR-10; NFR-02, NFR-05, NFR-09, NFR-10.
- Given an available dish, when I mark it unavailable, then that decision is recorded.
- Given an unavailable dish, when I mark it available, then that decision is recorded.

## Epic EP-03 — Prepare and hand over complete orders

### Feature F-03 — Confirmed progress

#### BL-05 — Resume preparation work
**Story:** As a restaurant manager, I want confirmed progress available after an interruption so that I can resume the right order.
**Covers:** FR-11, FR-12, FR-13, FR-14; NFR-01, NFR-02, NFR-07, NFR-08, NFR-09, NFR-10.
- Given an accepted order, when I record a permitted cooking update, then cooking is its confirmed state after confirmation.
- Given a ready order, when I leave and return, then its last confirmed state is available.

#### BL-06 — Recognise an unconfirmed change
**Story:** As a restaurant manager, I want to recognise an unconfirmed update so that I do not act on an assumed success.
**Covers:** FR-07; NFR-02, NFR-03, NFR-04, NFR-07, NFR-10.
- Given a change without service confirmation, when I inspect its outcome, then it is identified as unconfirmed.
- Given a restored connection, when reconciliation follows the approved policy, then the authoritative outcome can be established.

### Feature F-04 — Safe collection checks

#### BL-07 — Compare collection references
**Story:** As a restaurant manager, I want a collector's reference checked against an order so that I can identify the intended collection.
**Covers:** FR-16, FR-18; NFR-01, NFR-05, NFR-06, NFR-08, NFR-10.
- Given a selected order, when I inspect collection information, then its reference is available.
- Given a different supplied reference, when matching is evaluated, then a mismatch is identified.

#### BL-08 — Confirm a checked handover
**Story:** As a restaurant manager, I want a checked handover recorded so that an incomplete bag is not released by mistake.
**Covers:** FR-17, FR-19, FR-20; NFR-02, NFR-03, NFR-05, NFR-09.
- Given a matching reference, when I confirm the physical check and record handover, then the handover is recorded.
- Given no physical-check confirmation, when I attempt handover, then handover is not recorded under the agreed gate.

## Epic EP-04 — Account for order issues

### Feature F-05 — Issue ownership and outcomes

#### BL-09 — Track an issue through resolution
**Story:** As a restaurant manager, I want an order issue accounted for through its outcome so that colleagues know what remains to be done.
**Covers:** FR-21, FR-22, FR-23, FR-24; NFR-01, NFR-02, NFR-05, NFR-08, NFR-09.
- Given an order issue, when I record it with an owner, then the unresolved issue is available for that order.
- Given an unresolved issue, when I confirm its agreed resolution, then the resolution is recorded.

## Uncovered requirements

Uncovered FRs: none. Uncovered NFRs: **NFR-11, NFR-12**. Data retention and field-policy gates need explicit story-level treatment; their policies remain open. The next iteration must add planned coverage without inventing privacy approvals.
