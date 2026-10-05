# Factorials & Trailing Zeros

> A small but reliable topic: "how many zeros at the end of $n!$", "highest power of $k$ dividing $n!$", and the reverse "for which $n$ does $n!$ end in exactly $m$ zeros". The counting idea (Legendre's formula) also feeds permutations and combinations, which is why it sits before them in the syllabus.

## Core ideas

### What $n!$ is

$n! = 1 \times 2 \times 3 \times \cdots \times n$, with $0! = 1$. The first few: $1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800$. Factorials grow fast and contain every prime up to $n$, usually many times over. The questions are never about the value; they are about its **prime factorisation**.

### Highest power of a prime in $n!$

How many times does the prime $p$ divide $n!$? Count the multiples of $p$ among $1, \dots, n$: there are $\lfloor n/p \rfloor$, each contributing at least one $p$. Multiples of $p^2$ contribute a second $p$: $\lfloor n/p^2 \rfloor$ of them. Multiples of $p^3$ a third, and so on:

$$v_p(n!) = \left\lfloor \frac{n}{p} \right\rfloor + \left\lfloor \frac{n}{p^2} \right\rfloor + \left\lfloor \frac{n}{p^3} \right\rfloor + \cdots$$

(Legendre's formula.) Practically: divide $n$ by $p$, discard the remainder, divide the quotient by $p$ again, keep going until the quotient is 0, add the quotients.

$v_3(50!)$: $50 \div 3 = 16$; $16 \div 3 = 5$; $5 \div 3 = 1$; $1 \div 3 = 0$. Sum $= 22$. So $3^{22}$ divides $50!$ but $3^{23}$ does not.

$v_2(30!)$: $15 + 7 + 3 + 1 = 26$.

### Trailing zeros

A trailing zero is a factor of $10 = 2 \times 5$. In $n!$ there are far more 2s than 5s (every second number is even, every fifth is a multiple of 5), so the number of trailing zeros is the number of 5s:

$$Z(n) = v_5(n!) = \left\lfloor \frac{n}{5} \right\rfloor + \left\lfloor \frac{n}{25} \right\rfloor + \left\lfloor \frac{n}{125} \right\rfloor + \cdots$$

$Z(100) = 20 + 4 = 24$. $Z(1000) = 200 + 40 + 8 + 1 = 249$.

Two things to notice about $Z(n)$:

- It is constant on blocks of 5: $Z(85) = Z(86) = \dots = Z(89)$, then jumps at 90.
- The jump is usually 1, but at multiples of 25 it is 2, at multiples of 125 it is 3, etc. So some values are **skipped**: $Z(124) = 24 + 4 = 28$ and $Z(125) = 25 + 5 + 1 = 31$. No factorial ends in exactly 29 or 30 zeros. "Find $n$ with $n!$ ending in exactly 30 zeros" has answer "no such $n$", a classic CAT option.

### Highest power of a composite number in $n!$

To find the highest power of $k$ dividing $n!$, factorise $k$:

- If $k = p^a$: answer is $\lfloor v_p(n!) / a \rfloor$. Highest power of 4 in $30!$ is $\lfloor 26 / 2 \rfloor = 13$.
- If $k = p^a q^b$: compute $\lfloor v_p / a \rfloor$ and $\lfloor v_q / b \rfloor$ and take the **minimum**; the scarcer prime is the bottleneck. Highest power of 12 $= 2^2 \cdot 3$ in $30!$: $\min(\lfloor 26/2 \rfloor, 14) = \min(13, 14) = 13$.

Do not assume the largest prime is the bottleneck; with a high exponent on a small prime (like $2^2$ in 12, or $2^3$ in 24), check both.

### Trailing zeros in other bases

The number of trailing zeros of $n!$ written in base $b$ is the highest power of $b$ dividing $n!$, computed as above. In base 6: $\min(v_2, v_3) = v_3$. In base 12: $\min(\lfloor v_2 / 2 \rfloor, v_3)$.

### Products of factorials

Trailing zeros of $1! \times 2! \times \cdots \times 10!$: count 5s in each factorial and add. $5!$ through $9!$ each contain one 5; $10!$ contains two. Total $= 5 + 2 = 7$. (The 2s are plentiful.)

### Reverse questions

"For how many $n$ does $n!$ end in exactly $m$ zeros?" Find one $n$ with $Z(n) = m$ (estimate $n \approx 4m$ and adjust, since $Z(n) \approx n/4$), then the answer is 5 (the whole block of five) if $m$ is attained, or 0 if it is skipped. "Smallest $n$ with at least $m$ zeros" is the start of the block.

### Other factorial facts worth knowing

- $n!$ ends in 0 for $n \ge 5$ and in 00 for $n \ge 10$; this kills units-digit questions on factorial sums instantly.
- $n!$ is divisible by every integer up to $n$ and by many beyond (e.g. $6! = 720$ is divisible by 16, 18, 20, 24, ...).
- $n! + 1$ is coprime to every integer from 2 to $n$ (Euclid), which occasionally appears in "which of these can be prime" questions.

## Worked examples

### Example 1

*How many zeros does $100!$ end in?*

$\lfloor 100/5 \rfloor + \lfloor 100/25 \rfloor = 20 + 4 = 24$.

**Why this method:** count 5s; 2s are never the bottleneck in $n!$.

### Example 2

*Find the highest power of 3 that divides $50!$.*

$16 + 5 + 1 = 22$.

**Why this method:** Legendre's formula; the repeated-division version avoids computing $3^2, 3^3$ explicitly.

### Example 3

*What is the smallest $n$ such that $n!$ ends in exactly 30 zeros?*

$Z(120) = 24 + 4 = 28$; $Z(124) = 28$; $Z(125) = 25 + 5 + 1 = 31$. The count jumps from 28 to 31, so 30 is never attained. There is no such $n$.

**Why this method:** check the jump at the nearest multiple of 25 (or 125). Options like "no such $n$" exist precisely for this.

### Example 4

*Find the highest power of 12 dividing $30!$.*

$12 = 2^2 \cdot 3$. $v_2(30!) = 15 + 7 + 3 + 1 = 26 \Rightarrow$ 13 fours. $v_3(30!) = 10 + 3 + 1 = 14$. Minimum is 13.

**Why this method:** the bottleneck here is the pairs of 2s, not the 3s, because 12 needs two 2s per copy.

### Example 5

*How many trailing zeros does $1! \times 2! \times 3! \times \cdots \times 10!$ have?*

Fives: $5!, 6!, 7!, 8!, 9!$ have one each; $10!$ has two. Total 7. Twos: far more. Answer 7.

**Why this method:** $v_5$ of a product is the sum of $v_5$ of the factors.

### Example 6

*For how many positive integers $n \le 200$ does $n!$ end in exactly 20 zeros?*

Estimate $n \approx 80$: $Z(80) = 16 + 3 = 19$; $Z(85) = 17 + 3 = 20$; $Z(89) = 20$; $Z(90) = 18 + 3 = 21$. So $n = 85, 86, 87, 88, 89$: 5 values.

**Why this method:** $Z$ is a step function constant on blocks of five; once one $n$ works, exactly five do (unless the value is skipped, in which case none do).

### Example 7

*Let $a$ be the highest power of 7 in $100!$ and $b$ the highest power of 7 in $200!$. Find $b - a$.*

$a = 14 + 2 = 16$; $b = 28 + 4 = 32$; $b - a = 16$.

**Why this method:** two direct Legendre computations. Note $b = 2a$ here, but that is a coincidence of the numbers, not a rule (the floors do not scale linearly in general).

## Traps & speed tips

- **Count 5s, not 10s, for trailing zeros.** And not 2s.
- **Keep dividing the quotient**, not the original number: $100 \to 20 \to 4 \to 0$.
- **Skipped values exist** at multiples of 25, 125, 625. Before answering "smallest $n$ with exactly $m$ zeros", check that $m$ is attainable.
- **Composite $k$:** factorise, divide each prime count by its exponent, take the minimum. Check the small prime with a high exponent.
- **$Z(n) \approx n/4$** gives a fast starting estimate for reverse questions.
- **Products of factorials:** add the $v_5$'s.
- **Factorials in a sum mod 10 or 100:** only the first 4 (or 9) terms matter.
- Memorise $Z(25) = 6$, $Z(50) = 12$, $Z(100) = 24$, $Z(125) = 31$, $Z(200) = 49$, $Z(1000) = 249$ as anchors.

## Checklist

- Compute $v_p(n!)$ for any prime $p$ and $n \le 1000$ in under 20 seconds.
- Find trailing zeros of $n!$ and explain why 5 is the bottleneck.
- Find the highest power of a composite number dividing $n!$.
- Recognise and handle skipped values of $Z(n)$.
- Solve "how many $n$ give exactly $m$ zeros" and "smallest $n$ with at least $m$ zeros".
- Count trailing zeros of a product of factorials.
