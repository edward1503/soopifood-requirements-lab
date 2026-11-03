Write Gherkin acceptance criteria for this SoopiFood user story:

  SF-06: As a customer, I want to apply a promo code at checkout so that I pay less.

Do not read any files in the repository; use only this message. Anything you have to assume
(a rule, an amount, a date) goes in a one-line comment at the top, starting with "assumption:".

Cover the happy path, error cases and edge cases with exactly 3 scenarios (1 of each). Tag
every scenario with exactly one of @happy, @error, @edge. Use concrete values (amounts in
VND, dates) so every Then step can be checked. Write the result to
tutorial/workspace/discount.feature, in this structure:

  # assumption: ...
  Feature: <name>
    <the user story as description>

    Background:
      Given <test data shared by all scenarios>

    @happy
    Scenario: <title>
      Given ...
      When ...
      Then <one check>
      And <one more check, if needed>

Each scenario has 3-4 steps, each step states one fact or one check, and there are no other
comments.
