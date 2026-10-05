# Logarithms

> One question most years, often TITA, and nearly always solvable in under two minutes by someone who treats a log as "the exponent" and knows three rules. CAT 2019 and CAT 2020 both asked single-step log questions that scared people into skipping them.

## Core ideas

### A logarithm is an exponent

$\log_b N = x$ means exactly $b^x = N$. Read $\log_2 8$ as "the power to which 2 must be raised to get 8", which is $3$. Every log statement is an exponent statement wearing different clothes, and the first thing you do with a hard log question is rewrite it as exponents.

Constraints: the base $b$ must be positive and not $1$; the argument $N$ must be positive. $\log$ of zero or a negative number does not exist (in CAT's world). Consequences: $\log_b 1 = 0$ (since $b^0 = 1$) and $\log_b b = 1$.

Notation: $\log N$ without a base means base 10 in CAT; $\ln N$ means base $e$. CAT questions are base-10 or explicit.

### The three rules, and where they come from

Because logs are exponents, the exponent laws $b^m \cdot b^n = b^{m+n}$, $b^m / b^n = b^{m-n}$ and $(b^m)^k = b^{mk}$ translate to:

1. $\log_b (MN) = \log_b M + \log_b N$
2. $\log_b \dfrac{M}{N} = \log_b M - \log_b N$
3. $\log_b (M^k) = k \log_b M$

Derivation of rule 1: let $M = b^m$ and $N = b^n$. Then $MN = b^{m+n}$, so $\log_b(MN) = m + n = \log_b M + \log_b N$. The other two go the same way.

What the rules do **not** say: $\log(M + N)$ has no simplification. $\log M \cdot \log N$ has no simplification. $(\log M)^2 \ne 2\log M$.

### Change of base

$$\log_b N = \frac{\log_c N}{\log_c b}$$ for any convenient base $c$. Proof: let $x = \log_b N$, so $b^x = N$; take $\log_c$ of both sides: $x \log_c b = \log_c N$. Two corollaries you will use constantly:

- $\log_b a = \dfrac{1}{\log_a b}$ (take $c = a$).
- $\log_{b^k} N = \dfrac{1}{k}\log_b N$ and $\log_b N^k = k \log_b N$; combined, $\log_{b^m} N^n = \dfrac{n}{m}\log_b N$.

Also $b^{\log_b N} = N$ (the definition read backwards) and $a^{\log_b c} = c^{\log_b a}$ (take logs of both sides to see it).

### Log equations are exponent equations

To solve $\log_2 x + \log_2 (x - 2) = 3$: combine with rule 1 to $\log_2 \big(x(x-2)\big) = 3$, convert to exponents $x(x-2) = 8$, solve the quadratic, and **reject any root that makes an original argument non-positive**. Here $x = 4$ works and $x = -2$ is rejected.

Equations like $4^x - 6 \cdot 2^x + 8 = 0$ are quadratics in $2^x$. Equations like $x^{\log_3 x} = 81x^3$ become polynomial in $t = \log_3 x$ after taking logs.

### Characteristic and digits

For $N > 1$, the number of digits of $N$ is $\lfloor \log_{10} N \rfloor + 1$. Reason: a $k$-digit number lies in $[10^{k-1}, 10^k)$, so its log lies in $[k-1, k)$. CAT gives $\log 2 \approx 0.3010$ and $\log 3 \approx 0.4771$; from these, $\log 5 = 1 - \log 2 = 0.6990$, $\log 6 = 0.7781$, $\log 8 = 0.9030$, $\log 9 = 0.9542$.

### Comparing and ordering

For base $> 1$, log is increasing: bigger argument, bigger log. For base between 0 and 1, it is decreasing. $\log_b N$ is negative when $N < 1$ (base $> 1$). To compare $\log_2 3$ and $\log_3 5$: $\log_2 3 > 1.5$ because $2^{1.5} = \sqrt 8 < 3$; $\log_3 5 < 1.5$ because $3^{1.5} = \sqrt{27} > 5$. So $\log_2 3$ is larger.

## Worked examples

### Example 1: evaluate directly
*Find $\log_2 32 + \log_3 \dfrac{1}{27} - \log_5 \sqrt5$.*

$\log_2 32 = 5$ ($2^5 = 32$). $\log_3 \frac{1}{27} = -3$ ($3^{-3} = \frac{1}{27}$). $\log_5 \sqrt5 = \frac12$.
Total $= 5 - 3 - 0.5 = 1.5$.

*Why this method:* each term is "what exponent?"; no rules needed.

### Example 2: log equation with rejection
*Solve $\log_2 x + \log_2 (x - 2) = 3$.*

$\log_2 \big(x(x - 2)\big) = 3 \Rightarrow x^2 - 2x = 8 \Rightarrow (x - 4)(x + 2) = 0$.
$x = -2$ makes $\log_2 x$ undefined; reject. Answer $x = 4$.
Check: $\log_2 4 + \log_2 2 = 2 + 1 = 3$ ✓.

*Why this method:* combine, convert, solve, reject. Skipping the reject step is the classic error.

### Example 3: digits
*How many digits does $6^{20}$ have? (Use $\log 2 = 0.3010$, $\log 3 = 0.4771$.)*

$\log 6^{20} = 20(\log 2 + \log 3) = 20(0.7781) = 15.562$.
Digits $= 15 + 1 = 16$.
Sanity check: $6^{20} = (6^{10})^2 \approx (6.05 \times 10^7)^2 \approx 3.66 \times 10^{15}$, which has 16 digits ✓.

*Why this method:* the characteristic (integer part of the log) counts digits minus one.

### Example 4: change of base chain
*Evaluate $\log_5 3 \cdot \log_7 25 \cdot \log_3 49$.*

Write each in a common base: $\dfrac{\log 3}{\log 5} \cdot \dfrac{2\log 5}{\log 7} \cdot \dfrac{2 \log 7}{\log 3} = 4$.

*Why this method:* products of logs with "rotating" bases telescope once you change base. Pull out exponents ($25 = 5^2$, $49 = 7^2$) first.

### Example 5: exponential equation that is a quadratic
*Solve $4^x - 6 \cdot 2^x + 8 = 0$.*

Let $t = 2^x > 0$: $t^2 - 6t + 8 = 0 \Rightarrow t = 2$ or $4 \Rightarrow x = 1$ or $2$.
Check $x = 2$: $16 - 24 + 8 = 0$ ✓.

*Why this method:* $4^x = (2^x)^2$; spot the square and substitute.

### Example 6: the "common value $k$" trick
*If $a^x = b^y = c^z$ and $b^2 = ac$, show $\dfrac{1}{x} + \dfrac{1}{z} = \dfrac{2}{y}$.*

Let the common value be $k$. Then $a = k^{1/x}$, $b = k^{1/y}$, $c = k^{1/z}$.
$b^2 = ac \Rightarrow k^{2/y} = k^{1/x + 1/z}$, so $\dfrac{2}{y} = \dfrac{1}{x} + \dfrac{1}{z}$.
Numerical check: $a = 2, b = 4, c = 8$ with $k = 64$: $x = 6, y = 3, z = 2$; $\frac16 + \frac12 = \frac23 = \frac{2}{3}$ ✓.

*Why this method:* whenever several powers are equal, name the common value; the exponents become reciprocals and the given relation between bases becomes a relation between $1/x, 1/y, 1/z$. CAT 2019's $(5.55)^x = (0.555)^y = 1000$ is exactly this pattern.

## Traps & speed tips

- $\log(a + b) \ne \log a + \log b$. Logs turn products into sums, not sums into anything.
- Always reject roots that make any original argument $\le 0$ or any base $\le 0$ or $= 1$.
- $\log_b a \cdot \log_a b = 1$: use it to kill reciprocal pairs on sight.
- $\log_{a^m} b^n = \frac{n}{m}\log_a b$: pull exponents out of both base and argument.
- $\log_{10} 5 = 1 - \log_{10} 2$; do not look for a separate value.
- Digits of $N$: floor of $\log N$, plus 1. Not ceiling.
- When all terms are equal to a common value, call it $k$ and write bases as $k^{1/x}$.
- $0.555 = 5.55/10$: shifting the decimal subtracts 1 from the log.

## Checklist

- Convert between $\log_b N = x$ and $b^x = N$ without thinking.
- State the three rules and derive one from the exponent laws.
- Change base, and simplify $\log_{a^m} b^n$.
- Solve a log equation, including rejecting invalid roots.
- Count digits of $a^n$ from given log values.
- Handle $a^x = b^y = c^z$ problems with the common-value substitution.
