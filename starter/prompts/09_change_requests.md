Two change requests arrived after the plan in tutorial/workspace/moscow.md was agreed:
tutorial/starter/change_requests.yaml. The capacity does not change.
Use only those two files and the plan. If a reason is your own assumption, say so
("assumption: ...").

For each change request:
1. Decide its MoSCoW priority and why.
2. If it adds planned effort, say exactly what is demoted or dropped to pay for it.

Write tutorial/workspace/scope_changes.md. Draw
tables, and whenever you mention a change request or a story, write its id AND its title
(never the id alone):
1. A decision table with one row per CR (CR with title, points, decision, trade-off, why),
   each cell at most one sentence.
2. "Changes to the plan": only the stories and CRs that moved (id, title, points, before ->
   after, e.g. "Could -> Won't").
3. "Final allocation": one row per item, all stories and both CRs, after the changes (id,
   title, points, priority, and a "changed" column marking the items from table 2). Sort by
   priority.
4. "New allocation": one row per category with points and % of planned, before -> after,
   plus a row with the total planned vs capacity.
5. One line for the self-check.
