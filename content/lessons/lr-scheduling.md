# Scheduling & Sequencing

> Timetables — six talks over three days, five deliveries in five slots, interviews in two panels — have appeared in CAT in most recent years, often with a second attribute (hall, interviewer, vehicle). They are arrangement sets with a grid instead of a line: time runs one way, and the extra dimension (room, slot type) gives the setter room for "same day but different hall" clues. Solved well, a scheduling set takes 8–10 minutes.

## Core ideas

### The grid

A schedule has two coordinates: **when** (day, and within a day, slot) and often **where** or **who** (hall, panel, person). Draw it as a grid before reading clues:

| | Morning | Afternoon |
|---|---|---|
| Mon | | |
| Tue | | |
| Wed | | |

Each cell takes exactly one event (or none, if the set allows empty slots — check). Number the cells in time order (Mon AM = 1, Mon PM = 2, …, Wed PM = 6) so that "before/after" clues become inequalities on cell numbers, and "same day" clues become "cells $2k-1$ and $2k$".

### The clue vocabulary

- **Absolute:** "Hiring is a morning talk" → restricts to a column. "Finance is on Wednesday" → a row.
- **Same day / same slot:** "Ethics and Hiring are on the same day" → they occupy both cells of one row (if two per day). This is a *block*: it needs an entirely free row.
- **Consecutive days:** "Finance is on the day immediately after Innovation" → rows $r$ and $r + 1$. Two options for three days.
- **Before/after (time order):** "Logistics is after Ethics but before Innovation" → cell numbers $E < L < I$. Note that "after" across days includes "the next morning".
- **Immediately before/after (time order):** adjacent cell numbers, which may cross a day boundary (Tue PM is immediately before Wed AM).
- **Gap:** "exactly one talk between X and Y" → cell numbers differ by 2.
- **Attribute:** "the two talks on a day are in different halls", "X and Y are in the same hall" → a second grid, or a letter next to each name.

### Space-consuming clues first

In a scheduling grid the strongest clue is the one that **uses the most cells**: a same-day pair consumes a whole row; a consecutive-day pair consumes two rows' worth of options; a single absolute clue consumes one cell. Apply in that order. Then use before/after chains, which become very tight once the rows fill up.

A chain like $E < L < I$ with $E$ and $I$ already placed has at most a few cells for $L$; with two of them on the same day it has exactly one.

### Case splitting on the binary clue

Consecutive-day clues over three days give two cases. Write both grids, apply the whole-row block to each, and one usually dies immediately because the block has nowhere to go or because a chain cannot run in the required direction. Kill it and continue with the survivor.

### The second attribute

Do the time grid fully first. Then handle the attribute with its own small rules:

- "Different halls on the same day" plus one anchored hall per day fixes the other.
- "Same hall" clues propagate along the chain of anchored cells.
- A count clue ("exactly three talks in Hall X") is a check at the end.

Write the hall as a letter in the cell next to the talk, so the final grid carries both.

### Procedure

1. Draw and number the grid; note whether cells can be empty.
2. Translate each clue to grid language (row, column, cell inequality, block).
3. Apply blocks (same-day pairs) and two-row clues (consecutive days), splitting into cases if needed.
4. Apply absolute clues and before/after chains; kill dead cases.
5. Fill remaining cells by elimination.
6. Do the attribute layer.
7. Verify every clue against the final grid, including the "before/after" direction.

## Worked examples

Examples 1–4 use this set. Six talks — Ethics, Finance, Growth, Hiring, Innovation, Logistics — over Mon–Wed, one morning and one afternoon talk per day, each in Hall X or Hall Y with the two talks of a day in different halls. Clues: (1) Finance is on the day immediately after Innovation's day; (2) Ethics and Hiring are on the same day; (3) Logistics is after Ethics and before Innovation; (4) Growth is an afternoon talk; (5) Hiring is a morning talk; (6) Hiring and Logistics are in Hall X; (7) Ethics and Finance are in the same hall.

### Example 1: Blocks and the binary split

Clue (2) is a whole-row block {Ethics, Hiring}. Clue (1) gives two cases: (Innovation Mon, Finance Tue) or (Innovation Tue, Finance Wed).

*Case 1:* Mon and Tue each have one cell used; the only fully free row is Wed, so Ethics and Hiring are on Wed. Then clue (3) needs Logistics after Ethics (Wed) and before Innovation (Mon): impossible. Dead.

*Case 2:* Innovation Tue, Finance Wed; the free row is Mon, so Ethics and Hiring are on Mon.

*Why this method:* the block clue needs a whole row, which only one case can provide once the chain direction is considered; the split resolves in two lines.

### Example 2: Chains and absolutes

Hiring is a morning talk → Mon AM Hiring, Mon PM Ethics. Logistics after Ethics (cell 2) and before Innovation (Tue): Logistics must be Tue AM (cell 3), so Innovation is Tue PM (cell 4). Growth is the last unplaced talk and must be an afternoon talk → Wed PM; Finance is Wed AM.

| | Morning | Afternoon |
|---|---|---|
| Mon | Hiring | Ethics |
| Tue | Logistics | Innovation |
| Wed | Finance | Growth |

*Why this method:* once rows are assigned, the before/after chain has exactly one legal cell for each member.

### Example 3: The hall layer

Hiring X → Ethics Y (same day, different halls). Logistics X → Innovation Y. Finance same hall as Ethics → Y, so Growth is X.

Final: Mon Hiring (X) / Ethics (Y); Tue Logistics (X) / Innovation (Y); Wed Finance (Y) / Growth (X). Hall Y: Ethics, Innovation, Finance.

*Why this method:* two anchors plus the "different halls per day" rule determine every hall without cases.

### Example 4: Reading "immediately before" across days

*Question.* The talk immediately before Finance is held where?

Finance is cell 5 (Wed AM). Cell 4 is Tue PM: Innovation, Hall Y. Answer: Tuesday, Hall Y. A solver who thinks "immediately before" must be on the same day would answer wrongly.

*Why this method:* numbering cells in time order makes "immediately before" a subtraction, and the day boundary disappears as a source of error.

### Example 5: A five-slot sequence with a gap clue

Five deliveries P, Q, R, S, T on Mon–Fri, one per day. Clues: exactly one delivery between P and Q; R is before P; S is on Thursday; T is not on Monday.

S = Thu. P and Q are two days apart: pairs (Mon, Wed), (Tue, Thu), (Wed, Fri), (Thu, …) — Thu is taken, so (Mon, Wed) or (Wed, Fri) in either order. R before P means P is not Mon. Options: P Wed & Q Mon; P Wed & Q Fri; P Fri & Q Wed.

- P Wed, Q Mon: R before Wed → R Tue; T Fri. Valid (T not Mon ✓).
- P Wed, Q Fri: R before Wed → R Mon or Tue; T takes the other; T not Mon → T Tue, R Mon. Valid.
- P Fri, Q Wed: R before Fri → R Mon or Tue; T the other; T not Mon → T Tue, R Mon. Valid.

Three schedules survive. "Which day could R be on?" → Mon or Tue. "If Q is on Monday, which day is T?" → Fri.

*Why this method:* the gap clue plus the fixed day gives a short list; each entry is finished in one line; the question format ("could", "if") confirms the set is meant to be non-unique.

### Example 6: Counting free slots

Four meetings in six slots (two slots stay empty). "A is immediately before B" and "C is in slot 6"; "no meeting in slot 1". A–B is a block of two consecutive slots among 2–5: (2,3), (3,4), (4,5). D takes any remaining slot in 2–5 not used by the block. Count: block (2,3): D ∈ {4, 5} → 2; block (3,4): D ∈ {2, 5} → 2; block (4,5): D ∈ {2, 3} → 2. Six schedules.

*Why this method:* with empty slots allowed, counting must consider the block's positions and then the free item's positions; a product-of-choices structure shows up once the block is treated as a unit.

## Traps & speed tips

- Number cells in time order; "before/after" are then inequalities and "immediately" means ±1 — across day boundaries too.
- A same-day pair needs a whole free row; use it first.
- "Day immediately after" means the next day, not any later day.
- "Morning" and "afternoon" are columns; "Monday" is a row — do not confuse the two coordinates.
- Check whether empty slots are allowed; it changes the counting completely.
- Do the time grid before the hall/person layer unless an attribute clue is positional.
- "Different halls on the same day" with one hall anchored fixes the partner's hall — a free deduction.
- Verify the direction of every before/after clue at the end; reversed chains are the commonest error.

## Checklist

You should be able to:

- Draw a day × slot grid, number its cells in time order, and translate every clue into grid language.
- Identify block and two-row clues and apply them before single-cell clues.
- Split on a binary clue, carry two grids and kill one by a chain-direction contradiction.
- Resolve before/after chains once rows are fixed.
- Complete a hall/person attribute layer using same-day-different-hall rules.
- Enumerate surviving schedules for non-unique sets and answer could/if questions from the list.
