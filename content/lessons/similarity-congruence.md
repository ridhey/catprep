# Similar Triangles

> Similarity is the engine behind most "find the length" questions in CAT geometry: one or two questions a year reduce to spotting two triangles with the same angles and writing one ratio. The right-triangle altitude relations and the trapezium-diagonal picture are repeat offenders.

## Core ideas

### Congruent versus similar

Two triangles are **congruent** if they are identical in shape and size: all three sides and all three angles match. Tests: SSS, SAS, ASA (equivalently AAS), and RHS for right triangles. Congruence tells you that corresponding sides are *equal*.

Two triangles are **similar** if they have the same shape but possibly different size: all three angles match, and corresponding sides are in the same ratio $k$ (the scale factor). Tests: **AA** (two angles equal, so the third is too), SSS (three sides in proportion), SAS (two sides in proportion and the included angle equal). In CAT, AA does almost all the work: find two equal angles and you are done.

Once $\triangle ABC \sim \triangle PQR$ with scale factor $k = \dfrac{PQ}{AB}$:

- every length in the second triangle is $k$ times the corresponding length in the first (sides, altitudes, medians, inradius, circumradius, perimeter);
- **areas are in ratio $k^2$**, because area is length × length.

Write the correspondence in order ($A \leftrightarrow P$, $B \leftrightarrow Q$, $C \leftrightarrow R$) before writing any ratio. Most similarity errors are correspondence errors.

### Where equal angles come from

- A shared angle (two triangles with a common vertex).
- Parallel lines (corresponding and alternate angles).
- Vertically opposite angles.
- Right angles.
- Angles in the same segment of a circle (next lesson).

### Basic proportionality theorem (Thales)

If $DE \parallel BC$ with $D$ on $AB$ and $E$ on $AC$, then $\triangle ADE \sim \triangle ABC$ (AA: common angle $A$, corresponding angles at $D$ and $B$). Hence

$$\frac{AD}{DB} = \frac{AE}{EC}, \qquad \frac{AD}{AB} = \frac{AE}{AC} = \frac{DE}{BC}.$$

The converse holds: if a line divides two sides in the same ratio, it is parallel to the third side. The **midpoint theorem** is the case $AD = DB$: $DE = \frac12 BC$.

Area bookkeeping: if $\dfrac{AD}{AB} = \dfrac{m}{n}$, then $\dfrac{[ADE]}{[ABC]} = \dfrac{m^2}{n^2}$ and the trapezium $DBCE$ has the remaining $\dfrac{n^2 - m^2}{n^2}$.

### Right triangle with the altitude to the hypotenuse

In right triangle $ABC$ (right angle at $B$) with $BD \perp AC$, the altitude creates three similar triangles: $\triangle ADB \sim \triangle BDC \sim \triangle ABC$. Writing the ratios gives three relations worth memorising:

$$BD^2 = AD \cdot DC, \qquad AB^2 = AD \cdot AC, \qquad BC^2 = DC \cdot AC,$$

and the altitude itself is $BD = \dfrac{AB \cdot BC}{AC}$ (twice the area divided by the hypotenuse). With legs $6, 8$: hypotenuse $10$, altitude $4.8$, segments $3.6$ and $6.4$. Check: $3.6 \times 6.4 = 23.04 = 4.8^2$ ✓.

### The crossed-lines (two poles) result

Two vertical poles of heights $a$ and $b$ stand some distance apart. The line from the top of each to the foot of the other cross at height $h$ with

$$\frac1h = \frac1a + \frac1b, \quad\text{i.e.}\quad h = \frac{ab}{a + b},$$

independent of the distance between them. Derivation: if the crossing point is at horizontal fraction $t$ of the way from pole $a$, similar triangles give $h = a(1 - t) = bt$, so $t = \frac{a}{a+b}$ and $h = \frac{ab}{a+b}$.

### Trapezium diagonals

In trapezium $ABCD$ with $AB \parallel CD$, the diagonals meet at $O$. Triangles $AOB$ and $COD$ are similar (alternate angles), with ratio $\dfrac{AB}{CD}$. So $\dfrac{AO}{OC} = \dfrac{BO}{OD} = \dfrac{AB}{CD}$, areas $[AOB] : [COD] = AB^2 : CD^2$, and the two side triangles $AOD$ and $BOC$ have **equal** areas, each equal to $\sqrt{[AOB] \cdot [COD]}$.

### Ratios of areas without similarity

Triangles with the same height have areas in the ratio of their bases. This simple fact, combined with similarity, settles most "ratio of areas" problems. If $D$ divides $BC$ in ratio $m : n$, then $[ABD] : [ADC] = m : n$.

## Worked examples

### Example 1: Thales
*In triangle $ABC$, $D$ on $AB$ and $E$ on $AC$ with $DE \parallel BC$. $AD = 4$, $DB = 6$, $DE = 6$. Find $BC$.*

$\dfrac{DE}{BC} = \dfrac{AD}{AB} = \dfrac{4}{10}$, so $BC = 15$.
Check: scale factor from $ADE$ to $ABC$ is $2.5$, and $6 \times 2.5 = 15$ ✓.

*Why this method:* $DE \parallel BC$ is a flashing sign for $\triangle ADE \sim \triangle ABC$; use the ratio to the whole side $AB$, not to $DB$.

### Example 2: area ratio
*With the same figure, $AD : DB = 2 : 3$. Find the ratio of the area of $\triangle ADE$ to the area of trapezium $DBCE$.*

$AD : AB = 2 : 5$, so $[ADE] : [ABC] = 4 : 25$. Trapezium $= 25 - 4 = 21$. Ratio $4 : 21$.

*Why this method:* square the length ratio for areas, and subtract for the leftover piece.

### Example 3: altitude to the hypotenuse
*In right triangle $ABC$ (right angle at $B$), the altitude $BD$ to the hypotenuse makes $AD = 8$ and $DC = 2$. Find $AB$ and $BD$.*

$BD^2 = 8 \times 2 = 16 \Rightarrow BD = 4$. $AB^2 = AD \cdot AC = 8 \times 10 = 80 \Rightarrow AB = 4\sqrt5$.
Check: $BC^2 = 2 \times 10 = 20$; $AB^2 + BC^2 = 100 = AC^2$ ✓.

*Why this method:* three memorised relations; no need to redraw the similar triangles each time.

### Example 4: shadows
*A 1.8 m tall person casts a 2.4 m shadow. At the same moment a pole casts a 10 m shadow. How tall is the pole?*

Sun rays are parallel, so the two right triangles are similar: $\dfrac{\text{height}}{\text{shadow}} = \dfrac{1.8}{2.4} = 0.75$. Pole $= 0.75 \times 10 = 7.5$ m.

*Why this method:* same angle of elevation, so same height-to-shadow ratio.

### Example 5: crossed poles
*Two poles of heights 10 m and 15 m stand 12 m apart. Lines from the top of each to the foot of the other cross at what height?*

$h = \dfrac{10 \times 15}{10 + 15} = \dfrac{150}{25} = 6$ m.
Check with the derivation: $t = \frac{10}{25} = 0.4$; $h = 15 \times 0.4 = 6$ and $10 \times 0.6 = 6$ ✓. The 12 m was never needed.

*Why this method:* the distance apart is a distractor; the result depends only on the heights.

### Example 6: trapezium diagonals
*Trapezium $ABCD$ has $AB \parallel CD$, $AB = 9$, $CD = 6$, and diagonal $AC = 15$. The diagonals meet at $O$. Find $AO$, and the ratio of the areas of triangles $AOB$ and $COD$.*

$\triangle AOB \sim \triangle COD$ with ratio $9 : 6 = 3 : 2$, so $AO : OC = 3 : 2$ and $AO = \frac35 \times 15 = 9$. Areas: $9 : 4$.

*Why this method:* alternate angles from the parallel sides give AA immediately; the diagonal is split in the same ratio as the parallel sides.

## Traps & speed tips

- Write the correspondence of vertices before any ratio. $\triangle ADE \sim \triangle ABC$ means $DE \leftrightarrow BC$, not $DE \leftrightarrow AB$.
- Length ratio $k$ gives area ratio $k^2$ (and volume ratio $k^3$ for solids).
- In Thales, $\dfrac{AD}{DB} = \dfrac{AE}{EC}$ but $\dfrac{DE}{BC} = \dfrac{AD}{AB}$ (whole side), never $\dfrac{AD}{DB}$.
- Equal areas of the side triangles in a trapezium ($[AOD] = [BOC]$) is a favourite hidden fact.
- Two triangles sharing a vertex and having bases on the same line have areas in the ratio of their bases.
- "Congruent" implies equal; "similar" implies proportional. Do not equate sides of similar triangles.
- The altitude to the hypotenuse is the geometric mean of the two segments it creates.

## Checklist

- State the AA test and find the two equal angles in a figure within seconds.
- Use Thales in all three ratio forms.
- Write the three altitude-to-hypotenuse relations from memory.
- Convert a length ratio to an area ratio and back.
- Apply the crossed-poles formula and the trapezium-diagonal ratios.
- Combine "same height, ratio of bases" with similarity in area problems.
