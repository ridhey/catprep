# Grouping & Distribution

> "Eight friends in three rooms", "six projects to three teams", "nine players, three of each role" — distribution sets are CAT's favourite LR format of the last five years, with one or two every paper. The positions have no order (unlike seating), so the only structure is *who is with whom* and *how many in each group*. The counts are the strongest clues, and almost nobody uses them first.

## Core ideas

### What a distribution is

$n$ items are placed into $k$ groups. Each item goes to exactly one group (unless the set says an item can be in several — read this). Groups have **sizes**, either fixed ("Room 203 has two beds, all occupied") or bounded ("at most three per team"). Items may carry **attributes** (city, gender, skill), and clues often constrain attribute counts per group ("every room has someone from Delhi").

Draw the frame as columns, one per group, with the size written at the top and a slot per bed:

```
201 (3)   202 (3)   203 (2)
 _         _         _
 _         _         _
 _         _
```

Every deduction is a name written into a slot or a name crossed off a column.

### The clue vocabulary

- **Together:** "I and J are in the same room" → a block of size 2 that needs two free slots in one column.
- **Apart:** "K and L are in different rooms" → a two-way split; with three groups this is weak alone but strong combined with a size or a "not in" clue.
- **Fixed:** "M is in Room 203" → write it in.
- **Not in:** "neither K nor L is in 203" → cross them off that column.
- **Count:** "Room 201 has exactly two people from Pune" → the attribute composition of that column.
- **Composition:** "every room has at least one from each city" → a floor on each column.
- **Conditional:** "if P is in 201 then Q is in 202" → not a placement; a filter applied once P is placed (and its contrapositive: Q not in 202 → P not in 201).
- **Relative:** "Priya does not share with anyone else from Delhi" → an attribute composition of Priya's room, whichever room it is.

### Sizes first

The group sizes plus the "together" blocks decide the skeleton before any name is placed. Two people who must be together cannot be in a two-bed room that already has someone. A block of three fills a three-bed room. If two groups have three slots and one has two, then a pair plus a "must be apart" couple already forces the pattern {pair + one of the couple} / {other of the couple + two more} / {two more}. Write this skeleton with placeholders ($x$, $y$) before worrying about who is who.

### Attribute counting

Treat each attribute as a second table: rows = groups, columns = attribute values, cells = counts. Four Delhi and four Pune across rooms of sizes 3, 3, 2 with "at least one of each in every room": possible (Delhi, Pune) splits are (1,2)/(2,1)/(1,1) or (2,1)/(1,2)/(1,1) and a few more. A clue like "Room 201 has exactly two from Pune" fixes 201's row as (1, 2). Composition clues are cheap to apply and they prune names fast, because each name carries its attribute.

### Procedure

1. Draw the columns with sizes; list the items with their attributes.
2. Apply fixed and not-in clues (direct writes and cross-offs).
3. Form blocks from "together" clues; place blocks where size allows.
4. Build the skeleton from sizes and apart/together clues, using placeholders.
5. Apply composition and count clues to the skeleton; kill impossible fillings.
6. Apply conditional clues as filters on the surviving fillings.
7. Verify every clue against the final table.

### Non-unique sets

Many distribution sets end with two or three valid fillings. The questions will then be of the form "Which of the following must be true?", "Who could be with X?", "If Y is in 202, who is in 203?". Keep all survivors in a small table with one row per filling, and answer each question by scanning the rows. "Must be true" = true in every row; "could be true" = true in at least one row; "if…" = select the rows satisfying the condition.

## Worked examples

Examples 1–4 use this set. Ira, Jai, Kabir, Lata, Mohan, Nitya, Om, Priya in rooms 201 (3 beds), 202 (3), 203 (2), all beds occupied. Delhi: Om, Priya, Ira, Lata; Pune: Jai, Kabir, Mohan, Nitya. Clues: (1) Ira and Jai together; (2) Kabir and Lata apart, neither in 203; (3) Mohan in 203; (4) every room has both cities; (5) Room 201 has exactly two from Pune; (6) Priya shares with nobody else from Delhi; (7) Om shares with exactly one Delhi and exactly one Pune person.

### Example 1: Skeleton from sizes

Mohan is in 203, which has one slot left. The Ira–Jai block needs two slots, so it is in 201 or 202. Kabir and Lata are apart and not in 203, so one is in 201 and the other in 202. Hence the two three-bed rooms are {Ira, Jai, Kabir-or-Lata} and {Lata-or-Kabir, $y$, $z$}, and 203 is {Mohan, $x$}, where $\{x, y, z\} = \{$Nitya, Om, Priya$\}$.

*Why this method:* three clues and the sizes have reduced an $8!$-sized problem to a handful of choices before any attribute is examined.

### Example 2: Composition clues

Clue (6): Priya's room has no other Delhi person. With Ira (Delhi): no. In the $\{y, z\}$ room: that room's third person must be Kabir (Pune), not Lata, and the other of $y, z$ must be Nitya; then 203 = {Mohan, Om}, which breaks clue (7) (Om would have only one room-mate). So Priya is $x$: 203 = {Mohan, Priya}.

Clue (7): Om is now in the $\{y, z\}$ room with Nitya (Pune) and Kabir-or-Lata; exactly one Delhi room-mate forces Lata. So that room is {Lata, Nitya, Om} and the other is {Ira, Jai, Kabir}.

*Why this method:* each composition clue is tested against the two or three places a person can be; the wrong places die by contradiction.

### Example 3: Count clue decides the labels

Clue (5): Room 201 has exactly two from Pune. {Ira, Jai, Kabir} has Jai and Kabir (two Pune) — fits; {Lata, Nitya, Om} has one. So 201 = {Ira, Jai, Kabir}, 202 = {Lata, Nitya, Om}, 203 = {Mohan, Priya}.

| Room | Occupants | Delhi | Pune |
|---|---|---|---|
| 201 | Ira, Jai, Kabir | 1 | 2 |
| 202 | Lata, Nitya, Om | 2 | 1 |
| 203 | Mohan, Priya | 1 | 1 |

Verify clue (4): every room has both ✓; clue (2): Kabir 201, Lata 202 ✓.

*Why this method:* the count clue was useless at the start (it cannot place anyone) and decisive at the end; sequencing matters.

### Example 4: A "what if" question

*Question.* If Kabir and Nitya swap rooms, which clue is violated?

New rooms: 201 {Ira, Jai, Nitya}, 202 {Lata, Kabir, Om}. Kabir and Nitya are both Pune, so every attribute count is unchanged: (4), (5), (6), (7) still hold. But Kabir is now with Lata — clue (2) fails. Only clue (2).

*Why this method:* when two swapped items share every attribute, only the name-based clues can break; check those first.

### Example 5: A non-unique set with "must be true"

Six people A–F into two teams, one of four and one of two. Clues: A and B are on different teams; C is with A; D is not with C; E is with F.

C is with A, so B is not with C; D is not with C either, so B and D are both on the team without A and C. E and F need two slots on one team. Two fillings survive: {A, C, E, F} / {B, D} and {B, D, E, F} / {A, C}. Nothing eliminates either.

| Filling | Team of 4 | Team of 2 |
|---|---|---|
| 1 | A, C, E, F | B, D |
| 2 | B, D, E, F | A, C |

"B and D are on the same team" — true in both rows: **must be true**. "E is with A" — true in row 1 only: **could be true**. "D is on the team of two" — row 1 only: could be true, not must. A question "If A is on the team of four, who is on the team of two?" selects row 1: B and D.

*Why this method:* listing the survivors as rows turns every must/could/if question into a scan; reasoning each question from scratch would take three times as long.

### Example 6: Conditional clues

Seven employees into three projects, with "if P is on project 1 then Q is on project 3" and "Q is not on project 3". The contrapositive gives P not on project 1 immediately. Conditional clues are best converted to their direct consequences as soon as either part is known.

*Why this method:* "if-then" clues do nothing until triggered; triggering them via the contrapositive is a free deduction most solvers miss.

## Traps & speed tips

- Sizes before names. Write the sizes at the top of each column and count empty slots after every placement.
- A "together" pair needs two empty slots in the same group; a "together" trio needs three.
- "Apart" with three groups is weak alone; combine it with "not in" and sizes.
- Attribute counts per group form a second table; fill it alongside the names.
- Convert every "if-then" clue to its contrapositive and apply whichever fires.
- "Exactly" versus "at least" in count clues changes the answer; underline it.
- When two items share all attributes, swapping them never changes count clues — only name clues.
- A contradiction means a misread; re-read sizes and quantifiers before branching further.

## Checklist

You should be able to:

- Draw a column frame with sizes and slots, and track empty slots.
- Build a skeleton with placeholders from sizes, together and apart clues.
- Maintain an attribute-count table per group and apply composition clues to it.
- Apply conditional clues through the contrapositive.
- Carry multiple valid fillings and answer must-be / could-be / if questions from them.
- Verify a final distribution against every clue in under a minute.
