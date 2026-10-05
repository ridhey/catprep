# Speed Calculation for DI

> Every DI set in CAT hides 10–20 small calculations: a growth rate, a share, a ratio comparison. The calculations are never hard, but doing them long-hand costs a minute each, and a minute per question is the difference between finishing a set and abandoning it. The skill here is deciding *how exact* an answer needs to be, then getting there in ten seconds.

## Core ideas

### Exact or approximate? Decide first

Before computing anything, look at what the answer must do.

- **TITA with an exact number** ("What is the total profit?") → compute exactly, but use clean arithmetic (see below).
- **MCQ with options far apart** (24%, 27%, 30%, 33%) → approximate to the nearest option; precision of about 1% is enough.
- **MCQ with options close together** (23.4%, 23.5%, 23.6%) → compute exactly; approximation will betray you.
- **Comparison questions** ("Which firm grew fastest?") → you need *ordering*, not values. Approximate until two candidates are too close to separate, then compute only those two exactly.

Write the required precision next to the question on the rough sheet. This single habit halves DI time.

### Percentage change by eye

Percentage change $= \dfrac{\text{new} - \text{old}}{\text{old}} \times 100$. The denominator is always the *starting* value. Three tools:

**1. The 10%–1% ladder.** To find what percent 136 is of 850: $10\%$ of 850 is 85; $136 - 85 = 51$; $1\%$ of 850 is 8.5; $51 / 8.5 = 6$. So $16\%$. You never divide a 3-digit number by another 3-digit number; you subtract chunks whose size you know.

**2. The ratio form.** Growth from 240 to 414 is the ratio $414/240$. Cancel: both divisible by 6 → $69/40 = 1.725$. Growth $72.5\%$. For comparison questions, work with the ratio directly and never convert to a percentage until the end.

**3. Benchmark fractions.** Learn these cold, as decimals:

| Fraction | % | Fraction | % | Fraction | % |
|---|---|---|---|---|---|
| 1/2 | 50 | 1/6 | 16.67 | 1/11 | 9.09 |
| 1/3 | 33.33 | 1/7 | 14.29 | 1/12 | 8.33 |
| 1/4 | 25 | 1/8 | 12.5 | 1/13 | 7.69 |
| 1/5 | 20 | 1/9 | 11.11 | 1/15 | 6.67 |
| 2/3 | 66.67 | 3/8 | 37.5 | 5/8 | 62.5 |
| 3/4 | 75 | 4/7 | 57.14 | 7/8 | 87.5 |

"3,479 of 12,860" is near $1/4$ (3,215) plus a bit; the bit (264) is about $2\%$ of 12,860. So $\approx 27\%$.

### Successive changes multiply

A rise of 25% then 15% then 20% is a factor of $1.25 \times 1.15 \times 1.20 = 1.725$, that is $72.5\%$, **not** $60\%$. Growth percentages add only when they are on the *same* base; in a time series each year's growth is on the previous year, so they multiply. A quick mental route: $1.25 \times 1.2 = 1.5$; $1.5 \times 1.15 = 1.725$.

The same logic runs backwards. If the 2024 value is 414 after growing 20% in 2024, the 2023 value was $414/1.2 = 345$, not $414 \times 0.8 = 331.2$.

### Comparing ratios without dividing

To decide which of $\tfrac{a}{b}$ and $\tfrac{c}{d}$ is bigger:

- **Cross-multiply** when the numbers are small: $\tfrac{414}{240}$ vs $\tfrac{260}{150}$ → compare $414 \times 150 = 62\,100$ with $260 \times 240 = 62\,400$. Second is bigger, so $\tfrac{260}{150}$ is bigger.
- **Percent-difference rule** when the numbers are large: if the numerator of the second is $x\%$ bigger than the first's, and its denominator is $y\%$ bigger, the second fraction is bigger when $x > y$. Example: $\tfrac{29}{52}$ vs $\tfrac{31}{55}$: numerator up by $2/29 \approx 6.9\%$, denominator up by $3/52 \approx 5.8\%$; numerator grew more, so $\tfrac{31}{55}$ is bigger.
- **Distance from a benchmark** when all candidates sit near a simple fraction: fractions just above $\tfrac12$ can be ranked by (excess over half) ÷ denominator.

Never compute four decimals to compare four fractions. Pair them up, eliminate, and compute exactly only for the final two if they are within about 1% of each other.

### Shares and share shifts

"Region A had 32% of total in 2023 and 28% in 2024; the total grew 25%." Region A's own change is not $-4\%$ (that is the change in *share*, in percentage points). It is $\dfrac{0.28 \times 1.25}{0.32} = \dfrac{0.35}{0.32} = 1.09375$, i.e. $+9.4\%$. Rule: *part = share × total*, so the part's factor is (share factor) × (total factor).

### Clean arithmetic for exact answers

- **Multiply by splitting:** $297 \times 0.18 = 297 \times 0.2 - 297 \times 0.02 = 59.4 - 5.94 = 53.46$.
- **Divide by factoring:** $6440/112$: $112 \times 50 = 5600$, remainder $840 = 112 \times 7.5$. So $57.5$.
- **Average by deviation:** average of 74, 70, 67, 88, 60: take 70 as base; deviations $+4, 0, -3, +18, -10$ sum to $+9$; $9/5 = 1.8$; average $71.8$.
- **Sum by pairing:** $41.4 + 54 + 41.8 + 35.1$: pair $41.4 + 41.8 = 83.2$, $54 + 35.1 = 89.1$, total $172.3$.

### Rounding safely

Round the *divisor* to a friendly number, then nudge the answer in the right direction. $7812 / 23.9$: use 24 → $325.5$; the true divisor is smaller, so the true quotient is slightly larger → about 327. Rounding error is roughly the percentage you changed the divisor by ($0.1/24 \approx 0.4\%$ of 325 ≈ 1.4). Keep track of the direction: dividing by something smaller gives something bigger.

## Worked examples

### Example 1: Growth comparison

Revenues (2021 → 2024): Arka 240 → 414, Brio 180 → 297, Celia 400 → 460, Dyna 150 → 260. Which grew fastest?

*Solution.* Ratios: Arka $414/240$, Brio $297/180$, Celia $460/400 = 1.15$, Dyna $260/150$. Celia is out immediately. Brio: $180 \times 1.65 = 297$, so $1.65$. Arka: $240 \times 1.7 = 408$, so a bit above $1.7$. Dyna: $150 \times 1.7 = 255$, so also a bit above $1.7$. Now compute only these two: Arka $= 1.725$ ($6/240 = 0.025$ over 1.7), Dyna $= 1.7333$ ($5/150 = 0.0333$ over 1.7). Dyna.

*Why this method:* three of four candidates were eliminated with one multiplication each; the exact work was done only where it mattered.

### Example 2: Share of a total

2022 profits: 36, 32.4, 38, 31.2. What percent is Brio (32.4) of the total? Options: 21.5%, 23.5%, 25.5%, 27.5%.

*Solution.* Total $= 36 + 38 + 32.4 + 31.2 = 137.6$. Options are 2 points apart, so 1% precision suffices. $25\%$ of 137.6 is 34.4 — too big. $1\%$ is 1.376; $34.4 - 32.4 = 2$, which is about $1.45\%$. So $25 - 1.45 \approx 23.5\%$.

*Why this method:* starting from the nearest benchmark (25%) and subtracting a small correction is faster and safer than dividing 32.4 by 137.6.

### Example 3: Is it more than double?

Brio's profit: 2021 $= 180 \times 0.15 = 27$; 2024 $= 297 \times 0.18$. Has it more than doubled?

*Solution.* Double of 27 is 54. $297 \times 0.18$: $300 \times 0.18 = 54$, minus $3 \times 0.18 = 0.54$, gives $53.46$. Not doubled — by 0.54. Here approximation ($\approx 54$) would have given the wrong answer; the question's phrasing ("more than double") signals a borderline case, so compute exactly.

*Why this method:* splitting 297 as $300 - 3$ keeps the arithmetic exact at mental speed.

### Example 4: Reverse percentage

A value grew 20% in 2024 to reach 414, after growing 15% in 2023. What was the 2022 value?

*Solution.* 2023 value $= 414/1.2 = 345$. 2022 value $= 345/1.15 = 300$ (since $1.15 \times 300 = 345$). Answer: 300. The trap is "subtract 20% then 15%": $414 \times 0.8 \times 0.85 = 281.5$, wrong.

*Why this method:* undoing a multiplication is a division, never a subtraction of the same percentage.

### Example 5: Comparing four fractions

Rank $\tfrac{23}{41}, \tfrac{29}{52}, \tfrac{31}{55}, \tfrac{19}{34}$.

*Solution.* All are slightly above $\tfrac12$. Excess over half, divided by denominator: $2.5/41 \approx 0.061$; $3/52 \approx 0.058$; $3.5/55 \approx 0.064$; $2/34 \approx 0.059$. Order: $\tfrac{31}{55} > \tfrac{23}{41} > \tfrac{19}{34} > \tfrac{29}{52}$. Check the closest pair ($0.059$ vs $0.058$) by cross-multiplication: $19 \times 52 = 988$, $29 \times 34 = 986$; so $\tfrac{19}{34}$ is indeed bigger.

*Why this method:* the benchmark turns four hard divisions into four easy ones, and cross-multiplication settles the only close call.

## Traps & speed tips

- Percentage change uses the *old* value as denominator. A fall from 100 to 80 is $-20\%$; a rise from 80 to 100 is $+25\%$.
- Percentage *points* (share moved from 32% to 28%: 4 points) are not the same as percentage change of the part.
- Successive growths multiply; they never add.
- Before dividing, cancel common factors; before multiplying, split into a round number plus a correction.
- "Closest to" in the stem licenses approximation; "exactly", "more than", "at least" do not.
- When options differ by less than about 2%, abandon approximation.
- Always ask: which two candidates are actually close? Compute only those exactly.

## Checklist

You should be able to:

- Decide in five seconds whether a question needs an exact or an approximate answer.
- Find a percentage of any number using the 10%–1% ladder, and recognise the benchmark fractions from $\tfrac12$ to $\tfrac1{15}$.
- Combine successive percentage changes as factors, forwards and backwards.
- Compare two fractions by cross-multiplication or by the percent-difference rule without computing decimals.
- Convert a share-of-total question into a product of factors.
- Compute averages by deviations and products by splitting.
