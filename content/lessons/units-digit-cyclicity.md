# Last Digits & Cyclicity

> Rarely a whole question on its own in recent CATs, but units-digit reasoning shows up as the fast route inside remainder, factorial and "which option is possible" questions. It takes an hour to learn and saves minutes in the exam.

## Core ideas

### The units digit depends only on units digits

The units digit of a product depends only on the units digits of the factors, because $(10a + x)(10b + y) = 100ab + 10(ay + bx) + xy$ and only $xy$ affects the last digit. Same for sums. So "units digit of $N$" is just "$N \bmod 10$", and all the remainder rules apply: reduce every factor to its last digit and multiply.

Units digit of $1234 \times 5678$: $4 \times 8 = 32 \to 2$.

### Powers cycle

The units digit of $a^n$ depends only on the units digit of $a$ and on $n$. Compute successive powers of each digit and watch the pattern:

| Last digit of $a$ | $a^1, a^2, a^3, a^4, \dots$ | Cycle length |
|---|---|---|
| 0, 1, 5, 6 | constant | 1 |
| 4 | 4, 6, 4, 6, ... | 2 |
| 9 | 9, 1, 9, 1, ... | 2 |
| 2 | 2, 4, 8, 6, 2, ... | 4 |
| 3 | 3, 9, 7, 1, 3, ... | 4 |
| 7 | 7, 9, 3, 1, 7, ... | 4 |
| 8 | 8, 4, 2, 6, 8, ... | 4 |

Every cycle length divides 4, so the rule is:

1. Reduce the base to its units digit.
2. Find $n \bmod 4$. If it is 0, use the 4th entry of the cycle; otherwise use that entry.
3. Read off the digit.

$7^{83}$: $83 \bmod 4 = 3$, third entry of $7, 9, 3, 1$ is 3.
$2^{100}$: $100 \bmod 4 = 0$, fourth entry of $2, 4, 8, 6$ is 6.

Derive rather than memorise: $2^4 = 16$ ends in 6, and $6 \times$ anything ending in 6 ends in 6, so $2^{4k}$ ends in 6 and the cycle restarts. For 3 and 7, $3^4 = 81$ and $7^4 = 2401$ end in 1, which is why their 4th power resets.

**Consequence:** $a^5$ has the same units digit as $a$ for every digit $a$ (since $5 \equiv 1 \pmod 4$ and the length-1 and length-2 cycles also agree). More generally $a^{4k + 1}$ ends in the same digit as $a$.

### Exponent towers

For $a^{b^c}$, you need $b^c \bmod 4$, not $b^c$ itself. $2^{3^4}$: $3^4 = 81$, $81 \bmod 4 = 1$, so the units digit is the first entry for 2: 2. If the exponent is itself a power like $7^{7^7}$, reduce the inner tower mod 4: $7 \equiv -1 \pmod 4$, so $7^7 \equiv (-1)^7 = -1 \equiv 3 \pmod 4$; then $7^3$ ends in 3.

### Last two digits

"Last two digits" is $N \bmod 100$. The tools:

- **Numbers ending in 1:** $(\dots a1)^n$ ends in $\underline{(a \cdot n) \bmod 10}\,1$: tens digit is the last digit of (tens digit $\times$ exponent). $21^{37}$: tens $= 2 \times 7 = 14 \to 4$; last two digits 41.
- **Powers of 3, 7, 9:** convert to a base ending in 1. $7^4 = 2401 \equiv 01$, so $7^{4k} \equiv 01$. $3^4 = 81$, so $3^{20} = 81^5 \equiv (\text{tens } 8 \times 5 = 40 \to 0)1 = 01$. $9^{10} = 81^5 \equiv 01$. In general $a^{20} \equiv 01 \pmod{100}$ for $a$ coprime to 10 (Euler: $\phi(100) = 40$, but the true cycle is 20).
- **Numbers ending in 5:** $(10x + 5)^2 = 100x^2 + 100x + 25 \equiv 25$, so every such square ends in 25. For $n \ge 2$, $(10x + 5)^n$ ends in 25 when $x$ is even or $n$ is even, and in 75 when $x$ is odd and $n$ is odd ($15^3 = 3375$, $35^3 = 42875$, but $35^4$ ends in 25).
- **Powers of 2:** $2^{10} = 1024 \equiv 24$, and $24^2 = 576 \equiv 76$, $76^k \equiv 76$ always. So $2^{10k} \equiv 24$ for odd $k$ and $76$ for even $k$. $2^{100} = (2^{10})^{10} \equiv 76$. $2^{2023} = 2^{2020} \cdot 8 \equiv 76 \cdot 8 = 608 \to 08$.
- **Even numbers in general:** split as $2^a \times (\text{odd})$ and handle separately, or use $N \bmod 4$ and $N \bmod 25$ together.

### Last digit of sums and factorials

$n!$ ends in 0 for $n \ge 5$, so the units digit of $1! + 2! + \dots + 100!$ is that of $1 + 2 + 6 + 24 = 33$, namely 3. Sums of powers: compute each term's units digit and add.

### Using last digits to eliminate options

If a question asks for a large product or an exact value and the options differ in their last digit, compute only the last digit. The same works with "divisible by 4" (last two digits) and "digit sum" (mod 9) as independent filters.

## Worked examples

### Example 1

*Units digit of $7^{83}$.*

Cycle of 7: 7, 9, 3, 1. $83 = 4 \times 20 + 3$ → third entry: 3.

**Why this method:** $7^4 \equiv 1$, so only the exponent mod 4 matters.

### Example 2

*Units digit of $3^{101} + 2^{101}$.*

$101 \bmod 4 = 1$. First entries: 3 and 2. Sum $= 5$.

**Why this method:** sums reduce term by term; $a^{4k + 1}$ ends like $a$.

### Example 3

*Units digit of $13^{43} \times 17^{37}$.*

Only last digits of bases matter: $3^{43}$ with $43 \bmod 4 = 3$ → 7; $7^{37}$ with $37 \bmod 4 = 1$ → 7. $7 \times 7 = 49$ → 9.

**Why this method:** reduce bases to units digits, reduce exponents mod 4, multiply the results, take the last digit.

### Example 4

*Units digit of $1^5 + 2^5 + 3^5 + \dots + 10^5$.*

$a^5$ ends like $a$, so the units digit equals that of $1 + 2 + \dots + 10 = 55$: 5.

**Why this method:** the exponent $5 \equiv 1 \pmod 4$; this is the "fifth power preserves the last digit" fact.

### Example 5

*Last two digits of $7^{200}$.*

$7^4 = 2401 \equiv 01 \pmod{100}$. $7^{200} = (7^4)^{50} \equiv 01$.

**Why this method:** find the power that ends in 01; everything else is a repetition.

### Example 6

*Last two digits of $2^{100}$.*

$2^{10} \equiv 24$; $2^{20} \equiv 24^2 = 576 \equiv 76$; $76^n \equiv 76$. $2^{100} = (2^{20})^5 \equiv 76$.

**Why this method:** the 76 trick: once you hit 76, all further powers stay at 76.

### Example 7

*Units digit of $2^{3^4}$.*

$3^4 = 81 \equiv 1 \pmod 4$. First entry of 2's cycle: 2.

**Why this method:** reduce the *exponent* mod 4, and be careful that $2^{3^4}$ means $2^{(3^4)}$, not $(2^3)^4$.

## Traps & speed tips

- **Exponent $\equiv 0 \pmod 4$ means the 4th entry**, not the first. $2^{100}$ ends in 6, not 2.
- **Towers:** reduce the top exponent mod 4; never compute $b^c$.
- **Last two digits are mod 100**, so ignore the hundreds and above at every multiplication.
- **Digits 0, 1, 5, 6 are fixed points**; 4 and 9 alternate; 2, 3, 7, 8 have period 4.
- **$a^{4k + 1}$ ends like $a$.** Instant for exponents like 5, 9, 101, 2021.
- **$(\dots 1)^n$:** tens digit $=$ (tens digit $\times n$) mod 10; units digit 1.
- **$76^n \equiv 76$, $25^n \equiv 25$, $01^n \equiv 01$** mod 100.
- **$n!$ ends in 0 for $n \ge 5$**, in 00 for $n \ge 10$.
- Use last digits to kill options before doing any real arithmetic.

## Checklist

- Give the units digit of $a^n$ for any $a$ and $n$ in under ten seconds.
- Handle sums and products of powers.
- Reduce an exponent tower mod 4 correctly.
- Find the last two digits of powers of numbers ending in 1, 3, 7, 9 and of powers of 2.
- Use the 76 and 25 fixed points.
- Apply last-digit filters to eliminate MCQ options.
