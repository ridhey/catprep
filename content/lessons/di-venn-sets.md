# Venn Diagram based DI

> A three-set survey ("how many use Nova, Orbit, Pixel") appears in CAT roughly every other year, and a two-set version hides inside many other sets. The questions are not about drawing circles; they are about two bookkeeping equations and about which regions are fixed and which are free. Expect 4–5 questions, often with a "maximum/minimum possible" twist.

## Core ideas

### Regions, not circles

Three sets $N$, $O$, $P$ split the people into eight **regions**, each person in exactly one:

| Region | Symbol | Meaning |
|---|---|---|
| only $N$ | $a$ | $N$ but not $O$, not $P$ |
| only $O$ | $b$ | |
| only $P$ | $c$ | |
| $N$ and $O$ only | $d$ | both, but not $P$ |
| $N$ and $P$ only | $e$ | |
| $O$ and $P$ only | $f$ | |
| all three | $g$ | |
| none | $h$ | |

Every number in the set is a sum of some of these eight. Your first job is to translate each given figure into an equation in $a$–$h$:

- "Used Nova" $= a + d + e + g$ (everything inside the $N$ circle).
- "Used both Nova and Orbit" $= d + g$ (with or without Pixel — the phrase "both" includes those who also use the third).
- "Used Nova and Orbit but not Pixel" $= d$.
- "Exactly two" $= d + e + f$. "Exactly one" $= a + b + c$. "At least two" $= d + e + f + g$. "At least one" $= $ total $- h$.
- "Only Nova" $= a$.

Read the word "only", "both", "exactly", "at least" with care: they select different regions.

### The two bookkeeping equations

Let $x_1 = a + b + c$ (exactly one), $x_2 = d + e + f$ (exactly two), $x_3 = g$ (all three).

**Equation A (people):** $x_1 + x_2 + x_3 = $ number using at least one $= $ total $- h$.

**Equation B (memberships):** $|N| + |O| + |P| = x_1 + 2x_2 + 3x_3$. Adding the three circle counts counts an "exactly two" person twice and an "all three" person three times.

Given any three of $\{|N| + |O| + |P|,\ \text{at least one},\ x_1,\ x_2,\ x_3\}$ you can find the rest. This is the engine of every Venn DI set. The classic inclusion–exclusion formula

$$|N \cup O \cup P| = |N| + |O| + |P| - |N \cap O| - |N \cap P| - |O \cap P| + |N \cap O \cap P|$$

is the same bookkeeping written with pairwise intersections ($|N \cap O| = d + g$, etc.). Use whichever form matches the data you are given.

### Fixed regions and free regions

After writing all equations, count: 8 unknowns (7 if "none" is given). If you have fewer independent equations than unknowns, some regions are free. Express every region in terms of one free variable, say $e$, and write its allowed range (every region must be $\ge 0$). Then:

- A question about a region that does not contain $e$ has a definite answer.
- A question about a combination where $e$ cancels (such as $a + e$) also has a definite answer — do the algebra before saying "cannot be determined".
- "Maximum/minimum possible" questions: push $e$ to the end of its range that maximises or minimises the expression. Check that *all* regions stay non-negative at that end.
- A question that adds a condition ("if only Orbit is twice…") pins $e$; solve for it, then read off.

### Two-set problems

With two sets the regions are: only $A$, only $B$, both, neither. Equation: $|A \cup B| = |A| + |B| - |A \cap B|$. Max of "both" is $\min(|A|, |B|)$; min of "both" is $\max(0, |A| + |B| - \text{total})$. These bounds reappear as building blocks in three-set max/min questions.

### Procedure

1. Draw the eight-region table (not the circles — the table is faster to fill and audit).
2. Translate every given number into an equation; mark which regions each includes.
3. Solve Equations A and B for $x_1, x_2, x_3$ if possible.
4. Use pairwise data ("both N and O") to fix individual overlap regions.
5. Express the remaining regions in one free variable with its range.
6. Answer each question by substitution; for max/min, go to the ends of the range.
7. Check: all regions non-negative, and the three circle totals reproduce the given counts.

## Worked examples

All examples use this survey. 200 people; Nova 95, Orbit 80, Pixel 70; none 30; exactly two 35; both Nova and Orbit (with or without Pixel) 30.

### Example 1: Finding "all three"

At least one $= 200 - 30 = 170$. Equation A: $x_1 + 35 + g = 170 \Rightarrow x_1 + g = 135$. Equation B: $95 + 80 + 70 = 245 = x_1 + 70 + 3g \Rightarrow x_1 + 3g = 175$. Subtract: $2g = 40$, $g = 20$, $x_1 = 115$.

*Why this method:* the two equations use only the totals; they always come first and often answer the first question directly.

### Example 2: Fixing the overlaps

"Both Nova and Orbit" $= d + g = 30 \Rightarrow d = 10$. Exactly two: $d + e + f = 35 \Rightarrow e + f = 25$. Now each circle:

- Nova: $a + d + e + g = 95 \Rightarrow a = 65 - e$.
- Orbit: $b + d + f + g = 80 \Rightarrow b = 50 - f = 25 + e$.
- Pixel: $c + e + f + g = 70 \Rightarrow c = 70 - 25 - 20 = 25$.

Free variable $e$ with $0 \le e \le 25$ (so that $f = 25 - e \ge 0$ and $a \ge 0$).

*Why this method:* one free variable with a known range is the complete description of the set; every question is now a substitution.

### Example 3: A fixed region among free ones

*Question.* How many used only Pixel?

$c = 25$ regardless of $e$, because Pixel's equation contains $e + f$, which is known, not $e$ alone.

*Why this method:* checking whether the free variable actually appears is faster and more reliable than a feeling that "we don't know enough".

### Example 4: Maximum of a region

*Question.* Maximum possible number using only Nova?

$a = 65 - e$, maximised at $e = 0$: $a = 65$. Check all regions at $e = 0$: $a = 65, b = 25, c = 25, d = 10, e = 0, f = 25, g = 20$; sum $= 170$ ✓; Orbit $= 25 + 10 + 25 + 20 = 80$ ✓.

*Why this method:* the extreme of a linear expression is at an end of the range, and the check confirms that end is actually attainable.

### Example 5: A condition inside the question

*Question.* If "only Orbit" is twice "Nova and Pixel but not Orbit", how many used only Nova?

$b = 2e \Rightarrow 25 + e = 2e \Rightarrow e = 25$. Then $a = 65 - 25 = 40$.

*Why this method:* the question's condition is one more equation; with one free variable it resolves everything.

### Example 6: A combination where the free variable cancels

*Question.* How many used Nova or Pixel but not Orbit?

Region $= a + e + c = (65 - e) + e + 25 = 90$. Alternatively: (at least one) $-$ (Orbit) $= 170 - 80 = 90$. Definite, despite $e$ being unknown.

*Why this method:* "cannot be determined" is an option the setter includes as a trap; algebra decides, not intuition.

## Traps & speed tips

- "Both A and B" includes those who also use C. "A and B only" excludes them. "Only A" means A alone.
- "Exactly two" $\neq$ "at least two". "At least one" $= $ total $-$ none.
- Adding the circle counts double-counts overlaps; that is the point of Equation B, not a mistake to avoid.
- Always write the range of the free variable from *all* non-negativity conditions, not just the obvious one.
- For max/min, test the endpoint: every region must stay $\ge 0$.
- Before writing "cannot be determined", express the asked region algebraically; the free variable may cancel.
- Use the table of eight regions, not drawn circles — it is easier to audit under time pressure.
- With percentages instead of counts, work in percentages throughout and convert at the end.

## Checklist

You should be able to:

- Name the eight regions of a three-set diagram and translate any phrase ("both", "only", "exactly two", "at least one") into a sum of regions.
- Write and solve the people equation and the membership equation for $x_1, x_2, x_3$.
- Fix overlap regions from "both A and B" data.
- Express all regions in one free variable with its range.
- Answer maximum/minimum questions by going to the ends of the range and checking feasibility.
- Decide algebraically whether a region or combination is determined.
