# Maxima & Minima (AM–GM and friends)

> One question in most years, and it is often the one people skip because it "looks like calculus". It never is. CAT 2019's "number of real roots of $2\cos(x(x+1)) = 2^x + 2^{-x}$" is a pure bounding argument: one side is at most 2, the other is at least 2.

## Core ideas

### The question is always "how big or small can this get?"

You are asked for the maximum or minimum of an expression, or to show an equation has few solutions because the two sides cannot meet. Three tools cover everything CAT asks: completing the square, AM–GM, and bounding each side separately.

### Tool 1: completing the square

Any quadratic can be written as $a(x - h)^2 + k$. Since a square is never negative, the minimum (for $a > 0$) is $k$, at $x = h$. Example: $2x^2 - 8x + 11 = 2(x^2 - 4x) + 11 = 2(x - 2)^2 - 8 + 11 = 2(x-2)^2 + 3$, minimum $3$ at $x = 2$. For $a < 0$ the same form gives a maximum.

The vertex formula says the same thing: extreme value at $x = -\dfrac{b}{2a}$, equal to $c - \dfrac{b^2}{4a}$.

### Tool 2: AM–GM

For positive numbers, the arithmetic mean is at least the geometric mean:

$$\frac{a + b}{2} \ge \sqrt{ab}, \qquad \frac{a + b + c}{3} \ge \sqrt[3]{abc},$$

with equality exactly when all the numbers are equal. Proof for two numbers: $(\sqrt a - \sqrt b)^2 \ge 0$ expands to $a + b \ge 2\sqrt{ab}$.

Two consequences you will use constantly:

- **Fixed sum, maximise product:** if $a + b = S$, then $ab \le \left(\frac{S}{2}\right)^2$. Product is biggest when the parts are equal.
- **Fixed product, minimise sum:** if $ab = P$, then $a + b \ge 2\sqrt P$. Sum is smallest when the parts are equal.

Classic: $x + \dfrac{1}{x} \ge 2$ for $x > 0$ because the product of $x$ and $\frac1x$ is fixed at 1. Similarly $2^x + 2^{-x} \ge 2$ for all real $x$.

**Weighted trick.** To maximise $x^2 y$ given $2x + y = 12$: split so that the parts whose product you want appear with equal weight: $x + x + y = 12$, so $\dfrac{x + x + y}{3} \ge \sqrt[3]{x \cdot x \cdot y}$, i.e. $4 \ge \sqrt[3]{x^2 y}$, so $x^2 y \le 64$, with equality at $x = y = 4$. Check: $2(4) + 4 = 12$ ✓. The rule: break the constraint into as many equal pieces as the powers demand.

### Tool 3: bound each side

If $f(x) \le M$ for all $x$ and $g(x) \ge M$ for all $x$, then $f(x) = g(x)$ forces both to equal $M$, which usually pins down $x$ to one or zero values. Standard bounds: $|\sin|, |\cos| \le 1$; $t^2 \ge 0$; $a^x > 0$; $a^x + a^{-x} \ge 2$; $|x| + |y| \ge |x + y|$.

### Tool 4: the minimum of a sum of distances

$|x - a| + |x - b|$ has minimum $|a - b|$ (on the segment between $a$ and $b$); with more points, the minimum is at the median. Covered in the modulus lesson; it is a maxima–minima tool too.

### Tool 5: Cauchy-type bound for linear expressions on a circle

If $x^2 + y^2 = r^2$, then $ax + by \le r\sqrt{a^2 + b^2}$. Reason: $(ax + by)^2 \le (a^2 + b^2)(x^2 + y^2)$, which expands to $(ay - bx)^2 \ge 0$. Equality when $(x, y)$ is proportional to $(a, b)$. So the maximum of $3x + 4y$ on $x^2 + y^2 = 25$ is $5 \times 5 = 25$, at $(3, 4)$.

### Reading a range

For $y = \dfrac{x^2 + 2}{x^2 + 1} = 1 + \dfrac{1}{x^2 + 1}$: the fraction is at most $1$ (at $x = 0$) and can be made as close to $0$ as you like, so the range is $(1, 2]$. Rewriting as "constant + something you can bound" is the whole skill.

## Worked examples

### Example 1: completing the square
*Find the minimum of $2x^2 - 8x + 11$ and where it occurs.*

$2(x - 2)^2 + 3$. Minimum $3$ at $x = 2$.
Check with the vertex formula: $x = \frac{8}{4} = 2$, value $11 - \frac{64}{8} = 3$ ✓.

*Why this method:* no calculus; the square term is the only thing that varies and it is $\ge 0$.

### Example 2: AM–GM with a fixed product
*Find the minimum of $x + \dfrac{9}{x}$ for $x > 0$.*

The product $x \cdot \frac9x = 9$ is fixed, so $x + \frac9x \ge 2\sqrt9 = 6$, with equality at $x = 3$.
Check $x = 3$: $3 + 3 = 6$; $x = 2$: $2 + 4.5 = 6.5 > 6$ ✓.

*Why this method:* two positive terms with constant product is the AM–GM signature.

### Example 3: fixed sum, product with powers
*Positive $x, y$ satisfy $2x + y = 12$. Find the maximum of $x^2 y$.*

$x + x + y = 12$. AM–GM on three parts: $\dfrac{12}{3} \ge \sqrt[3]{x^2 y} \Rightarrow x^2 y \le 64$, equality at $x = y = 4$.
Check: $x = 3, y = 6$: $x^2 y = 54 < 64$ ✓; $x = 5, y = 2$: $50 < 64$ ✓.

*Why this method:* split the constraint into equal-weight pieces matching the exponents.

### Example 4: bounding both sides
*How many real $x$ satisfy $3^{x^2} + 3^{-x^2} = 2 - (x - 1)^2$?*

Left side: $t + \frac1t \ge 2$ with $t = 3^{x^2} > 0$. Right side: $2 - (\text{square}) \le 2$.
Equality needs both to equal 2: left requires $3^{x^2} = 1 \Rightarrow x = 0$; right requires $x = 1$. Impossible simultaneously, so **zero** solutions.

*Why this method:* bound each side; equality forces conditions that may contradict. CAT 2019's cosine question is the same shape (there, both conditions give $x = 0$, so one root).

### Example 5: range of a rational function
*Find the range of $y = \dfrac{x^2 + 2}{x^2 + 1}$.*

$y = 1 + \dfrac{1}{x^2 + 1}$. Since $x^2 + 1 \ge 1$, the fraction lies in $(0, 1]$. Range: $(1, 2]$.
Check: $x = 0$ gives $2$; $x = 3$ gives $\frac{11}{10} = 1.1$; large $x$ approaches $1$ ✓.

*Why this method:* split off the constant; what remains is obviously bounded.

### Example 6: linear expression on a circle
*If $x^2 + y^2 = 25$, find the maximum of $3x + 4y$ and the minimum of $x + y$.*

Max of $3x + 4y$: $5\sqrt{9 + 16} = 25$ at $(3, 4)$. Check: $9 + 16 = 25$ ✓, $3(3) + 4(4) = 25$ ✓.
Min of $x + y$: $-5\sqrt{2}$ at $\left(-\frac{5}{\sqrt2}, -\frac{5}{\sqrt2}\right)$. Check: $\frac{25}{2} + \frac{25}{2} = 25$ ✓.

*Why this method:* the Cauchy bound; equality is at the point on the circle in the direction of $(a, b)$.

## Traps & speed tips

- AM–GM needs **positive** numbers. $x + \frac1x \ge 2$ is false for negative $x$ (there it is $\le -2$).
- Equality in AM–GM requires the terms to be equal; if the constraint makes equality impossible, the bound is not attained and you need a different argument.
- "Maximum product for fixed sum" means equal parts; "minimum sum for fixed product" means equal parts. Both are the same inequality.
- A square is $\ge 0$; a square of a real expression with a minus sign in front is $\le 0$. Use these to bound without any formula.
- For $|x-a| + |x-b|$, the minimum is the distance $|a - b|$, not zero.
- Before answering "how many roots", ask: can the two sides even be equal?
- The vertex of $ax^2 + bx + c$ is at $-b/2a$; sign of $a$ tells you max or min.

## Checklist

- Complete the square to find the extreme value of any quadratic.
- State AM–GM for two and three numbers and the equality condition.
- Maximise a product with a fixed sum, including weighted cases like $x^2 y$.
- Minimise $ax + \frac{b}{x}$ for $x > 0$.
- Bound both sides of an equation to count its real roots.
- Find the extremes of $ax + by$ on $x^2 + y^2 = r^2$.
