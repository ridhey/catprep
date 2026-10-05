# Quadrilaterals & Polygons

> Roughly one question a year, usually quick: an interior-angle count, a trapezium area that needs one hidden right triangle, or a regular hexagon that is secretly six equilateral triangles. These are the geometry marks you should never leave on the table.

## Core ideas

### Polygons: angles and diagonals

A polygon with $n$ sides can be cut into $n - 2$ triangles from one vertex, so its interior angles sum to $(n - 2) \times 180°$. Walking around any polygon you turn through a full circle, so the **exterior angles always sum to $360°$**, whatever $n$ is.

For a **regular** polygon (all sides and angles equal): each exterior angle is $\dfrac{360°}{n}$ and each interior angle is $180° - \dfrac{360°}{n}$. Going backwards: interior angle $156°$ means exterior $24°$, so $n = 15$. Always compute via the exterior angle; it is one division.

Number of diagonals: each of the $n$ vertices connects to $n - 3$ others (not itself, not its two neighbours), and each diagonal is counted twice, so $\dfrac{n(n-3)}{2}$. A 20-gon has $170$ diagonals.

### Quadrilaterals: the family tree

| Shape | Defining property | Diagonals | Area |
|---|---|---|---|
| Trapezium | one pair of parallel sides | — | $\frac12(a + b)h$ |
| Parallelogram | both pairs parallel | bisect each other | base × height $= ab\sin\theta$ |
| Rectangle | parallelogram with right angles | equal, bisect | $lb$ |
| Rhombus | parallelogram with equal sides | perpendicular, bisect | $\frac12 d_1 d_2$ |
| Square | rectangle and rhombus | equal, perpendicular, bisect | $s^2 = \frac12 d^2$ |
| Kite | two pairs of adjacent equal sides | perpendicular | $\frac12 d_1 d_2$ |

Why the rhombus area is $\frac12 d_1 d_2$: the diagonals cut it into four right triangles with legs $\frac{d_1}{2}, \frac{d_2}{2}$. The same right triangles give the side: $s^2 = \left(\frac{d_1}{2}\right)^2 + \left(\frac{d_2}{2}\right)^2$. Diagonals 12 and 16 give side 10 and area 96.

Any quadrilateral's area is $\frac12 d_1 d_2 \sin\phi$ where $\phi$ is the angle between the diagonals. Any quadrilateral splits into two triangles along a diagonal; when nothing else works, do that.

### Trapezium tricks

- Area $= \frac12(\text{sum of parallel sides}) \times \text{height}$, i.e. the **average of the parallel sides times the height**.
- To find the height from the four sides, drop perpendiculars from the ends of the shorter parallel side; the two right triangles at the ends have horizontal legs adding up to the difference of the parallel sides. Solve with Pythagoras (often a $5$–$12$–$13$ and a $9$–$12$–$15$).
- The segment joining the midpoints of the non-parallel sides (the **median**) is parallel to the bases and equals their average.
- The diagonals cut each other in the ratio of the parallel sides (similarity lesson).

### Parallelogram facts

- Opposite sides equal and parallel; opposite angles equal; adjacent angles supplementary.
- Each diagonal halves the area.
- Any point $P$ inside: $[PAB] + [PCD] = \frac12[ABCD]$ (the two triangles on opposite sides have heights adding to the full height).
- Sum of squares of the diagonals $= 2(a^2 + b^2)$.

### Regular hexagon

Side $s$: it is six equilateral triangles of side $s$ around the centre, so area $= 6 \times \frac{\sqrt3}{4}s^2 = \frac{3\sqrt3}{2}s^2$. The longest diagonal is $2s$, the shorter diagonal is $s\sqrt3$, each interior angle is $120°$. Joining alternate vertices gives an equilateral triangle with side $s\sqrt3$ and exactly half the hexagon's area.

### Midpoint quadrilateral

Join the midpoints of the sides of **any** quadrilateral: you get a parallelogram (each side is parallel to a diagonal by the midpoint theorem) with **half** the original area. If the original has perpendicular diagonals, the midpoint figure is a rectangle; if equal diagonals, a rhombus.

### Regular polygon and its circles

A regular $n$-gon with side $s$ has circumradius $R = \dfrac{s}{2\sin(180°/n)}$ and inradius (apothem) $r = \dfrac{s}{2\tan(180°/n)}$; area $= \frac12 \times \text{perimeter} \times r$. For CAT you need only the square ($R = \frac{s}{\sqrt2}$, $r = \frac s2$) and hexagon ($R = s$, $r = \frac{\sqrt3}{2}s$) cases.

## Worked examples

### Example 1: sides from an interior angle
*Each interior angle of a regular polygon is $144°$. How many sides?*

Exterior angle $= 36°$, so $n = 360/36 = 10$.
Check: $(10 - 2) \times 180 / 10 = 144$ ✓.

*Why this method:* exterior angles always total $360°$; one division beats solving $(n-2)180/n = 144$.

### Example 2: diagonals to angle sum
*A polygon has 54 diagonals. Find the sum of its interior angles.*

$\dfrac{n(n-3)}{2} = 54 \Rightarrow n^2 - 3n - 108 = 0 \Rightarrow (n - 12)(n + 9) = 0 \Rightarrow n = 12$.
Sum $= 10 \times 180° = 1800°$.
Check: $12 \times 9 / 2 = 54$ ✓.

*Why this method:* the diagonal formula is a quadratic in $n$; the negative root is discarded.

### Example 3: rhombus
*A rhombus has diagonals 12 and 16. Find its side, perimeter and area.*

Side $= \sqrt{6^2 + 8^2} = 10$. Perimeter $40$. Area $= \frac12 \times 12 \times 16 = 96$.
Check area another way: base 10, and height $= \frac{96}{10} = 9.6$, which is less than 10 as it must be ✓.

*Why this method:* diagonals of a rhombus are perpendicular bisectors; half-diagonals are the legs of a right triangle.

### Example 4: trapezium height from four sides
*A trapezium has parallel sides 25 and 11 and non-parallel sides 13 and 15. Find its area.*

Difference of parallel sides $= 14$. Drop perpendiculars from the ends of the side 11; the horizontal legs $x$ and $14 - x$ satisfy $13^2 - x^2 = 15^2 - (14 - x)^2 = h^2$.
$169 - x^2 = 225 - 196 + 28x - x^2 \Rightarrow 169 = 29 + 28x \Rightarrow x = 5$, $h = 12$ (a $5$–$12$–$13$ and a $9$–$12$–$15$).
Area $= \frac12(25 + 11)(12) = 216$.

*Why this method:* the two end triangles share the height; Pythagoras twice gives one linear equation.

### Example 5: point inside a parallelogram
*$ABCD$ is a parallelogram of area 120 and $P$ is a point inside it. Find $[PAB] + [PCD]$.*

The heights of $\triangle PAB$ and $\triangle PCD$ (measured to $AB$ and $CD$) add to the distance between $AB$ and $CD$, call it $h$. So $[PAB] + [PCD] = \frac12 \cdot AB \cdot h = \frac12 [ABCD] = 60$.

*Why this method:* same base length, heights that add up; the position of $P$ is irrelevant.

### Example 6: hexagon and its inner triangle
*A regular hexagon has area $54\sqrt3$. Find its side and the area of the triangle formed by joining alternate vertices.*

$\frac{3\sqrt3}{2}s^2 = 54\sqrt3 \Rightarrow s^2 = 36 \Rightarrow s = 6$.
The triangle on alternate vertices cuts off three "corner" triangles. Each corner triangle has two sides $s$ with included angle $120°$, so its area is $\frac12 s^2 \sin 120° = \frac{\sqrt3}{4}s^2 = 9\sqrt3$. Three of them: $27\sqrt3$. Inner triangle $= 54\sqrt3 - 27\sqrt3 = 27\sqrt3$, half the hexagon.
Check: inner triangle side $= s\sqrt3 = 6\sqrt3$, area $\frac{\sqrt3}{4}(108) = 27\sqrt3$ ✓.

*Why this method:* a regular hexagon decomposes into equilateral triangles; everything about it follows from the side.

## Traps & speed tips

- Exterior angles of any polygon sum to $360°$; interior angles sum to $(n-2)180°$. Do not mix them.
- Diagonals: $\frac{n(n-3)}{2}$, not $\binom{n}{2}$ (that counts the sides too).
- Trapezium area uses the **average** of the parallel sides, not their sum.
- Rhombus side is not half a diagonal; it is the hypotenuse of the half-diagonal triangle.
- A square is a rhombus and a rectangle; a rhombus need not have equal diagonals.
- Regular hexagon: circumradius equals the side. The "width" across flats is $s\sqrt3$, across corners $2s$.
- When a polygon's angles are in AP, check that the largest angle is under $180°$; otherwise the polygon is not convex and the formula does not apply.

## Checklist

- Convert between interior angle, exterior angle and number of sides in one step.
- Count diagonals and recover $n$ from a diagonal count.
- Compute areas of parallelogram, rhombus, trapezium and kite from the right inputs.
- Find a trapezium's height from its four sides.
- Use the hexagon's decomposition into equilateral triangles.
- State the midpoint-quadrilateral and point-inside-a-parallelogram area facts.
