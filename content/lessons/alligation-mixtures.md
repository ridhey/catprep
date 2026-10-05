# Alligation & Mixtures

> CAT sets one mixtures question most years, and it is usually medium–hard: two mixtures combined, or repeated replacement. The alligation rule is just a weighted average written sideways; once you see that, the whole chapter is one idea.

## Core ideas

### Weighted average, rearranged

Mix $n_1$ units of something with "strength" $A_1$ (price per kg, percent alcohol, average marks) and $n_2$ units of strength $A_2$. The mixture's strength is the weighted average

$$\bar{A} = \frac{n_1 A_1 + n_2 A_2}{n_1 + n_2}$$

Multiply out: $n_1 \bar{A} + n_2 \bar{A} = n_1 A_1 + n_2 A_2$, so $n_1(\bar{A} - A_1) = n_2(A_2 - \bar{A})$, i.e.

$$\frac{n_1}{n_2} = \frac{A_2 - \bar{A}}{\bar{A} - A_1}$$

**The quantities are in the inverse ratio of the distances from the mean.** That is the whole of alligation. The usual cross diagram is a way of writing this:

```
   A1          A2
       \     /
         Ā
       /     \
 (A2 − Ā)   (Ā − A1)
  = n1       = n2
```

Read: the quantity of the *first* ingredient is proportional to the gap on the *other* side. Try it: mix tea at Rs 240 and Rs 300 to get Rs 256. Gaps: $300 - 256 = 44$ and $256 - 240 = 16$, so cheap : dear $= 44 : 16 = 11 : 4$. Sanity check: 256 is nearer 240, so there must be more of the cheap tea. ✓

### What goes in the diagram

Put the **strength per unit** (concentration, price per kg, average, speed) at the top, never a total. The ratio that comes out is the ratio of the **quantities** being mixed (litres, kg, number of people, time). Three guard rules:

1. The mean must lie between the two strengths, or you have mislabelled something.
2. The strengths must be measured per the same unit as the quantities (percent alcohol by volume goes with litres; price per kg goes with kg).
3. Pure substances have strength 100% or 0%; water in a milk problem is "0% milk".

### Mixing two mixtures

If vessel 1 is milk : water $= 3 : 1$ (milk fraction $\frac{3}{4}$) and vessel 2 is $5 : 3$ (milk fraction $\frac{5}{8}$), to get $2 : 1$ (milk fraction $\frac{2}{3}$) you alligate on the *milk fractions*: $\frac{3}{4}, \frac{5}{8}$ with mean $\frac{2}{3}$. Convert ratios to fractions of the whole before alligating; a ratio like $3 : 1$ is not a strength.

### Replacement (repeated dilution)

A vessel holds $V$ litres of pure milk. Remove $x$ litres and replace with water. The milk left is $V - x = V(1 - \frac{x}{V})$. The mixture is now uniform, so the next removal of $x$ litres takes away the fraction $\frac{x}{V}$ of whatever milk remains. After $n$ such operations

$$\text{Milk left} = V\left(1 - \frac{x}{V}\right)^n$$

Derive, don't memorise: each operation keeps the fraction $\left(1 - \frac{x}{V}\right)$ of the current milk. If the amounts removed differ ($x_1$ then $x_2$), the milk left is $V(1 - \frac{x_1}{V})(1 - \frac{x_2}{V})$; the same idea, different factors.

If the vessel starts as a mixture, apply the factor to the *milk* only; water is whatever is left of the (constant) volume.

### Adding a pure ingredient

Adding $x$ litres of water to $V$ litres at concentration $c$ gives concentration $\frac{cV}{V + x}$: the amount of solute does not change; the volume does. Adding $x$ litres of pure solute gives $\frac{cV + x}{V + x}$. Set up the fraction and solve; alligation also works (water has strength 0, pure solute strength 1).

### Cost price of a mixture

If a mixture is sold at $S$ with profit $p\%$, its cost per unit is $\frac{S}{1 + p/100}$. Alligate on *cost* prices, never on selling price.

## Worked examples

### Example 1

*A 40-litre solution contains 25% alcohol. How much pure alcohol must be added to make it 40% alcohol?*

Alcohol now $= 10$ L. Add $x$: $\frac{10 + x}{40 + x} = 0.4 \Rightarrow 10 + x = 16 + 0.4x \Rightarrow 0.6x = 6 \Rightarrow x = 10$.

Alligation check: strengths 25% and 100%, mean 40%. Ratio solution : pure $= (100 - 40) : (40 - 25) = 60 : 15 = 4 : 1$. Solution is 40 L, so pure $= 10$ L. ✓

**Why this method:** either route works; the alligation is faster once you treat "pure alcohol" as a 100% solution.

### Example 2

*Two vessels hold milk and water in the ratios $3 : 1$ and $5 : 3$. In what ratio should they be mixed to get milk : water $= 2 : 1$?*

Milk fractions: $\frac{3}{4}, \frac{5}{8}$; target $\frac{2}{3}$.
Gaps: $\frac{3}{4} - \frac{2}{3} = \frac{1}{12}$; $\frac{2}{3} - \frac{5}{8} = \frac{1}{24}$.
Vessel 1 : vessel 2 $=$ (far gap) : (near gap) $= \frac{1}{24} : \frac{1}{12} = 1 : 2$.

Check: 1 L of the first (0.75 milk) + 2 L of the second (1.25 milk) $= 2$ L milk in 3 L $= \frac{2}{3}$. ✓

**Why this method:** ratios must be converted to fractions of the whole before alligating; the mean $\frac{2}{3}$ is nearer $\frac{5}{8}$, so more of vessel 2.

### Example 3 (CAT 2021)

*An alloy of silver and copper, when mixed with 3 kg of pure silver, becomes 90% silver. The same weight of the original alloy mixed with 2 kg of an alloy that is 90% silver becomes 84% silver. What is the weight of the original alloy?*

Let the alloy weigh $w$ kg and contain $s$ kg of silver.
Mix 1: $\frac{s + 3}{w + 3} = 0.9 \Rightarrow s = 0.9w - 0.3$.
Mix 2: $\frac{s + 1.8}{w + 2} = 0.84 \Rightarrow s = 0.84w - 0.12$.
Equate: $0.9w - 0.3 = 0.84w - 0.12 \Rightarrow 0.06w = 0.18 \Rightarrow w = 3$.

Check: $s = 2.4$ (80% silver). Mix 1: $\frac{5.4}{6} = 0.9$ ✓. Mix 2: $\frac{4.2}{5} = 0.84$ ✓.

**Why this method:** two unknowns (weight and silver content), two mixing statements. Writing silver as an *amount* rather than a percent keeps the equations linear.

### Example 4

*A container has 80 litres of milk. 8 litres are drawn out and replaced with water, and this is repeated two more times. How much milk remains?*

Each operation keeps $1 - \frac{8}{80} = 0.9$ of the milk. After three: $80 \times 0.9^3 = 80 \times 0.729 = 58.32$ L.

**Why this method:** the mixture is uniform after each replacement, so each draw removes the same *fraction* of milk.

### Example 5

*A vessel contains milk and water in the ratio $5 : 3$. When 16 litres of the mixture are replaced by water, the ratio becomes $5 : 7$. What is the capacity of the vessel?*

Let capacity $V$. Milk fraction $\frac{5}{8}$ before, $\frac{5}{12}$ after. Milk after $= \frac{5}{8}(V - 16)$, and this equals $\frac{5}{12}V$:
$\frac{V - 16}{V} = \frac{8}{12} = \frac{2}{3} \Rightarrow 3V - 48 = 2V \Rightarrow V = 48$.

Check: milk 30, water 18. Remove 16 L (10 milk, 6 water) → 20 milk, 12 water; add 16 water → $20 : 28 = 5 : 7$. ✓

**Why this method:** one replacement, so milk is multiplied by $(1 - \frac{16}{V})$; equate to the new fraction.

### Example 6

*Rice at Rs 50/kg and Rs 80/kg is mixed and sold at Rs 84/kg at a profit of 20%. In 60 kg of the mixture, how much is the Rs 80 variety?*

Cost of mixture $= \frac{84}{1.2} = 70$ per kg. Alligate: cheap : dear $= (80 - 70) : (70 - 50) = 10 : 20 = 1 : 2$. Dear variety $= \frac{2}{3} \times 60 = 40$ kg.

**Why this method:** strip the profit first; alligation works on cost. 70 is closer to 80, so more of the Rs 80 rice. ✓

## Traps & speed tips

- **Alligate strengths, not ratios.** Convert $3 : 1$ to $\frac{3}{4}$ first.
- **The answer ratio is of quantities, and it is the inverse of the gaps.** The ingredient *nearer* the mean is present in *larger* quantity.
- **Selling price is not a strength.** Divide out the profit to get cost, then alligate.
- **Replacement keeps a fraction, not an amount.** $V(1 - x/V)^n$ for equal draws; a product of different factors for unequal draws.
- **Volume is constant in replacement problems**, so water $=$ volume $-$ milk; do not track water separately.
- **Three ingredients:** alligate two at a time, or write the weighted-average equation directly. Usually the question fixes a ratio between two of them.
- **"Percent by weight" vs "percent by volume":** CAT states one; use it consistently.
- Always do the "which side is nearer?" sanity check before marking an answer.

## Checklist

- Derive the alligation rule from the weighted average in two lines.
- Find the mixing ratio for prices, concentrations and averages, including when one ingredient is pure.
- Mix two mixtures given as ratios.
- Compute what is left after $n$ equal replacements, and after unequal ones.
- Solve a replacement problem backwards for the vessel capacity.
- Handle "sold at a profit" by converting to cost before alligating.
