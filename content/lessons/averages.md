# Averages

> One question a year, sometimes two, usually in a form where setting up the equation is the whole problem. Averages also appear inside DI sets and inside alligation, so the "balance point" picture here is worth internalising.

## Core ideas

### Definition and the only formula

The average (arithmetic mean) of $n$ numbers is their sum divided by $n$:

$$\text{Average} = \frac{\text{Sum}}{n} \quad\Longleftrightarrow\quad \text{Sum} = \text{Average} \times n$$

The second form is the one you actually use. Almost every averages question is "find the sum, adjust the sum, divide again". If a group of 30 has average 15, you know exactly one thing: the sum is 450.

### The average as a balance point

Picture the numbers as weights on a number line. The average is where the line balances: the total of the gaps above the average equals the total of the gaps below. For $\{10, 12, 17\}$ the average is 13; deviations are $-3, -1, +4$, which sum to zero.

This gives the **deviation method**: guess a convenient average $g$, add up the deviations from $g$, and correct:

$$\text{Average} = g + \frac{\sum(\text{deviations from } g)}{n}$$

Average of $48, 51, 53, 56$: guess 50, deviations $-2, +1, +3, +6$ sum to $+8$, so average $= 50 + \frac{8}{4} = 52$. No big additions.

### Adding or removing a member

If a member with value $v$ joins a group of $n$ with average $A$, the new average is $\frac{nA + v}{n + 1}$. More usefully, think in deviations: the newcomer brings $v - A$ extra, which gets spread over $n + 1$ people, so the average changes by $\frac{v - A}{n + 1}$.

Removing a member with value $v$: average changes by $\frac{A - v}{n - 1}$ (removing someone below the average raises it).

### Replacing a member

If a person of weight $w_{old}$ is replaced by one of weight $w_{new}$ in a group of $n$, the sum changes by $w_{new} - w_{old}$, so the average changes by $\frac{w_{new} - w_{old}}{n}$. Equivalently: $w_{new} = w_{old} + n \times (\text{change in average})$. This is the most common one-liner in the chapter.

### Weighted averages

If groups of sizes $n_1, n_2$ have averages $A_1, A_2$, the combined average is

$$\bar{A} = \frac{n_1 A_1 + n_2 A_2}{n_1 + n_2}$$

It always lies between $A_1$ and $A_2$, closer to the one with the larger group. Rearranging, $\frac{n_1}{n_2} = \frac{A_2 - \bar{A}}{\bar{A} - A_1}$: the sizes are in the inverse ratio of the distances. That rearrangement is the alligation rule (next lesson).

### Consecutive numbers and APs

The average of an arithmetic progression is its middle term (or the mean of the two middle terms), which equals $\frac{\text{first} + \text{last}}{2}$. Average of 5 consecutive even numbers starting at 20 is the middle one, 24. Average of $1, 2, \dots, 100$ is $50.5$.

### Average speed is not the average of speeds

If you cover equal *distances* at $u$ and $v$, the average speed is $\frac{2uv}{u + v}$ (harmonic mean), not $\frac{u + v}{2}$. If you spend equal *times* at $u$ and $v$, it is $\frac{u + v}{2}$. The general rule is always total distance / total time.

## Worked examples

### Example 1

*The average of 11 numbers is 36. The average of the first six is 32 and of the last six is 40. Find the sixth number.*

Sum of all 11 $= 396$. First six sum to 192; last six sum to 240. The sixth number is counted in both groups, so $192 + 240 - 396 = 36$.

**Why this method:** overlapping groups → add the two sums, subtract the total; whatever is left is the overlap.

### Example 2

*The average age of 30 students is 15 years. When the teacher's age is included the average rises by 1 year. How old is the teacher?*

New sum $= 31 \times 16 = 496$; old sum $= 30 \times 15 = 450$; teacher $= 46$.

Deviation route: the teacher raises 31 people's average by 1, so he brings $31$ extra over the old average: $15 + 31 = 46$.

**Why this method:** the deviation route is one multiplication; it generalises as "newcomer $=$ old average $+$ (new size) $\times$ (rise)".

### Example 3

*A batsman's average after 16 innings is $x$. He scores 92 in the 17th innings and his average rises by 3. Find his new average.*

$16x + 92 = 17(x + 3) \Rightarrow 16x + 92 = 17x + 51 \Rightarrow x = 41$. New average $= 44$.

Deviation check: 92 is $92 - 44 = 48$ above the new average; spread over the other 16 innings that is $3$ each. ✓

**Why this method:** write "old sum $+$ new score $=$ new count $\times$ new average". One equation, one unknown.

### Example 4 (CAT 2022)

*The average of three integers is 13. When a natural number $n$ is included, the average of the four integers remains an odd integer. The minimum possible value of $n$ is?*

Sum of the three $= 39$. New average $= \frac{39 + n}{4}$ must be an odd integer, so $39 + n \in \{4, 12, 20, 28, 36, 44, \dots\}$ (4 times an odd number). The smallest value above 39 is 44, so $n = 5$.

Check: $\frac{44}{4} = 11$, odd. ✓ ($n = 1$ gives 10, even; $n = 3$ gives 10.5.)

**Why this method:** convert the average condition into a condition on the sum. "Average is an odd integer" ⇔ "sum $= 4 \times$ odd".

### Example 5

*The average marks of 40 students were computed as 62. Later two marks were found to have been read as 83 and 57 instead of 38 and 75. Find the correct average.*

Error in the sum $= (83 + 57) - (38 + 75) = 140 - 113 = 27$ too high. Correct average $= 62 - \frac{27}{40} = 62 - 0.675 = 61.325$.

**Why this method:** never recompute the whole sum; correct it by the net error and divide by $n$.

### Example 6

*In a class, boys average 70 and girls average 80; the class average is 76. If 5 more girls scoring 80 each join, the class average becomes 77. How many boys are there?*

Let $b$ boys, $g$ girls. Weighted average: $\frac{70b + 80g}{b + g} = 76 \Rightarrow 6b = 4g \Rightarrow g = 1.5b$. (Alligation: $b : g = (80 - 76) : (76 - 70) = 4 : 6$.)

After: $\frac{70b + 80(g + 5)}{b + g + 5} = 77 \Rightarrow 70b + 80g + 400 = 77b + 77g + 385 \Rightarrow 3g - 7b = -15$.
Substitute $g = 1.5b$: $4.5b - 7b = -15 \Rightarrow b = 6$, $g = 9$.

Check: $(420 + 720)/15 = 76$ ✓; $(420 + 1120)/20 = 77$ ✓.

**Why this method:** the first condition fixes the ratio, the second fixes the scale. Two conditions, two unknowns, in that order.

## Traps & speed tips

- **Sum first.** Convert every average statement into a sum statement before doing anything.
- **Average of averages is wrong** unless the groups are equal in size. Weight by size.
- **Deviation method** for lists of nearby numbers: guess, sum the deviations, divide.
- **Replacement one-liner:** new value $=$ old value $+ n \times$ (change in average).
- **Joining one-liner:** newcomer $=$ old average $+$ (new $n$) $\times$ (rise), or $=$ old average $-$ (new $n$) $\times$ (fall).
- **Consecutive/AP numbers:** the average is the middle term; the sum is average $\times$ count.
- **Average speed** over equal distances is $\frac{2uv}{u + v}$; never $\frac{u + v}{2}$.
- "Average remains an integer / odd / a multiple of..." questions are divisibility questions about the sum.

## Checklist

- Find any one of (sum, count, average) from the other two instantly.
- Use the deviation method to average a list of six numbers in your head.
- Handle join / leave / replace with the one-line deviation rules.
- Set up a weighted average and read off the group-size ratio from the distances.
- Correct an average after a misread value without recomputing the sum.
- Explain why average speed over equal distances is the harmonic mean.
