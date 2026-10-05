# Set Selection & Time Strategy

> CAT asks nothing directly here, yet this decides your DILR percentile more than any single set type: 20 questions in 4 sets, 40 minutes, and the top scorers typically solve 2–3 sets fully and leave the rest. Choosing wrong costs you a set *and* the ten minutes you spent discovering it.

## Core ideas

### What the DILR section actually is

Four sets, each with 4–6 questions (usually 5), 40 minutes, no sectional breaks. Each set is a block of data (a table, a story with constraints, a tournament) followed by questions that all depend on the same block. Marks: +3 for a correct MCQ, −1 for a wrong MCQ, and 0 for a wrong TITA (type-in-the-answer) question. Since 2021 the section has been small and the sets have been *reasoning-heavy*: fewer calculations, more "deduce what the table must be".

The key arithmetic of the section: 12 correct answers out of 20 (roughly two and a half sets) with no wrong MCQs has historically landed around the 95–98th percentile; 15–16 correct is 99+. Nobody at 99 percentile solves all four sets. The exam is designed so that one set is hard enough to eat 25 minutes, and the people who fall into it are the ones who did not scan first.

### Why scanning works

A set's difficulty is mostly visible *before* you start solving it. Three things predict it:

1. **Data density.** Count the constraints. A set with 4 clean conditions and a 5-person arrangement has a small case tree. A set with 9 conditions, two of which are "either/or", will branch. A table with 40% of cells missing is a long deduction chain.
2. **Question type.** Questions like "Which of the following must be true?" or "How many arrangements are possible?" mean the set does *not* have a unique solution and you will carry multiple cases through every question. Questions like "What was T's mark?" (TITA with a single number) usually mean the set resolves fully.
3. **Familiarity.** Round-robin tournaments, seating, scheduling, Venn diagrams: if you have practised the type, the first five minutes are mechanical. An unfamiliar format ("a coin-weighing game", "a bus with passengers boarding and alighting") costs you several minutes of just understanding the rules.

Give each set a score in your head: **D** (doable, I know this type, few conditions), **M** (maybe), **X** (avoid). You want to leave the scan with at least one D and one M.

### The 5-minute scan procedure

Do this before touching any question.

1. Minute 0–1: read set 1's data block and the *stems* of its questions (not the options). Tag it D/M/X. Note whether questions are TITA or MCQ and whether any says "must be true" or "how many ways".
2. Minutes 1–4: repeat for sets 2, 3, 4.
3. Minute 4–5: decide the order: D first, then the stronger M. Write the order on your rough sheet. Do not revisit this decision for the next 12 minutes.

Spending five minutes to not solve anything feels wasteful. It is not: the alternative is a 50% chance of starting with the hardest set.

### The "attempt 2 fully" plan

Time budget for a 40-minute section:

| Phase | Minutes | Goal |
|---|---|---|
| Scan | 0–5 | Rank the four sets |
| Set 1 (your D) | 5–17 | All questions correct |
| Set 2 (your best M) | 17–30 | All or all-but-one |
| Set 3 (partial) | 30–38 | The 1–2 questions that need only the easy deductions |
| Review | 38–40 | Re-check any MCQ you were unsure of; un-mark if the risk is real |

The third set is deliberately a *partial* attempt: in most sets, one or two questions can be answered from the first layer of deductions (the direct ones), without solving the whole thing. TITA questions in that set are free shots — no negative marking.

### The abandonment rule

Set a tripwire: **if after 6 minutes on a set you do not have a skeleton** (the main structure fixed, with only small branches left), stop and move to the next set in your order. Six minutes is enough to know. The sunk cost is the enemy: "I've already spent eight minutes, I can't leave now" is exactly how a set eats 25 minutes.

Equally, do not leave a set you have cracked just because the last question looks long. Once the structure is solved, each remaining question is worth 3 marks for 60 seconds. That is the best rate of return in the whole exam.

### Reading a set correctly the first time

Most "hard" sets are hard because the solver misread one rule. Before deducing anything:

- Rewrite every condition in symbols on the rough sheet: "A is not adjacent to B" becomes `A ✕ B`, "exactly one person between P and Q" becomes `P _ Q`.
- Underline quantifiers: *exactly*, *at least*, *at most*, *only*, *each*, *some*. "At least one from each city" and "exactly one from each city" produce different answers.
- Fix the physical frame: seats numbered, days in order, a table with rows and columns labelled. Every deduction goes into this frame, never into prose.
- Note what *kind* of answer each question wants: a name, a number, a count of possibilities. This tells you how far you must solve.

### Where marks are lost

From the pattern of errors students make:

- **Mis-starting.** Picking the X set first. Fixed by scanning.
- **Over-solving.** Carrying a set to full resolution when the questions only needed the first layer. Fixed by reading the stems before solving.
- **Case explosion.** Branching on a weak condition (one that splits into four) before using a strong one (one that fixes a position). Always apply the most restrictive condition first.
- **Not using the questions.** Options and later questions often reveal which cases are live. If a question asks "Who sits opposite X?" with four named options, X's opposite is fixed in the solution; if it asks "Which of these *could* sit opposite X?", there are multiple cases.
- **Guessing MCQs.** A wrong MCQ costs 1 mark and, at 99th percentile, one mark is about a percentile. Guess only when you have eliminated two options.

## Worked examples

### Example 1: Scanning four sets

You open the section and see:

- **Set A:** 6 people, 5 clean conditions, a round table; questions are "Who sits opposite P?", "How many sit between Q and R?", all MCQ with names.
- **Set B:** a 6×5 table of sales with 12 missing cells, three statements about totals and ranks; questions are 3 TITA numbers and 2 MCQs.
- **Set C:** a game played with cards over 4 rounds with a scoring rule you have never seen; questions include "how many possible sequences…".
- **Set D:** a 3-set Venn diagram with 200 people and "maximum/minimum" questions.

*Ranking.* A is D (familiar, few conditions, unique-answer questions). D (the Venn) is D or M — Venn sets with max/min are formulaic once you know the two bookkeeping equations. B is M: missing-data sets are usually solvable but long. C is X: unfamiliar format plus "how many sequences" means case-carrying.

*Order:* A, Venn, B, then C only if time remains. Why this method: the ranking uses only what is visible without solving, which is the whole point of the scan.

### Example 2: The six-minute tripwire

You start a scheduling set. After six minutes you have placed two of eight events and have three open cases. Should you continue?

*Decision.* No skeleton after six minutes means the remaining questions will each cost 2–3 minutes with case-carrying. Move to the next set. Come back only if you finish your other sets with 8+ minutes to spare — and then start by re-reading the conditions, because a stuck set usually means a misread condition.

Why this method: the tripwire is decided *before* you are emotionally invested, so it actually fires.

### Example 3: Partial attempt on the third set

The third set is a missing-data table. You have 8 minutes. The questions:

1. "What is the total sales of store P?" (TITA)
2. "Which store had the highest sales in Q3?" (MCQ)
3. "How many stores had sales above 500 in every quarter?" (MCQ)
4. "What is the ratio of…?" (TITA)

*Approach.* Fill only the cells that come from single-gap rows and columns (one unknown, one total). Then check which questions are answerable. Typically Q1 and Q4 (TITA, specific cells) fall from the first layer. Attempt those; leave Q2 and Q3 if they need the full table. Two TITA attempts with no negative marking in 8 minutes is a good trade.

Why this method: the first layer of a missing-data set is cheap; the last layer is expensive; the marks per question are the same.

### Example 4: To guess or not

You have narrowed an MCQ to two options and the clock shows 39:10.

*Expected value of guessing:* $\tfrac12(+3) + \tfrac12(-1) = +1$. Positive, so guess. With three options live: $\tfrac13(3) + \tfrac23(-1) = +\tfrac13$, marginally positive but with higher variance; at 99th percentile, where a single wrong answer can cost a percentile, skip unless you have a lean. With four options live: $\tfrac14(3) + \tfrac34(-1) = 0$ — no gain, so never.

Why this method: expected value is the only honest way to decide; "I have a feeling" is not a strategy.

### Example 5: Reading the questions before solving

A seating set has five questions. Four of them say "If X sits next to Y, then…" with different extra conditions.

*Inference.* The base conditions do not determine a unique arrangement; each question adds a condition to pin it down. So: solve to the point of a small set of cases (say 3), write all three on the sheet, then answer each question by picking the case that satisfies its extra condition. Do not try to force a unique base arrangement — there is none.

Why this method: the structure of the questions tells you how far the data can take you.

## Traps & speed tips

- The first set on the screen is not the easiest. Scan all four.
- A set that looks "mathematical" (big table, many numbers) is often easier than a wordy puzzle, because its questions are direct reads.
- Count the conditions; count the "either/or"s. Each either/or doubles the case tree.
- "Which of the following must be true / could be true / cannot be true" means multiple cases survive. Budget time accordingly.
- In the last five minutes, TITA questions on half-solved sets are free: a wrong TITA costs nothing.
- Keep your rough work in one frame per set, so that returning to a set after 20 minutes costs seconds, not minutes.
- Never recompute something you have already written down. If you find yourself redoing a column sum, your sheet is disorganised.

## Checklist

Before practising sets you should be able to:

- State the marking scheme and the "12–15 correct is 99 percentile" benchmark.
- Scan four sets in five minutes and rank them D/M/X using data density, question type and familiarity.
- Write a time budget for a 40-minute section and name the six-minute tripwire.
- Rewrite any condition in symbols and underline its quantifier.
- Decide whether a set resolves uniquely from the wording of its questions.
- Compute the expected value of a guess with 2, 3 or 4 live options.
