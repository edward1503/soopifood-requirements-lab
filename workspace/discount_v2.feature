# assumption: PROMO20 is an illustrative code with a 20% rate, a 30000 VND cap and valid-until date 2026-11-03; delivery is 15000 VND, and chosen subtotals avoid unspecified percentage rounding.
Feature: Apply a promo code at checkout
  SF-06: As a customer, I want to apply a promo code at checkout so that I pay less.

  Background:
    Given promo code "PROMO20" has a discount rate of 20 percent
    And its discount cap is 30000 VND
    And its valid-until date is "2026-11-03"
    And the checkout date is "2026-11-03"
    And the delivery fee is 15000 VND

  # R1 Minimum order: the exact minimum is eligible
  @happy
  Scenario: Accept a food subtotal exactly at the minimum
    Given the food subtotal is 100000 VND
    When I apply promo code "PROMO20"
    Then the discount is 20000 VND
    And the payable total is 95000 VND

  # R2 Cap: the first whole-discount unit above the cap is clipped
  @edge
  Scenario: Cap a raw discount one VND above its limit
    Given the food subtotal is 150005 VND
    When I apply promo code "PROMO20"
    Then the discount is 30000 VND
    And the payable total is 135005 VND

  # R3 Validity: the first day after the inclusive end date is expired
  @error
  Scenario: Reject the code on the day after its valid-until date
    Given the checkout date is "2026-11-04"
    And the food subtotal is 100000 VND
    When I apply promo code "PROMO20"
    Then the error code is "EXPIRED"
