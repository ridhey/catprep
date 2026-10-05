# Divisibility & Remainders

> One or two questions a year ask directly for a remainder or a count of numbers with a given remainder, and the ideas here underpin factors, last digits, factorials and integer-solution counting. CAT likes remainders of large powers; the method is always "find a power that leaves remainder $\pm 1$".

## Core ideas

### Division with remainder

For integers $N$ and $d > 0$ there are unique integers $q$ (quotient) and $r$ (remainder) with

$$N = dq + r, \qquad 0 \le r < d$$

"$N$ leaves remainder 3 on division by 7" means $N = 7q + 3$ for some integer $q$, i.e. $N$ is 3 more than a multiple of 7. We write $N \equiv 3 \pmod 7$ and say "$N$ is congruent to 3 modulo 7". Two numbers are congruent mod $d$ exactly when their difference is a multiple of $d$.

### Divisibility rules (and why they work)

Every rule comes from writing $N$ in powers of 10 and noting what each power leaves modulo $d$.

| Divisor | Rule | Reason |
|---|---|---|
| 2, 5, 10 | last digit | $10 \equiv 0$ |
| 4, 25 | last two digits | $100 \equiv 0$ |
| 8, 125 | last three digits | $1000 \equiv 0$ |
| 3, 9 | sum of digits | $10 \equiv 1$, so $10^k \equiv 1$ |
| 11 | alternating sum of digits | $10 \equiv -1$, so $10^k \equiv (-1)^k$ |
| 7, 11, 13 | alternating sum of 3-digit blocks | $1000 \equiv -1 \pmod{1001}$ and $1001 = 7 \times 11 \times 13$ |
| 6, 12, 15, 18 | check the coprime factors separately | $a \mid N$ and $b \mid N$ with $\gcd(a, b) = 1 \Rightarrow ab \mid N$ |

The "sum of digits" rule tells you more than divisibility: $N$ and its digit sum leave the **same remainder** mod 9 (and mod 3). Likewise $N$ and its alternating digit sum leave the same remainder mod 11.

### Remainders respect addition and multiplication

If $a \equiv r_1$ and $b \equiv r_2 \pmod d$, then $a + b \equiv r_1 + r_2$ and $ab \equiv r_1 r_2 \pmod d$. So you may replace any number by its remainder at any stage of a sum or product. In particular $a^n \equiv r_1^n$.

Example: remainder of $17 \times 23 \times 31$ on division by 7: $17 \equiv 3$, $23 \equiv 2$, $31 \equiv 3$, product $\equiv 18 \equiv 4$.

**Division is not allowed** unless the divisor is coprime to $d$; never "cancel" inside a congruence casually.

### Negative remainders

$\equiv -1 \pmod d$ is the same as $\equiv d - 1$. Using negatives shrinks powers: $2^{10} = 1024 = 41 \times 25 - 1 \equiv -1 \pmod{25}$, so $2^{20} \equiv 1$. A remainder of $-r$ reported as a final answer must be converted to $d - r$.

### Remainders of powers: find the cycle

To find $a^n \bmod d$:

1. Reduce $a$ mod $d$.
2. Look for a small power with $a^k \equiv \pm 1 \pmod d$.
3. Write $n = km + s$ and use $a^n \equiv (\pm 1)^m a^s$.

$2^{100} \bmod 7$: $2^3 = 8 \equiv 1$, so $2^{99} \equiv 1$ and $2^{100} \equiv 2$.
$3^{47} \bmod 13$: $3^3 = 27 \equiv 1$, $47 = 45 + 2$, so $3^{47} \equiv 3^2 = 9$.

**Fermat's little theorem** guarantees a cycle: if $p$ is prime and $p \nmid a$, then $a^{p - 1} \equiv 1 \pmod p$. **Euler's theorem** generalises: $a^{\phi(d)} \equiv 1 \pmod d$ when $\gcd(a, d) = 1$, where $\phi(d)$ counts numbers up to $d$ coprime to $d$; for $d = p^k$, $\phi = p^{k-1}(p - 1)$, so $\phi(25) = 20$, $\phi(100) = 40$. The theorem gives *a* cycle length, not necessarily the smallest; a smaller one often exists (as $2^3 \equiv 1 \pmod 7$ shows against Fermat's 6).

### Two algebraic facts

- $a^n - b^n$ is divisible by $a - b$ for all $n$.
- $a^n + b^n$ is divisible by $a + b$ for **odd** $n$.

So $15^{23} + 23^{23}$ is divisible by $38 = 2 \times 19$; the remainder mod 19 is 0 without any computation. And $a^n \bmod (a - 1)$ is always 1; $a^n \bmod (a + 1)$ is $(-1)^n$, i.e. 1 for even $n$ and $a$ for odd $n$.

### Numbers with given remainders

"$N \equiv 2 \pmod 7$ and $N \equiv 3 \pmod 5$": list $N = 7k + 2$ for small $k$ (2, 9, 16, 23, ...) and pick the first that is $\equiv 3 \pmod 5$, here 23. All solutions are $23 + 35m$ (Chinese remainder theorem: the moduli are coprime, so the solution is unique mod $35$). Counting such numbers in a range is then counting terms of an arithmetic progression.

Special case: if the remainders are all "the same shortfall" ($N \equiv -1 \pmod 5$, $\pmod 7$, $\pmod 9$) then $N = \text{LCM} - 1$, and in general $N \equiv -1 \pmod{\text{LCM}}$.

### Factorial sums

For $n \ge d$, $n!$ is divisible by $d$ whenever $d \le n$ (and often earlier, e.g. $5! = 120$ is divisible by 15). So in $1! + 2! + \dots + 50! \bmod 15$, every term from $5!$ onward vanishes; only $1 + 2 + 6 + 24 = 33 \equiv 3$ survives.

## Worked examples

### Example 1

*What is the remainder when $2^{2023}$ is divided by 25?*

$2^{10} = 1024 \equiv -1 \pmod{25}$ (since $1025 = 41 \times 25$). So $2^{20} \equiv 1$.
$2023 = 20 \times 101 + 3$, hence $2^{2023} \equiv 2^3 = 8$.

**Why this method:** the $\pm 1$ hunt. Euler's $\phi(25) = 20$ confirms the cycle length; the $-1$ at $2^{10}$ is the shortcut.

### Example 2

*Find the remainder when $1! + 2! + 3! + \dots + 50!$ is divided by 15.*

$5! = 120 = 15 \times 8$, and every later factorial contains $5!$ as a factor. Remainder $= (1 + 2 + 6 + 24) \bmod 15 = 33 \bmod 15 = 3$.

**Why this method:** identify where the terms become multiples of the divisor; only the early ones matter.

### Example 3

*How many three-digit numbers leave remainder 2 on division by 7 and remainder 3 on division by 5?*

Candidates $7k + 2$: 2, 9, 16, 23. $23 \equiv 3 \pmod 5$ ✓. General solution $23 + 35m$.
Three-digit: $100 \le 23 + 35m \le 999 \Rightarrow 2.2 \le m \le 27.9$, so $m = 3, 4, \dots, 27$: 25 numbers.

Check the ends: $m = 3$ gives 128 ($128 = 7 \times 18 + 2$ ✓, $= 5 \times 25 + 3$ ✓); $m = 27$ gives 968; $m = 28$ gives 1003, too big.

**Why this method:** find one solution by listing, then the period is the LCM, then count the AP.

### Example 4

*What is the remainder when $15^{23} + 23^{23}$ is divided by 19?*

$n = 23$ is odd, so $15 + 23 = 38$ divides the sum. $38 = 2 \times 19$, so the remainder is 0.

Alternative: $23 \equiv 4 \equiv -15 \pmod{19}$, so $23^{23} \equiv -15^{23}$ and the sum is $\equiv 0$.

**Why this method:** when the bases add up to a multiple of the divisor and the exponent is odd, stop computing.

### Example 5

*For which digit $x$ is the number $7x3542$ divisible by 9?*

Digit sum $= 7 + x + 3 + 5 + 4 + 2 = 21 + x$. Need $21 + x \in \{27\}$ (the only multiple of 9 in $[21, 30]$), so $x = 6$.

**Why this method:** $10 \equiv 1 \pmod 9$ makes the whole number congruent to its digit sum.

### Example 6

*What is the remainder when $7^{81}$ is divided by 100?*

$7^2 = 49$, $7^4 = 2401 \equiv 1 \pmod{100}$. $81 = 4 \times 20 + 1$, so $7^{81} \equiv 7$.

**Why this method:** mod 100 means "last two digits"; $7^4 \equiv 01$ is the key fact for powers of 7.

## Traps & speed tips

- **Reduce first, then multiply.** Never multiply large numbers to then take the remainder.
- **Hunt for $\pm 1$.** It is almost always within the first few powers for CAT's divisors (7, 9, 11, 13, 25, 100).
- **Negative remainders must be converted** at the end: $-3 \pmod{13}$ is 10.
- **Do not divide inside a congruence** unless the number is coprime to the modulus.
- **Odd exponent + sum of bases** $\Rightarrow$ divisible by $a + b$. Any exponent, difference $\Rightarrow$ divisible by $a - b$.
- **Digit-sum shortcut:** $N \bmod 9 =$ digit sum $\bmod 9$; $N \bmod 11 =$ alternating sum $\bmod 11$.
- **"Same remainder $r$ for several divisors":** $N = \text{LCM} \times k + r$. "Shortfall of $s$": $N = \text{LCM} \times k - s$.
- **Counting numbers in a range** with a given remainder: it is an AP; count $= \lfloor (\text{last} - \text{first}) / \text{step} \rfloor + 1$.
- Small cases are evidence: if unsure of a rule, test it on 2-digit numbers before trusting it on $2^{2023}$.

## Checklist

- Write any divisibility statement as $N = dq + r$ and as a congruence.
- Apply the rules for 3, 4, 8, 9, 11 and explain each from $10 \equiv \pm1$ or $0$.
- Compute $a^n \bmod d$ for CAT-sized values by finding a $\pm 1$ power.
- Use negative remainders to shorten cycles.
- Solve a two-condition remainder problem and count solutions in a range.
- Recognise the $a^n \pm b^n$ factorisations and the factorial-sum trick.
