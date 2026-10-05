# Permutations & Combinations

> One or two questions a year, and they are the most "trap-rich" marks in Quant: a wrong factor of 2 or a forgotten zero turns a right method into a wrong answer. CAT 2020 asked for three-digit numbers whose digit product lies between 2 and 7; CAT 2023 asked how many numbers up to 1000 have no repeated digit. Both are pure counting discipline.

## Core ideas

### The multiplication principle

If a task has stages and stage 1 can be done in $a$ ways, stage 2 in $b$ ways (whatever happened in stage 1), and so on, the whole task can be done in $a \times b \times \dots$ ways. Three-digit numbers with no repeated digit: first digit 9 ways (not 0), second 9 ways (anything except the first), third 8 ways: $648$. Add the 9 one-digit and $9 \times 9 = 81$ two-digit numbers and you have CAT 2023's $738$ (1000 itself repeats a digit).

The **addition principle**: if the cases are mutually exclusive, add them. Most hard counting is "split into non-overlapping cases, multiply within each, add across".

### Arrangements (permutations)

Arranging $n$ distinct objects in a row: $n!$ ways ($n$ choices for the first position, $n - 1$ for the next, …). Arranging $r$ of them: $^nP_r = \dfrac{n!}{(n-r)!}$.

With repeated objects: $n$ objects of which $p$ are alike, $q$ alike, …: $\dfrac{n!}{p!\,q!\cdots}$. Reason: the $p$ alike objects can be swapped among themselves $p!$ ways without changing the arrangement, so each distinct arrangement was counted $p!$ times. BANANA: $\frac{6!}{3!\,2!} = 60$.

Circular arrangements of $n$ distinct people: $(n - 1)!$, because rotating the whole table gives the same seating; fix one person and arrange the rest. For a necklace or garland that can be flipped, divide by 2 again.

### Selections (combinations)

Choosing $r$ objects from $n$ when order does not matter: $\dbinom{n}{r} = \dfrac{n!}{r!\,(n-r)!}$. Reason: $^nP_r$ counts ordered selections, and each unordered one appears $r!$ times. Useful identities: $\binom{n}{r} = \binom{n}{n-r}$, $\binom{n}{0} = 1$, $\sum_r \binom{n}{r} = 2^n$ (every subset either contains each object or not).

Ask one question to decide which formula: *does swapping two chosen items give a new outcome?* If yes, permutations; if no, combinations. A committee is a combination; a ranking is a permutation.

### Standard constraint tricks

- **Together**: glue the items into one block, arrange the blocks, then arrange inside the block. Vowels of LEADING together: $5! \times 3! = 720$.
- **Not together (no two adjacent)**: arrange the others first, then place the restricted items in the gaps. 5 boys, 3 girls, no two girls adjacent: $5! \times \binom{6}{3} \times 3! = 120 \times 20 \times 6 = 14400$.
- **At least one**: total minus none. Committees of 3 from 5 men and 4 women with at least one woman: $\binom{9}{3} - \binom{5}{3} = 84 - 10 = 74$.
- **Digits**: handle the leading zero (cannot be first) and any "last digit" condition first, because they are the tightest constraints.

### Distribution (stars and bars)

Number of non-negative integer solutions of $x_1 + x_2 + \dots + x_k = n$: $\dbinom{n + k - 1}{k - 1}$. Picture $n$ identical stars in a row and $k - 1$ bars splitting them into $k$ groups; choose where the bars go. For positive solutions (each $\ge 1$), give each variable 1 first: $\dbinom{n - 1}{k - 1}$.

Upper bounds ($x_i \le c$) are handled by inclusion–exclusion: count all, subtract those with some $x_i \ge c + 1$ (substitute $x_i' = x_i - (c+1)$), add back the double-violations.

### Grouping

Dividing $2n$ distinct objects into two **unlabelled** groups of $n$: $\dfrac{\binom{2n}{n}}{2}$. Into $k$ equal unlabelled groups of size $m$: $\dfrac{(km)!}{(m!)^k\,k!}$. If the groups are labelled (Team A, Team B), do not divide by $k!$.

### Counting geometric objects

Rectangles on an $m \times n$ grid of lines: choose 2 horizontal and 2 vertical lines: $\binom{m}{2}\binom{n}{2}$. Squares on an $8 \times 8$ board: $1^2 + 2^2 + \dots + 8^2 = 204$. Diagonals of an $n$-gon: $\binom{n}{2} - n$. Triangles from $n$ points with $k$ collinear: $\binom{n}{3} - \binom{k}{3}$.

## Worked examples

### Example 1: word with repeats
*How many arrangements of the letters of COMMITTEE are there?*

9 letters; M, T, E each appear twice. $\dfrac{9!}{2!\,2!\,2!} = \dfrac{362880}{8} = 45360$.

*Why this method:* divide out each repeated letter's internal swaps.

### Example 2: committee with a minimum
*From 6 men and 5 women, how many committees of 4 have at least 2 women?*

Cases by number of women: $\binom{5}{2}\binom{6}{2} + \binom{5}{3}\binom{6}{1} + \binom{5}{4} = 10 \cdot 15 + 10 \cdot 6 + 5 = 215$.
Check via complement: total $\binom{11}{4} = 330$; 0 women $\binom{6}{4} = 15$; 1 woman $5 \cdot \binom{6}{3} = 100$; $330 - 115 = 215$ ✓.

*Why this method:* "at least 2" is three cases or a complement of two; whichever is shorter, use the other as a check.

### Example 3: digits with a leading-zero issue
*How many even 4-digit numbers can be formed from the digits 0–5 without repetition?*

Last digit 0: the other three positions from 5 digits, first can be anything: $5 \times 4 \times 3 = 60$.
Last digit 2 or 4: first digit cannot be 0 or the last digit: 4 choices; then 4 and 3 for the middle: $2 \times 4 \times 4 \times 3 = 96$.
Total $156$.

*Why this method:* fix the most constrained position (last, must be even) and split on whether it is 0, because 0 interacts with the first-digit restriction.

### Example 4: stars and bars with a cap
*How many non-negative integer solutions does $x + y + z = 12$ have if each variable is at most 6?*

All: $\binom{14}{2} = 91$. With $x \ge 7$: set $x' = x - 7$, $x' + y + z = 5$: $\binom{7}{2} = 21$; same for $y, z$: $63$. Two variables $\ge 7$ would need sum $\ge 14$: impossible. Answer $91 - 63 = 28$.
Check by symmetry: replace each variable by $6 - x$; the new variables are non-negative with sum $18 - 12 = 6$ and automatically $\le 6$: $\binom{8}{2} = 28$ ✓.

*Why this method:* inclusion–exclusion on the upper bound; the complement substitution is a slick check when the cap is symmetric.

### Example 5: circular with a restriction
*Eight people sit around a round table. In how many ways can they sit if two particular people must not be adjacent?*

All: $7! = 5040$. Together: glue the pair, $6!$ arrangements of 7 units around the table, times $2$ for the pair's internal order: $1440$. Not together: $5040 - 1440 = 3600$.

*Why this method:* circular total is $(n-1)!$; "not together" is always total minus together.

### Example 6: rectangles that are not squares
*How many rectangles on a standard $8 \times 8$ chessboard are not squares?*

Rectangles: $\binom{9}{2}^2 = 36^2 = 1296$. Squares: $\sum_{k=1}^{8} k^2 = 204$. Non-squares: $1092$.

*Why this method:* a rectangle is two horizontal and two vertical grid lines; squares are counted separately by size.

## Traps & speed tips

- Decide permutation vs combination by asking whether order creates a new outcome. Then do not change your mind halfway.
- 0 cannot lead a number. Handle it as a separate case whenever 0 is among the digits.
- "At least one" → complement. "Exactly one" → direct count.
- Circular: $(n-1)!$ for people; divide by 2 for necklaces only.
- Unlabelled equal groups: divide by $k!$. Labelled: do not.
- Stars and bars counts identical items into distinct boxes; for distinct items into distinct boxes it is $k^n$.
- Product-of-digits questions (CAT 2020): list the digit multisets for each allowed product, then count arrangements of each; do not try a formula.
- Always sanity-check with a tiny version of the problem (2 people, 3 digits) if a formula feels unfamiliar.

## Checklist

- Apply the multiplication and addition principles and know when each applies.
- Compute $n!$, $^nP_r$, $\binom{n}{r}$ and arrangements with repeated letters.
- Handle "together", "not together", "at least one" and leading-zero constraints.
- Use stars and bars for distributions, with and without upper bounds.
- Count circular arrangements and unlabelled groups correctly.
- Count rectangles, squares, diagonals and triangles in grids and polygons.
