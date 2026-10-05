# Games & Tournaments

> A league table or a knockout bracket appears in CAT almost every year (2021, 2022, 2023 and 2024 all had one). The data is small — five or six teams — but the questions need you to reconstruct who beat whom from points, goals or rankings. Once you know the three or four structural facts about tournaments, these sets are among the fastest to crack.

## Core ideas

### Round-robin: the structure

In a **round-robin** (league) of $n$ teams, every team plays every other once. Number of matches $= \binom{n}{2} = \dfrac{n(n-1)}{2}$: 5 teams → 10 matches, 6 teams → 15, 8 teams → 28. Each team plays $n - 1$ matches.

With **3 points for a win, 1 for a draw, 0 for a loss**:

- A decided match puts 3 points into the table; a drawn match puts 2.
- So total points $= 3 \times (\text{matches}) - (\text{number of draws})$. With 10 matches, 30 minus draws. This is the most useful equation in the topic: given the points of all teams, you know the number of draws; given the number of draws and all but two teams' points, you know the sum of the other two.
- A team's points $= 3W + D$ with $W + D + L = n - 1$. Decoding points into records is a short list: with 4 matches, 10 points is only $3W\,1D$; 7 points is only $2W\,1D\,1L$; 1 point is only $0W\,1D\,3L$; 6 points is $2W\,0D\,2L$ or $1W\,3D\,0L$ (check both!); 4 points is $1W\,1D\,2L$ or $0W\,4D$.

With **2 points for a win, 1 for a draw** (older format), total points is fixed at $2 \times$ matches whatever happens; the draw count must then come from elsewhere.

### Draws are the key constraint

Each drawn match involves exactly two teams, so (sum over teams of draws) $= 2 \times$ (number of draws). If you know each team's number of draws, you can often pair them up: a team with exactly one draw and another team with exactly one draw, when they are the only two with draws, must have drawn with each other.

"Team E's only point came from its match against B" tells you B–E was a draw **and** E lost every other match.

### Goals and goal difference

If the set gives goals scored and conceded: total goals scored $=$ total goals conceded over the tournament; each team's goal difference (scored minus conceded) sums to zero across teams. A team with goals for 0 and against 0 drew every match 0–0. A team that won all matches has goal difference $> 0$; the converse is false.

### Knockouts

In a **knockout** of $2^k$ players (seeds 1 to $2^k$), each match eliminates one player, so there are $2^k - 1$ matches and $k$ rounds. Standard seeding in round 1 pairs seed $i$ with seed $2^k + 1 - i$ (in a 16-draw: 1 v 16, 2 v 15, ..., 8 v 9). If there are no upsets, the higher seed always wins, and the pairs in each later round are again $i$ with $(\text{remaining count}) + 1 - i$. An "upset" is a lower seed beating a higher seed. Questions like "which seeds could the winner have beaten?" are answered by tracking the bracket: the path of seed 1 in a 16-draw without upsets is 16, 8, 4, 2.

Key facts: a player who wins the tournament has played $k$ matches; the number of upsets is the number of matches won by the lower seed; the finalist from the other half of the draw is the only one seed 1 cannot meet before the final.

### Procedure for a league set

1. Draw the results grid: teams as rows and columns, each cell to hold W/D/L for the row team (fill the mirror cell at the same time: a W in (A,B) is an L in (B,A)).
2. Decode every known points total into (W, D, L) possibilities.
3. Use total points $= 3 \times$ matches $-$ draws to find the number of draws or the sum of unknown points.
4. Place the draws by pairing teams that have draws.
5. Fill wins and losses: a team with no draws and known W has its remaining matches determined once some are known.
6. Verify: every team's row gives its points; every cell has a mirror; draws count matches.

### Procedure for a knockout set

1. Write the bracket for round 1 with the seeding rule.
2. Apply "no upsets" except where the set says otherwise; each stated upset changes who advances.
3. For each later round, re-pair the survivors by the rule (highest remaining vs lowest remaining).
4. Trace the path of the player the question asks about.

## Worked examples

Examples 1–4 use this league. Five teams A–E, each plays each other once, 3/1/0 points. Known: A 10, B 7, E 1; C finished above D; exactly two draws; E's only point came against B; D did not lose to A.

### Example 1: Decode points into records

Four matches each. A (10): only $3W\,1D$. B (7): $2W\,1D\,1L$. E (1): $0W\,1D\,3L$. Each of A, B, E drew exactly once.

Total points $= 30 - 2 = 28$, so $C + D = 28 - 18 = 10$ with $C > D$.

*Why this method:* decoding first turns "10 points" into "A drew exactly one match", which is far more usable than the number.

### Example 2: Place the draws

B–E is a draw (E's only point). That uses up B's and E's single draws. A drew exactly once; "D did not lose to A" and A lost nothing, so A–D was a draw. Two draws placed; there are no others.

*Why this method:* each draw involves two teams, so matching teams' draw counts pins the drawn matches.

### Example 3: Fill the grid

A won its other three (vs B, C, E). B lost to A, drew E, so B won vs C and D. E lost to A, C, D. Remaining: C–D, C–E, D–E, all decided. $C = 3 \times (\text{C's wins among C–D, C–E})$; $D = 1 + 3 \times (\text{D's wins among C–D, D–E})$. For $C + D = 10$ and $C > D$: C beat D and E ($C = 6$), D beat E ($D = 4$).

| | A | B | C | D | E | Pts |
|---|---|---|---|---|---|---|
| A | – | W | W | D | W | 10 |
| B | L | – | W | W | D | 7 |
| C | L | L | – | W | W | 6 |
| D | D | L | L | – | W | 4 |
| E | L | D | L | L | – | 1 |

Check: $10 + 7 + 6 + 4 + 1 = 28$ ✓.

*Why this method:* once draws are placed, each team's known W count fills its row; the last two unknowns are a two-case check.

### Example 4: Counting from the grid

*Question.* In how many matches did the higher-placed team win?

Order A > B > C > D > E. Wins by the higher-placed team: A 3, B 2, C 2, D 1 = 8. The other two matches were draws. Answer 8.

*Why this method:* with the grid complete, any such question is a scan down the rows.

### Example 5: A knockout with one upset

Sixteen players seeded 1–16, standard seeding, one upset only: seed 11 beat seed 6 in round 1. Who does seed 3 play in the quarter-final?

Round 1 pairs: 1–16, 2–15, 3–14, 4–13, 5–12, 6–11, 7–10, 8–9. Survivors with the upset: 1, 2, 3, 4, 5, **11**, 7, 8. Round 2 pairs highest remaining with lowest remaining: 1–11, 2–8, 3–7, 4–5. Seed 3 plays seed 7 in the quarter-final.

*Why this method:* re-pairing by "highest vs lowest remaining" each round is the standard CAT convention; apply it mechanically.

### Example 6: Goal totals

In a 4-team league, goals scored by A, B, C, D are 7, 5, 3, 1; goals conceded by A, B, C are 2, 4, 6. Goals conceded by D?

Total scored $= 16 = $ total conceded, so D conceded $16 - 12 = 4$. D's goal difference is $1 - 4 = -3$; the four differences $+5, +1, -3, -3$ sum to 0 ✓.

*Why this method:* every goal scored is a goal conceded; the identity costs nothing and fills a blank.

## Traps & speed tips

- Decide the scoring system before anything else: 3/1/0 (draws reduce total points) or 2/1/0 (total points fixed).
- "Finished above" means more points, but some sets rank by goal difference on ties — read the ranking rule.
- A team with $k$ draws needs $k$ different opponents who also drew; match the draw counts.
- "Did not lose to X" means won or drew against X; combine with X's record.
- The results grid must be symmetric: fill both cells of every match at once.
- In knockouts, count matches as (players − 1) and rounds as $\log_2$ (players); the champion plays every round.
- Do not assume "no upsets" unless stated; do not assume the seeding rule unless stated (CAT states it).
- Verify the points column from the grid before answering any question.

## Checklist

You should be able to:

- Compute matches and games-per-team for an $n$-team round-robin.
- Decode a points total into the possible (W, D, L) records for a given number of matches.
- Use total points $= 3 \times$ matches $-$ draws to find draws or unknown points.
- Place drawn matches by pairing teams' draw counts.
- Fill a results grid symmetrically and verify it against the points table.
- Run a seeded knockout bracket round by round, with and without stated upsets.
