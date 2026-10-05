# Ratio & Proportion

> Ratios are the native language of CAT arithmetic. One or two questions a year are explicitly about ratios, partnership or variation, but ages, mixtures, speeds and work all reduce to "set up the ratio, scale it". Learn to think in parts, not in unknowns.

## Core ideas

### What a ratio is

The ratio $a : b$ is the fraction $\frac{a}{b}$, written to compare two quantities of the same kind. $a : b = 3 : 4$ tells you nothing about the actual sizes, only that $a = 3k$ and $b = 4k$ for some common multiplier $k$. Always introduce that $k$ explicitly: it turns a ratio into real numbers you can add and subtract.

A ratio is unchanged when both parts are multiplied by the same number: $3 : 4 = 6 : 8 = 1.5 : 2$. It is changed when you *add* the same number to both parts ($3 : 4 \ne 4 : 5$). This is why "the ratio becomes ... after 4 years" questions need the $k$.

### Combining ratios

If $A : B = 2 : 3$ and $B : C = 4 : 5$, you cannot write $A : B : C = 2 : 3 : 5$. The $B$ in the first ratio is 3 parts; in the second it is 4 parts. Make $B$ equal: LCM of 3 and 4 is 12. Scale the first ratio by 4 ($8 : 12$) and the second by 3 ($12 : 15$). Then $A : B : C = 8 : 12 : 15$.

Dividing a quantity in the ratio $8 : 12 : 15$: total parts $= 35$; each share is the corresponding fraction of the total.

### Proportion and the cross-multiplication

$a : b = c : d$ (read "$a$ is to $b$ as $c$ is to $d$") means $\frac{a}{b} = \frac{c}{d}$, equivalently $ad = bc$. Two useful rearrangements:

- **Componendo–dividendo:** if $\frac{a}{b} = \frac{c}{d}$ then $\frac{a + b}{a - b} = \frac{c + d}{c - d}$. Use it when a question gives you $\frac{x + y}{x - y}$ directly.
- If $\frac{a}{b} = \frac{c}{d} = k$, then $\frac{a + c}{b + d} = k$ too (adding numerators and denominators keeps the ratio). This is the engine behind alligation.

### Variation

"$y$ varies directly as $x$" means $y = kx$, so $\frac{y_1}{y_2} = \frac{x_1}{x_2}$.
"$y$ varies inversely as $x$" means $xy = k$, so $\frac{y_1}{y_2} = \frac{x_2}{x_1}$.
"$y$ varies jointly as $x$ and $z^2$ and inversely as $w$" means $y = k\frac{xz^2}{w}$.

The method is always the same: write the relation with a constant $k$, find $k$ from the given data point, then substitute. Or skip $k$ entirely and use the ratio form: $\frac{y_1}{y_2} = \frac{x_1 z_1^2 / w_1}{x_2 z_2^2 / w_2}$.

### Partnership

Profit is shared in the ratio of (capital $\times$ time). If A invests Rs 60,000 for 12 months and B invests Rs 90,000 for 8 months, their profit ratio is $60 \times 12 : 90 \times 8 = 720 : 720 = 1 : 1$. Drop common zeros before multiplying.

### Income–expenditure–savings

A favourite structure: incomes in ratio $3 : 2$, expenditures in ratio $5 : 3$, each saves the same amount. Set incomes $3x, 2x$ and expenditures $5y, 3y$; savings are $3x - 5y$ and $2x - 3y$. Two unknowns, two equations. The key move is using *different* multipliers ($x$ and $y$) for the two ratios; they are not the same $k$.

## Worked examples

### Example 1

*Rs 1,540 is divided among A, B and C such that $A : B = 2 : 3$ and $B : C = 4 : 5$. How much does C get?*

Combine: $A : B : C = 8 : 12 : 15$ (as above). Total parts $= 35$. One part $= 1540 / 35 = 44$. C $= 15 \times 44 = 660$.

Check: $A = 352$, $B = 528$, $C = 660$; sum $= 1540$. $352 : 528 = 2 : 3$ ✓ (divide by 176).

**Why this method:** always merge into a single three-term ratio first; the "one part = total / sum of parts" step is then mechanical.

### Example 2

*The ratio of the present ages of A and B is $5 : 7$. Four years from now the ratio will be $3 : 4$. What is the sum of their present ages?*

Ages $5k$ and $7k$. $\frac{5k + 4}{7k + 4} = \frac{3}{4} \Rightarrow 20k + 16 = 21k + 12 \Rightarrow k = 4$.

Ages 20 and 28, sum 48. Check: $24 : 32 = 3 : 4$ ✓.

**Why this method:** adding 4 to both breaks the ratio, so you need the multiplier. One linear equation in $k$.

### Example 3

*$x$ varies directly as the square of $y$ and inversely as $z$. When $y = 4$ and $z = 8$, $x = 6$. Find $x$ when $y = 6$ and $z = 27$.*

$x = k\frac{y^2}{z}$. From the data: $6 = k \cdot \frac{16}{8} = 2k \Rightarrow k = 3$.

Then $x = 3 \cdot \frac{36}{27} = 4$.

**Why this method:** write the variation statement as an equation with one constant. Note "square of $y$" went into the numerator and $z$ into the denominator exactly as read.

### Example 4

*A invests Rs 60,000 at the start of the year. B joins after 4 months with Rs 90,000 and C joins after 8 months with Rs 1,20,000. If the year's profit is Rs 46,800, what is C's share?*

Capital-months (in thousands): A $= 60 \times 12 = 720$; B $= 90 \times 8 = 720$; C $= 120 \times 4 = 480$.
Ratio $= 720 : 720 : 480 = 3 : 3 : 2$. Total 8 parts; one part $= 46{,}800 / 8 = 5{,}850$. C $= 2 \times 5{,}850 = 11{,}700$.

**Why this method:** "joins after 4 months" means invested for $12 - 4 = 8$ months. Profit $\propto$ capital $\times$ time; nothing else.

### Example 5

*The incomes of P and Q are in the ratio $3 : 2$ and their expenditures in the ratio $5 : 3$. If each saves Rs 2,000, find P's income.*

Incomes $3x, 2x$; expenditures $5y, 3y$.
$3x - 5y = 2000$ and $2x - 3y = 2000$.
From the second, $2x = 2000 + 3y$, so $x = 1000 + 1.5y$. Substitute: $3000 + 4.5y - 5y = 2000 \Rightarrow 0.5y = 1000 \Rightarrow y = 2000$, $x = 4000$.

P's income $= 3x = 12{,}000$. Check: P saves $12000 - 10000 = 2000$ ✓; Q saves $8000 - 6000 = 2000$ ✓.

**Why this method:** two ratios need two independent multipliers. Faster alternative: since the savings are equal, $3x - 5y = 2x - 3y \Rightarrow x = 2y$; then $2x - 3y = 4y - 3y = y = 2000$.

### Example 6

*A sum is divided among P, Q and R. P gets $\frac{2}{5}$ of what Q and R together get, and Q gets $\frac{3}{7}$ of what P and R together get. If R gets Rs 900 more than P, find the total.*

"P is $\frac{2}{5}$ of the rest" means $P : (Q + R) = 2 : 5$, so $P = \frac{2}{7}$ of the total $T$. Likewise $Q = \frac{3}{10}T$.
$R = T - \frac{2}{7}T - \frac{3}{10}T = T\left(1 - \frac{20}{70} - \frac{21}{70}\right) = \frac{29}{70}T$.
$R - P = \frac{29}{70}T - \frac{20}{70}T = \frac{9}{70}T = 900 \Rightarrow T = 7000$.

Check: $P = 2000, Q = 2100, R = 2900$. $P = \frac{2}{5}(5000) = 2000$ ✓, $Q = \frac{3}{7}(4900) = 2100$ ✓.

**Why this method:** "a fraction of the rest" converts to "a fraction of the whole" by adding the parts: $\frac{2}{5}$ of the rest $= \frac{2}{2 + 5}$ of the whole.

## Traps & speed tips

- **Never add a constant to a ratio.** $3 : 4$ plus 4 years is not $7 : 8$. Use $k$.
- **Two ratios, two multipliers.** Income ratio and expenditure ratio come with different $k$'s unless the problem says otherwise.
- **"Of the rest" → "of the whole":** $\frac{a}{b}$ of the rest $= \frac{a}{a + b}$ of the whole.
- **Combining ratios:** match the common term to the LCM, then scale.
- **Partnership:** profit ratio $=$ capital $\times$ months. Strip zeros first.
- **Inverse variation reverses the ratio:** if $y \propto \frac{1}{x}$ and $x$ becomes $\frac{4}{3}$ times, $y$ becomes $\frac{3}{4}$ times.
- **Check with the sum.** After splitting a total, add the shares back. It takes five seconds and catches the common "one part" arithmetic slip.
- When a ratio question asks for a *percentage*, remember $a : b = 3 : 4$ means $a$ is 25% less than $b$ and $b$ is $33.\overline{3}\%$ more than $a$.

## Checklist

- Translate "$A : B = 3 : 4$" into $A = 3k, B = 4k$ reflexively.
- Merge $A : B$ and $B : C$ into $A : B : C$ via the LCM of the shared term.
- Divide a total in a given ratio and verify by adding back.
- Set up and solve an "after $n$ years the ratio becomes" equation.
- Write a joint/inverse variation as an equation with one constant and use it.
- Compute partnership shares with unequal times.
- Convert "fraction of the rest" to "fraction of the whole".
