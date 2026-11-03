Here is new context you did not have when you wrote the feature file: the product owner's
rules, tutorial/starter/business_rules.md (R1-R3). They are the only source of truth.
If something is not in the rules, do not decide it yourself: say "assumption: ..." or "not in
the rules".

Step 1: review tutorial/workspace/discount.feature against the rules. Write
tutorial/workspace/review.md, short enough to read aloud in 1 minute, as a table with at most
3 rows, most serious first (columns: finding, rule, evidence). Each row is one of:
- a scenario that contradicts a rule: quote the scenario line, the rule, and the value the
  rule says it should be;
- a rule with no scenario, or whose boundary is not tested (e.g. exactly the minimum, the
  last valid day);
- something in the feature that is not in the rules at all (an invented rule).

Whenever you mention a rule, write its id AND what it says (e.g. "R1 minimum order"), never
the id alone.

Step 2: rewrite the feature to tutorial/workspace/discount_v2.feature, in the same structure as
the first version (one `# assumption:` comment at the top, Feature with the user story as
description, Background for the shared test data), and:
- exactly 3 scenarios, one per rule, each on its boundary, of 3-4 steps (Background not
  counted); every step states one fact or one check, using And for more than one;
- each scenario keeps exactly one tag (@happy, @error or @edge) and has a comment above it
  naming its rule, e.g. `# R3 validity`; no other comments;
- no scenario contradicts a rule, and no rule that is not in business_rules.md.
