# Part C: Functional requirements — revised

**SIMULATED TUTORIAL DATA — proposed requirements, not implemented or empirically validated.**

Scope: restaurant tablet only. Working persona: Sam, anchored in I1/O1. US-01–US-12 and W1–W4 supply provisional needs. `stakeholder_clarifications.md` records the AI role-play clarification round; unresolved values and policies remain `[TBC]`.

## Order intake

| ID | Requirement | Actor | Source |
|---|---|---|---|
| FR-01 | The system shall provide incoming orders associated with the current restaurant. | Restaurant manager | US-01; W1.1 |
| FR-02 | The system shall present each dish's identity with its ordered quantity for a selected order. | Restaurant manager | US-01; W1.1 |
| FR-03 | The system shall present preparation notes associated with a selected order. | Restaurant manager | US-02; W1.2 |
| FR-04 | The system shall record the manager's acceptance decision for an incoming order under decision rules `[TBC: FQ-01]`. | Restaurant manager | US-03; W1.3 |
| FR-05 | The system shall record the manager's rejection decision with a reason under reason rules `[TBC: FQ-02]`. | Restaurant manager | US-03; W1.4 |
| FR-06 | The system shall associate the manager's approximate preparation estimate with an accepted order using units/bounds `[TBC: FQ-03]`. | Restaurant manager | US-04; W1.5 |
| FR-07 | The system shall identify an attempted order change without service confirmation as unconfirmed under recovery policy `[TBC: FQ-06]`. | Restaurant manager | US-08; W2.4–W2.5 |

## Menu availability

| ID | Requirement | Actor | Source |
|---|---|---|---|
| FR-08 | The system shall present the current restaurant's dish availability. | Restaurant manager | US-05; W2.1 |
| FR-09 | The system shall record the manager's decision to make a dish of the current restaurant unavailable. | Restaurant manager | US-05; W2.1 |
| FR-10 | The system shall record the manager's decision to make a dish of the current restaurant available. | Restaurant manager | US-05; W2.1 |

## Kitchen progress

| ID | Requirement | Actor | Source |
|---|---|---|---|
| FR-11 | The system shall present an order's latest service-confirmed preparation state. | Restaurant manager | US-06; W2.2–W2.4 |
| FR-12 | The system shall record the manager's cooking update under transition rules `[TBC: FQ-05]`. | Restaurant manager | US-06; W2.2 |
| FR-13 | The system shall record the manager's ready update under transition rules `[TBC: FQ-05]`. | Restaurant manager | US-06; W2.2 |
| FR-14 | The system shall present an order's last service-confirmed preparation state when the manager returns to it. | Restaurant manager | US-07; W2.3 |
| FR-15 | The system shall present an order's current approximate preparation estimate. | Restaurant manager | US-04; W2.6 |

## Rider handover

| ID | Requirement | Actor | Source |
|---|---|---|---|
| FR-16 | The system shall present a selected order's collection reference. | Restaurant manager | US-09; W3.1 |
| FR-17 | The system shall record the manager's explicit confirmation of a completed physical bag check. | Restaurant manager | US-10; W3.3 |
| FR-18 | The system shall identify a supplied collection reference that mismatches the selected order's reference under matching rules `[TBC: FQ-07]`. | Restaurant manager | US-09; W3.2 |
| FR-19 | The system shall record handover only for a matching collection reference following an explicit physical-check confirmation, subject to override policy `[TBC: FQ-07]`. | Restaurant manager | US-10; W3.4 |
| FR-20 | The system shall retain a handover record containing the order reference plus event time for duration `[TBC: FQ-09]`. | Restaurant manager | US-10; W3.5 |

## Issue handling

| ID | Requirement | Actor | Source |
|---|---|---|---|
| FR-21 | The system shall record a manager-reported issue against its order. | Restaurant manager | US-11; W4.1 |
| FR-22 | The system shall record an issue's responsible colleague under assignment rules `[TBC: FQ-08]`. | Restaurant manager | US-11; W4.2 |
| FR-23 | The system shall present unresolved issues associated with a selected order. | Restaurant manager | US-11; W4.3 |
| FR-24 | The system shall record a manager-confirmed issue resolution containing an account of the agreed outcome under content rules `[TBC: FQ-08]`. | Restaurant manager | US-12; W4.4–W4.5 |

## Boundary and open rules

FR-09/FR-10 record restaurant decisions; downstream availability propagation and consequences for already-received orders remain `[TBC: FQ-04]`. FR-14 never implies a physical bag check. FR-07 does not promise offline acceptance, durable queuing or knowledge of unseen orders. Reference normalisation, overrides, retention and assignment remain open. These requirements describe desired behaviour; the prototype's layout is not binding.
