# Reasoning-based DI (Missing Data)

> Since 2020, at least one DI set every year has been a table with blanks: you are given some cells, the row or column totals, and a few sentences of conditions, and the questions ask for the blanks. These sets reward method over arithmetic and are the most learnable 15 marks in DILR. CAT 2022–2024 each had one or two sets of this kind.

## Core ideas

### The anatomy of a missing-data set

You get three kinds of information:

1. **Known cells** — hard facts.
2. **Aggregates** — row totals, column totals, averages, grand total. An average is a total in disguise: average × count = total.
3. **Conditions** — sentences about the blanks: "no two students scored the same in Chemistry", "T's total is a multiple of 10", "R scored the highest in Physics", "the marks are whole numbers".

Every blank must be pinned down by combining these. The set is solvable in a definite order, and the order is what you must find.

### The single-gap rule

If a row (or column) has exactly one blank and its total is known, that blank equals total minus the known cells. This is the first thing to do, and it often cascades: filling one cell makes another row single-gap. Scan all rows and all columns, fill every single gap, rescan. Stop only when no row or column has exactly one gap.

### Linking equations

When a row has two blanks, its total gives one equation in two unknowns: $m + c = 162$. Write it on the sheet. A column total may give a second equation involving one of these unknowns, and the two together solve both. Treat the table as a system of linear equations where each row and column total is one equation — but do not solve it like algebra; look for the equation with the fewest unknowns and work outward.

A useful consistency check: the grand total computed from rows must equal the grand total from columns. If both are given, the difference is a free equation.

### Conditions turn ranges into values

When the equations run out, the sentence conditions take over. They work in a specific way: an equation leaves you with a *range* of possibilities, and a condition kills all but one.

- **Integer marks** + a bound ("out of 100") → a finite list.
- **Distinctness** ("all different") → removes values already used in that row/column.
- **Order / rank** ("R scored the highest in Physics", "T's mark is the median") → an inequality window.
- **Divisibility** ("total is a multiple of 10") → picks one value from the window.
- **Averages that include the unknown** → an equation: if $p$ equals the average of $76, 64, 80, 72, p$, then $5p = 292 + p$, so $p = 73$.
- **"At least / at most"** → bounds; combined with integers these often leave exactly one value.

Write the candidate list explicitly: $t \in \{69, 70, 71\}$. Then apply the next condition to the list. Never try to hold the list in your head.

### Order of attack

1. Fill single gaps (rows, then columns, then repeat).
2. Write a linking equation for every row/column with two blanks.
3. Convert averages to totals; convert "median", "highest", "distinct" into inequalities on the blanks.
4. Pick the blank with the smallest candidate set; fix it; cascade.
5. When all blanks are filled, verify every row and column total and every sentence condition. This takes 30 seconds and catches the one slip that would make five questions wrong.

### When the set does not fully resolve

Sometimes a set leaves two cells with a known *sum* but no way to split them. Then questions will either ask only about the sum (or things that depend on the sum alone), or add a condition inside the question ("If T scored 70 in Chemistry, then…"). Recognise this and stop trying to split: the question stem tells you what is needed. A question asking "What is the maximum possible value of…" is a signal that the base data is deliberately incomplete.

## Worked examples

All examples use this set. Five students, four subjects, marks out of 100, whole numbers:

| Student | Maths | Physics | Chemistry | English | Total |
|---|---|---|---|---|---|
| P | 82 | – | 68 | 74 | 300 |
| Q | – | 64 | – | 70 | 296 |
| R | 70 | 80 | – | 67 | 302 |
| S | 65 | 72 | 60 | – | 285 |
| T | 88 | – | – | 60 | – |

Conditions: (1) the Maths marks add to 395; (2) T's Physics mark equals the average Physics mark of the five; (3) the Chemistry marks are all different and T's is the median; (4) T's total is a multiple of 10.

### Example 1: Single gaps

*Row P:* $82 + x + 68 + 74 = 300 \Rightarrow x = 76$. *Row R:* $70 + 80 + y + 67 = 302 \Rightarrow y = 85$. *Row S:* $65 + 72 + 60 + z = 285 \Rightarrow z = 88$.

Rescan: rows Q and T still have two blanks each (T has three, counting its total). Columns: Maths has one blank (Q) and a known total: $82 + q + 70 + 65 + 88 = 395 \Rightarrow q = 90$. Now row Q is single-gap: $90 + 64 + c + 70 = 296 \Rightarrow c = 72$.

*Why this method:* six of seven blanks fell without any condition being used. Do the cheap work first; the conditions are for what remains.

### Example 2: An average that contains the unknown

Physics column: $76, 64, 80, 72, p$. Condition (2): $p = \dfrac{76 + 64 + 80 + 72 + p}{5}$, so $5p = 292 + p$, $4p = 292$, $p = 73$.

*Why this method:* "equals the average of the group including itself" always gives a linear equation; solve it rather than guessing values.

### Example 3: Median plus divisibility

Chemistry column: $68, 72, 85, 60, t$, all different, $t$ the median (third of five). Sorted without $t$: $60, 68, 72, 85$. For $t$ to be third, it must be strictly between 68 and 72: $t \in \{69, 70, 71\}$. T's total $= 88 + 73 + t + 60 = 221 + t \in \{290, 291, 292\}$. Multiple of 10: $t = 69$, total 290.

*Why this method:* the median condition gives a window of three; the divisibility condition selects one. Writing the window explicitly makes the selection a glance.

### Example 4: Verification

Completed table:

| Student | Maths | Physics | Chemistry | English | Total |
|---|---|---|---|---|---|
| P | 82 | 76 | 68 | 74 | 300 |
| Q | 90 | 64 | 72 | 70 | 296 |
| R | 70 | 80 | 85 | 67 | 302 |
| S | 65 | 72 | 60 | 88 | 285 |
| T | 88 | 73 | 69 | 60 | 290 |
| Total | 395 | 365 | 354 | 359 | 1473 |

Check: $395 + 365 + 354 + 359 = 1473 = 300 + 296 + 302 + 285 + 290$. Physics average $365/5 = 73 = $ T's mark ✓. Chemistry sorted $60, 68, 69, 72, 85$: median 69 = T ✓, all distinct ✓.

*Why this method:* every subsequent question reads this table; one wrong cell would make several answers wrong, so a 30-second check is the best investment in the set.

### Example 5: Answering a rank question from the table

*Question.* Which student has the same rank by total as by Maths mark?

By total: R, P, Q, T, S. By Maths: Q (90), T (88), P (82), R (70), S (65). Only S (last in both).

*Why this method:* write both orderings side by side; comparing position by position is faster than comparing numbers.

### Example 6: A set that does not resolve

Suppose condition (4) were missing. Then $t \in \{69, 70, 71\}$ and T's total $\in \{290, 291, 292\}$. A question "What is T's total?" would be unanswerable — so it would not be asked. Instead you would see "What is the minimum possible total of T?" (290) or "Who had the second highest total?" (P with 300, since T is at most 292). Read the questions to see what the setter expects you to know.

*Why this method:* the question wording reveals how far the data goes; it is a legitimate source of information.

## Traps & speed tips

- An average is a total; convert it immediately (average × count).
- Single-gap rows and columns first, cascading, before any condition.
- "All different" is a powerful filter but only *after* you have a candidate list.
- "Median" of five means strictly third with distinct values; with repeats allowed it is weaker — read the condition.
- Keep a list of which conditions you have used; a stuck set usually means an unused condition.
- Verify row and column totals once the table is full.
- Do not split a sum into two cells unless a condition forces it; questions may need only the sum.
- Watch units and bounds: marks out of 100, ratings 1–9, non-negative counts.

## Checklist

You should be able to:

- Spot and fill every single-gap row and column, cascading until none remain.
- Write linking equations for two-blank rows and combine them with column totals.
- Translate average, median, highest, distinct and multiple-of conditions into candidate lists.
- Pick the blank with the fewest candidates and resolve it first.
- Verify a completed table by cross-totals and by re-reading each condition.
- Recognise from question wording when a set is intentionally incomplete.
