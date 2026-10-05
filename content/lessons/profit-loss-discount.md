# Profit, Loss & Discount

> One or two questions a year, always a word problem, often with a twist (faulty weights, "sold at the marked price of fewer items", two articles at the same price). Everything is a chain of multiplying factors from cost price to selling price.

## Core ideas

### The four prices

- **Cost price (CP):** what the seller paid.
- **Marked price (MP):** the label; also called list price.
- **Selling price (SP):** what the buyer actually pays.
- **Discount:** MP $-$ SP, always expressed as a percent **of MP**.

Profit $=$ SP $-$ CP, and profit percent is always **on CP** unless stated otherwise:

$$\text{Profit \%} = \frac{\text{SP} - \text{CP}}{\text{CP}} \times 100$$

### The multiplying-factor chain

Every percentage in this chapter is a multiplying factor on the previous price:

$$\text{SP} = \text{CP} \times (1 + m) \times (1 - d)$$

where $m$ is the mark-up fraction (on CP) and $d$ the discount fraction (on MP). The net profit factor is $(1 + m)(1 - d)$. Mark up 40%, discount 15%: $1.4 \times 0.85 = 1.19$, profit 19%. Notice the profit is less than $40 - 15 = 25$; the discount acts on the larger marked price.

Successive discounts of $d_1, d_2$ multiply: $(1 - d_1)(1 - d_2)$. "20% and 10%" is $0.8 \times 0.9 = 0.72$, a single discount of 28%, not 30%.

### Going backwards

If SP is known and profit is $p\%$, then CP $= \frac{\text{SP}}{1 + p/100}$. The common error is computing CP as SP minus $p\%$ of SP. Selling for Rs 1,080 at a 10% loss means CP $= \frac{1080}{0.9} = 1200$, not $1080 \times 1.1 = 1188$.

### Same selling price, equal profit and loss percent

Two articles sold at the same SP, one at $x\%$ profit and the other at $x\%$ loss, always give a net **loss** of $\frac{x^2}{100}\%$ on the total cost. Derive: CPs are $\frac{S}{1 + x}$ and $\frac{S}{1 - x}$ (with $x$ as a fraction); total CP $= \frac{2S}{1 - x^2} > 2S$. The loss fraction is $x^2$. At 20%: 4% loss.

### Faulty weights

A shopkeeper who sells at cost price but uses a 900 g weight for 1 kg gives 900 g and charges for 1000 g. Profit on the goods actually sold $= \frac{1000 - 900}{900} = \frac{1}{9} = 11.\overline{1}\%$. The base is what he *gave*, not what he claimed. Combined with a mark-up of $m$: profit factor $= \frac{(1 + m) \times 1000}{900}$.

### Cheating on quantity: "buys $n$ at the price of $m$"

Buying 40 pens for the price of 36 means CP per pen $= \frac{36}{40}$ of the list price. Selling each at list price gives profit $\frac{40}{36} - 1 = \frac{1}{9} = 11.\overline{1}\%$. Work per pen or per batch, but keep the base straight.

### Profit on SP (rare but asked)

If a question says "profit is 20% of the selling price", then profit $= 0.2$ SP, so CP $= 0.8$ SP and profit on CP $= \frac{0.2}{0.8} = 25\%$. Translate to the CP base before doing anything else.

## Worked examples

### Example 1

*A trader marks goods 40% above cost and offers a 15% discount. What is his profit percent?*

$1.4 \times 0.85 = 1.19$. Profit 19%.

**Why this method:** chain of factors. Never subtract percents with different bases.

### Example 2

*Selling an article for Rs 1,080 results in a loss of 10%. At what price should it be sold to earn 15% profit?*

CP $= \frac{1080}{0.9} = 1200$. Required SP $= 1200 \times 1.15 = 1380$.

**Why this method:** go back to CP by dividing by the factor, then forward with the new factor.

### Example 3

*A shopkeeper marks up his goods by 10% and also uses a weight of 900 g in place of 1 kg. What is his overall profit percent?*

For every "kilo" sold he collects $1.1 \times$ (CP of 1 kg) but parts with 0.9 kg of goods, whose cost is $0.9 \times$ (CP of 1 kg).
Profit factor $= \frac{1.1}{0.9} = \frac{11}{9} = 1.2\overline{2}$, i.e. $22.\overline{2}\%$.

**Why this method:** profit is (money received) / (cost of goods actually given). Two separate percentages, so one fraction.

### Example 4

*Two articles are sold at Rs 2,400 each, one at 20% profit and the other at 20% loss. Find the overall profit or loss in rupees.*

CP$_1 = \frac{2400}{1.2} = 2000$; CP$_2 = \frac{2400}{0.8} = 3000$. Total CP $= 5000$, total SP $= 4800$: loss of Rs 200.

Shortcut: loss $= \frac{20^2}{100} = 4\%$ of total CP $= 0.04 \times 5000 = 200$. ✓

**Why this method:** the shortcut tells you the *percent*; to get rupees you still need the total CP, so compute both CPs.

### Example 5

*After successive discounts of 20% and 10%, a customer pays Rs 1,440 for an item, and the seller still makes a 20% profit. What is the cost price?*

MP $\times 0.8 \times 0.9 = 1440 \Rightarrow$ MP $= \frac{1440}{0.72} = 2000$.
SP $= 1440 = 1.2 \times$ CP $\Rightarrow$ CP $= 1200$.

**Why this method:** two separate chains meet at SP: MP $\to$ SP via discounts, CP $\to$ SP via profit. The marked price was a distractor here; the question only needs the second chain.

### Example 6

*A dealer sells a bicycle at 8% profit. Had he bought it for 10% less and sold it for Rs 108 more, he would have gained 30%. Find the original cost price.*

Let CP $= c$. Original SP $= 1.08c$.
New CP $= 0.9c$; new SP $= 1.08c + 108$; this is 30% profit: $1.08c + 108 = 1.3 \times 0.9c = 1.17c \Rightarrow 0.09c = 108 \Rightarrow c = 1200$.

Check: CP 1200, SP 1296; new CP 1080, new SP 1404 $= 1.3 \times 1080$. ✓

**Why this method:** two scenarios, one unknown. Write each SP in terms of $c$ and equate.

### Example 7

*A retailer buys 40 pens at the marked price of 36 pens from a wholesaler. If he sells the pens at a 1% discount on the marked price, what is his profit percent?*

Let marked price $= M$ per pen. CP of 40 pens $= 36M$. SP of 40 pens $= 40 \times 0.99M = 39.6M$.
Profit $= \frac{39.6 - 36}{36} = \frac{3.6}{36} = 10\%$.

**Why this method:** work with the whole batch of 40 so the "price of 36" is a single number.

## Traps & speed tips

- **Profit % is on CP; discount % is on MP.** Two different bases, never add or subtract them directly.
- **Backward from SP means divide**, not subtract: CP $= \frac{\text{SP}}{1 \pm p}$.
- **Equal % profit and loss at the same SP:** always a loss of $(x/10)^2\%$.
- **Faulty weight:** base is what the customer actually receives.
- **Successive discounts multiply:** $d_1$ and $d_2$ give $1 - (1 - d_1)(1 - d_2)$, which is less than $d_1 + d_2$.
- **"Profit on SP"** must be converted to profit on CP first.
- **Assume CP $= 100$** (or MP $= 100$ if discounts dominate) when only percentages are involved.
- Fraction forms: 20% profit is $\times \frac{6}{5}$; 25% loss is $\times \frac{3}{4}$; 12.5% discount is $\times \frac{7}{8}$. They cancel beautifully against CAT's numbers.
- When "no profit no loss" is mentioned, SP $=$ CP; any discount then equals the mark-up undone: MF$_\text{markup} \times$ MF$_\text{discount} = 1$.

## Checklist

- Write SP $=$ CP $\times$ (mark-up factor) $\times$ (discount factor) for any scenario.
- Go backwards from SP to CP correctly for both profit and loss.
- Compute the net effect of two successive discounts in your head.
- Solve faulty-weight and "$n$ for the price of $m$" problems with the right base.
- Recognise the equal-profit-equal-loss trap and quantify the loss.
- Set up a two-scenario equation ("had he bought for less and sold for more") in one unknown.
