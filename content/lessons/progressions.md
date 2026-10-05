# Progressions (AP, GP, HP)

> One or two questions a year, and they are rarely about plugging into the sum formula. CAT prefers "the sum of the first $n$ terms is $3n^2 + 5n$; which term equals 164?" or three-term problems where the middle term does all the work.

## Core ideas

### Arithmetic progression: constant difference

A sequence is an AP if each term exceeds the previous by the same amount $d$ (the common difference). With first term $a$:

$$t_n = a + (n-1)d.$$

Derivation: you add $d$ once to reach the 2nd term, twice to reach the 3rd, so $(n-1)$ times to reach the $n$th.

The sum of the first $n$ terms: write the sum forwards and backwards and add. Each of the $n$ pairs adds to $(\text{first} + \text{last})$, so

$$S_n = \frac{n}{2}(\text{first} + \text{last}) = \frac{n}{2}\big(2a + (n-1)d\big).$$

In words: **sum = number of terms × average of first and last**. For an AP the average of the terms is the average of the ends, and is also the middle term when $n$ is odd.

Useful facts:
- $t_n = S_n - S_{n-1}$: if you are given $S_n$ as a formula, this extracts the $n$th term.
- If $S_n$ is a quadratic in $n$ with no constant term, the sequence is an AP.
- Three terms in AP: take them as $a - d, a, a + d$ so the sum is $3a$. Four terms: $a - 3d, a - d, a + d, a + 3d$.
- $t_m + t_n = t_p + t_q$ whenever $m + n = p + q$ (equal "distance" from the ends).
- Counting multiples: the multiples of 7 between 10 and 100 are $14, 21, \dots, 98$, an AP with $n = \frac{98 - 14}{7} + 1 = 13$ terms.

### Geometric progression: constant ratio

A GP multiplies by the same ratio $r$ each step: $t_n = ar^{n-1}$.

Sum: $S_n = a + ar + \dots + ar^{n-1}$. Multiply by $r$: $rS_n = ar + \dots + ar^n$. Subtract: $S_n(1 - r) = a - ar^n$, so

$$S_n = \frac{a(r^n - 1)}{r - 1} \quad (r \ne 1).$$

**Infinite GP**: if $|r| < 1$, $r^n \to 0$ as $n$ grows, so $S_\infty = \dfrac{a}{1 - r}$. This is how $0.\overline{36} = \dfrac{36}{100} + \dfrac{36}{10^4} + \dots = \dfrac{36/100}{1 - 1/100} = \dfrac{36}{99} = \dfrac{4}{11}$.

Three terms in GP: $\dfrac{a}{r}, a, ar$, so the product is $a^3$. The middle term of three in GP is the geometric mean: $b^2 = ac$.

### Harmonic progression

Numbers are in HP if their reciprocals are in AP. There is no sum formula; every HP question is solved by flipping to the AP. The harmonic mean of $a$ and $b$ is $\dfrac{2ab}{a + b}$ (the reciprocal of the average of reciprocals).

### Means and the AM–GM–HM chain

For positive $a, b$: $\text{AM} = \dfrac{a+b}{2} \ge \text{GM} = \sqrt{ab} \ge \text{HM} = \dfrac{2ab}{a+b}$, with $\text{GM}^2 = \text{AM} \times \text{HM}$. Equality only when $a = b$.

### Special sums you should know

$$\sum_{k=1}^n k = \frac{n(n+1)}{2}, \quad \sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}, \quad \sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2.$$

Sum of the first $n$ odd numbers is $n^2$. Sequences like $1 \cdot 3 + 2 \cdot 4 + 3 \cdot 5 + \dots$ expand to $\sum k^2 + 2\sum k$.

### Telescoping

$\dfrac{1}{k(k+1)} = \dfrac{1}{k} - \dfrac{1}{k+1}$, so $\sum_{k=1}^n \dfrac{1}{k(k+1)} = 1 - \dfrac{1}{n+1}$. With a gap of 2: $\dfrac{1}{k(k+2)} = \dfrac{1}{2}\left(\dfrac1k - \dfrac{1}{k+2}\right)$. Whenever a term is a difference of consecutive things, the sum collapses to first minus last.

## Worked examples

### Example 1: find the AP, then the sum
*The 5th term of an AP is 17 and the 12th term is 38. Find the sum of the first 20 terms.*

$t_{12} - t_5 = 7d = 21 \Rightarrow d = 3$. $a = 17 - 4(3) = 5$.
$S_{20} = \frac{20}{2}\big(2 \cdot 5 + 19 \cdot 3\big) = 10 \times 67 = 670$.
Check: last term $t_{20} = 5 + 57 = 62$; $S_{20} = 20 \times \frac{5 + 62}{2} = 670$ ✓.

*Why this method:* the difference of two terms gives $d$ immediately; never set up two equations in $a, d$ when subtraction does it.

### Example 2: three terms, symmetric choice
*Three numbers in AP have sum 24 and product 440. Find them.*

Take $a - d, a, a + d$: $3a = 24 \Rightarrow a = 8$. $8(64 - d^2) = 440 \Rightarrow 64 - d^2 = 55 \Rightarrow d = \pm 3$.
Numbers: $5, 8, 11$. Check: $5 \times 8 \times 11 = 440$ ✓.

*Why this method:* the symmetric choice makes the sum give the middle term at once.

### Example 3: GP from two terms
*In a GP the 2nd term is 6 and the 5th term is 162. Find the sum of the first 6 terms.*

$\dfrac{t_5}{t_2} = r^3 = 27 \Rightarrow r = 3$, $a = 2$.
$S_6 = \dfrac{2(3^6 - 1)}{3 - 1} = 729 - 1 = 728$.
Check: terms $2, 6, 18, 54, 162, 486$; sum $= 728$ ✓.

*Why this method:* ratios of terms give $r^{\text{gap}}$; the gap here is 3.

### Example 4: term from a sum formula
*The sum of the first $n$ terms of a sequence is $S_n = 3n^2 + 5n$. Find the 27th term and show the sequence is an AP.*

$t_n = S_n - S_{n-1} = (3n^2 + 5n) - \big(3(n-1)^2 + 5(n-1)\big) = 6n + 2$.
$t_{27} = 164$. Since $t_n$ is linear in $n$, consecutive differences are constant ($6$): an AP with $a = 8, d = 6$.
Check: $S_1 = 8 = t_1$ ✓; $S_2 = 22 = 8 + 14$ ✓.

*Why this method:* $t_n = S_n - S_{n-1}$ is the only tool you need for "sum given as a formula".

### Example 5: HP via reciprocals
*The 3rd term of an HP is $\frac17$ and the 7th term is $\frac{1}{15}$. Find the 10th term.*

Reciprocals form an AP with $t_3 = 7$, $t_7 = 15$: $4d = 8 \Rightarrow d = 2$, $a = 3$. $t_{10} = 3 + 18 = 21$. The HP term is $\dfrac{1}{21}$.

*Why this method:* there is no HP formula; flipping is the entire technique.

### Example 6: telescoping sum
*Evaluate $\dfrac{1}{1 \cdot 3} + \dfrac{1}{3 \cdot 5} + \dots + \dfrac{1}{19 \cdot 21}$.*

Each term $\dfrac{1}{k(k+2)} = \dfrac12\left(\dfrac1k - \dfrac{1}{k+2}\right)$. The sum is $\dfrac12\left(1 - \dfrac{1}{21}\right) = \dfrac12 \cdot \dfrac{20}{21} = \dfrac{10}{21}$.
Check with the first two terms: $\frac13 + \frac1{15} = \frac{6}{15} = 0.4$, and the formula for two terms gives $\frac12(1 - \frac15) = 0.4$ ✓.

*Why this method:* partial fractions turn the sum into first-minus-last.

## Traps & speed tips

- The number of terms from $a$ to $l$ with step $d$ is $\dfrac{l - a}{d} + 1$. Forgetting the $+1$ is the most common progression error.
- $S_n = \frac n2(\text{first} + \text{last})$ is faster than the $2a + (n-1)d$ form whenever you know the last term.
- An infinite GP sum exists only when $|r| < 1$. If a question gives $S_\infty$, $|r| < 1$ is a free fact.
- "Sum of squares of terms of a GP" is itself a GP with ratio $r^2$ and first term $a^2$.
- Three in GP: $b^2 = ac$. Three in AP: $2b = a + c$. Three in HP: $\frac2b = \frac1a + \frac1c$.
- If angles of a polygon are in AP, check that the largest angle is below $180°$; one of the two algebraic answers is usually impossible.
- For sums like $1 \cdot 2 + 2 \cdot 3 + \dots$, expand the general term and use the $\sum k$, $\sum k^2$ formulas.

## Checklist

- Derive $S_n$ for an AP by pairing, and for a GP by the multiply-and-subtract trick.
- Find $a$ and $d$ (or $r$) from any two given terms.
- Extract $t_n$ from a formula for $S_n$.
- Use symmetric choices ($a - d, a, a + d$ and $a/r, a, ar$) for three-term problems.
- Convert a recurring decimal to a fraction via an infinite GP.
- Telescope a sum of $\frac{1}{k(k+c)}$ terms and evaluate $\sum k^2$ sums.
