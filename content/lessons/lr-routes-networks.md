# Routes & Networks

> A map of cities joined by roads, a pipeline network with flows, a grid of streets: CAT uses these every couple of years, and the questions are "how many routes from A to F", "shortest route", "which road is used by every route", or "how much flows through pipe X". The diagram looks intimidating; the methods are two or three short procedures that work on any network.

## Core ideas

### Vocabulary

A **network** (graph) is a set of **nodes** (junctions, cities) joined by **edges** (roads, pipes). An edge may be **one-way** (an arrow) or **two-way**. Edges may carry a **weight** (distance, cost, time, capacity). A **route** (path) is a sequence of edges from a start node to an end node; unless the set says otherwise, a route does not revisit a node.

Since this course cannot render diagrams, networks are given as lists of edges ("A→B, A→C, …") or as a table of distances. In the exam you will see a drawing: your first move is to copy the node names and edges into a list on the rough sheet, because you will read it many times.

### Counting routes in a one-way network

If all edges point "forward" (no cycles), count routes by **accumulation**: the number of ways to reach a node is the sum of the ways to reach each node that has an edge into it. Start with 1 at the source and work forward in an order where every node's predecessors are already done.

Edges A→B, A→C, B→C, B→D, B→E, C→D, C→E, D→E, D→F, E→F:

| Node | Ways | Reason |
|---|---|---|
| A | 1 | start |
| B | 1 | from A |
| C | 2 | A, B |
| D | 3 | B (1) + C (2) |
| E | 6 | B (1) + C (2) + D (3) |
| F | 9 | D (3) + E (6) |

Nine routes. This is faster and safer than listing, and it scales to big grids.

**Routes through a given node X:** (ways from start to X) × (ways from X to end). **Routes avoiding X:** total − routes through X. **Routes avoiding an edge X→Y:** total − (ways to X) × (ways from Y to end).

### Grids

On a rectangular street grid where you may move only right and up, the number of routes from the bottom-left corner to a point $a$ blocks right and $b$ blocks up is $\binom{a+b}{a}$: you make $a + b$ moves of which $a$ are "right". A 4-by-3 grid: $\binom{7}{3} = 35$. Routes through an intermediate corner $(2, 1)$: $\binom{3}{1} \times \binom{4}{2} = 3 \times 6 = 18$. A blocked intersection is handled by subtraction; a blocked street segment by subtracting (ways to its start) × (ways from its end).

### Shortest routes

With weighted edges, find the shortest route by **settling nodes in order of distance** (Dijkstra's method by hand):

1. Write the distance to the start as 0 and to every other node as "?".
2. Take the unsettled node with the smallest known distance and settle it.
3. For each edge out of it, if (its distance + edge weight) beats the neighbour's current distance, update the neighbour.
4. Repeat until the target is settled.

For CAT-sized networks (6–8 nodes) this takes under two minutes and guarantees the answer; "try the obvious route" does not.

**Longest route without repeating nodes** has no shortcut; enumerate, pruning by a running total when the question gives a cap ("routes of length at most 10").

### Flows

In a pipeline network, **flow in = flow out** at every intermediate node (conservation). Sources add flow; sinks absorb it. Given some pipe flows and node balances, unknown flows are found like a missing-data table: find a node with exactly one unknown pipe, solve, repeat. A pipe's **capacity** is a cap on its flow; "maximum flow" questions ask for the largest total that respects all caps and conservation, found by pushing flow along routes until some cut of pipes is saturated.

### Procedure

1. Copy the network as an edge list; mark one-way edges with arrows and weights beside them.
2. Classify the question: count, shortest, must-pass, or flow.
3. Count → accumulate from the source in forward order. Shortest → settle nodes by distance. Must-pass → compare counts with and without the node/edge. Flow → conservation at nodes with one unknown.
4. Verify by an independent route: list the paths for small counts; check the shortest route's total by adding its edges.

## Worked examples

### Example 1: Counting with accumulation

Edges: A→B, A→C, B→C, B→D, B→E, C→D, C→E, D→E, D→F, E→F. Routes from A to F?

As in the table above: 9. Check by listing: via B directly: B-D-F, B-D-E-F, B-E-F (3); via B-C: C-D-F, C-D-E-F, C-E-F (3); via A-C: same three (3). Total 9.

*Why this method:* accumulation reuses each node's count; listing repeats work three times over.

### Example 2: Routes through, and avoiding, a node

Same network. How many routes from A to F pass through D? Ways A→D = 3; ways D→F: D-F and D-E-F = 2. Through D: $3 \times 2 = 6$. Avoiding D: $9 - 6 = 3$ (B-E-F, B-C-E-F, C-E-F).

*Why this method:* splitting at the compulsory node turns one count into a product of two smaller counts.

### Example 3: Must-pass edge

Same network. Is there an edge used by every route? Routes avoiding D→F exist (via E), avoiding E→F exist (via D), avoiding A→B exist (A-C-…), avoiding A→C exist (A-B-…). No single edge is on every route. If the question asks "which road, if closed, reduces the routes the most", compute for each edge (ways to its tail) × (ways from its head): A→B: $1 \times (\text{ways B→F} = 6) = 6$; A→C: $1 \times 3 = 3$; E→F: $6 \times 1 = 6$; D→F: $3 \times 1 = 3$; B→C: $1 \times 3 = 3$; and so on. Closing A→B or E→F removes 6 of 9 routes.

*Why this method:* "routes using an edge" is a product; computing it per edge is a two-number lookup once the accumulation table exists in both directions.

### Example 4: Shortest route by settling

Two-way roads (km): A–B 4, A–C 2, C–B 1, B–D 5, C–D 7, B–E 3, D–E 2. Shortest A to E?

Start: A 0. Neighbours: B 4, C 2. Settle C (2): B becomes $\min(4, 2+1) = 3$; D becomes 9. Settle B (3): D becomes $\min(9, 3+5) = 8$; E becomes 6. Settle E (6). Shortest route A–C–B–E, 6 km.

*Why this method:* each settlement is final, so no route is ever reconsidered; "try A–B–E = 7" would have missed the 6.

### Example 5: Routes under a length cap

Same roads. How many routes from A to E (no repeated node) have length at most 10 km?

Enumerate from A: A–B–E (7 ✓), A–B–D–E (11 ✗), A–B–C–D–E (14 ✗), A–C–B–E (6 ✓), A–C–B–D–E (10 ✓), A–C–D–E (11 ✗), A–C–D–B–E (17 ✗). Three routes.

*Why this method:* with a cap, prune as soon as the running total exceeds it; the list stays short.

### Example 6: Flow conservation

Pipes carry water from source S to sink T through junctions P and Q: S→P carries 50, S→Q carries 30, P→Q carries $x$, P→T carries 35, Q→T carries $y$. Find $x$ and $y$.

At P: in 50 = out $x + 35$, so $x = 15$. At Q: in $30 + 15 = 45$ = out $y$, so $y = 45$. Check at T: $35 + 45 = 80 = 50 + 30$ ✓.

*Why this method:* conservation at each junction with one unknown is the single-gap rule from missing-data DI, applied to pipes.

### Example 7: Grid with a blocked corner

A 4-right, 3-up street grid; routes from the bottom-left to the top-right that avoid the intersection at (2, 2)?

Total $\binom{7}{3} = 35$. Through (2, 2): $\binom{4}{2} \times \binom{3}{1} = 6 \times 3 = 18$. Avoiding: $35 - 18 = 17$.

*Why this method:* subtraction of the "through" count is always easier than counting "avoiding" directly.

## Traps & speed tips

- Copy the diagram to an edge list; never re-read a drawing under time pressure.
- Check whether edges are one-way; a two-way edge can be used in either direction but still not twice in one route.
- Accumulate in an order where predecessors are done first; a node counted before its predecessors gives a wrong total.
- Routes through X = (to X) × (from X); avoiding X = total − through X.
- Shortest route: settle by distance; do not assume the fewest-edges route is shortest.
- With a length cap, prune partial routes early.
- Flow in = flow out at every junction; the source and sink are the exceptions.
- Grid formula $\binom{a+b}{a}$ counts only right/up moves; if diagonals or backtracking are allowed the formula does not apply.

## Checklist

You should be able to:

- Represent a network as an edge list with directions and weights.
- Count routes in a one-way network by accumulation, and routes through or avoiding a node or edge.
- Apply $\binom{a+b}{a}$ on a grid and handle blocked points by subtraction.
- Find a shortest route by settling nodes in order of distance.
- Enumerate routes under a length cap with pruning.
- Solve unknown flows by conservation at junctions.
