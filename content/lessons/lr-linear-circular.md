# Linear & Circular Arrangements

> Seating sets are the oldest CAT LR format and still appear most years, now usually with a second attribute attached (profession, colour, city). The data is small, the questions are direct, and the whole set turns on one habit: apply the most restrictive clue first and never reason in prose. A well-chosen arrangement set is 12–15 marks in 10 minutes.

## Core ideas

### The frame

An **arrangement** places $n$ people into $n$ positions. Draw the positions before reading the clues:

- **Linear (a row):** boxes numbered 1 to $n$ left to right. State which way people face if "left/right" clues exist: if everyone faces north (towards you looking at the row from the south), *their* left is *your* left. If they face south, left and right are reversed. Most sets say "facing north"; if the set does not say, left and right are from the reader's view.
- **Circular (a round table):** $n$ seats numbered 1 to $n$ **clockwise**. Only relative positions matter, so you may fix one person in seat 1 without loss of generality. With people facing the **centre**, moving clockwise from a person is moving to their *left*; facing *away* from the centre reverses this. Many modern sets avoid left/right and say "immediately clockwise of" — then there is nothing to decode.
- **Opposite** at a round table with an even number of seats: seats $i$ and $i + n/2$. With 8 seats, opposite pairs are (1,5), (2,6), (3,7), (4,8). With an odd number there is no opposite.
- **Between:** "exactly one person between P and Q" means seats $i$ and $i \pm 2$; at a round table remember the wrap-around (seats 8 and 2 have exactly one person between them, namely seat 1).

### Clue types, from strongest to weakest

Rank the clues; use them in this order.

1. **Fixed position:** "A sits in seat 3", "A sits at the left end". Place it.
2. **Fixed relation to a placed person:** "D sits immediately clockwise of A", "F sits opposite A". Place it.
3. **Block clues:** "H sits next to both C and E" → the three form a block C-H-E or E-H-C. Treat the block as a single piece that must fit into consecutive empty seats.
4. **Gap clues:** "exactly one person between D and B" → two candidate seats for B. Branch only if nothing else resolves it.
5. **Negative clues:** "G is not next to F", "B is not at an end". These never place anyone; they eliminate branches. Apply them last, as a filter.
6. **Attribute clues:** "no two lawyers sit together", "the person opposite the doctor is an engineer". Often these resolve to a pattern: four of eight at a round table, none adjacent, forces alternation.

A useful rule: **every clue should be applied to the diagram, not reread**. Once used, tick it. The clues you have not ticked are the ones that resolve remaining branches.

### Branching discipline

When a clue leaves two options, write both diagrams side by side and continue with the next strongest clue on both. Kill a branch the moment it contradicts a clue. Never carry more than three branches; if you have four, you used a weak clue too early.

### Counting questions

"How many arrangements are possible?" means the set does not fully resolve. Count the surviving branches at the end and multiply by any independent freedoms (two people who can swap without violating anything count as 2).

### The attribute layer

Modern sets attach a second variable (profession, colour, age). Do the seating first, then the attribute, unless an attribute clue is itself a strong positional clue ("the two doctors sit opposite each other" is positional). Alternation patterns ("no two X adjacent" with half the people X) are the most common: at an even-sized round table this means X in all odd seats or all even seats, decided by one anchor ("Anil is an architect").

## Worked examples

Examples 1–4 use this set. Eight people — Anil, Bela, Chitra, Dev, Esha, Farhan, Gauri, Hari — around a round table facing the centre; four lawyers and four architects, no two lawyers adjacent; Anil is an architect. Clues: (1) Anil opposite Farhan; (2) Dev immediately clockwise of Anil; (3) exactly one person between Dev and Bela; (4) Hari next to both Chitra and Esha; (5) Chitra opposite Dev.

### Example 1: Fix and chain

Seats 1–8 clockwise, Anil in 1. (1) Farhan in 5. (2) Dev in 2. (5) Chitra opposite Dev → seat 6. Three clues, four people placed, no branching.

*Why this method:* fixed and opposite/adjacent-to-placed clues never branch; they come first.

### Example 2: Block, then gap

(4) Hari next to Chitra (6) and Esha: Hari in 5 or 7; 5 is Farhan, so Hari in 7, and Esha is Hari's other neighbour, seat 8. (3) Bela is two seats from Dev (2): seat 4 or seat 8; 8 is taken, so Bela in 4. Gauri takes the last seat, 3.

Final (clockwise): 1 Anil, 2 Dev, 3 Gauri, 4 Bela, 5 Farhan, 6 Chitra, 7 Hari, 8 Esha.

*Why this method:* the block clue had only one way to fit once Chitra was placed; the gap clue, which would have branched if used earlier, became a single step.

### Example 3: The attribute layer

Four lawyers, none adjacent, eight seats → lawyers occupy either all odd seats or all even seats. Anil (seat 1) is an architect, so architects are in odd seats: Anil, Gauri, Farhan, Hari; lawyers: Dev, Bela, Chitra, Esha.

*Why this method:* the alternation argument is a general fact; recognise it instead of testing cases.

### Example 4: Answering questions from the diagram

- Immediately anticlockwise of Farhan (5) → seat 4, Bela.
- Opposite Hari (7) → seat 3, Gauri.
- People between Bela (4) and Esha (8) clockwise → seats 5, 6, 7: three.
- "Esha sits next to Farhan" → false (Esha's neighbours are Hari and Anil).

*Why this method:* once the diagram exists, every question is a lookup; do not re-derive anything.

### Example 5: A linear row with a branch

Six people P, Q, R, S, T, U in a row facing north. Clues: P is at an end; exactly two people sit between P and Q; R is immediately to the right of Q; S is not adjacent to P; T is to the left of U.

Positions 1–6 left to right. P at 1 or 6.

*Branch A: P = 1.* Q at 4 (two between). R immediately right of Q → 5. S not adjacent to P → S not 2; S ∈ {3, 6}. T left of U: remaining people S, T, U in seats 2, 3, 6. If S = 3: T, U in 2, 6 → T = 2, U = 6. If S = 6: T, U in 2, 3 → T = 2, U = 3. Two arrangements.

*Branch B: P = 6.* Q at 3. R at 4. S not 5; S ∈ {1, 2}. T, U fill the rest with T left of U: S = 1 → T = 2, U = 5; S = 2 → T = 1, U = 5. Two arrangements.

Four arrangements in total. A question "Who is at position 5?" would have answer "R or U" — so the set would ask "Which of the following could be true?" instead.

*Why this method:* the end-position clue is strongest but binary; branching on it first keeps each branch short and the two branches symmetric.

### Example 6: Left/right with facing

Five people at a round table facing the centre; "B sits to the immediate left of A". Facing the centre, your left hand points clockwise, so B is immediately clockwise of A. If instead they face *away* from the centre, B is immediately anticlockwise of A. Always write the conversion at the top of your sheet: *centre-facing: left = clockwise*.

*Why this method:* decoding left/right once, in writing, prevents the single most common error in circular sets.

## Traps & speed tips

- Number the seats before reading the clues; fix one person at a round table.
- Facing the centre: left = clockwise. Facing out: left = anticlockwise. Write it down.
- "Between P and Q" at a round table has two directions; "exactly one between" gives two candidate seats.
- "Next to" means adjacent on either side; "immediately right of" is one side only.
- Odd number of seats: nobody is opposite anyone.
- Negative clues are filters, not placements; use them last.
- Tick each clue as you apply it; an unticked clue is your next move when stuck.
- "No two X adjacent" with half the seats X forces strict alternation at an even round table.
- If the questions say "could be" or "how many ways", expect multiple branches and keep all of them.

## Checklist

You should be able to:

- Draw the frame for a row or a round table and fix one person at a round table.
- Convert left/right into clockwise/anticlockwise for centre-facing and outward-facing seating.
- Rank clues by strength and apply fixed, relational and block clues before gap and negative clues.
- Branch on a binary clue, carry two diagrams, and kill a branch on the first contradiction.
- Apply an alternation argument for "no two adjacent" attribute clues.
- Answer every question of a resolved set by lookup, and count arrangements when it does not resolve.
