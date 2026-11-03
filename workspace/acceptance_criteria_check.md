# Part H: Check of the rewritten acceptance criteria

Source of policy: `starter/business_rules.md`. Code identity, rate, cap, dates and fee are declared illustrative fixture values. The first-round `discount.feature` is preserved unchanged; it is an assumptions exercise, not the authoritative feature.

## Check one review finding against its source

The first review finding concerns **R2 Cap: discount cannot exceed its code's cap and cannot reduce the delivery fee**. The rule gives an example of 20% with cap 30000. Our revised cap-boundary fixture uses food subtotal 150005: raw percentage discount = 150005 × 20 / 100 = 30001 exactly; capped discount = 30000. Payable total = 150005 − 30000 + 15000 = **135005**. Both expected values in the rewritten scenario match that rule; no fractional rounding rule is needed.

## Scenario and boundary check

| Scenario | Rule and boundary | Expected result |
|---|---|---|
| Accept a food subtotal exactly at the minimum | R1 Minimum order: 100000 exactly. | Eligible, discount 20000; food after discount 80000 plus unchanged delivery 15000 gives 95000. |
| Cap a raw discount one VND above its limit | R2 Cap: raw 30001, the nearest above-cap case with a whole raw discount at this rate. | Discount 30000; total 135005. |
| Reject the code on the day after its valid-until date | R3 Validity: 2026-11-04 is the first day after 2026-11-03. | `EXPIRED`. The first two scenarios also run on the inclusive last valid day and accept the code. |

The revised file has exactly three scenarios, one tag from @happy/@error/@edge each, and four steps per scenario. Its only comments are the initial assumption and three rule comments. Background steps state fixture facts individually.

Coverage is representative, not exhaustive. Additional tests would include **R1 Minimum order: 99999 → MIN_ORDER_NOT_MET**, other caps, and other dates. Percentage rounding, unknown-code errors, stacking and replacement policy are not supplied by these rules and are not invented in version 2. Document parsing and arithmetic checks do not execute a checkout application.
