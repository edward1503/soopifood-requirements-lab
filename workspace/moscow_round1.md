# Part F: MoSCoW round 1 — backlog context only

Allocation uses facts from `starter/backlog.yaml`: the Hanoi release goal, fifteen stories and 50-point capacity. Importance judgements below are explicit assumptions; stakeholder notes have not been read for this allocation. “Roughly 60/20/20” is interpreted as an approximate target, subordinate to viable scope and capacity.

| ID | Title | Points | Priority | Reason (at most 8 words) |
|---|---|---:|---|---|
| SF-01 | Sign up and log in with phone number + OTP | 3 | Must | Assumption: verified identity required before ordering. |
| SF-02 | Browse restaurants and menus near my address | 5 | Must | Essential food discovery. |
| SF-03 | Add dishes to a cart and place an order | 5 | Must | Essential order placement. |
| SF-04 | Pay by card or e-wallet | 5 | Must | Assumption: online payment required for launch. |
| SF-05 | Restaurant accepts or rejects an incoming order | 3 | Must | Essential restaurant fulfilment decision. |
| SF-07 | Order status updates (placed, cooking, on the way, delivered) | 3 | Must | Assumption: basic updates essential for delivery coordination. |
| SF-13 | Pay cash on delivery | 5 | Must | Assumption: cash access essential for launch. |
| SF-08 | See the driver's live location on a map | 5 | Should | Assumption: status updates offer a tracking workaround. |
| SF-11 | Schedule an order for a later time | 3 | Should | Assumption: immediate ordering remains a workaround. |
| SF-14 | Add special instructions for the restaurant (e.g. less spicy) | 2 | Should | Assumption: direct clarification offers a workaround. |
| SF-06 | Apply a promo code at checkout | 3 | Could | Assumption: full-price ordering remains possible. |
| SF-09 | Reorder a previous order in one tap | 2 | Could | Assumption: manual ordering remains possible. |
| SF-10 | Rate and review a restaurant after delivery | 3 | Could | Assumption: feedback can wait until after launch. |
| SF-15 | Dark mode | 3 | Could | Assumption: default theme permits ordering. |
| SF-12 | SoopiCoins loyalty points on every order | 8 | Won't | Assumption: defer expensive loyalty scope. |

| Category | Points | % of planned |
|---|---:|---:|
| Must | 29 | 58% |
| Should | 10 | 20% |
| Could | 11 | 22% |
| Won't | 8 | 16% (excluded from planned total) |
| Total planned / capacity | 50 / 50 | 100% |

| Constraint | Result |
|---|---|
| Every story classified once | Met: 15 unique stories. |
| Must + Should + Could ≤50 | Met: 29 + 10 + 11 = 50. |
| Approximately 60/20/20 of planned | Met approximately: 58/20/22, within 2 percentage points. |
| Use budget | Met: 0 points unused. |
| Reasons ≤8 words | Met. |
| Validate launch assumptions with stakeholders | Not yet met; next round supplies missing context. |

Won't points are shown relative to planned points only for a common denominator; they are not part of the 100% planned allocation. The full input backlog totals 58 points.
