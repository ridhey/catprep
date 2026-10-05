# Simple & Compound Interest

> Usually one question a year, often combined with percentages or instalments. CAT does not test formula recall; it tests whether you see that compound interest is just repeated percentage growth and simple interest is a straight line.

## Core ideas

### Vocabulary

- **Principal** ($P$): the amount lent or invested.
- **Rate** ($r\%$ per annum): the percentage of the principal paid per year.
- **Time** ($n$ years).
- **Interest** ($I$): the extra money paid.
- **Amount** ($A$): principal plus interest, $A = P + I$.

### Simple interest is linear growth

Under simple interest (SI) the interest each year is a fixed $r\%$ of the **original** principal. After $n$ years:

$$I = \frac{P \times r \times n}{100}, \qquad A = P\left(1 + \frac{rn}{100}\right)$$

The amount is a straight line in $n$. Consequences you should see without a formula: if a sum doubles in 8 years (interest $= P$ in 8 years), it earns $\frac{P}{8}$ per year, i.e. $r = 12.5\%$, and it will become 5 times (interest $= 4P$) in $4 \times 8 = 32$ years.

### Compound interest is repeated percentage growth

Under compound interest (CI) the interest earned each year is added to the principal, and the next year's interest is computed on the new total. Each year multiplies the amount by $\left(1 + \frac{r}{100}\right)$:

$$A = P\left(1 + \frac{r}{100}\right)^n, \qquad \text{CI} = A - P$$

This is exactly the successive-percentage-change idea from the percentages lesson: $n$ increases of $r\%$ each. At 10% for 3 years the factor is $1.1^3 = 1.331$, so CI $= 33.1\%$ of $P$, against SI of 30%.

**Interest for a particular year under CI** is $r\%$ of the amount at the start of that year. The 3rd-year interest at 10% is $0.1 \times P \times 1.1^2 = 0.121P$.

### Why CI exceeds SI, and by how much

Year 1: same interest, $\frac{Pr}{100}$. Year 2: CI pays interest on year 1's interest as well. For 2 years:

$$\text{CI} - \text{SI} = P\left(\frac{r}{100}\right)^2$$

Derive: $P(1 + x)^2 - P - 2Px = Px^2$ where $x = \frac{r}{100}$. For 3 years the difference is $Px^2(3 + x)$. Beyond that, compute directly.

### Compounding more often

If interest is compounded half-yearly at $r\%$ p.a., each half-year multiplies by $\left(1 + \frac{r}{200}\right)$ and there are $2n$ periods. Quarterly: $\left(1 + \frac{r}{400}\right)^{4n}$. Rate per period, number of periods; that is all.

### Ratios of amounts give the rate

If an investment under CI is $A_2$ after 2 years and $A_3$ after 3 years, then $\frac{A_3}{A_2} = 1 + \frac{r}{100}$. One division gives the rate, and $P = \frac{A_2}{(1 + r/100)^2}$.

### Instalments

A loan of $L$ at $r\%$ CI repaid in $n$ equal annual instalments of $x$: the **present value** of the instalments equals the loan.

$$L = \frac{x}{(1 + r/100)} + \frac{x}{(1 + r/100)^2} + \dots + \frac{x}{(1 + r/100)^n}$$

Think of it as: each instalment, discounted back to today, must add up to what was borrowed. Equivalent check: grow the loan forward, subtract each instalment as it is paid, and the balance should hit zero.

For SI instalment problems, the same principle applies with linear growth.

### Useful mental numbers

$1.1^2 = 1.21$, $1.1^3 = 1.331$, $1.1^4 = 1.4641$; $1.05^2 = 1.1025$, $1.05^3 = 1.157625$; $1.2^2 = 1.44$, $1.2^3 = 1.728$; $1.08^2 = 1.1664$; $1.25^2 = 1.5625$. Also $\left(\frac{21}{20}\right)^3 = \frac{9261}{8000}$ and $\left(\frac{11}{10}\right)^2 = \frac{121}{100}$ are CAT's favourite fractions.

## Worked examples

### Example 1

*A sum doubles in 8 years at simple interest. In how many years will it become 5 times itself?*

Doubling means interest $= P$ in 8 years, so $\frac{P}{8}$ per year. Five times means interest $= 4P$, which takes $4 \times 8 = 32$ years.

**Why this method:** SI is linear, so "interest earned" scales directly with time. No rate needed.

### Example 2

*Find the compound interest on Rs 10,000 at 10% p.a. for 2 years.*

$A = 10000 \times 1.1^2 = 12100$; CI $= 2100$.

Shortcut: 2 years at 10% is $10 + 10 + \frac{10 \times 10}{100} = 21\%$ net.

**Why this method:** the two-step successive-percentage formula is instant for 2 years.

### Example 3

*The difference between CI and SI on a sum for 2 years at 8% p.a. is Rs 48. Find the sum.*

$P \times 0.08^2 = 48 \Rightarrow P = \frac{48}{0.0064} = 7500$.

Check: SI $= 1200$; CI $= 7500 \times 1.1664 - 7500 = 1248$; difference 48. ✓

**Why this method:** the 2-year difference is interest on the first year's interest: $8\%$ of $8\%$ of $P$.

### Example 4

*At what rate of compound interest will Rs 8,000 amount to Rs 9,261 in 3 years?*

$\frac{9261}{8000} = \left(1 + \frac{r}{100}\right)^3$. Recognise $9261 = 21^3$ and $8000 = 20^3$, so the factor is $\frac{21}{20} = 1.05$: $r = 5\%$.

**Why this method:** CAT picks perfect cubes/squares; factor the ratio rather than taking roots.

### Example 5

*A sum at CI amounts to Rs 7,200 after 2 years and Rs 8,640 after 3 years. Find the sum.*

$\frac{8640}{7200} = 1.2$, so $r = 20\%$. $P = \frac{7200}{1.44} = 5000$.

**Why this method:** consecutive-year amounts differ by exactly one multiplying factor.

### Example 6

*The compound interest earned in the third year on a sum at 10% p.a. is Rs 605. What is the simple interest on the same sum for 3 years at the same rate?*

Third-year interest $= 0.1 \times P \times 1.1^2 = 0.121P = 605 \Rightarrow P = 5000$.
SI for 3 years $= 5000 \times 0.1 \times 3 = 1500$.

**Why this method:** "interest in year $k$" under CI is $r\%$ of the amount at the start of year $k$, which is $P(1 + r)^{k - 1}$.

### Example 7

*A loan of Rs 10,500 at 10% p.a. compound interest is repaid in two equal annual instalments. Find each instalment.*

$10500 = \frac{x}{1.1} + \frac{x}{1.21} = x \cdot \frac{1.1 + 1}{1.21} = \frac{2.1x}{1.21} \Rightarrow x = \frac{10500 \times 1.21}{2.1} = 5000 \times 1.21 = 6050$.

Forward check: $10500 \times 1.1 = 11550$; pay 6050, balance 5500; $5500 \times 1.1 = 6050$; pay 6050, balance 0. ✓

**Why this method:** present-value equation; the forward check is the independent verification and is just as fast.

## Traps & speed tips

- **SI: interest is on the original principal every year.** CI: on the running amount.
- **"Becomes $k$ times" at SI:** time scales with $(k - 1)$. Doubles in $T$ → triples in $2T$ → quadruples in $3T$.
- **"Becomes $k$ times" at CI:** time *adds*. Doubles in $T$ → quadruples in $2T$ → 8 times in $3T$.
- **Half-yearly compounding:** halve the rate, double the periods.
- **Difference for 2 years** is $P(r/100)^2$; memorise, but know why.
- **Rate from two consecutive amounts:** divide.
- **Instalments:** present values add up to the loan; or run the balance forward.
- Interest for the $n$th year under CI $=$ (amount at end of year $n$) $-$ (amount at end of year $n - 1$).
- Keep rates as fractions when they are clean: 5% $= \frac{1}{20}$, 12.5% $= \frac{1}{8}$, $16.\overline{6}\% = \frac{1}{6}$, so $(1 + r)$ becomes $\frac{21}{20}, \frac{9}{8}, \frac{7}{6}$.

## Checklist

- Compute SI and CI for small integer years without formulas, using multiplying factors.
- Find the rate or principal from the CI–SI difference for 2 years.
- Extract the rate from two consecutive-year amounts.
- Compute the interest for a *specific* year under CI.
- Set up and solve a two-instalment problem, and verify it by running the balance forward.
- Convert a half-yearly or quarterly compounding statement into rate-per-period and number of periods.
