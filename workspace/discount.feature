# assumption: On 2026-11-03 SAVE10 is valid, gives an uncapped 10% food-subtotal discount at subtotal >=100000 VND, unknown codes return INVALID_CODE, only one code is applied, and no other fees affect the payable total.
Feature: Apply a promo code at checkout
  SF-06: As a customer, I want to apply a promo code at checkout so that I pay less.

  Background:
    Given the checkout date is "2026-11-03"

  @happy
  Scenario: Apply the assumed valid code above the minimum
    Given the food subtotal is 500000 VND
    When I apply promo code "SAVE10"
    Then the discount is 50000 VND
    And the payable total is 450000 VND

  @error
  Scenario: Reject an assumed unknown code
    Given the food subtotal is 200000 VND
    When I apply promo code "UNKNOWN"
    Then the error code is "INVALID_CODE"
    And the payable total is 200000 VND

  @edge
  Scenario: Accept the assumed minimum subtotal exactly
    Given the food subtotal is 100000 VND
    When I apply promo code "SAVE10"
    Then the discount is 10000 VND
    And the payable total is 90000 VND
