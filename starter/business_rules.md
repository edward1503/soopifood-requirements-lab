# SoopiFood business rules: promo codes (SF-06)

Source: product owner. Amounts in VND, whole numbers.

| ID | Rule |
|---|---|
| R1 | **Minimum order.** The food subtotal (before discount, delivery fee excluded) must be at least **100,000**. Else `MIN_ORDER_NOT_MET`. |
| R2 | **Cap.** A percentage discount never exceeds the code's cap (20% off with a cap of 30,000: a 200,000 subtotal gives 30,000, not 40,000). It reduces the food only, never the delivery fee. |
| R3 | **Validity.** A code is valid up to and **including** its valid-until date. After that: `EXPIRED`. |

Total to pay = food subtotal − discount + delivery fee.
