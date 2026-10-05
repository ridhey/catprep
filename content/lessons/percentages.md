# Percentages

> CAT asks 2–3 arithmetic questions a year that are *directly* about percentages, and almost every other arithmetic question (profit-loss, interest, mixtures, DI) uses percentage arithmetic as its engine. If you are slow here, you are slow everywhere.

## Core ideas

### A percent is a fraction with denominator 100

"$x$ percent" means $\frac{x}{100}$. That is the whole definition. $25\% = \frac{25}{100} = \frac{1}{4}$, $0.5\% = \frac{0.5}{100} = \frac{1}{200}$.

So "$x\%$ of $N$" is $\frac{x}{100} \times N$, and "$a$ is what percent of $b$" is $\frac{a}{b} \times 100$.

The first speed skill is knowing the fraction–percent table cold, both ways:

| Fraction | % | Fraction | % | Fraction | % |
|---|---|---|---|---|---|
| $1/2$ | 50 | $1/6$ | $16.\overline{6}$ | $1/11$ | $9.\overline{09}$ |
| $1/3$ | $33.\overline{3}$ | $1/7$ | $14.28$ | $1/12$ | $8.\overline{3}$ |
| $1/4$ | 25 | $1/8$ | $12.5$ | $1/15$ | $6.\overline{6}$ |
| $1/5$ | 20 | $1/9$ | $11.\overline{1}$ | $1/16$ | $6.25$ |

With these, "$37.5\%$ of 640" is not a multiplication; it is $\frac{3}{8} \times 640 = 240$.

### The multiplying factor

A change of $+x\%$ multiplies a quantity by $\left(1 + \frac{x}{100}\right)$; a change of $-x\%$ multiplies by $\left(1 - \frac{x}{100}\right)$. Call this number the **multiplying factor** (MF).

- Increase by 20%: MF $= 1.2$
- Decrease by 20%: MF $= 0.8$
- Increase by 12.5%: MF $= \frac{9}{8}$
- Decrease by 12.5%: MF $= \frac{7}{8}$

Why this matters: successive changes are just successive multiplications. Up 20% then down 20% is $1.2 \times 0.8 = 0.96$, a net 4% fall. Up 10%, up 10%, up 10% is $1.1^3 = 1.331$, a net 33.1% rise. You never need to compute intermediate values.

The general two-step rule: $+a\%$ followed by $+b\%$ gives a net change of $a + b + \frac{ab}{100}$ percent (signs included). Derive it: $(1 + \frac{a}{100})(1 + \frac{b}{100}) = 1 + \frac{a + b}{100} + \frac{ab}{10000}$. Use it for quick checks, but the MF product is what you should actually compute.

### Reversing a change: the asymmetry

If $A$ is 25% more than $B$, then $B$ is **not** 25% less than $A$. $A = \frac{5}{4}B \Rightarrow B = \frac{4}{5}A$, so $B$ is 20% less than $A$.

Think of it as fractions: "more by $\frac{1}{n}$" reverses to "less by $\frac{1}{n+1}$". More by $\frac{1}{4}$ (25%) reverses to less by $\frac{1}{5}$ (20%). More by $\frac{1}{3}$ ($33.\overline{3}\%$) reverses to less by $\frac{1}{4}$ (25%).

This single fact powers the classic "price rises by $x\%$; by what percent must consumption fall to keep expenditure constant?" If price goes up by $\frac{1}{4}$ (25%), consumption must fall by $\frac{1}{5}$ (20%). Formula if you want it: $\frac{x}{100 + x} \times 100$.

### Percentage points vs percent

If a party's vote share goes from 40% to 50%, it rose by **10 percentage points** but by **25 percent** (because $\frac{50 - 40}{40} = 0.25$). CAT wording is careful; read which one is asked.

### Choosing the base

"Percent of *what*?" is the question that decides everything. The base is always the quantity you are comparing *to*, which in "A is $x\%$ more than B" is B. When no base is stated, it is the original/earlier value.

### Assume 100 (or a convenient number)

When a problem gives only percentages and asks for a percentage, nothing depends on the actual size. Set the base to 100 (or to the LCM of the denominators involved) and compute with real numbers.

## Worked examples

### Example 1 (CAT 2019)

*Amala's income is 20% more than Bimala's and 20% less than Kamala's. If Kamala's income goes down by 4% and Bimala's goes up by 10%, by approximately what percent would Kamala's income exceed Bimala's?*

Let Bimala $= 100$. Amala $= 120$. Amala is 20% less than Kamala, so $120 = 0.8 \times$ Kamala $\Rightarrow$ Kamala $= 150$.

New Kamala $= 150 \times 0.96 = 144$. New Bimala $= 100 \times 1.1 = 110$.

Excess $= \frac{144 - 110}{110} = \frac{34}{110} = 0.309 \approx 31\%$.

**Why this method:** assume 100 for the quantity with the fewest dependencies (Bimala, since everyone is described relative to her chain), then chain multiplying factors. The division $120 / 0.8$ is the step people get wrong by computing $120 \times 1.2 = 144$ instead; "20% less than Kamala" has Kamala as the base.

### Example 2 (CAT 2017)

*Ravi invests 50% of his monthly savings in fixed deposits. Thirty percent of the rest is invested in stocks and the rest goes into his savings bank account. If the total amount deposited by him in the bank (savings account plus fixed deposits) is Rs 59,500, what are his total monthly savings?*

Let savings $= S$. FD $= 0.5S$. Rest $= 0.5S$; stocks $= 0.3 \times 0.5S = 0.15S$; savings bank $= 0.5S - 0.15S = 0.35S$.

Bank total $= 0.5S + 0.35S = 0.85S = 59{,}500 \Rightarrow S = 70{,}000$.

Check: $0.85 \times 70{,}000 = 59{,}500$. ✓

**Why this method:** every "percent of the rest" is a percent of a *different* base. Track each as a fraction of the original and add at the end.

### Example 3 (CAT 2019)

*In a class, 60% of the students are girls and the rest are boys. There are 30 more girls than boys. If 68% of the students, including 30 boys, pass an exam, what percentage of the girls do not pass?*

Girls $-$ Boys $= 60\% - 40\% = 20\%$ of the class $= 30 \Rightarrow$ class $= 150$. Girls $= 90$, boys $= 60$.

Passed $= 0.68 \times 150 = 102$. Of these 30 are boys, so 72 are girls. Girls failing $= 90 - 72 = 18$, which is $\frac{18}{90} = 20\%$.

**Why this method:** the difference "30 more" is 20 percentage points, which immediately gives the total. Then it is just bookkeeping.

### Example 4 (CAT 2017)

*Arun's present age in years is 40% of Barun's. In another few years, Arun's age will be half of Barun's. By what percentage will Barun's age increase during this period?*

Let Barun $= B$, Arun $= 0.4B$. After $t$ years: $0.4B + t = \frac{1}{2}(B + t) \Rightarrow 0.8B + 2t = B + t \Rightarrow t = 0.2B$.

Barun's age grows by $t = 0.2B$, i.e. by 20%.

**Why this method:** the answer is a percentage, so the actual ages cancel; keep everything in terms of $B$. Check with numbers: $B = 10$, Arun $= 4$; in 2 years $6$ and $12$, half. $2/10 = 20\%$. ✓

### Example 5

*The price of a commodity rises 20% every year while a worker's salary rises 10% every year. If this year the worker spends 50% of his salary on a fixed quantity of the commodity, what percent of his salary will the same quantity cost two years from now?*

Price MF over two years $= 1.2^2 = 1.44$. Salary MF $= 1.1^2 = 1.21$.

Fraction of salary $= 50\% \times \frac{1.44}{1.21} = 50\% \times 1.190 = 59.5\%$.

**Why this method:** a percentage of salary is a ratio, and ratios scale by the ratio of multiplying factors. No need to assume a salary.

### Example 6

*A number is first increased by 30%, then decreased by $x\%$ so that the result is 4% more than the original. Find $x$.*

$1.3 \times (1 - \frac{x}{100}) = 1.04 \Rightarrow 1 - \frac{x}{100} = \frac{1.04}{1.3} = 0.8 \Rightarrow x = 20$.

**Why this method:** write the chain of MFs and solve for the unknown factor. $\frac{1.04}{1.3} = \frac{104}{130} = \frac{4}{5}$; do the fraction, not the decimal division.

## Traps & speed tips

- **Base confusion** is the number one error. "A is 20% less than B" means $A = 0.8B$, base B. Write the base explicitly before computing.
- **Never add percentages with different bases.** 50% of savings and 30% of the rest are not 80% of anything.
- **Reverse changes are asymmetric.** Up $\frac{1}{n}$ reverses as down $\frac{1}{n+1}$.
- **Use fractions for the awkward percents.** $16.\overline{6}\% = \frac{1}{6}$, $14.28\% = \frac{1}{7}$, $37.5\% = \frac{3}{8}$, $62.5\% = \frac{5}{8}$, $83.\overline{3}\% = \frac{5}{6}$.
- **Decimal MF for the clean percents.** 1.2, 0.85, 1.15 multiply fast; practise $1.2 \times 0.85 = 1.02$ type products in your head.
- **"Percent more" vs "percentage points":** read twice.
- **Choose the assumed number by the denominators.** If 1/3 and 1/8 both appear, assume 24, not 100.
- For successive equal increases, $1.1^2 = 1.21$, $1.1^3 = 1.331$, $1.2^2 = 1.44$, $1.2^3 = 1.728$, $1.05^2 = 1.1025$, $0.9^2 = 0.81$, $0.9^3 = 0.729$ should be instant.

## Checklist

Before moving on you should be able to:

- Convert any fraction with denominator up to 16 to a percent and back without thinking.
- Write the multiplying factor for any percent change, including awkward ones like $+12.5\%$ or $-33.\overline{3}\%$.
- Compute the net effect of two or three successive changes in under 15 seconds.
- Reverse a percentage change correctly (up 25% $\leftrightarrow$ down 20%).
- Pick the right base in "A is $x\%$ more/less than B" every time.
- Solve a "percent of the rest" chain by tracking fractions of the original.
