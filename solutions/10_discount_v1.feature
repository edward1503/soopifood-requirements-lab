# assumption: WELCOME10 gives 10% off with a minimum order of 100,000 VND (inclusive) and is valid until 2026-12-31; EXPIRED5 expired on 2026-10-31; one code per order.
Feature: Apply a promo code at checkout
  As a customer, I want to apply a promo code at checkout so that I pay less.

  Background:
    Given today is 2026-11-01
    And I am a logged-in customer at the checkout page

  @happy
  Scenario: Valid code reduces the order total
    Given my cart subtotal is 200,000 VND
    When I apply the code "WELCOME10"
    Then the discount shown is 20,000 VND
    And the order total is 180,000 VND

  @error
  Scenario: Expired code is rejected
    Given my cart subtotal is 200,000 VND
    When I apply the code "EXPIRED5"
    Then I see the message "This promo code has expired"
    And the order total stays 200,000 VND

  @edge
  Scenario: Subtotal exactly at the minimum order still qualifies
    Given my cart subtotal is 100,000 VND
    When I apply the code "WELCOME10"
    Then the discount shown is 10,000 VND
    And the order total is 90,000 VND
