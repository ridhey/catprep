# Quant-based Puzzles

> Many recent CAT LR sets are puzzles whose constraints are numbers: ratings by judges, scores across rounds, coins in boxes, ages of siblings — with sums, averages, ranks and "all different" conditions. They sit between missing-data DI and pure LR, and they reward one habit above all: turning each numerical condition into a *short list of integer possibilities*, then intersecting lists. CAT 2022–2024 each had at least one such set.

## Core ideas

### Why integers make puzzles solvable

The quantities are whole numbers in a small range (ratings 1–9, marks 0–100, coins 0–20). A single equation like $x + y = 17$ has infinitely many real solutions but, with $1 \le x, y \le 9$, only two integer ones: $(8, 9)$ and $(9, 8)$. Every condition in these sets is designed to be read this way: as a filter on a finite list. The solver who writes "$x + y = 17$" and stares is stuck; the solver who writes "$\{(8,9), (9,8)\}$" is one clue from done.

### The condition toolkit

| Condition | What it gives |
|---|---|
| Sum of a row/column | $x + y = s$ with bounds → a list of pairs |
| Average | a sum: average × count |
| Bounds ("1 to 9", "out of 100") | caps the lists; a sum of 17 from two ratings $\le 9$ forces both $\ge 8$ |
| All different (in a row/column) | removes already-used values from a list |
| Order ("$Z$ gave more than $X$") | keeps one of a symmetric pair |
| Highest/lowest/median | an inequality window |
| Multiple of / divisibility | picks from a window |
| Ratio ("twice as many") | parity and size: $b = 2e$ forces $b$ even |
| Difference ("differ by 3") | $|x - y| = 3$: a short list |

The bound is often the quiet hero. "Each rating is from 1 to 9" plus "$x + z = 17$" plus "$z > x$" gives $x = 8, z = 9$ with no further information.

### Lists, then intersections

Procedure for each unknown cell:

1. Write the equation it appears in (row sum, column sum).
2. Apply bounds → a list of candidate values or pairs.
3. Apply "all different" and order conditions → a shorter list.
4. If a single value remains, write it in; it will shorten other lists.
5. If two remain, note both and move on; a later deduction will decide, or a question will ask "could be".

Keep the lists on the sheet next to the table. Deductions chain: fixing Nisha's X-rating (9) removes 9 from Judge X's remaining list, which fixes Manav's by the column sum, which fixes Manav's Y-rating by the row sum, which removes 8 from Judge Y's list, which forces Leela's Y-rating.

### Ranks and totals

If ranks by total are given ("Kiran finished first, Leela second"), convert to inequalities between totals, and remember strict versus non-strict ("no ties" makes them strict). A rank clue plus integer totals often yields bounds: if Leela (21) is second and Manav is third, Manav $\le 20$ with no ties.

### Parity and divisibility

When a sum of several unknowns is given, parity (odd/even) can rule out combinations faster than listing. Three ratings summing to 23: an odd total means one or three of them are odd. "Total is a multiple of 10" with a sum of $221 + t$ leaves exactly one $t$ in any window of width less than 10.

### When to stop

Check the questions. If every question asks for a specific cell, the set resolves fully — push until every list has one entry. If questions say "could be" or "minimum possible", stop when the lists are as short as the conditions allow and answer from the lists.

### Procedure

1. Draw the table with every known cell and every total; convert averages to totals.
2. Fill single-gap rows/columns.
3. For each remaining unknown, write its equation, bound it, list candidates.
4. Apply distinctness and order conditions; fix cells; cascade.
5. Verify all sums and all conditions on the final table.

## Worked examples

Examples 1–4 use this set. Judges X, Y, Z rate Kiran, Leela, Manav, Nisha with whole numbers 1–9. Known: Kiran Y = 6, total 23; Leela X = 7, total 21; Manav Z = 8, total 22; Nisha Y = 4, total 20. Judge X's four ratings sum to 30; no judge gave the same rating twice; Kiran's Z-rating exceeds Kiran's X-rating.

### Example 1: Bounds make a pair

Kiran: $X_K + Z_K = 17$, each $\le 9$ → $(8, 9)$ or $(9, 8)$. $Z_K > X_K$ → $X_K = 8, Z_K = 9$.

*Why this method:* the sum 17 is two short of the maximum 18, so the pair is almost forced; the order clue finishes it.

### Example 2: Distinctness in a column

Nisha: $X_N + Z_N = 16$ → $(7, 9), (8, 8), (9, 7)$. Judge X has already given 8 (Kiran) and 7 (Leela), so $X_N \ne 7, 8$ → $X_N = 9, Z_N = 7$.

Judge X's sum: $8 + 7 + X_M + 9 = 30$ → $X_M = 6$. Manav's row: $6 + Y_M + 8 = 22$ → $Y_M = 8$.

*Why this method:* distinctness is only usable after other cells in the column are fixed; apply it at the right moment, not at the start.

### Example 3: The last cell by elimination

Leela: $Y_L + Z_L = 14$. Judge Z has given 9, 8, 7, so $Z_L \le 6$, hence $Y_L \ge 8$. Judge Y has given 6, 8, 4, so $Y_L \ne 8$; the cap of 9 leaves $Y_L = 9, Z_L = 5$.

| | X | Y | Z | Total |
|---|---|---|---|---|
| Kiran | 8 | 6 | 9 | 23 |
| Leela | 7 | 9 | 5 | 21 |
| Manav | 6 | 8 | 8 | 22 |
| Nisha | 9 | 4 | 7 | 20 |
| Total | 30 | 27 | 29 | 86 |

Verify: columns distinct (X: 8,7,6,9; Y: 6,9,8,4; Z: 9,5,8,7) ✓; rows sum ✓; $Z_K = 9 > X_K = 8$ ✓.

*Why this method:* combining a lower bound (from Z's used values) with an upper bound (the 1–9 scale) and distinctness in Y leaves one value — a three-condition intersection done in one line.

### Example 4: Answering derived questions

- Judge with the highest total: X (30) vs Y (27) vs Z (29) → X.
- Contestant with the same rating from two judges: Manav (8, 8).
- Rating never given by Z: 6.

*Why this method:* once the table is verified, every question is a scan; resist re-deriving.

### Example 5: Coins in boxes with ranks

Four boxes A, B, C, D hold 30 coins in total, all counts different positive integers. A has the most; D has the fewest; B has twice as many as D; C has 3 more than D. How many coins in each?

Let D $= d$. B $= 2d$, C $= d + 3$, A $= 30 - 4d - 3 = 27 - 4d$. Conditions: A largest → $27 - 4d > 2d$ and $27 - 4d > d + 3$ → $d < 4.5$ and $d < 4.8$ → $d \le 4$. D fewest → $d < d + 3$ (always) and $d < 2d$ (needs $d \ge 1$). All different: B $\ne$ C → $2d \ne d + 3$ → $d \ne 3$. Try $d = 1$: (23, 2, 4, 1) ✓. $d = 2$: (19, 4, 5, 2) ✓. $d = 4$: (11, 8, 7, 4) ✓. Three solutions — so a CAT set would add one more clue, e.g. "C has an odd number" → $d + 3$ odd → $d$ even → $d \in \{2, 4\}$; "B has fewer than C" → $2d < d + 3$ → $d < 3$ → $d = 2$: A 19, B 4, C 5, D 2.

*Why this method:* express everything in one variable, bound it with each inequality, then list the few survivors. Rank clues are inequalities; "different" clues are exclusions.

### Example 6: Scores across rounds with an average

Three players' scores over two rounds; totals 15, 12, 9; round-1 scores are 7, 5, $x$; the round-1 average equals the round-2 average. Find $x$.

Round-1 average = round-2 average means round-1 sum = round-2 sum = half the grand total $= (15 + 12 + 9)/2 = 18$. So $7 + 5 + x = 18 \Rightarrow x = 6$. Round-2 scores: $8, 7, 3$.

*Why this method:* "equal averages of equal-sized groups" means equal sums; convert immediately and the puzzle becomes arithmetic.

## Traps & speed tips

- Convert every average into a sum before anything else.
- Write candidate lists explicitly; mental lists lose entries.
- Bounds first: a sum close to the maximum or minimum nearly fixes its parts.
- "No judge gave the same rating twice" is per column; "no contestant got the same rating twice" would be per row — read which.
- Order clues break symmetric pairs; apply them to a pair, not before you have one.
- Parity: odd sums need an odd number of odd parts.
- After fixing a cell, immediately update the lists it affects — that cascade is the solution.
- Verify every row, column and condition on the final table; one wrong cell breaks all questions.

## Checklist

You should be able to:

- Turn a sum with bounds into an explicit list of integer pairs.
- Apply distinctness and order conditions to shorten lists at the right moment.
- Chain deductions: fix a cell, update the affected lists, repeat.
- Convert averages, ranks, ratios and divisibility conditions into sums, inequalities, parity and windows.
- Express a multi-unknown puzzle in one variable and bound it by inequalities.
- Verify a completed table against every condition before answering.
