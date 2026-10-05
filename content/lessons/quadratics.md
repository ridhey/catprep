# Quadratic Equations

> CAT asks one or two quadratic questions a year, nearly always about *relationships between roots* (sum, product, nature, a parameter) rather than about solving. The formula is the least important thing in this lesson.

## Core ideas

### What a quadratic is

A quadratic in $x$ is $ax^2 + bx + c = 0$ with $a \ne 0$. "Degree 2" means the highest power is 2, and a degree-2 polynomial has at most two roots. A **root** (or solution) is a value of $x$ that makes the expression zero.

### Three ways to find the roots

1. **Factorising.** Find two numbers whose product is $ac$ and sum is $b$. For $x^2 - 7x + 12$: product 12, sum $-7$, so $-3$ and $-4$: $(x-3)(x-4) = 0$, roots $3, 4$. Try this first; CAT numbers usually factorise.
2. **Completing the square.** $x^2 - 6x + 4 = (x-3)^2 - 5$, so $x = 3 \pm \sqrt{5}$. This is also how you find the minimum or maximum of a quadratic.
3. **The formula.** $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. It comes from completing the square on the general form. Use it only when factorising fails.

### The discriminant decides the nature of roots

$D = b^2 - 4ac$ is the quantity under the square root. Since you cannot take a real square root of a negative number:

| $D$ | Roots |
|---|---|
| $D > 0$ | two distinct real roots |
| $D = 0$ | one repeated real root (the parabola just touches the axis) |
| $D < 0$ | no real roots |
| $D$ a perfect square (integer coefficients) | rational roots |

### Sum and product of roots (Vieta)

If the roots are $\alpha$ and $\beta$, then $ax^2 + bx + c = a(x - \alpha)(x - \beta) = a\big(x^2 - (\alpha+\beta)x + \alpha\beta\big)$. Matching coefficients:

$$\alpha + \beta = -\frac{b}{a}, \qquad \alpha\beta = \frac{c}{a}.$$

This is the engine of CAT quadratics. You almost never need the individual roots, because every *symmetric* expression in $\alpha, \beta$ can be written in terms of these two:

- $\alpha^2 + \beta^2 = (\alpha+\beta)^2 - 2\alpha\beta$
- $(\alpha - \beta)^2 = (\alpha+\beta)^2 - 4\alpha\beta = D/a^2$
- $\alpha^3 + \beta^3 = (\alpha+\beta)^3 - 3\alpha\beta(\alpha+\beta)$
- $\dfrac{1}{\alpha} + \dfrac{1}{\beta} = \dfrac{\alpha+\beta}{\alpha\beta}$

### Forming an equation from its roots

$x^2 - (\text{sum})x + (\text{product}) = 0$. If you want roots shifted by $k$ (i.e. $\alpha + k, \beta + k$), replace $x$ by $x - k$ in the original. For reciprocal roots, replace $x$ by $1/x$ and clear denominators. For roots multiplied by $k$, replace $x$ by $x/k$.

### Signs of roots without solving

With $a > 0$: both roots positive $\iff D \ge 0$, sum $> 0$, product $> 0$. Both negative $\iff D \ge 0$, sum $< 0$, product $> 0$. Opposite signs $\iff$ product $< 0$ (then $D > 0$ automatically).

### Graph intuition

$y = ax^2 + bx + c$ is a parabola, opening up if $a > 0$, down if $a < 0$. Its vertex is at $x = -\dfrac{b}{2a}$ with value $c - \dfrac{b^2}{4a} = -\dfrac{D}{4a}$. The roots are where it crosses the $x$-axis; symmetric about the vertex. The quadratic has the same sign as $a$ outside the roots and the opposite sign between them. That sign rule solves quadratic inequalities instantly.

## Worked examples

### Example 1: symmetric expressions
*If $\alpha, \beta$ are the roots of $x^2 - 7x + 12 = 0$, find $\alpha^2 + \beta^2$ and $\dfrac{1}{\alpha} + \dfrac{1}{\beta}$.*

$\alpha + \beta = 7$, $\alpha\beta = 12$.
$\alpha^2 + \beta^2 = 49 - 24 = 25$. $\dfrac{1}{\alpha} + \dfrac{1}{\beta} = \dfrac{7}{12}$.
Check with the actual roots $3, 4$: $9 + 16 = 25$ ✓, $\frac13 + \frac14 = \frac{7}{12}$ ✓.

*Why this method:* even when roots are easy, Vieta is faster and works when they are irrational.

### Example 2: nature of roots with a parameter
*For what real $k$ does $x^2 + (k-2)x + 1 = 0$ have real roots?*

$D = (k-2)^2 - 4 \ge 0 \Rightarrow (k-2)^2 \ge 4 \Rightarrow k - 2 \ge 2$ or $k - 2 \le -2 \Rightarrow k \ge 4$ or $k \le 0$.
Check $k = 4$: $x^2 + 2x + 1 = (x+1)^2$, repeated root ✓. Check $k = 2$: $x^2 + 1 = 0$, no real root ✓.

*Why this method:* "real roots" is code for $D \ge 0$; the question is an inequality in disguise.

### Example 3: forming an equation with shifted roots
*$\alpha, \beta$ are roots of $x^2 - 5x + 6 = 0$. Find the equation whose roots are $\alpha + 1$ and $\beta + 1$.*

Replace $x$ by $x - 1$: $(x-1)^2 - 5(x-1) + 6 = x^2 - 2x + 1 - 5x + 5 + 6 = x^2 - 7x + 12$.
Check: original roots $2, 3$; new roots $3, 4$, and $x^2 - 7x + 12 = (x-3)(x-4)$ ✓.

*Why this method:* substitution avoids computing new sum and product separately, and works for any transformation of the roots.

### Example 4: word problem
*The product of two consecutive positive even numbers is 288. Find them.*

Let them be $n$ and $n+2$: $n^2 + 2n - 288 = 0$. $D = 4 + 1152 = 1156 = 34^2$. $n = \dfrac{-2 + 34}{2} = 16$. Numbers: $16, 18$. Check: $16 \times 18 = 288$ ✓.

*Why this method:* when $D$ is a perfect square the formula is painless; also $\sqrt{288} \approx 17$ tells you the answer is near 17 before you compute.

### Example 5: common root
*$x^2 + 3x + a = 0$ and $x^2 + ax + 3 = 0$ ($a \ne 3$) have a common root. Find $a$.*

Subtract the equations: $(3 - a)x + (a - 3) = 0 \Rightarrow (3-a)(x - 1) = 0$. Since $a \ne 3$, the common root is $x = 1$.
Substitute into the first: $1 + 3 + a = 0 \Rightarrow a = -4$.
Check: $x^2 + 3x - 4 = (x+4)(x-1)$ and $x^2 - 4x + 3 = (x-1)(x-3)$; common root $1$ ✓.

*Why this method:* subtracting two monic quadratics kills the $x^2$ term and leaves a linear equation that the common root must satisfy.

### Example 6: roots inside an interval
*For how many integers $k$ do both roots of $x^2 - 2kx + k^2 - 1 = 0$ lie strictly between $-2$ and $4$?*

$x^2 - 2kx + k^2 - 1 = (x - k)^2 - 1$, roots $k - 1$ and $k + 1$.
Need $k - 1 > -2$ and $k + 1 < 4$: $k > -1$ and $k < 3$. Integers: $0, 1, 2$. Three values.
Check $k = 2$: roots $1, 3$, both in $(-2, 4)$ ✓. $k = 3$: root $4$ is not strictly inside ✓.

*Why this method:* spotting $(x-k)^2 - 1$ turns a scary "both roots in an interval" problem into two linear inequalities.

## Traps & speed tips

- $D = 0$ means *one* real root counted twice, so "real roots" includes it; "distinct real roots" does not.
- Sum of roots is $-b/a$; the minus sign is the most common slip in the chapter.
- Before using the formula, try the product-and-sum factor search; CAT numbers are chosen to factorise.
- $\alpha - \beta = \pm\sqrt{D}/a$: the sign is ambiguous, so questions ask for $(\alpha-\beta)^2$ or $|\alpha - \beta|$.
- If a quadratic has integer roots and integer coefficients, the roots divide the constant term (for monic). Use this to list possibilities fast.
- Vertex at $x = -b/2a$: minimum when $a > 0$, maximum when $a < 0$.
- Plugging a claimed root back in takes ten seconds. Do it.

## Checklist

- Factorise a monic quadratic with integer roots by inspection.
- Write $\alpha^2 + \beta^2$, $\alpha^3 + \beta^3$, $(\alpha-\beta)^2$ in terms of sum and product.
- Use $D$ to answer "real", "equal", "rational" root questions.
- Form a new quadratic whose roots are a transformation of the old roots.
- Decide signs of roots from the signs of $-b/a$ and $c/a$.
- Solve a quadratic inequality using the sign-of-$a$ rule.
