# Algebraic Identities & Substitution

> One question most years, and it is usually a two-minute solve for someone who knows six identities and has the "let $t = \dots$" reflex. CAT 2017 asked for $2x^4$ given $x^2 = x + 1$; CAT 2022 asked for $2a + b$ from two symmetric equations. Both are identity questions in disguise.

## Core ideas

### An identity is an equation that is always true

$(a+b)^2 = a^2 + 2ab + b^2$ holds for every $a, b$. That is different from an equation like $x^2 = 4$, which is true only for particular $x$. Identities let you rewrite expressions into a form where the given information fits.

### The six identities CAT actually uses

1. $(a \pm b)^2 = a^2 \pm 2ab + b^2$, hence $a^2 + b^2 = (a+b)^2 - 2ab$.
2. $a^2 - b^2 = (a-b)(a+b)$.
3. $(a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3 = a^3 \pm b^3 \pm 3ab(a \pm b)$. Hence $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$.
4. $a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$.
5. $(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$.
6. $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab - bc - ca)$. So if $a + b + c = 0$, then $a^3 + b^3 + c^3 = 3abc$.

Derive, do not memorise blindly: multiply out $(a+b)(a+b)$ once by hand and the first one is yours forever. The third follows from the first by multiplying by $(a+b)$ again.

### The $x + \frac{1}{x}$ ladder

Set $s = x + \dfrac{1}{x}$. Then $x \cdot \dfrac{1}{x} = 1$, so identity 1 gives $x^2 + \dfrac{1}{x^2} = s^2 - 2$, identity 3 gives $x^3 + \dfrac{1}{x^3} = s^3 - 3s$, and squaring again, $x^4 + \dfrac{1}{x^4} = (s^2 - 2)^2 - 2$. Each rung comes from the previous one; you never solve for $x$.

### Symmetric functions and Vieta for three numbers

For three numbers with $e_1 = a + b + c$, $e_2 = ab + bc + ca$, $e_3 = abc$: $a^2 + b^2 + c^2 = e_1^2 - 2e_2$ and $a^3 + b^3 + c^3 = e_1^3 - 3e_1e_2 + 3e_3$. (The second comes from identity 6 after substituting the first.) Any symmetric expression can be written in $e_1, e_2, e_3$, which is why CAT gives you sums and products rather than the numbers.

### Reducing a power using the equation

If $x^2 = x + 1$, every higher power of $x$ can be pushed down: $x^3 = x \cdot x^2 = x^2 + x = 2x + 1$; $x^4 = (x^2)^2 = (x+1)^2 = x^2 + 2x + 1 = 3x + 2$. You end with a linear expression in $x$, and then substitute the actual root. This is what CAT 2017 wanted.

### Substitution: the "let $t$" reflex

When the same block appears repeatedly, name it. $(x^2+3x)^2 - 2(x^2+3x) - 8 = 0$ is a quadratic in $t = x^2 + 3x$. When an expression is a product of pairs like $(x-1)(x-4)(x-2)(x-3)$, pair the factors so the pairs share a part: $(x^2 - 5x + 4)(x^2 - 5x + 6)$, then $t = x^2 - 5x + 5$ makes it $(t-1)(t+1)$.

### Remainder and factor theorems

Dividing a polynomial $p(x)$ by $(x - a)$ leaves remainder $p(a)$. So $(x-a)$ is a factor exactly when $p(a) = 0$. Useful for "which of these is a factor" and for quick evaluation.

### Adding equations that are "almost" symmetric

CAT 2022: $a^2 + ab + a = 14$ and $ab + b^2 + b = 28$. Factor each: $a(a + b + 1) = 14$, $b(a + b + 1) = 28$. Add: $(a+b)(a+b+1) = 42 = 6 \times 7$, so $a + b = 6$, then $a = 2, b = 4$. The move is: factor, then add or divide so the common block appears.

## Worked examples

### Example 1: the ladder
*If $x + \dfrac{1}{x} = 5$, find $x^2 + \dfrac{1}{x^2}$, $x^3 + \dfrac{1}{x^3}$ and $x^4 + \dfrac{1}{x^4}$.*

$x^2 + \dfrac{1}{x^2} = 25 - 2 = 23$.
$x^3 + \dfrac{1}{x^3} = 125 - 15 = 110$.
$x^4 + \dfrac{1}{x^4} = 23^2 - 2 = 527$.
Check the last via another route: $(x + \frac1x)(x^3 + \frac{1}{x^3}) = x^4 + \frac{1}{x^4} + x^2 + \frac{1}{x^2}$, so $5 \times 110 = 550 = 527 + 23$ ✓.

*Why this method:* $x$ itself is $\frac{5 \pm \sqrt{21}}{2}$, ugly; the ladder never touches it.

### Example 2: three-variable symmetric sums
*If $a + b + c = 9$, $ab + bc + ca = 26$ and $abc = 24$, find $a^3 + b^3 + c^3$.*

$a^2 + b^2 + c^2 = 81 - 52 = 29$.
Identity 6: $a^3 + b^3 + c^3 - 3(24) = 9(29 - 26) = 27$, so $a^3 + b^3 + c^3 = 99$.
Check: the numbers are $2, 3, 4$ (sum 9, pair-products $6 + 12 + 8 = 26$, product 24): $8 + 27 + 64 = 99$ ✓.

*Why this method:* you never needed the numbers; in the exam they may not be integers.

### Example 3: reducing powers
*If $x^2 = 3x - 1$ and $x > 1$, find $x^4 - 7x^2$ in simplest form.*

$x^4 = (3x - 1)^2 = 9x^2 - 6x + 1 = 9(3x - 1) - 6x + 1 = 21x - 8$.
$x^4 - 7x^2 = 21x - 8 - 7(3x - 1) = 21x - 8 - 21x + 7 = -1$.
Check numerically: $x = \frac{3 + \sqrt5}{2} \approx 2.618$. $x^2 \approx 6.854$, $x^4 \approx 46.98$, $7x^2 \approx 47.98$, difference $\approx -1$ ✓.

*Why this method:* reduce every power to degree $\le 1$ using the given relation; constants fall out cleanly.

### Example 4: substitution to solve a quartic
*Find the sum of all real roots of $(x^2 + 3x)^2 - 2(x^2 + 3x) - 8 = 0$.*

Let $t = x^2 + 3x$: $t^2 - 2t - 8 = 0 \Rightarrow (t - 4)(t + 2) = 0$.
$t = 4$: $x^2 + 3x - 4 = 0 \Rightarrow x = 1, -4$. $t = -2$: $x^2 + 3x + 2 = 0 \Rightarrow x = -1, -2$.
All four are real; sum $= 1 - 4 - 1 - 2 = -6$.
Check: each quadratic has sum of roots $-3$, two quadratics, $-6$ ✓.

*Why this method:* a degree-4 equation with a repeated block is two quadratics in disguise.

### Example 5: difference of fourth powers
*If $a + b = 5$ and $a^2 + b^2 = 13$, find $a^4 + b^4$.*

$ab = \dfrac{25 - 13}{2} = 6$. $a^4 + b^4 = (a^2 + b^2)^2 - 2a^2b^2 = 169 - 72 = 97$.
Check with $a = 2, b = 3$: $16 + 81 = 97$ ✓.

*Why this method:* identity 1 applied twice, once to $(a, b)$ and once to $(a^2, b^2)$.

### Example 6: factor theorem
*What is the remainder when $x^3 - 4x^2 + 5x - 7$ is divided by $x - 2$? Is $x - 1$ a factor of $x^3 - 6x^2 + 11x - 6$?*

Remainder $= p(2) = 8 - 16 + 10 - 7 = -5$.
$q(1) = 1 - 6 + 11 - 6 = 0$, so $x - 1$ is a factor; indeed $x^3 - 6x^2 + 11x - 6 = (x-1)(x-2)(x-3)$.

*Why this method:* evaluation beats long division every time.

## Traps & speed tips

- $(a+b)^2 \ne a^2 + b^2$. If you ever write this under time pressure, stop and breathe.
- $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$: the subtracted term has $ab$ **and** $(a+b)$.
- When given $a + b + c = 0$, jump straight to $a^3 + b^3 + c^3 = 3abc$.
- Check with small integers. If the problem says sum 9, pair-sum 26, product 24, try $2, 3, 4$ before anything else.
- When an expression looks like a quadratic in some block, it is. Name the block.
- Reduce powers downwards, never upwards: $x^5 \to$ linear, not $x \to x^5$.
- Pair factors so that the pairs share a quadratic part (sum of the roots equal in each pair).

## Checklist

- Write the six identities from memory and derive identity 6 from identity 5 if asked.
- Climb the $x + 1/x$ ladder to the fourth power without solving for $x$.
- Express $a^2 + b^2 + c^2$ and $a^3 + b^3 + c^3$ in $e_1, e_2, e_3$.
- Reduce $x^4$ to a linear expression given a quadratic relation for $x$.
- Solve a quartic that is a quadratic in a block.
- Use the remainder theorem to evaluate remainders and test factors.
