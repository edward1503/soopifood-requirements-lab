# SoopiFood Release 1: scope changes

Sources: change_requests.yaml and the agreed plan (workspace/moscow.md). Capacity stays 50 points.

## 1. Decisions

| CR | points | decision | trade-off | why |
|---|---|---|---|---|
| CR-01 Show allergen information on every dish | 2 | Must | Drops SF-09 (Reorder a previous order in one tap), 2 points, from Could to Won't. | Legal says launching without it is not allowed. |
| CR-02 Split the bill between friends in a group order | 8 | Won't | None: it adds no planned effort. | The note says the campaign can still run without it, and 8 points would displace Must or Should work. |

Assumption: SF-09 (Reorder a previous order in one tap) is the cheapest item to drop. It is a Could, convenience only, and its 2 points exactly cover CR-01 (Show allergen information on every dish).

## 2. Changes to the plan

| id | title | points | before -> after |
|---|---|---|---|
| CR-01 | Show allergen information on every dish | 2 | (new) -> Must |
| SF-09 | Reorder a previous order in one tap | 2 | Could -> Won't |
| CR-02 | Split the bill between friends in a group order | 8 | (new) -> Won't |

## 3. Final allocation

| id | title | points | priority | changed |
|---|---|---|---|---|
| SF-01 | Sign up and log in with phone number + OTP | 3 | Must | |
| SF-02 | Browse restaurants and menus near my address | 5 | Must | |
| SF-03 | Add dishes to a cart and place an order | 5 | Must | |
| SF-04 | Pay by card or e-wallet | 5 | Must | |
| SF-05 | Restaurant accepts or rejects an incoming order | 3 | Must | |
| SF-06 | Apply a promo code at checkout | 3 | Must | |
| SF-07 | Order status updates (placed, cooking, on the way, delivered) | 3 | Must | |
| SF-13 | Pay cash on delivery | 5 | Must | |
| CR-01 | Show allergen information on every dish | 2 | Must | yes |
| SF-08 | See the driver's live location on a map | 5 | Should | |
| SF-10 | Rate and review a restaurant after delivery | 3 | Should | |
| SF-14 | Add special instructions for the restaurant (e.g. less spicy) | 2 | Should | |
| SF-11 | Schedule an order for a later time | 3 | Could | |
| SF-15 | Dark mode | 3 | Could | |
| SF-09 | Reorder a previous order in one tap | 2 | Won't | yes |
| SF-12 | SoopiCoins loyalty points on every order | 8 | Won't | |
| CR-02 | Split the bill between friends in a group order | 8 | Won't | yes |

## 4. New allocation

| category | points, before -> after | % of planned, before -> after |
|---|---|---|
| Must | 32 -> 34 | 64% -> 68% |
| Should | 10 -> 10 | 20% -> 20% |
| Could | 8 -> 6 | 16% -> 12% |
| Won't (not planned) | 8 -> 18 | n/a |
| **Total planned vs capacity** | **50 -> 50 / 50** | 100% -> 100% |

## 5. Self-check

Planned points are 50 of 50 and both CRs are decided, but Must (68%) and Could (12%) now sit outside "roughly 60/20/20". The legal CR-01 (Show allergen information on every dish) forces this, so I accept the drift.
