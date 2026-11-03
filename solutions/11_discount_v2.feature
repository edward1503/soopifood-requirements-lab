# assumption: code WELCOME20 gives 20% off with a cap of 30,000 VND (the example in the R2 cap rule) and is valid until 2026-11-01; the delivery fee is 15,000 VND; the error is shown as its code.
Feature: Apply a promo code at checkout
  As a customer, I want to apply a promo code at checkout so that I pay less.

  Background:
    Given today is 2026-11-01
    And the delivery fee is 15,000 VND

  # R1 minimum order
  @error
  Scenario: Subtotal one VND below the minimum is rejected
    Given my food subtotal is 99,999 VND
    When I apply the code "WELCOME20"
    Then I see the error "MIN_ORDER_NOT_MET"
    And the total to pay is 114,999 VND

  # R2 cap
  @happy
  Scenario: Percentage discount is limited to the cap
    Given my food subtotal is 200,000 VND
    When I apply the code "WELCOME20"
    Then the discount is 30,000 VND
    And the total to pay is 185,000 VND

  # R3 validity
  @edge
  Scenario: Code is still valid on its valid-until date
    Given my food subtotal is 120,000 VND
    When I apply the code "WELCOME20" on its valid-until date
    Then the discount is 24,000 VND
    And the total to pay is 111,000 VND
