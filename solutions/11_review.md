# Review of discount.feature against the business rules

| Finding | Rule | Evidence |
|---|---|---|
| Totals ignore the delivery fee, so every total is wrong. | Total formula: food subtotal − discount + delivery fee | `And the order total is 180,000 VND`: the rule says 180,000 + delivery fee. The delivery fee is never stated. |
| Two rules are untested or only half-tested. The cap has no scenario. The validity check covers only the day after expiry, not the valid-until day itself. | R2 cap; R3 validity (valid up to and including the date) | The cap needs a case like a 200,000 subtotal at 20% giving 30,000, not 40,000. `Scenario: Expired code is rejected` is the only validity case, and it is missing the last valid day. R1 minimum order is tested only at exactly 100,000, not at 99,999. |
| Invented values and wording, none of them in the rules. | None (not in the rules) | "WELCOME10 gives 10% off", "valid until 2026-12-31", "one code per order", and the message "This promo code has expired" (the rules say the result is `EXPIRED`). |
