# Part C inputs: W1–W4 walkthrough notes

**SIMULATED TUTORIAL DATA — AI role-play of four manager walkthroughs of a text storyboard.** No real participant, interactive prototype or observed usability outcome is represented. These are new fictional responses to proposed scenes P1–P8, not additional facts recovered from I1–I8. They provide provisional tutorial inputs, not empirical validation.

## W1 — Incoming work and preparation expectations

Perspective: counter manager in Sam's takeaway setting. Scenes P1–P2; US-01–US-04.

- **W1.1:** The fictional manager needs to identify orders belonging to the current restaurant and read each dish's quantity before passing work to the kitchen.
- **W1.2:** Preparation notes must remain associated with their order; a note should not be silently interpreted as a confirmed feasible request.
- **W1.3:** The manager wants an explicit record of acceptance rather than treating opening an order as acceptance. No automatic-acceptance timeout is agreed: `[TBC]`.
- **W1.4:** When rejecting an order, the manager wants a recorded reason. Suggested examples are capacity and unavailable dishes; a definitive reason set and mandatory format remain `[TBC]`.
- **W1.5:** An approximate preparation estimate should be recorded against an accepted order and be available when answering a readiness query. Units and bounds remain `[TBC]`.
- **W1.6:** Reading an order is distinct from committing a decision. No proposed visual arrangement is treated as a requirement.

**Review:** Supports explicit order information and decisions. The simulation leaves notification timing, automatic decisions and guaranteed readiness unresolved.

## W2 — Availability, progress and interrupted access

Perspective: new fictional relief manager in the same takeaway setting. Scenes P3–P5; US-05–US-08. The stock-out below is introduced by this role-play, not attributed to the earlier interviews.

- **W2.1:** In the fictional stock-out case, the kitchen reports that a dish cannot currently be prepared. The manager wants to inspect its current availability and record unavailable/available decisions. Effects on already-received orders and downstream propagation remain `[TBC]`.
- **W2.2:** The manager can use accepted, cooking and ready as provisional preparation states. Recording cooking and recording ready are separate actions; permitted corrections are `[TBC]`.
- **W2.3:** On returning after serving a customer, the manager needs to read the last service-confirmed preparation state of the selected order. Returning must not itself mark a bag checked.
- **W2.4:** A submission without service confirmation must remain visibly distinguishable from a confirmed update. The manager must not be told the change succeeded merely because an action was attempted.
- **W2.5:** The simulation does not agree durable offline queuing, automatic conflict resolution or how to detect orders never received by the tablet. These remain open questions.
- **W2.6:** The current preparation estimate needs to be available alongside the order's preparation information; an estimate is not a promise of an exact handover time.

**Review:** Adds a provisional menu-availability need and clarifies confirmed versus unconfirmed state. It does not demonstrate reduced errors or successful recovery on a real network.

## W3 — Reference matching and physical checks

Perspective: fictional pickup manager; scenes P6–P7; US-09–US-10.

- **W3.1:** The order's collection reference must be available for comparison with the reference supplied by a collector. The source of the supplied reference is outside the tablet prototype.
- **W3.2:** For the illustrative mismatch T-101/T-102, the manager wants the mismatch identified before any handover is recorded. Case, spacing and other normalisation rules remain `[TBC]`.
- **W3.3:** Only the manager's explicit confirmation records a completed physical bag check. The tablet does not determine actual bag contents.
- **W3.4:** For this tutorial scenario, the fictional manager agrees that recording handover requires both a matching reference and a recorded physical-check confirmation. An override policy is not agreed: `[TBC]`.
- **W3.5:** The manager wants a retained handover record containing the order reference and the event time for later queries. Retention and permitted access remain `[TBC]`.
- **W3.6:** A mismatch must not erase the original order reference or automatically mark the order handed over.

**Review:** The gate is a newly stated simulated preference. It is not claimed as an existing SoopiFood business rule or evidence that real misdelivery has been prevented.

## W4 — Unresolved issues and continuity between colleagues

Perspective: fictional manager covering a colleague; scenes P8/P5; US-11–US-12.

- **W4.1:** The manager wants an issue recorded against the correct order so that an unresolved missing-item query is not held only in a conversation.
- **W4.2:** An unresolved issue should identify the colleague responsible for progressing it. Permitted assignment roles and reassignment authority remain `[TBC]`.
- **W4.3:** The next colleague needs to read unresolved issues associated with an order before continuing work.
- **W4.4:** Recording a resolution should include the manager's account of what was agreed. A recorded resolution must be distinguished from an unresolved issue; content and retention policies remain `[TBC]`.
- **W4.5:** The fictional manager asks to avoid unnecessary customer details in notes; the exercise has no approved privacy or retention policy.
- **W4.6:** Neither a closed issue nor a confirmed preparation update automatically establishes that the physical bag was checked or delivered.

**Review:** Clarifies responsibility and unresolved/resolved information. It does not establish actual response-time targets or verify a real customer outcome.

## Consolidated open questions

| Question | Source | Next treatment |
|---|---|---|
| Acceptance timeout and auto-decision policy? | W1.3 | Keep `[TBC]`; obtain explicit stakeholder decision. |
| Allowed rejection reasons and estimate bounds? | W1.4–W1.5 | Ask for rules; avoid arbitrary numbers. |
| Availability effect on received orders and propagation? | W2.1 | Separate tablet decision from downstream policy. |
| Allowed preparation transitions and correction policy? | W2.2 | Confirm the state model before implementation. |
| Offline persistence, conflicts and unseen orders? | W2.4–W2.5 | Keep uncertainty; performance tests alone cannot decide policy. |
| Reference matching and override authority? | W3.2–W3.4 | Agree matching and exception rules. |
| Assignment, note content, retention and access? | W3.5, W4.2–W4.5 | Record policy questions; retain privacy-related `[TBC]`. |
