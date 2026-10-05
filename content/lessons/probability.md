# Probability

> Roughly one question a year, usually medium, and almost always counting in disguise: "favourable over total" with the counting done by permutations and combinations. The questions that look hard (alternating turns, "at least one") have two standard moves: the complement and the geometric series.

## Core ideas

### Definition

When all outcomes of an experiment are equally likely,

$$P(E) = \frac{\text{number of outcomes favourable to } E}{\text{total number of outcomes}}.$$

So $0 \le P(E) \le 1$; an impossible event has probability 0, a certain event 1. The set of all outcomes is the **sample space**. The first job in every problem is to describe the sample space precisely: "two dice" means 36 ordered pairs, not 21 unordered ones, because $(1, 2)$ and $(2, 1)$ are equally likely but $(1,1)$ happens only one way.

### Complement

$P(\text{not } E) = 1 - P(E)$. Use it whenever the event is "at least one": the complement "none" is a single clean case. Probability of at least one six in four rolls: $1 - \left(\frac56\right)^4 = 1 - \frac{625}{1296} = \frac{671}{1296}$.

### Addition rule

$P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$. The subtraction removes the double count of outcomes in both. If $A$ and $B$ cannot happen together (**mutually exclusive**), the last term is 0.

### Multiplication rule and independence

$P(A \text{ and } B) = P(A) \times P(B \mid A)$, where $P(B \mid A)$ is the probability of $B$ given that $A$ has happened (**conditional probability**). If $A$ tells you nothing about $B$ (**independent** events: separate coin tosses, dice, people solving a problem on their own), then $P(B \mid A) = P(B)$ and the rule becomes $P(A)P(B)$.

Drawing **with replacement** gives independent draws; **without replacement** gives dependent draws, and you update the counts: 3 red and 2 blue, two drawn without replacement, both red: $\frac35 \times \frac24 = \frac{3}{10}$. The same answer comes from counting: $\frac{\binom32}{\binom52} = \frac{3}{10}$. Both methods always agree; use the one that is faster and the other as a check.

### Binomial-type counts

$n$ independent trials each succeeding with probability $p$: $P(\text{exactly } k \text{ successes}) = \binom{n}{k}p^k(1-p)^{n-k}$. The $\binom nk$ counts which trials succeed. Four coin tosses, exactly two heads: $\binom42 \cdot \frac{1}{16} = \frac{6}{16} = \frac38$.

### Alternating turns and infinite series

If $A$ and $B$ take turns and the first to succeed wins, with success probability $p$ per attempt, then $A$ wins on turn 1, or both fail and $A$ wins on turn 3, and so on:

$$P(A) = p + (1-p)^2 p + (1-p)^4 p + \dots = \frac{p}{1 - (1-p)^2}.$$

A geometric series with ratio $(1 - p)^2$. With a die ($p = \frac16$): $P(A) = \frac{1/6}{1 - 25/36} = \frac{1/6}{11/36} = \frac{6}{11}$, and $P(B) = \frac{5}{11}$. The first player always has the edge.

### Odds and "p/q" answers

CAT often asks for the probability as a fraction in lowest terms and then for $p + q$, or for odds "in favour" ($p : q$ where $p$ favourable, $q$ unfavourable). Reduce the fraction fully before adding.

### Expected value

If an outcome takes values $v_i$ with probabilities $p_i$, the expected value is $\sum v_i p_i$. The expected value of a die roll is $\frac{1 + 2 + \dots + 6}{6} = 3.5$. Rare in CAT but cheap to know.

## Worked examples

### Example 1: two dice
*Two dice are rolled. Find the probability that the sum is 7, and the probability that the sum is at least 10.*

Sum 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$: 6 outcomes, $P = \frac{6}{36} = \frac16$.
Sum $\ge 10$: sum 10 (3 ways), 11 (2 ways), 12 (1 way): $P = \frac{6}{36} = \frac16$.

*Why this method:* 36 ordered outcomes; list favourable ones by sum. The counts for sums 2 to 12 go $1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1$.

### Example 2: at least one ace
*Two cards are drawn from a standard pack. Find the probability that at least one is an ace.*

Complement (no ace): $\dfrac{\binom{48}{2}}{\binom{52}{2}} = \dfrac{1128}{1326}$. So $P = 1 - \dfrac{1128}{1326} = \dfrac{198}{1326} = \dfrac{33}{221}$.
Check by direct count: one ace $4 \times 48 = 192$, two aces $\binom42 = 6$; $\frac{198}{1326}$ ✓.

*Why this method:* "at least one" via the complement avoids two cases.

### Example 3: exactly $k$ in $n$ trials
*A fair coin is tossed 5 times. Find the probability of at least 2 heads.*

Complement: 0 heads ($1$ way) or 1 head ($5$ ways) out of $32$: $\frac{6}{32}$. So $P = 1 - \frac{6}{32} = \frac{26}{32} = \frac{13}{16}$.

*Why this method:* binomial counts via $\binom{n}{k}$, and again the complement is the shorter side.

### Example 4: independent attempts
*A hits a target with probability $\frac35$ and B with probability $\frac23$, independently. Find the probability that exactly one of them hits.*

A hits, B misses: $\frac35 \times \frac13 = \frac{3}{15}$. A misses, B hits: $\frac25 \times \frac23 = \frac{4}{15}$. Total $\frac{7}{15}$.
Check: $P(\text{both}) = \frac{6}{15}$, $P(\text{neither}) = \frac{2}{15}$; all four cases sum to $\frac{15}{15}$ ✓.

*Why this method:* "exactly one" splits into two disjoint cases, each a product of independent probabilities.

### Example 5: without replacement
*A bag has 3 red and 2 blue balls. Two are drawn without replacement. Find the probability that the second is red, and that both are red.*

Both red: $\frac35 \times \frac24 = \frac{3}{10}$.
Second red: either first red then red ($\frac{3}{10}$) or first blue then red ($\frac25 \times \frac34 = \frac{3}{10}$): $\frac{6}{10} = \frac35$.
The second-draw probability equals the first-draw probability, as it always does by symmetry.

*Why this method:* update the counts after each draw; or notice the symmetry and save the work.

### Example 6: parity of a sum
*Two different numbers are chosen from 1 to 10. Find the probability that their sum is even.*

Even sum needs both even or both odd: $\binom52 + \binom52 = 20$ out of $\binom{10}{2} = 45$. $P = \frac{20}{45} = \frac49$.
Check: odd sum needs one of each, $5 \times 5 = 25$; $\frac{25}{45} + \frac{20}{45} = 1$ ✓.

*Why this method:* translate the condition into a counting condition and use combinations.

## Traps & speed tips

- Ordered sample spaces for dice and coins: $(1,2) \ne (2,1)$. Unordered for "choose two cards" (use $\binom{n}{2}$). Be consistent: numerator and denominator must use the same convention.
- "At least one" → $1 - P(\text{none})$. Never add single-event probabilities for "or" without subtracting the overlap.
- Without replacement changes the denominator at every draw.
- Independence is a property you must be told or deduce (separate dice, separate people); do not assume it for draws from one bag.
- In alternating-turn games, the first player wins with probability $\frac{p}{1 - (1-p)^2}$; the second gets the rest.
- Reduce fractions fully before computing $p + q$.
- A quick sanity bound: a probability above 1 or below 0 means the sample space is wrong.

## Checklist

- Define the sample space and count favourable outcomes with P&C.
- Use the complement for "at least one".
- Apply the addition rule with overlap and the multiplication rule with conditional probabilities.
- Compute "exactly $k$ of $n$" with $\binom nk p^k (1-p)^{n-k}$.
- Handle with/without replacement and verify by a second method.
- Sum the geometric series for alternating-turn games.
