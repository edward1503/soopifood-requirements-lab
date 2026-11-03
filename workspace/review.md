# Part H: Review against the supplied rules

| Finding | Rule | Evidence |
|---|---|---|
| Cap and non-zero delivery-fee behaviour are untested; the uncapped assumption is unsupported. | R2 Cap: percentage discount cannot exceed its code's cap and reduces food only. | Header says “uncapped 10%”; `Then the discount is 50000 VND` has no sourced cap. This is not proof of a wrong value without a cap fixture; version 2 supplies one explicitly. |
| Unknown-code handling is invented; expiry boundaries have no scenarios. | R3 Validity: valid through the valid-until date; after it, `EXPIRED`. | `Then the error code is "INVALID_CODE"` is not specified in the rules; the first draft contains no valid-until fixture or expired-date case. |
| The failing side of the minimum boundary is untested. | R1 Minimum order: food subtotal ≥100000, excluding delivery; otherwise `MIN_ORDER_NOT_MET`. | The first draft tests 100000 accepted but has no 99999 rejection. The mandated three-case rewrite retains the exact-minimum case; the failing side remains an additional-test gap. |
