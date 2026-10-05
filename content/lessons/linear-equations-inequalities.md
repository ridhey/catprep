# Linear Equations & Inequalities

> CAT asks one or two questions a year that are *pure* linear algebra, but almost every arithmetic word problem (ages, coins, tickets, mixtures) ends in a linear equation or an inequality with an integer twist. Get this fluent and a third of the paper gets easier.

## Core ideas

### What "linear" means

An expression is linear in $x$ if $x$ appears only to the first power and is not multiplied by another unknown: $3x - 7$, $2x + 5y$, $\frac{x}{4} + 1$ are linear; $x^2$, $xy$, $\frac{1}{x}$ are not. A **linear equation** sets a linear expression equal to another: $3x - 7 = 11$. Its graph is a straight line, which is where the name comes from.

Solving means isolating the unknown using the one rule that matters: **whatever you do to one side, do to the other.** $3x - 7 = 11 \Rightarrow 3x = 18 \Rightarrow x = 6$. Check by substituting back: $18 - 7 = 11$. Always substitute back; it costs five seconds and kills careless errors.

### Two unknowns need two independent equations

One linear equation in two unknowns ($x + y = 10$) has infinitely many solutions. You need a second, *independent* equation to pin down a unique point. Three tools:

1. **Elimination.** Scale the equations so one unknown has equal coefficients, then add or subtract.
   $2x + 3y = 29$ and $3x + 2y = 31$. Adding gives $5x + 5y = 60$, so $x + y = 12$. Subtracting gives $x - y = 2$. So $x = 7,\ y = 5$.
2. **Substitution.** Express one unknown from the simpler equation and plug it into the other.
3. **Pattern spotting.** Symmetric pairs like the one above often give $x+y$ and $x-y$ directly. CAT loves this; look for it before grinding.

### When does a system have a unique solution?

For $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$:

| Condition | Meaning | Solutions |
|---|---|---|
| $\dfrac{a_1}{a_2} \ne \dfrac{b_1}{b_2}$ | lines cross | exactly one |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \ne \dfrac{c_1}{c_2}$ | parallel lines | none |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$ | same line | infinitely many |

Why: two lines with equal slopes are parallel; if their intercepts also match they coincide. The slope of $ax + by = c$ is $-a/b$, so "same slope" is $a_1b_2 = a_2b_1$.

### Inequalities: the three rules

An inequality says one quantity is less than another. It behaves like an equation except for one thing:

1. Adding or subtracting the same number on both sides keeps the direction: $x - 3 < 5 \Rightarrow x < 8$.
2. Multiplying or dividing by a **positive** number keeps the direction: $2x < 8 \Rightarrow x < 4$.
3. Multiplying or dividing by a **negative** number **reverses** the direction: $-2x < 8 \Rightarrow x > -4$.

Why rule 3: $3 < 5$ but $-3 > -5$. Negating flips the number line.

A consequence you must never forget: you cannot multiply through by an unknown ($x$) unless you know its sign. $\frac{1}{x} < 2$ is **not** the same as $1 < 2x$; for negative $x$ the direction reverses. Split into cases $x > 0$ and $x < 0$.

### Chains and counting

CAT inequalities usually end with "how many integers satisfy…". Solve each inequality separately, intersect the intervals, then count integers. Counting integers from $a$ to $b$ inclusive: $b - a + 1$. Open ends drop a value each.

### Integer constraints turn equations into counting

$5a + 8b = 101$ has infinitely many real solutions but very few positive integer ones. Method: take the equation modulo the smaller coefficient. $101 \equiv 1 \pmod 5$ and $8b \equiv 3b \pmod 5$, so $3b \equiv 1 \pmod 5 \Rightarrow b \equiv 2 \pmod 5$. Try $b = 2, 7, 12, 17,\dots$ until $a$ turns negative. This is the single most useful trick in the chapter.

## Worked examples

### Example 1: symmetric pair
*Two pens and three pencils cost Rs 29; three pens and two pencils cost Rs 31. Cost of one pen?*

Let pen $= p$, pencil $= q$. $2p + 3q = 29$, $3p + 2q = 31$.
Add: $5p + 5q = 60 \Rightarrow p + q = 12$. Subtract: $p - q = 2$. So $p = 7$.
Check: $2(7) + 3(5) = 29$ and $3(7) + 2(5) = 31$. ✓

*Why this method:* coefficients are mirror images, so adding and subtracting gives $p+q$ and $p-q$ in one step each. Elimination by scaling would take four steps.

### Example 2: chain inequality, count integers
*How many integers $x$ satisfy $7 - 2x \le 3x - 8 < 2x + 4$?*

Left part: $7 - 2x \le 3x - 8 \Rightarrow 15 \le 5x \Rightarrow x \ge 3$.
Right part: $3x - 8 < 2x + 4 \Rightarrow x < 12$.
Intersection: $3 \le x \le 11$, giving $11 - 3 + 1 = 9$ integers.
Check the boundary: $x = 11$: $7 - 22 = -15 \le 25 < 26$ ✓. $x = 12$: $28 < 28$ fails ✓.

*Why this method:* a chain is two inequalities sharing a middle; never try to solve both at once.

### Example 3: digit problem
*A two-digit number has digit sum 11. Reversing its digits gives a number 27 more than the original. Find the number.*

Let tens digit $a$, units digit $b$: number $= 10a + b$. $a + b = 11$ and $(10b + a) - (10a + b) = 27 \Rightarrow 9(b - a) = 27 \Rightarrow b - a = 3$.
So $b = 7$, $a = 4$: the number is $47$. Check: $74 - 47 = 27$ ✓.

*Why this method:* reversing always gives a multiple of 9 times the digit difference. Memorise $9(b-a)$ and these become one-line questions.

### Example 4: parameter and consistency
*For which $k$ does $kx + 2y = 5,\ 3x + (k-1)y = 7$ fail to have a unique solution?*

No unique solution when $\dfrac{k}{3} = \dfrac{2}{k-1}$, i.e. $k(k-1) = 6 \Rightarrow k^2 - k - 6 = 0 \Rightarrow k = 3$ or $k = -2$.
Check $k = 3$: $3x + 2y = 5$ and $3x + 2y = 7$: parallel, no solution. Check $k = -2$: $-2x + 2y = 5$ and $3x - 3y = 7$, i.e. $x - y = -2.5$ and $x - y = 7/3$: parallel again, no solution. So for $k = 3$ or $-2$ the system has no solution; every other $k$ gives exactly one.

*Why this method:* questions like this test whether you know the table of conditions, not whether you can solve. Compare ratios, do not solve.

### Example 5: integer solutions of a linear equation
*Tickets cost Rs 5 and Rs 8. A group spent exactly Rs 101 and bought at least one of each. In how many ways could this happen?*

$5a + 8b = 101$. Mod 5: $8b \equiv 3b \equiv 101 \equiv 1 \pmod 5$. Since $3 \times 2 = 6 \equiv 1$, $b \equiv 2 \pmod 5$.
$b = 2 \Rightarrow a = (101 - 16)/5 = 17$. $b = 7 \Rightarrow a = (101 - 56)/5 = 9$. $b = 12 \Rightarrow a = (101 - 96)/5 = 1$. $b = 17 \Rightarrow a < 0$.
Three ways. Check: $85 + 16 = 45 + 56 = 5 + 96 = 101$ ✓.

*Why this method:* once one solution is found, the others step by $+8$ in $b$'s partner… precisely, $a$ decreases by 8 while $b$ increases by 5. Find one, then step.

### Example 6: ages
*A father is three times as old as his son. In 12 years he will be twice as old. Find the father's age now.*

Son $= s$, father $= 3s$. $3s + 12 = 2(s + 12) \Rightarrow 3s + 12 = 2s + 24 \Rightarrow s = 12$. Father $= 36$.
Check: in 12 years, $48 = 2 \times 24$ ✓.

*Why this method:* in age problems every person ages by the same amount; write every statement as an equation at the moment it describes.

## Traps & speed tips

- **Dividing by a negative** flips the sign. $-3x \ge 12 \Rightarrow x \le -4$.
- **Never multiply an inequality by an unknown** without a sign case split.
- Count integers inclusively: from 3 to 11 is 9 numbers, not 8.
- "Strictly between", "at most", "not more than", "exceeds by": translate each phrase before touching algebra.
- For $ax + by = c$ with positive integer unknowns, first check whether $\gcd(a,b)$ divides $c$; if not, there are no solutions.
- When coefficients are symmetric ($2,3$ and $3,2$), add and subtract first.
- Substitute the answer back into the *original* words, not just the equation you wrote.

## Checklist

- Solve a two-variable system by elimination in under a minute.
- State when a system has none, one, or infinitely many solutions.
- Solve a chain inequality and count the integers in the result.
- Explain why the inequality flips when multiplying by a negative.
- Find all positive-integer solutions of $ax + by = c$ using the mod trick.
- Translate age, digit and coin problems into equations without hesitation.
