# Tables, Bar & Line Charts

> One DI set per paper is usually a "straight" table or chart set: growth rates, shares, rankings, totals. It is the most reliable 12–15 marks in the section if you read the data correctly the first time and compute only what the question needs. CAT 2022–2024 typically had one such set with 4–5 questions.

## Core ideas

### What a table is, and how to read it in 60 seconds

A table is a grid: **rows** are usually the entities (firms, students, cities) and **columns** are the measures or periods (years, subjects, quarters). Every cell is one number with a meaning fixed by its row label, its column label and the **unit** given in the title or a footnote (₹ crore, thousands, %). Before you read a single question:

1. Read the title and the units. "Profit margin (%)" is a *rate*; "Profit (₹ crore)" is an *amount*. Mixing them is the most common error.
2. Read the row labels and column labels. Note the direction of time (left to right? top to bottom?).
3. Read any footnote. "Profit = Revenue × Margin" is an instruction, not decoration.
4. Compute the row or column totals *only if* the questions will need them — scan the stems to decide.

A **bar chart** is a table drawn as rectangles; a **line chart** is a table drawn as points joined by lines; a **pie chart** is one column of a table scaled to 100% (or to 360°). In this course, charts are given to you as tables, so the reading step is the same. In the exam, when a chart appears, your first move is to *write its numbers into a table* on the rough sheet; never read values off a chart twice.

### The five calculations DI asks

Almost every question on a table is one of these:

1. **Growth (percentage change).** $\dfrac{\text{new} - \text{old}}{\text{old}}$. Compare growths by comparing ratios $\tfrac{\text{new}}{\text{old}}$.
2. **Share.** $\dfrac{\text{part}}{\text{total}}$ for one column. Shares in one column add to 100%.
3. **Derived quantity.** Something defined by a formula in the passage: profit = revenue × margin; sales per employee = sales ÷ employees. Compute it into a *new column* of your table.
4. **Ranking / counting.** "Which firm was highest in…", "In how many years did…". Needs an ordering, not exact values.
5. **Aggregation.** Totals across rows or columns, or averages. Use pairing and deviations (see the speed-math lesson).

Label each question with its type before computing. Type 4 questions rarely need exact arithmetic; type 1 and 3 often need it only for the borderline cases.

### Rates versus amounts

If margin rises from 10% to 15% while revenue rises from 240 to 414, profit rises from $24$ to $62.1$ — a factor of $2.59$, far more than either the revenue factor ($1.725$) or the margin factor ($1.5$), because the two multiply. Rules:

- A percentage *of* something is an amount; a percentage *change* is a rate.
- Two rates on different bases cannot be added. (15% margin on 300 and 20% margin on 270 give a combined margin of $(45 + 54)/570 = 17.4\%$, not 17.5%.)
- Average of ratios ≠ ratio of averages. Average margin across firms, if asked, is total profit ÷ total revenue, unless the question explicitly says "average of the margins".

### Reading what the question *really* asks

CAT stems are precise; wrong answers come from reading them loosely.

- "Highest growth" (a percentage) is not "highest increase" (an amount).
- "From 2021 to 2024" means over the whole span, one ratio; "year-on-year" means each consecutive pair.
- "More than double" is a strict inequality; $53.46$ is not more than double $27$.
- "Closest to" invites approximation; "exactly" forbids it.
- "In how many years…" counts years, so set up a tick-list of years.
- "Combined" / "together" means add the entities first, then compute.

Underline the quantifier and the base in each stem before you compute.

### Procedure for a table set

1. Read title, units, labels, footnotes (30 seconds).
2. Scan the five stems; mark each as growth / share / derived / ranking / aggregation; note which need row or column totals (30 seconds).
3. Compute the derived column(s) and any totals that two or more questions need, once, into your table (1–2 minutes).
4. Answer the questions in order of ease: ranking and aggregation first, exact derived-value questions last.
5. For every comparison question, eliminate by estimation, then compute exactly only the top two.

## Worked examples

All examples use this data. Revenues (₹ crore):

| Firm | 2021 | 2022 | 2023 | 2024 |
|---|---|---|---|---|
| Arka | 240 | 300 | 345 | 414 |
| Brio | 180 | 216 | 270 | 297 |
| Celia | 400 | 380 | 418 | 460 |
| Dyna | 150 | 195 | 234 | 260 |

Profit margin (%): Arka 10, 12, 12, 15; Brio 15, 15, 20, 18; Celia 8, 10, 10, 12; Dyna 20, 16, 15, 15.

### Example 1: Build the derived column first

*Compute the profit table.*

Profit = revenue × margin. Arka: $24, 36, 41.4, 62.1$. Brio: $27, 32.4, 54, 53.46$. Celia: $32, 38, 41.8, 55.2$. Dyna: $30, 31.2, 35.1, 39$. Column totals: $113, 137.6, 172.3, 209.76$.

*Why this method:* three of the five questions in a typical set on this data need profits, so computing them once (16 multiplications, each a split like $297 \times 0.18 = 59.4 - 5.94$) saves recomputing inside every question.

### Example 2: Highest year-on-year growth of the total

*Question.* In which year did the combined revenue grow fastest?

*Solution.* Totals: 970, 1091, 1267, 1431. Increases: 121, 176, 164. Growth: $121/970 \approx 12.5\%$, $176/1091 \approx 16.1\%$, $164/1267 \approx 12.9\%$. 2023.

*Why this method:* 2023 has the largest increase on a smaller base than 2024, so it wins before any division; the only genuine comparison is 2022 vs 2024, and $121/970$ vs $164/1267$ is settled by noting $164/1267 > 121/970$ because $164/121 \approx 1.36 > 1267/970 \approx 1.31$.

### Example 3: Counting with a borderline

*Question.* For how many firms was the 2024 profit more than double the 2021 profit?

*Solution.* Arka $62.1 > 48$ ✓. Brio $53.46 < 54$ ✗. Celia $55.2 < 64$ ✗. Dyna $39 < 60$ ✗. Answer 1.

*Why this method:* three cases are decided by eye; Brio is within 1% of the threshold, so it is computed exactly. "More than double" is strict, so $53.46$ fails.

### Example 4: Share question with close options

*Question.* Brio's share of 2022 total profit is closest to 21.5%, 23.5%, 25.5%, 27.5%?

*Solution.* $32.4/137.6$. $25\%$ of 137.6 is 34.4, which is 2 above 32.4; 2 is about $1.45\%$ of 137.6. So $\approx 23.5\%$.

*Why this method:* options are 2 points apart, so a 0.5-point-accurate estimate from the nearest benchmark is sufficient and faster than division.

### Example 5: Rate vs amount trap

*Question.* Which firm's margin increased the most from 2021 to 2024, and did that firm also have the largest percentage increase in profit?

*Solution.* Margin changes (in points): Arka $+5$, Brio $+3$, Celia $+4$, Dyna $-5$. Arka's margin rose most. Profit factors: Arka $62.1/24 = 2.59$, Brio $53.46/27 = 1.98$, Celia $55.2/32 = 1.725$, Dyna $1.3$. Yes, Arka also had the largest profit growth — but note the reason: it had *both* a large revenue factor (1.725) and a large margin factor (1.5), and these multiply.

*Why this method:* separating the two factors shows why Celia, with a bigger margin rise than Brio, still grew profit less: its revenue barely moved.

### Example 6: Average of ratios

*Question.* What was the overall profit margin of the four firms together in 2024?

*Solution.* Total profit $209.76$, total revenue $1431$. Margin $= 209.76/1431 \approx 14.66\%$. The simple average of the four margins, $(15 + 18 + 12 + 15)/4 = 15\%$, is wrong because the firms have different revenues; Celia's low margin carries the largest weight.

*Why this method:* an overall rate is always total-over-total; the simple average of rates is the trap option.

## Traps & speed tips

- Write chart values into a table once; never re-read a chart.
- Derived quantities go into a new column before you start the questions.
- Growth = percentage; increase = amount. Read which one the stem wants.
- Margins, shares and growth rates cannot be averaged or added across different bases.
- Strict inequalities ("more than", "at least") mean compute the borderline case exactly.
- For "which is highest" questions, eliminate by eye and compute exactly only for the final two.
- Sanity-check totals: the sum of row totals must equal the sum of column totals.
- Units: if revenue is in crore and the question asks in lakh, multiply by 100.

## Checklist

You should be able to:

- Read a table's title, units, labels and footnotes before any question, and convert a chart to a table.
- Classify each question as growth, share, derived, ranking or aggregation.
- Compute a derived column (e.g. profit from revenue and margin) in under two minutes for a 4×4 table.
- Compare growth rates by ratios, with exact work only on the closest pair.
- Explain why an overall rate is total-over-total and not an average of rates.
- Spot strict-inequality stems and compute the borderline case exactly.
