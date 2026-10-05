# Time & Work

> One to two questions a year, often TITA, and usually involving a tank with pipes or a crew that changes mid-job. The trick that makes everything mechanical is to measure work in units (via LCM) and people in units per day.

## Core ideas

### Work as units, people as rates

If A finishes a job in 12 days and B in 18 days, do not write $\frac{1}{12} + \frac{1}{18}$. Instead, let the job be $\text{LCM}(12, 18) = 36$ **units**. Then A does $\frac{36}{12} = 3$ units/day and B does $2$ units/day. Together they do 5 units/day, so the job takes $\frac{36}{5} = 7.2$ days.

Rates add; times do not. Every statement about "days to finish" converts to a rate (units per day); every question about "how long" converts back by dividing total units by the combined rate.

### Efficiency and the man-days idea

If "A is twice as efficient as B", A's rate is $2\times$ B's, so A takes half the time. For groups of identical workers, total work $=$ (number of workers) $\times$ (days) $\times$ (hours per day). This is the **man-days** (or man-hours) quantity, which is constant for a fixed job:

$$M_1 D_1 H_1 = M_2 D_2 H_2$$

Twelve men for 20 days at 8 h/day is $1920$ man-hours of work. Any other crew finishing the same job must also deliver 1920 man-hours.

### Work done in parts

When the crew changes mid-job, split the timeline: compute units done in each phase, subtract from the total, divide the remainder by the new rate. Wages are shared in proportion to **units of work done**, not days worked.

### Pipes and cisterns

A filling pipe is a worker with a positive rate; a draining pipe has a negative rate. Tank $=$ LCM units. "Fills in 6 hours with 6 fillers and 5 drainers running" means $6f - 5d = \frac{\text{tank}}{6}$ per hour. Two such statements, two unknowns.

If the net rate is negative, the tank empties; if a question says "the tank fills in $x$ hours" with a drain open, the net is positive by construction.

### Alternate-day work

A and B work on alternate days. Compute the work done in one **two-day cycle**, count how many full cycles fit, then finish the remainder with whoever's turn it is. Watch for a partial last day: the answer is a fraction of a day.

### Two unknown rates from two statements

"15 humans and 5 robots take 30 days; 5 humans and 15 robots take 60 days." Let a human do $h$ and a robot $r$ units/day; take the job as 1 unit (or an LCM). Then $15h + 5r = \frac{1}{30}$ and $5h + 15r = \frac{1}{60}$. Add and subtract to get $h + r$ and $h - r$. Symmetric systems like this are meant to be added and subtracted, not solved by substitution.

## Worked examples

### Example 1

*A can do a piece of work in 12 days and B in 18 days. How long do they take together?*

Work $= 36$ units. A: 3/day, B: 2/day. Together 5/day → $\frac{36}{5} = 7.2$ days.

**Why this method:** LCM units turn fractions into integers.

### Example 2

*A and B together finish a job in 8 days; A alone takes 12 days. How long does B alone take?*

Work $= 24$ units. Together 3/day; A 2/day; so B 1/day → 24 days.

**Why this method:** subtract rates, then divide.

### Example 3 (CAT 2018)

*A tank has filling and draining pipes; all filling pipes have the same rate, all draining pipes the same rate. The empty tank fills in 6 hours with 6 filling and 5 draining pipes open, and in 60 hours with 5 filling and 6 draining pipes open. How long to fill with 2 filling and 1 draining pipe open?*

Tank $= 1$. Rates $f$ and $d$ per hour.
$6f - 5d = \frac{1}{6}$ and $5f - 6d = \frac{1}{60}$.
Multiply the first by 6 and the second by 5: $36f - 30d = 1$ and $25f - 30d = \frac{1}{12}$. Subtract: $11f = \frac{11}{12} \Rightarrow f = \frac{1}{12}$.
Then $\frac{6}{12} - 5d = \frac{1}{6} \Rightarrow 5d = \frac{1}{3} \Rightarrow d = \frac{1}{15}$.
Required rate $= 2f - d = \frac{1}{6} - \frac{1}{15} = \frac{5 - 2}{30} = \frac{1}{10}$ → 10 hours.

Check the second equation: $\frac{5}{12} - \frac{6}{15} = \frac{25 - 24}{60} = \frac{1}{60}$. ✓

**Why this method:** drains are negative rates; the rest is linear algebra. Eliminating $d$ (coefficients 30 and 30) is the cleanest.

### Example 4 (CAT 2018)

*Fifteen humans and five robots take 30 days to finish a job; five humans and fifteen robots take 60 days. How many days do fifteen humans alone take?*

$15h + 5r = \frac{1}{30}$, $5h + 15r = \frac{1}{60}$.
Add: $20(h + r) = \frac{3}{60} \Rightarrow h + r = \frac{1}{400}$.
Subtract: $10(h - r) = \frac{1}{60} \Rightarrow h - r = \frac{1}{600}$.
$h = \frac{1}{2}\left(\frac{1}{400} + \frac{1}{600}\right) = \frac{1}{2} \cdot \frac{5}{1200} = \frac{1}{480}$.
Fifteen humans: $\frac{15}{480} = \frac{1}{32}$ per day → 32 days.

Check: $r = \frac{1}{400} - \frac{1}{480} = \frac{1}{2400}$; $15h + 5r = \frac{1}{32} + \frac{1}{480} = \frac{15 + 1}{480} = \frac{1}{30}$. ✓

**Why this method:** symmetric coefficients → add and subtract.

### Example 5 (CAT 2021)

*Anil can paint a house in 60 days and Bimal in 84 days. Anil starts; after 10 days Bimal and Charu join him and the three finish in 14 more days. If the payment of Rs 21,000 is shared in proportion to work done, what is Charu's share?*

Work $= \text{LCM}(60, 84) = 420$ units. Anil 7/day, Bimal 5/day.
Anil works 24 days: 168 units. Bimal works 14 days: 70 units. Charu did the rest: $420 - 238 = 182$ units.
Charu's share $= \frac{182}{420} \times 21000 = \frac{13}{30} \times 21000 = 9100$.

**Why this method:** payment follows *units*, so compute each person's units; Charu's rate is never needed.

### Example 6

*A can do a job in 12 days, B in 20 days. They work on alternate days, A starting. When is the job finished?*

Work $= 60$ units. A 5/day, B 3/day; a two-day cycle does 8 units.
7 cycles (14 days) do 56 units, leaving 4. Day 15 is A's; A does 4 units in $\frac{4}{5}$ day. Total $14.8$ days.

**Why this method:** cycles, then the remainder; check whose turn it is and whether they finish within the day.

### Example 7

*Twelve men can complete a job in 20 days working 8 hours a day. After 5 days, 4 men leave and the rest work 10 hours a day. How many more days does the job take?*

Total $= 12 \times 20 \times 8 = 1920$ man-hours. Done in 5 days: $12 \times 5 \times 8 = 480$. Remaining 1440. New rate: $8 \times 10 = 80$ man-hours/day → 18 days.

**Why this method:** man-hours is the invariant; everything is a ratio against it.

## Traps & speed tips

- **Add rates, never days.** "A in 10, B in 15" is *not* 25 days together.
- **Pick the LCM as the work.** All rates become integers.
- **Drains are negative.** If a tank "fills in $x$ hours" with a leak open, the net rate is $\frac{1}{x}$.
- **Mid-way changes:** account for units done so far, not days.
- **Wages ∝ work done**, not ∝ days present.
- **Alternate days:** compute per cycle, then handle the leftover carefully (who works, and for what fraction).
- **Man-days:** $MDH$ constant. Doubling men halves days; doubling hours per day halves days.
- **"A is 50% more efficient than B":** A's rate is $1.5\times$, so A's time is $\frac{2}{3}$ of B's.
- Symmetric pairs of equations (humans/robots, men/women) → add and subtract.
- After solving, plug the rates back into the statement you did *not* use to derive them.

## Checklist

- Convert any "days to finish" into units per day using an LCM.
- Combine workers, including negative-rate drains.
- Handle joining/leaving mid-job by tracking units done.
- Split wages in proportion to work.
- Solve alternate-day problems with a fractional last day.
- Use man-hours when both headcount and hours per day change.
- Solve a two-rate system from two group statements.
