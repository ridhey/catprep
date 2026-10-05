# Factors, HCF & LCM

> One question a year, give or take, directly on counting or summing factors, or on HCF/LCM word problems. The same prime-factorisation habit is what makes trailing-zero and remainder questions quick. Learn one tool well: write $N = p^a q^b r^c$ and read everything off the exponents.

## Core ideas

### Prime factorisation is the master key

Every integer $N > 1$ factors uniquely as $N = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$ with distinct primes $p_i$. Every question in this lesson starts by writing this down. Practise until $360 = 2^3 \cdot 3^2 \cdot 5$, $720 = 2^4 \cdot 3^2 \cdot 5$, $1000 = 2^3 \cdot 5^3$, $1001 = 7 \cdot 11 \cdot 13$ are instant.

### Counting factors

A factor of $N$ is any product $p_1^{b_1} \cdots p_k^{b_k}$ with $0 \le b_i \le a_i$. Each exponent $b_i$ can be chosen in $a_i + 1$ ways independently, so

$$\text{Number of factors} = (a_1 + 1)(a_2 + 1)\cdots(a_k + 1)$$

$360 = 2^3 \cdot 3^2 \cdot 5^1$ has $4 \times 3 \times 2 = 24$ factors (including 1 and 360).

Variants, all from the same counting idea:

- **Odd factors:** drop the power of 2: $(a_2 + 1)\cdots(a_k + 1)$. For 360: $3 \times 2 = 6$.
- **Even factors:** total minus odd: $24 - 6 = 18$.
- **Factors that are perfect squares:** each exponent must be even, so $b_i \in \{0, 2, 4, \dots\}$: $\left(\lfloor a_i/2 \rfloor + 1\right)$ choices each. For $720 = 2^4 \cdot 3^2 \cdot 5$: $3 \times 2 \times 1 = 6$.
- **Factors divisible by some $m$:** count factors of $N/m$ (if $m \mid N$).
- **Odd number of factors** $\Leftrightarrow$ every $a_i$ even $\Leftrightarrow N$ is a perfect square.
- **Exactly 3 factors** $\Leftrightarrow N = p^2$ for a prime $p$. Exactly 2 $\Leftrightarrow$ prime.

### Sum and product of factors

Expand $(1 + p + p^2 + \dots + p^{a})(1 + q + \dots + q^{b})\cdots$: every term is one factor, so

$$\text{Sum of factors} = \prod_i \frac{p_i^{a_i + 1} - 1}{p_i - 1}$$

For $120 = 2^3 \cdot 3 \cdot 5$: $(1 + 2 + 4 + 8)(1 + 3)(1 + 5) = 15 \times 4 \times 6 = 360$.

Factors pair up as $(d, N/d)$ with product $N$, so the **product of all factors** is $N^{t/2}$ where $t$ is the number of factors.

### Writing $N$ as a product of two factors

Ordered pairs $(d, N/d)$: $t$ of them. Unordered pairs: $\frac{t}{2}$ if $N$ is not a square, $\frac{t + 1}{2}$ if it is. Pairs of **coprime** factors (unordered, $N$ not 1): $2^{k - 1}$ where $k$ is the number of distinct primes, because each whole prime power goes entirely to one side.

### HCF and LCM

The **HCF** (GCD) of two numbers is the largest number dividing both; take the **minimum** exponent of each prime. The **LCM** is the smallest number both divide; take the **maximum** exponent.

$36 = 2^2 \cdot 3^2$, $84 = 2^2 \cdot 3 \cdot 7$: HCF $= 2^2 \cdot 3 = 12$, LCM $= 2^2 \cdot 3^2 \cdot 7 = 252$.

Since $\min + \max = $ sum of the two exponents for each prime, for **two** numbers

$$\text{HCF} \times \text{LCM} = a \times b$$

(This fails for three or more numbers.) Two numbers with HCF $h$ can be written $hx$ and $hy$ with $\gcd(x, y) = 1$; then LCM $= hxy$. Given HCF and LCM, the possible pairs correspond to coprime splits of $\frac{\text{LCM}}{\text{HCF}}$.

**Euclid's algorithm** finds an HCF fast without factorising: $\gcd(a, b) = \gcd(b, a \bmod b)$. $\gcd(1024, 240) = \gcd(240, 64) = \gcd(64, 48) = \gcd(48, 16) = 16$.

### Word-problem templates

- "Greatest number that divides $a$, $b$, $c$ leaving remainders $r_1, r_2, r_3$": HCF of $(a - r_1, b - r_2, c - r_3)$.
- "Greatest number that divides $a$, $b$ leaving the **same** remainder": HCF of the pairwise differences.
- "Smallest number that leaves remainder $r$ on division by each of $a, b, c$": $\text{LCM}(a, b, c) + r$.
- "Bells ring every $a$, $b$, $c$ seconds; when together again?": LCM.
- "Largest square tiles for an $a \times b$ floor": HCF; number of tiles $= \frac{ab}{\text{HCF}^2}$.
- HCF/LCM of fractions: $\text{HCF} = \frac{\text{HCF of numerators}}{\text{LCM of denominators}}$, $\text{LCM} = \frac{\text{LCM of numerators}}{\text{HCF of denominators}}$ (fractions in lowest terms).

### Counting pairs by LCM

How many ordered pairs $(a, b)$ have $\text{LCM} = p^e$? The exponents $(x, y)$ must satisfy $\max(x, y) = e$: $x = e$ with $y$ anything ($e + 1$ ways) plus $y = e$ with $x < e$ ($e$ ways), total $2e + 1$. For several primes, multiply. LCM $= 72 = 2^3 \cdot 3^2$: $7 \times 5 = 35$ ordered pairs.

## Worked examples

### Example 1

*How many factors does 360 have, and how many of them are even?*

$360 = 2^3 \cdot 3^2 \cdot 5$. Factors: $4 \cdot 3 \cdot 2 = 24$. Odd factors (no 2): $3 \cdot 2 = 6$. Even: $24 - 6 = 18$.

**Why this method:** every factor is a choice of exponents; restricting the choice for one prime restricts the count.

### Example 2

*Find the sum of all factors of 120.*

$120 = 2^3 \cdot 3 \cdot 5$: $(1 + 2 + 4 + 8)(1 + 3)(1 + 5) = 15 \cdot 4 \cdot 6 = 360$.

**Why this method:** the product of geometric series expands to exactly one copy of each factor.

### Example 3

*How many factors of 720 are perfect squares?*

$720 = 2^4 \cdot 3^2 \cdot 5^1$. Even exponents: for 2, $\{0, 2, 4\}$; for 3, $\{0, 2\}$; for 5, $\{0\}$. Count $= 3 \cdot 2 \cdot 1 = 6$. (They are 1, 4, 9, 16, 36, 144.)

**Why this method:** a perfect square needs every exponent even; count the even choices.

### Example 4

*Find the greatest number that divides 245 and 1029 leaving a remainder of 5 in each case.*

Subtract the remainders: $240$ and $1024$. $\gcd(240, 1024)$: $1024 = 4 \cdot 240 + 64$; $240 = 3 \cdot 64 + 48$; $64 = 48 + 16$; $48 = 3 \cdot 16$. HCF $= 16$.

Check: $245 = 15 \cdot 16 + 5$ ✓; $1029 = 64 \cdot 16 + 5$ ✓. Also $16 > 5$, as a divisor must exceed the remainder.

**Why this method:** "leaves remainder 5" means the divisor exactly divides (number $- 5$).

### Example 5

*How many ordered pairs of positive integers $(a, b)$ have $\text{LCM}(a, b) = 72$?*

$72 = 2^3 \cdot 3^2$. For the prime 2: $2 \cdot 3 + 1 = 7$ exponent pairs; for 3: $2 \cdot 2 + 1 = 5$. Total $35$.

Sanity: the pairs include $(72, d)$ and $(d, 72)$ for all 12 factors $d$, which is $23$ ordered pairs, plus pairs like $(8, 9)$, $(8, 18)$, $(24, 9)$, ... where neither is 72. ✓ plausible.

**Why this method:** LCM is a per-prime maximum; count exponent pairs per prime and multiply.

### Example 6

*How many positive integers less than 1000 have exactly three factors?*

Exactly three factors means $N = p^2$. $p^2 < 1000 \Rightarrow p \le 31$. Primes up to 31: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 → 11 numbers.

**Why this method:** $(a + 1) = 3$ forces a single prime with exponent 2.

### Example 7

*Two numbers have HCF 12 and LCM 252. If one of them is 36, find the other.*

$a \times b = \text{HCF} \times \text{LCM} \Rightarrow b = \frac{12 \times 252}{36} = 84$.

Check: $\gcd(36, 84) = 12$, $\text{lcm} = 252$ ✓.

**Why this method:** the product identity, valid for exactly two numbers.

## Traps & speed tips

- **Factorise first, always.** Every formula reads off the exponents.
- **Number of factors counts 1 and $N$.** "Proper factors" or "factors other than 1 and $N$" subtract accordingly.
- **HCF $\times$ LCM $= ab$ only for two numbers.**
- **A divisor is larger than any remainder it leaves.** Discard candidate HCFs smaller than the given remainder.
- **Same remainder, unknown:** HCF of differences.
- **Perfect squares have an odd number of factors;** nothing else does.
- **Coprime-factor pairs:** $2^{k - 1}$ unordered, where $k$ = number of distinct primes.
- **Product of factors $= N^{t/2}$**; don't multiply them out.
- Memorise: $2^{10} = 1024$, primes up to 100, and the factorisations of 360, 720, 840, 1001, 1260, 5040.

## Checklist

- Factorise numbers up to about 5000 quickly.
- Count factors, odd/even factors, square factors.
- Compute the sum of factors and the number of factor pairs.
- Find HCF by Euclid and LCM via exponents; use HCF $\times$ LCM $= ab$.
- Translate "divides leaving remainder" and "divisible by each of" into HCF/LCM.
- Count ordered pairs with a given LCM.
