# Modulus, Functions & Graphs

> CAT asks one or two questions a year here, and they are great value: a modulus question is a counting question once you read $|x - a|$ as "distance from $a$", and function questions are usually two substitutions and a pattern. CAT 2021 asked how many integers satisfy $|n-60| < |n-100| < |n-20|$; the answer takes 40 seconds with the right picture.

## Core ideas

### Modulus is distance

$|x|$ is the distance of $x$ from $0$ on the number line, so it is never negative: $|5| = 5$, $|-5| = 5$. Formally,

$$|x| = \begin{cases} x & x \ge 0 \\ -x & x < 0 \end{cases}$$

More useful: $|x - a|$ is the distance between $x$ and $a$. Read every modulus this way:

- $|x - 3| = 5$: points at distance 5 from 3, so $x = 8$ or $-2$.
- $|x - 3| < 5$: points within 5 of 3, so $-2 < x < 8$.
- $|x - 3| > 5$: outside that band, $x < -2$ or $x > 8$.
- $|x - a| < |x - b|$: $x$ is closer to $a$ than to $b$, i.e. $x$ is on $a$'s side of the midpoint $\frac{a+b}{2}$.

That last reading solves CAT 2021 immediately: $|n - 60| < |n - 100|$ means $n < 80$; $|n - 100| < |n - 20|$ means $n > 60$. Integers from 61 to 79: nineteen.

### Sums of moduli: the piecewise method

$|x - 1| + |x - 4|$ changes its formula at $x = 1$ and $x = 4$ (the "critical points"). On each piece the expression is linear:

- $x \le 1$: $(1 - x) + (4 - x) = 5 - 2x$.
- $1 \le x \le 4$: $(x - 1) + (4 - x) = 3$ (constant!).
- $x \ge 4$: $(x - 1) + (x - 4) = 2x - 5$.

So the minimum of $|x-1| + |x-4|$ is $3$, attained everywhere between the two points. In general, $|x - a| + |x - b|$ has minimum $|a - b|$ on the whole segment $[a, b]$, and a sum of an odd number of such terms is minimised at the **median** of the points. For an even number, anywhere between the two middle points.

To solve an equation or inequality with several moduli: list the critical points, split the line into intervals, solve on each interval, and keep only solutions that actually lie in that interval.

### Modulus graphs

$y = |x|$ is a V with vertex at the origin. $y = |x - a|$ shifts it to vertex $(a, 0)$; $y = |x| + b$ raises it by $b$; $y = -|x|$ flips it. $|x| + |y| \le k$ is a square (a "diamond") with vertices $(\pm k, 0), (0, \pm k)$ and area $2k^2$ (two triangles of base $2k$ and height $k$). Shifting: $|x - h| + |y - k| \le r$ is the same diamond centred at $(h, k)$.

### Functions: input, rule, output

A function $f$ is a rule that assigns to each input exactly one output. $f(x) = 2x + 3$ means "double, then add 3". $f(5) = 13$. The **domain** is the set of allowed inputs (exclude division by zero and square roots of negatives); the **range** is the set of outputs actually produced.

**Composition** $f(g(x))$ means apply $g$ first, then $f$. Order matters: with $f(x) = x^2 + 1$ and $g(x) = 3x - 1$, $f(g(x)) = (3x-1)^2 + 1$ but $g(f(x)) = 3(x^2 + 1) - 1 = 3x^2 + 2$.

**Inverse** $f^{-1}$ undoes $f$: solve $y = f(x)$ for $x$. For $f(x) = 2x + 3$, $x = \frac{y - 3}{2}$, so $f^{-1}(x) = \frac{x - 3}{2}$.

**Even** functions satisfy $f(-x) = f(x)$ (symmetric about the $y$-axis, e.g. $x^2$, $|x|$); **odd** satisfy $f(-x) = -f(x)$ (e.g. $x^3$).

### Functional equations: substitute cleverly

Given a relation like $f(x) + 2f(1 - x) = 3x^2$ for all $x$, substitute $x \to 1 - x$ to get a second equation, then solve the pair as simultaneous equations in $f(x)$ and $f(1-x)$. Given $f(x) + f(1 - x) = 1$, pair up terms symmetric about $\frac12$ in a long sum.

### Reading a graph

A point $(a, b)$ on the graph of $f$ means $f(a) = b$. Roots are where it crosses the $x$-axis. "$f(x) > 0$" is where the graph is above the axis. If the graph of $g$ is the graph of $f$ shifted right by 2 and up by 1, then $g(x) = f(x - 2) + 1$ (right shift subtracts, which trips everyone once).

## Worked examples

### Example 1: equation with one modulus
*Solve $|2x - 3| = 7$.*

$2x - 3 = 7 \Rightarrow x = 5$, or $2x - 3 = -7 \Rightarrow x = -2$.
Check: $|7| = 7$ and $|-7| = 7$ ✓.

*Why this method:* a single modulus equal to a positive number is two linear equations. If the right side were negative there would be no solution.

### Example 2: two moduli
*Solve $|x - 1| + |x - 4| = 5$.*

Critical points $1, 4$. Between them the sum is the constant 3, not 5, so no solution there.
$x \ge 4$: $2x - 5 = 5 \Rightarrow x = 5$ (in range ✓).
$x \le 1$: $5 - 2x = 5 \Rightarrow x = 0$ (in range ✓).
Solutions: $0$ and $5$. Check: $|{-1}| + |{-4}| = 5$ ✓, $|4| + |1| = 5$ ✓.
Distance view: the points at total distance 5 from both 1 and 4 are one unit outside the segment on each side. Same answer, no algebra.

*Why this method:* the piecewise split is mechanical and safe; the distance view is a check.

### Example 3: counting integers with two conditions
*How many integers satisfy $|x - 3| \le 4$ and $|x + 1| \ge 2$?*

First: $-1 \le x \le 7$. Second: $x \ge 1$ or $x \le -3$. Intersect: $1 \le x \le 7$. Seven integers.
Check edge: $x = 0$ gives $|1| \ge 2$ false ✓; $x = 1$ gives $|2| \ge 2$ true ✓.

*Why this method:* each modulus inequality is an interval or its complement; intersect, then count.

### Example 4: composition
*With $f(x) = x^2 + 1$ and $g(x) = 3x - 1$, for which $x$ is $f(g(x)) = g(f(x))$?*

$f(g(x)) = 9x^2 - 6x + 2$. $g(f(x)) = 3x^2 + 2$.
$9x^2 - 6x + 2 = 3x^2 + 2 \Rightarrow 6x^2 = 6x \Rightarrow x = 0$ or $1$.
Check $x = 1$: $g(1) = 2, f(2) = 5$; $f(1) = 2, g(2) = 5$ ✓.

*Why this method:* write both compositions explicitly; do not guess that they are equal.

### Example 5: area under a modulus
*Find the area of the region $|x - 2| + |y| \le 3$.*

This is the diamond $|X| + |Y| \le 3$ shifted to centre $(2, 0)$. Vertices at $(5,0), (-1,0), (2,3), (2,-3)$. Area $= 2 \times 3^2 = 18$.
Check: diagonals are $6$ and $6$, so area $= \frac12 \times 6 \times 6 = 18$ ✓.

*Why this method:* shifting does not change area; recognise the diamond and use $2k^2$.

### Example 6: functional equation with pairing
*If $f(x) = \dfrac{4^x}{4^x + 2}$, find $f\!\left(\tfrac{1}{11}\right) + f\!\left(\tfrac{2}{11}\right) + \dots + f\!\left(\tfrac{10}{11}\right)$.*

Compute $f(1 - x) = \dfrac{4^{1-x}}{4^{1-x} + 2} = \dfrac{4}{4 + 2 \cdot 4^x} = \dfrac{2}{2 + 4^x}$.
So $f(x) + f(1 - x) = \dfrac{4^x + 2}{4^x + 2} = 1$.
The ten terms pair as $\frac{1}{11} + \frac{10}{11}$, $\frac{2}{11} + \frac{9}{11}$, …, five pairs: sum $= 5$.
Check one pair numerically: $f(0.5) = \frac{2}{4} = 0.5$, and $0.5 + 0.5 = 1$ ✓.

*Why this method:* whenever the arguments are symmetric about $\frac12$, test $f(x) + f(1-x)$ first.

## Traps & speed tips

- $|x| = -x$ when $x$ is negative; $|x|$ itself is never negative. $|x - 2| = -3$ has no solution.
- $\sqrt{x^2} = |x|$, not $x$.
- After solving on an interval, **check the solution lies in that interval**; a solution of the wrong piece is a phantom.
- Minimum of $|x - a| + |x - b| + |x - c|$ is at the median point. Do not differentiate.
- $f(g(x))$: apply the inside function first.
- Graph shifts: $f(x - 2)$ moves **right**; $f(x) + 2$ moves **up**.
- In "closer to $a$ than $b$" problems, the dividing line is the midpoint $\frac{a+b}{2}$; for integers, decide whether the midpoint itself is included.

## Checklist

- Translate $|x - a| \lessgtr k$ into an interval or its complement instantly.
- Solve an equation with two moduli by splitting at critical points.
- State the minimum of a sum of distances and where it occurs.
- Compute $f(g(x))$, $g(f(x))$ and $f^{-1}(x)$ for linear and quadratic $f, g$.
- Turn a functional equation into simultaneous equations by substitution.
- Find the area of $|x - h| + |y - k| \le r$ without plotting.
