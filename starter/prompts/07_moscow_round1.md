Read tutorial/starter/backlog.yaml: the backlog for SoopiFood Release 1, a food ordering
and delivery app. Release goal: a customer can find food, order it, pay, and receive it.
The capacity is in the file. Do not read any other file.
Use only the information in that file. If a reason is your own assumption, not something in the
file, say so (for example "assumption: ...").

Prioritise every story with MoSCoW:
- Must: the release cannot launch without it.
- Should: important, but a workaround exists.
- Could: nice to have, only if time permits.
- Won't: explicitly not in this release.

Constraints: Must + Should + Could must fit in the capacity, and the planned points should be
roughly 60% Must / 20% Should / 20% Could. You should make the most out of the budget.

Write tutorial/workspace/moscow_round1.md, short enough to read aloud. Draw tables, and
whenever you mention a story, write its id AND its title (never the id alone):
1. A table with one row per story: id, title, points, priority, a reason of at most 8 words.
   Sort by priority.
2. A summary table: one row per category with points and % of planned, plus a row with the
   total planned vs capacity.
3. A table or list with one line per constraint: met or not met.
