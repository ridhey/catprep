# Integer Solutions of Equations

> CAT loves this as a TITA question: "how many positive integer solutions does $3x + 5y = 100$ have?" or a three-variable version with bounds. There is no formula to memorise; there is a procedure, and the procedure must be executed without miscounting. This lesson is about that procedure.

## Core ideas

### One linear equation in two variables

$ax + by = c$ with integer $a, b, c$ and integer unknowns $x, y$ is a **linear Diophantine equation**. Facts:

1. It has integer solutions if and only if $\gcd(a, b)$ divides $c$. ($6x + 9y = 20$ has none, since the left side is always a multiple of 3.)
2. If $(x_0, y_0)$ is one solution and $\gcd(a, b) = 1$, then **all** solutions are
   $$x = x_0 + bt, \qquad y = y_0 - at \qquad (t \in \mathbb{Z})$$
   Check: $a(x_0 + bt) + b(y_0 - at) = ax_0 + by_0 = c$. Solutions are spaced out: $x$ moves in steps of $b$, $y$ in steps of $a$, in opposite directions.
3. If $\gcd(a, b) = g > 1$, divide the whole equation by $g$ first.

So the method is: **find one solution, then step**, and count how many steps keep both variables in the allowed range.

### Finding one solution

Use remainders. In $3x + 5y = 100$: $3x = 100 - 5y$ must be a multiple of 3. Mod 3, $100 \equiv 1$ and $5y \equiv 2y$, so $2y \equiv 1 \pmod 3 \Rightarrow y \equiv 2 \pmod 3$. The smallest positive $y$ is 2, giving $x = 30$. Then $y = 2, 5, 8, \dots$ and $x = 30, 25, 20, \dots$

Tip: solve the congruence for the variable with the **larger** coefficient (here $y$, coefficient 5, modulo 3); it has fewer values to check.

### Counting with bounds

Positive solutions: $x \ge 1$ and $y \ge 1$. In the example $y \in \{2, 5, 8, 11, 14, 17\}$ (with $y = 20$ giving $x = 0$, not allowed): 6 solutions.

Non-negative solutions allow $x = 0$ or $y = 0$: in $2x + 3y = 48$, $y$ must be even, $y = 0, 2, \dots, 16$: 9 solutions ($y = 16$ gives $x = 0$, allowed).

Rough size: when $\gcd(a, b) = 1$, consecutive solutions are $ab$ apart in the quantity $ax$ (or $by$), so the number of solutions is close to $\frac{c}{ab}$: either $\lfloor c/ab \rfloor$ or $\lfloor c/ab \rfloor + 1$ for non-negative solutions. That is an estimate for cross-checking, not a rule. **Always list the first solution and step.**

### Three variables: fix one, count the rest

For $2x + 3y + 4z = 30$ in positive integers, fix $z$ (choose the variable whose coefficient makes the remaining equation easiest, or the one with the fewest possible values). For each $z$ the equation becomes a two-variable one, which you count as above. Add the counts.

For $x - y - z = 25$ with bounds, rewrite as $y + z = x - 25$ and count pairs $(y, z)$ for each allowed sum.

### Equations where all coefficients are 1: stars and bars

$x_1 + x_2 + \dots + x_k = n$ in **non-negative** integers has $\binom{n + k - 1}{k - 1}$ solutions (place $k - 1$ bars among $n$ stars). In **positive** integers, substitute $x_i = y_i + 1$ to get $\binom{n - 1}{k - 1}$. With a lower bound $x_i \ge m_i$, substitute $x_i = y_i + m_i$ first. Upper bounds are handled by inclusion–exclusion or, for small cases, by direct listing. (Full treatment is in the permutations and combinations lesson; here you need the two formulas.)

### Ordered vs unordered, distinct vs equal

"Solutions $(x, y, z)$" are ordered triples: $(1, 2, 12)$ and $(2, 1, 12)$ are different. If the question says $x < y < z$ or "sets of three numbers", you are counting **unordered** solutions with distinct entries. Standard trick: count all ordered solutions $T$, those with all three equal $E$, and those with exactly two equal $D$; then all-distinct ordered $= T - E - D$, and unordered-distinct $= (T - E - D)/6$.

### Products: factor and count divisors

$xy = 2x + 3y$ looks nonlinear, but rearranges: $xy - 2x - 3y = 0 \Rightarrow (x - 3)(y - 2) = 6$. Now count factor pairs of 6, including negatives if $x, y$ may be any integers: $(x - 3, y - 2) \in \{(1, 6), (2, 3), (3, 2), (6, 1), (-1, -6), (-2, -3), (-3, -2), (-6, -1)\}$: 8 solutions. The move is "add the product of the coefficients to both sides so that it factorises" (Simon's favourite factoring trick).

Similarly $\frac{1}{x} + \frac{1}{y} = \frac{1}{n}$ becomes $(x - n)(y - n) = n^2$, and the number of positive solutions is the number of factors of $n^2$.

### Absolute values and inequalities

$|x| + |y| = 6$ in integers: for $|x| = k$ ($0 \le k \le 6$) there are 2 choices of $x$ when $k > 0$, and $|y| = 6 - k$ gives 2 choices when $6 - k > 0$. Count: $k = 0$: 2; $k = 6$: 2; $k = 1..5$: 4 each → $2 + 2 + 20 = 24$. In general $|x| + |y| = n$ has $4n$ integer solutions.

$x + y \le n$ in non-negative integers: add a slack variable $s \ge 0$ and count $x + y + s = n$.

## Worked examples

### Example 1

*How many positive integer solutions does $3x + 5y = 100$ have?*

Mod 3: $5y \equiv 100 \Rightarrow 2y \equiv 1 \Rightarrow y \equiv 2 \pmod 3$. $y = 2, 5, 8, 11, 14, 17$ give $x = 30, 25, 20, 15, 10, 5$. ($y = 20 \Rightarrow x = 0$, excluded.) Six solutions.

Cross-check: $100 / 15 \approx 6.7$; six or seven expected. ✓

**Why this method:** one solution plus stepping by the other coefficient.

### Example 2

*How many non-negative integer solutions does $2x + 3y = 48$ have?*

$3y$ must be even, so $y$ is even: $y = 0, 2, 4, \dots, 16$ ($y = 16 \Rightarrow x = 0$ allowed; $y = 18 \Rightarrow x < 0$). Nine solutions.

**Why this method:** parity does the congruence work. Count the AP: $(16 - 0)/2 + 1 = 9$.

### Example 3

*How many solutions $(x, y, z)$ in positive integers does $x - y - z = 25$ have with $x \le 40$, $y \le 12$, $z \le 12$?*

$y + z = x - 25$. Since $x \le 40$, $y + z \le 15$; since $y, z \ge 1$, $y + z \ge 2$ (and then $x \ge 27$, fine). Count pairs $(y, z)$ with $1 \le y, z \le 12$ and $y + z = s$:
- $s = 2, \dots, 13$: $s - 1$ pairs each (no bound bites): $1 + 2 + \dots + 12 = 78$.
- $s = 14$: $y$ from 2 to 12: 11 pairs.
- $s = 15$: $y$ from 3 to 12: 10 pairs.
Total $78 + 11 + 10 = 99$.

Independent check: all pairs with $y, z \le 12$ number $144$; those with $y + z \ge 16$ are $9 + 8 + \dots + 1 = 45$; $144 - 45 = 99$. ✓

**Why this method:** the bounds on $y$ and $z$ cut the last two sums; the second count (complement) is the verification. Note: a widely circulated key for the CAT 2017 original gives 101; the count above is what the stated constraints produce.

### Example 4

*How many positive integer solutions does $2x + 3y + 4z = 30$ have?*

Fix $z$ from 1 to 6 ($4z \le 25$). Remaining: $2x + 3y = 30 - 4z$, an even number $R$, so $y$ is even and positive, $y \ge 2$, and $3y \le R - 2$.
- $z = 1$, $R = 26$: $y = 2, 4, 6, 8$ → 4
- $z = 2$, $R = 22$: $y = 2, 4, 6$ → 3
- $z = 3$, $R = 18$: $y = 2, 4$ → 2
- $z = 4$, $R = 14$: $y = 2, 4$ → 2
- $z = 5$, $R = 10$: $y = 2$ → 1
- $z = 6$, $R = 6$: $y = 2 \Rightarrow x = 0$ → 0
Total $12$.

**Why this method:** fix the variable with the largest coefficient (fewest cases), then count each two-variable equation.

### Example 5

*How many ordered pairs of integers $(x, y)$ satisfy $xy = 2x + 3y$?*

$(x - 3)(y - 2) = 6$. Integer factor pairs of 6, positive and negative: 8. So 8 solutions, e.g. $(4, 8)$, $(5, 5)$, $(6, 4)$, $(9, 3)$, $(2, -4)$, $(1, -1)$, $(0, 0)$, $(-3, 1)$.

Check $(5, 5)$: $25 = 10 + 15$ ✓. $(0, 0)$: $0 = 0$ ✓.

**Why this method:** factorise, then the question is "how many divisors".

### Example 6

*How many solutions in positive integers does $x + y + z = 15$ have with $x < y < z$?*

All ordered positive solutions: $\binom{14}{2} = 91$. All equal: $(5, 5, 5)$, 1. Exactly two equal: $x = y$, $z = 15 - 2x \ge 1$, $x \le 7$, exclude $x = 5$: 6 choices, times 3 positions: 18. All distinct ordered $= 91 - 1 - 18 = 72$; unordered $= 72 / 6 = 12$.

Check by listing smallest element: $x = 1$: $(y, z) = (2, 12), (3, 11), (4, 10), (5, 9), (6, 8)$: 5. $x = 2$: $(3, 10), (4, 9), (5, 8), (6, 7)$: 4. $x = 3$: $(4, 8), (5, 7)$: 2. $x = 4$: $(5, 6)$: 1. Total 12. ✓

**Why this method:** symmetric counting then divide by $3!$, with the equal cases removed first; the listing is the independent check.

## Traps & speed tips

- **"Positive" vs "non-negative"**: decide before counting whether 0 is allowed.
- **Step size is the other coefficient**: in $ax + by = c$, $x$ steps by $b$ and $y$ by $a$.
- **Check the ends.** Most miscounts are at the first or last term; compute $x$ explicitly there.
- **Use the complement** as the independent verification in bounded counts.
- **Fix the variable with the largest coefficient** in three-variable equations.
- **Ordered triples unless told otherwise.** "$x < y < z$" or "sets" means unordered and distinct.
- **Factor products**: $xy + ax + by = c \Rightarrow (x + b)(y + a) = c + ab$.
- **Negative divisors** count when the variables may be negative.
- $|x| + |y| = n$: $4n$ solutions; $|x| + |y| \le n$: $2n^2 + 2n + 1$.
- Rough size check: non-negative solutions of $ax + by = c$ number about $\frac{c}{ab}$.

## Checklist

- Decide whether $ax + by = c$ has integer solutions and find one quickly using remainders.
- Generate all solutions by stepping and count those within given bounds.
- Reduce a three-variable equation to a sum of two-variable counts.
- Apply stars and bars for all-ones coefficients, with lower bounds.
- Convert $x < y < z$ counting to ordered counting and back.
- Factorise $xy + ax + by = c$ and count divisor pairs, including negatives.
