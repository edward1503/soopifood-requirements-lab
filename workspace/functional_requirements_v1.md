# Part C: Functional requirements — draft 1

**SIMULATED TUTORIAL DATA.** Restaurant tablet only. Sources: `user_stories_v1.md` and W1–W4 in `walkthrough_notes.md`. These are draft requirements following fictional storyboard discussion, not validated product behaviour. Open rules remain `[TBC]`.

## Order intake

| ID | Requirement | Actor | Source |
|---|---|---|---|
| FR-01 | The system shall provide the current restaurant's incoming orders. | Manager | US-01; W1.1 |
| FR-02 | The system shall present the dish quantities of a selected order. | Manager | US-01; W1.1 |
| FR-03 | The system shall present preparation notes associated with a selected order. | Manager | US-02; W1.2 |
| FR-04 | The system shall record the manager's acceptance of an incoming order under decision rules `[TBC]`. | Manager | US-03; W1.3 |
| FR-05 | The system shall record a rejection reason for an incoming order under reason rules `[TBC]`. | Manager | US-03; W1.4 |
| FR-06 | The system shall associate an approximate preparation estimate with an accepted order using units `[TBC]`. | Manager | US-04; W1.5 |
| FR-07 | The system shall identify an order change without service confirmation as unconfirmed. | Manager | US-08; W2.4 |

## Menu availability

| ID | Requirement | Actor | Source |
|---|---|---|---|
| FR-08 | The system shall present the current restaurant's dish availability. | Manager | US-05; W2.1 |
| FR-09 | The system shall record a manager's decision to make a dish unavailable. | Manager | US-05; W2.1 |
| FR-10 | The system shall record a manager's decision to make a dish available. | Manager | US-05; W2.1 |

## Kitchen progress

| ID | Requirement | Actor | Source |
|---|---|---|---|
| FR-11 | The system shall present an order's current preparation state. | Manager | US-06; W2.2 |
| FR-12 | The system shall record the manager's cooking update under transition rules `[TBC]`. | Manager | US-06; W2.2 |
| FR-13 | The system shall record the manager's ready update under transition rules `[TBC]`. | Manager | US-06; W2.2 |
| FR-14 | The system shall present an order's last confirmed preparation state when the manager returns to it. | Manager | US-07; W2.3 |
| FR-15 | The system shall present an order's current approximate preparation estimate. | Manager | US-04; W2.6 |

## Rider handover

| ID | Requirement | Actor | Source |
|---|---|---|---|
| FR-16 | The system shall present a selected order's collection reference. | Manager | US-09; W3.1 |
| FR-17 | The system shall record the manager's confirmation of a completed physical bag check. | Manager | US-10; W3.3 |
| FR-18 | The system shall identify a mismatch between supplied and stored collection references using matching rules `[TBC]`. | Manager | US-09; W3.2 |
| FR-19 | The system shall record handover only after the required collection checks. | Manager | US-10; W3.4 |
| FR-20 | The system shall retain a handover record for retention period `[TBC]`. | Manager | US-10; W3.5 |

## Issue handling

| ID | Requirement | Actor | Source |
|---|---|---|---|
| FR-21 | The system shall record a manager-reported issue against its order. | Manager | US-11; W4.1 |
| FR-22 | The system shall record an issue's responsible colleague under assignment rules `[TBC]`. | Manager | US-11; W4.2 |
| FR-23 | The system shall present unresolved issues associated with a selected order. | Manager | US-11; W4.3 |
| FR-24 | The system shall record a manager-confirmed issue resolution under content rules `[TBC]`. | Manager | US-12; W4.4 |

## Questions to take into review

Decision timeouts, estimate bounds, availability consequences, state corrections, pending-change policy, reference matching, handover checks, record fields, assignment authority and privacy/retention need explicit treatment. No sample time limit has been converted into a business rule.
