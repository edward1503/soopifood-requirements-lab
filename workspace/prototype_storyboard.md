# Part C inputs: text prototype and walkthrough script

**SIMULATED TUTORIAL DATA — conceptual storyboard, no executable application.**

This is a proposed restaurant-tablet flow for discussing US-01–US-12. It is not a real usability test or an implementation. The screen descriptions are discussion aids; subsequent requirements describe behaviour rather than prescribing these layouts.

## Proposed scenes

| Scene | Conceptual view and action | Trace and open question |
|---|---|---|
| P1: Incoming work | Manager opens an incoming order with reference, dishes, quantities and preparation notes. Manager can propose an acceptance or a rejection. | US-01–US-03. Decision timeout, reason rules and who may decide are `[TBC]`. |
| P2: Preparation expectations | Manager supplies an approximate preparation estimate for an accepted order and later reads the current estimate. | US-04. Units, allowed range and change communication are `[TBC]`; estimate is not a guarantee. |
| P3: Dish availability | Manager inspects the restaurant's dish availability and proposes setting a dish unavailable or available again. | US-05, new hypothesis. Effects on already-received orders and propagation timing are `[TBC]`. |
| P4: Kitchen progress | Manager records a preparation state. Suggested discussion states: accepted, cooking, ready. | US-06. Permitted transitions and correction rules are `[TBC]`. |
| P5: Interrupted task | Manager leaves an order to serve a customer, then returns to the last service-confirmed preparation state. A change without confirmation is identified as unconfirmed. | US-07–US-08. Physical checks are not inferred. Offline persistence and conflict policy are `[TBC]`. |
| P6: Collection check | Manager reads the order reference, enters a collector reference and confirms that the bag has been physically checked. A mismatching reference is identified before handover. | US-09–US-10. Matching normalisation and override authority are `[TBC]`. |
| P7: Handover | Manager proposes handover once the physical check is confirmed and the reference matches; the resulting record identifies the order reference and time. | US-10. Whether these are mandatory gates is a question for W3. Retention is `[TBC]`. |
| P8: Order issue | Manager records an issue, assigns its responsible colleague, views unresolved issues and records a resolution. | US-11–US-12. Assignment roles, permitted content and retention are `[TBC]`. |

## Four simulated walkthrough scripts

| Walkthrough | Fictional manager perspective | Scenes and tasks | Neutral follow-up |
|---|---|---|---|
| W1 | Counter manager based on the I1 setting | P1–P2: inspect an order with a preparation note, decide whether it can be fulfilled, discuss an estimate. | What do you understand has happened? What information is still needed? |
| W2 | Relief manager in the takeaway setting; a new fictional role | P3–P5: kitchen reports a dish unavailable; update progress, leave to serve someone, return during a connection interruption. | What would you rely on here? What remains uncertain? |
| W3 | Manager discussing pickup checks, informed by I1 and the related I4 setting | P6–P7: one matching reference, one mismatch, one unchecked bag. | What would you do next in each case? What should prevent a handover? |
| W4 | Manager covering a colleague, informed by the I5 handover issue | P8 and P5: inherit an unresolved issue, clarify its owner, record an outcome, revisit the order. | What would you need to know before continuing? What would you tell the next colleague? |

Test order T-101, a dish quantity of two and references T-101/T-102 are illustrative test data. They do not establish live order formats or business thresholds. Findings from these fictional scenes are recorded separately in `walkthrough_notes.md`.
