# Selection with Constraints

> "A team of four is to be chosen from eight candidates subject to these conditions…" is a compact CAT format: short data, a handful of if-then rules, and questions like "which of these is a valid team?", "how many teams are possible?", "if P is selected, who else must be?". There is no arrangement to draw; the whole skill is handling conditional statements correctly and splitting cases on the right rule. Expect 3–5 questions when it appears, often as a quick set worth taking.

## Core ideas

### Selection = a yes/no for every candidate

A selection of $k$ from $n$ candidates is a list of $n$ yes/no decisions with exactly $k$ yeses. Represent it as a row of ticks and crosses:

```
P  Q  R  S  T  U
✓  ✗  ✓  ✓  ✗  ✗
```

Every rule is a statement about which rows are allowed. Your job is to find the allowed rows (or count them, or test one).

### The four rule shapes

1. **If–then:** "If P is selected, then Q is not." Written $P \Rightarrow \lnot Q$. It forbids exactly one pattern: P ✓ and Q ✓. It says *nothing* when P is ✗ (Q may be in or out).
2. **Only if:** "R is selected only if S is selected." This means $R \Rightarrow S$: R cannot be in without S. It does **not** mean S forces R. Forbidden pattern: R ✓, S ✗.
3. **Not both / at most one:** "T and U cannot both be selected." Forbidden pattern: T ✓, U ✓. (Both out is fine.)
4. **Exactly one / at least one:** "Exactly one of Q and S is selected." Forbidden patterns: both ✓ and both ✗. "At least one of Q and S" forbids only both ✗.

Also common: "If P is selected then Q is also selected" ($P \Rightarrow Q$), and "P and Q are selected together or not at all" ($P \Leftrightarrow Q$).

### The contrapositive

$A \Rightarrow B$ is the same statement as $\lnot B \Rightarrow \lnot A$. "If P then not Q" also reads "if Q then not P". "R only if S" also reads "if S is out, R is out". Every if-then rule fires in two directions, and most deductions in a selection set come from the contrapositive the solver forgot to write. Write both directions next to each rule at the start.

What an if-then rule does **not** say: $A \Rightarrow B$ does not give $B \Rightarrow A$ (the converse) or $\lnot A \Rightarrow \lnot B$ (the inverse). "If P is in, Q is out" says nothing about Q when P is out.

### Splitting on the strongest rule

The best rule to split on is an **exactly one** rule (two clean cases, each fixing two candidates) or a candidate who appears in many rules. Within each case, apply every rule that has been triggered, then count or test what remains. Use the count of required selections ($k$) as a hard check: if a case has forced more than $k$ in, or more than $n - k$ out, it dies.

### Answering the question types

- **"Which of the following is a valid selection?"** Test each option against every rule; the first broken rule kills it. Usually three options break one rule each.
- **"Which must be selected if X is selected?"** Set X ✓, fire every rule (and contrapositive) until nothing more changes, and read off the forced ✓s.
- **"How many selections are possible?"** Split into cases; in each case, count the free choices with $\binom{m}{r}$, subtracting any forbidden pairs.
- **"Which cannot be selected together?"** Look for a chain: $A \Rightarrow \lnot C$ directly, or $A \Rightarrow B \Rightarrow \lnot C$ through an intermediate.

### Procedure

1. List candidates; note $k$ (the team size) and any size constraints by category ("at least two women").
2. Rewrite each rule in symbols, with its contrapositive.
3. Choose the splitting rule (an exactly-one rule or the most-connected candidate).
4. In each case, chase forced ins and outs until stable; check the count $k$.
5. Enumerate or count the remaining freedom.
6. Answer each question from the case list; for "if" questions, add the condition and re-chase.

## Worked examples

Examples 1–3 use this set. Choose exactly three of P, Q, R, S, T, U. Rules: (1) if P then not Q; (2) R only if S; (3) not both T and U; (4) exactly one of Q, S.

### Example 1: Rewrite with contrapositives

(1) $P \Rightarrow \lnot Q$; also $Q \Rightarrow \lnot P$. (2) $R \Rightarrow S$; also $\lnot S \Rightarrow \lnot R$. (3) $T \Rightarrow \lnot U$; $U \Rightarrow \lnot T$. (4) exactly one of Q, S: Q ✓ means S ✗ and vice versa.

*Why this method:* the contrapositives of (1) and (2) are what make Case 2 below collapse instantly.

### Example 2: Test the options

Options: (a) P, Q, T; (b) R, T, U; (c) P, R, S; (d) Q, S, T.

(a) P and Q together — breaks (1). (b) R without S — breaks (2); also T with U — breaks (3). (c) P ✓ Q ✗ fine; R ✓ S ✓ fine; T, U both out fine; exactly one of Q, S: S only ✓. Valid. (d) Q and S both — breaks (4).

*Why this method:* each rule is a forbidden pattern; scanning an option for forbidden patterns is faster than reasoning about what "should" be in.

### Example 3: Count the selections

Split on rule (4).

*Case S ✓, Q ✗.* Rules (1) and (2) are satisfied whatever else happens (Q is out; S is in). Need two more from {P, R, T, U} with not both T and U: $\binom{4}{2} - 1 = 5$: PR, PT, PU, RT, RU.

*Case Q ✓, S ✗.* $Q \Rightarrow \lnot P$ (contrapositive of 1) and $\lnot S \Rightarrow \lnot R$ (contrapositive of 2). Only T and U remain for two slots, and rule (3) forbids both. Zero.

Total 5: PRS, PST, PSU, RST, RSU.

*Why this method:* the exactly-one rule gives two cases, one of which is killed by two contrapositives; the other is a simple count minus one forbidden pair.

### Example 4: "If X is selected, who else must be?"

Eight candidates A–H, team of four. Rules: $A \Rightarrow B$; $B \Rightarrow \lnot C$; $C$ or $D$ (at least one); $D \Rightarrow E$; $E \Rightarrow \lnot F$; $G \Leftrightarrow H$.

*Question.* If A is selected, which others must be selected?

A ✓ → B ✓ → C ✗ → (at least one of C, D) D ✓ → E ✓. That is A, B, D, E — four already, team full. F, G, H are all out (and E ✓ forces F ✗ anyway; G, H must both be out since they come as a pair and there is no room). Must be selected: B, D, E.

*Why this method:* chasing implications to a fixed point, then using the team size as a cap, settles everything without cases.

### Example 5: Category constraints

Pick four from three men (M1, M2, M3) and three women (W1, W2, W3) with at least two women; M1 and W1 are not both selected; if M2 is selected then W2 is selected.

Cases by women count: 2 women + 2 men, or 3 women + 1 man.

*3 women (W1, W2, W3) + 1 man:* W1 is in, so M1 is out; M2 needs W2 (in, fine); M3 free. Men: M2 or M3 → 2 teams.

*2 women + 2 men:* women pairs: W1W2, W1W3, W2W3. Men pairs: M1M2, M1M3, M2M3.
- W1W2: M1 out (W1 in) → men M2M3; M2 needs W2 (in) ✓ → 1.
- W1W3: M1 out → M2M3, but M2 needs W2 (out) ✗ → 0.
- W2W3: M1 allowed; M1M2 (M2 needs W2 ✓) ✓; M1M3 ✓; M2M3 ✓ → 3.

Total $2 + 1 + 0 + 3 = 6$.

*Why this method:* splitting on the category count first keeps every sub-case small, and the if-then rules are checked only where they can fire.

## Traps & speed tips

- "Only if" is $\Rightarrow$ in the direction *from* the restricted item: "R only if S" means R needs S, not S needs R.
- Write the contrapositive of every rule before starting; it is where the deductions hide.
- An if-then rule is silent when its "if" part is false. Do not infer the inverse.
- "Not both" allows neither; "exactly one" forbids neither; "at least one" allows both.
- Use the team size as a hard cap and a hard floor: too many forced ins or outs kills a case.
- For "valid selection" questions, test options against rules — do not solve the whole set.
- Pairs that come "together or not at all" count as one item of size 2 when filling slots.
- Keep the case list; later questions add conditions that select from it.

## Checklist

You should be able to:

- Translate if-then, only-if, not-both, exactly-one and at-least-one rules into forbidden patterns.
- Write the contrapositive of any rule and explain why the converse is not implied.
- Choose a splitting rule and chase forced ins/outs to a fixed point in each case.
- Use the team size and category counts as checks that kill cases.
- Test a proposed selection against every rule quickly.
- Count valid selections by combining $\binom{m}{r}$ with subtraction of forbidden pairs.
