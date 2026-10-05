# Set Theory & Venn Diagrams

> One question most years, sometimes two, and often TITA. CAT 2018 asked for the number studying History given symmetric data; CAT 2022 asked for the difference between the maximum and minimum possible number liking all three drinks. The whole chapter is one formula, one picture and one bookkeeping identity.

## Core ideas

### Sets and the Venn picture

A **set** is a collection of distinct things; $|A|$ (or $n(A)$) is the number of elements. $A \cup B$ (union) is everything in $A$ or $B$ or both; $A \cap B$ (intersection) is what is in both; $A'$ (complement) is everything in the universal set $U$ that is not in $A$.

A Venn diagram draws each set as a circle inside a rectangle ($U$). Two circles make 4 regions; three circles make 8 (including the outside). **Label the regions with unknowns from the inside out**: the triple overlap first, then the three "exactly two" pieces, then the three "only" pieces, then the outside.

### Two sets

$$|A \cup B| = |A| + |B| - |A \cap B|.$$

Adding $|A|$ and $|B|$ counts the overlap twice, so subtract it once. Everything else is rearrangement: $|\text{neither}| = |U| - |A \cup B|$; $|\text{only } A| = |A| - |A \cap B|$; $|\text{exactly one}| = |A| + |B| - 2|A \cap B|$.

### Three sets

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |C \cap A| + |A \cap B \cap C|.$$

Why the last term is added back: an element in all three is counted $3$ times in the singles, subtracted $3$ times in the pairs, so it must be added once. Note that $|A \cap B|$ in this formula includes those also in $C$. When a question says "study H and E **but not** P", that is the "exactly two" region, not $|H \cap E|$.

### The bookkeeping identity

Let $n_1, n_2, n_3$ be the numbers of elements in **exactly** one, two, three sets. Then

$$n_1 + n_2 + n_3 = |A \cup B \cup C|, \qquad n_1 + 2n_2 + 3n_3 = |A| + |B| + |C|.$$

The second line says: adding the three set sizes counts each person once per set they belong to. Also $n_2 + 3n_3 = |A \cap B| + |B \cap C| + |C \cap A|$ (each pairwise intersection contains the triple region). These three equations solve most "exactly two / at least two / exactly one" questions in two lines, with no diagram.

Subtracting the first from the second: $n_2 + 2n_3 = \sum|A| - |A \cup B \cup C|$, which is the single most useful line in the chapter.

### Maximum and minimum of an overlap

Two sets in a universe of $N$: $|A \cap B|$ is at most $\min(|A|, |B|)$ and at least $|A| + |B| - N$ (or 0 if that is negative). The minimum comes from pushing the union to fill all of $N$.

Three sets, minimum of the triple overlap: $|A \cap B \cap C| \ge |A| + |B| + |C| - 2N$. Reason: the people **not** in $A$, not in $B$, not in $C$ number $(N - |A|) + (N - |B|) + (N - |C|)$ at most, and only people outside all three "not" groups are in all three sets. CAT 2022: $73 + 80 + 52 - 200 = 5$ is the minimum liking all three, and the maximum is $52$ (every lemonade-liker can like both others); difference $47$.

Maximum of the triple overlap when **everyone is in at least one set**: use $n_2 + 2n_3 = \sum|A| - N$ with $n_2 \ge 0$, so $n_3 \le \frac{\sum|A| - N}{2}$ (and also $\le$ the smallest set). This is a constraint people miss: you cannot always push the triple overlap to the smallest set when the union must cover everyone.

### Complement counting

"How many are in none" $= N - |A \cup B \cup C|$. "How many are in at least two" $= n_2 + n_3$. "At most one" $= N - (n_2 + n_3)$. Translate every phrase into regions before computing.

## Worked examples

### Example 1: two sets, neither
*In a group of 70, 40 drink tea, 30 drink coffee and 10 drink both. How many drink neither?*

$|T \cup C| = 40 + 30 - 10 = 60$. Neither $= 70 - 60 = 10$.
Check by regions: tea only 30, coffee only 20, both 10, total 60 ✓.

*Why this method:* the two-set formula, then subtract from the universe.

### Example 2: three sets, how many in none
*Of 150 students, 80 study Maths, 70 Physics, 60 Chemistry; 30 study Maths and Physics, 25 Physics and Chemistry, 20 Maths and Chemistry; 10 study all three. How many study none, and how many study exactly two?*

Union $= 80 + 70 + 60 - 30 - 25 - 20 + 10 = 145$. None $= 5$.
Exactly two $= (30 + 25 + 20) - 3 \times 10 = 45$.
Check with the identity: $n_1 + 2n_2 + 3n_3 = 210$ and $n_1 + n_2 + n_3 = 145$, so $n_2 + 2n_3 = 65$; with $n_3 = 10$, $n_2 = 45$ ✓.

*Why this method:* pairwise intersections each contain the triple region; subtract it three times to get "exactly two".

### Example 3: finding the triple overlap from "exactly two"
*Everyone in a group of 50 likes at least one of apples, bananas, cherries. 31 like apples, 25 bananas, 20 cherries; 12 like exactly two. How many like all three?*

$n_1 + 2n_2 + 3n_3 = 76$, $n_1 + n_2 + n_3 = 50 \Rightarrow n_2 + 2n_3 = 26 \Rightarrow 12 + 2n_3 = 26 \Rightarrow n_3 = 7$.
Check: $n_1 = 31$; $31 + 24 + 21 = 76$ ✓.

*Why this method:* no diagram needed; the identity handles "exactly" counts directly.

### Example 4: two-set max and min
*Among 100 people, 80 like product A and 70 like product B. What are the maximum and minimum numbers who like both?*

Maximum $= 70$ (every B-liker also likes A). Minimum $= 80 + 70 - 100 = 50$ (the union fills all 100).
Check minimum: A-only 30, B-only 20, both 50, none 0: totals $80, 70, 100$ ✓.

*Why this method:* to minimise the overlap, spread the sets out as far as the universe allows.

### Example 5: three-set minimum
*In a class of 100, 85 passed Maths, 80 passed Physics and 75 passed Chemistry. At least how many passed all three?*

Failures: $15 + 20 + 25 = 60$ at most distinct people. So at least $100 - 60 = 40$ passed all three.
Formula: $85 + 80 + 75 - 200 = 40$ ✓.

*Why this method:* think in complements; the minimum "all three" is when the failure groups do not overlap.

### Example 6: CAT 2018 structure
*74 students each study at least one of H, E, P. 10 study all three; 20 study H and E but not P; every P student also studies H or E. The numbers studying H and E are equal. How many study H?*

Regions: P-only $= 0$. Let H-only $= h$, E-only $= e$, H&P-only $= x$, E&P-only $= y$. Total: $h + e + x + y + 20 + 10 = 74 \Rightarrow h + e + x + y = 44$.
$|H| = h + x + 30$, $|E| = e + y + 30$; equal, so $h + x = e + y = 22$. $|H| = 52$.

*Why this method:* label regions, write each given fact as an equation in regions, and use symmetry ($|H| = |E|$) to halve the unknowns.

## Traps & speed tips

- "$A$ and $B$" ($|A \cap B|$) includes those also in $C$; "$A$ and $B$ only" excludes them. Read which one the question gives.
- Exactly two $= \sum(\text{pairwise}) - 3(\text{triple})$. At least two $= \sum(\text{pairwise}) - 2(\text{triple})$.
- "Some may like none" changes the minimum-overlap calculation: the union can be smaller than $N$. When everyone is in at least one set, the union **equals** $N$ and you gain an equation.
- Minimum of all three $= \sum|A| - 2N$ (or 0). Maximum $= $ smallest set, unless the "everyone in at least one" constraint caps it at $\frac{\sum|A| - N}{2}$.
- Draw the Venn diagram with the triple region first; filling from the outside in is where double counting creeps in.
- Percentages work exactly like counts; take $N = 100$.
- Check your regions by adding them up to $N$ at the end.

## Checklist

- Write the two- and three-set union formulas and explain the signs.
- Label an 8-region Venn diagram and translate "only", "and", "exactly", "at least" into regions.
- Use $n_1 + 2n_2 + 3n_3 = \sum|A|$ to find exactly-two or triple counts.
- Compute the maximum and minimum overlap for two and three sets, with and without a "none" group.
- Solve a symmetric three-set problem like CAT 2018 by labelling regions.
