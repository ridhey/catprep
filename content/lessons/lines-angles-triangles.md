# Lines, Angles & Triangle Basics

> Triangles carry most of CAT geometry: two or three questions a year lean on angle chasing, the triangle inequality, special right triangles or an area formula. Everything in the circles and similarity lessons sits on top of this one.

## Core ideas

### Angles around lines

- Angles on a straight line add to $180°$ (a **linear pair**). Angles around a point add to $360°$.
- When two lines cross, **vertically opposite** angles are equal.
- When a line (**transversal**) crosses two **parallel** lines: corresponding angles are equal, alternate interior angles are equal, and co-interior angles (same side, between the lines) add to $180°$. Conversely, any one of these equalities proves the lines are parallel.

### The triangle angle facts

- Interior angles add to $180°$. Proof: draw the line through one vertex parallel to the opposite side; the two alternate angles plus the vertex angle lie on a straight line.
- **Exterior angle** $=$ sum of the two opposite interior angles. (It is $180°$ minus the adjacent interior angle.)
- In an **isosceles** triangle (two equal sides) the angles opposite the equal sides are equal, and the line from the apex to the midpoint of the base is also the altitude and the angle bisector.
- **Equilateral**: all angles $60°$; side $s$ gives height $\frac{\sqrt3}{2}s$ and area $\frac{\sqrt3}{4}s^2$.
- Larger side faces larger angle.
- If $I$ is the point where the angle bisectors of $B$ and $C$ meet, then $\angle BIC = 90° + \frac{A}{2}$. (Half of $B + C = 180° - A$ is $90° - \frac A2$; subtract from $180°$.)

### Triangle inequality

Any side is less than the sum of the other two and greater than their difference: $|b - c| < a < b + c$. For "how many integer values can the third side take" with sides 8 and 15: $7 < x < 23$, so $x = 8, \dots, 22$: 15 values.

### Right triangles

Pythagoras: $a^2 + b^2 = c^2$ with $c$ the hypotenuse. Memorise the triples $(3,4,5), (5,12,13), (7,24,25), (8,15,17), (9,40,41), (20,21,29)$ and their multiples; CAT uses them constantly.

Two special triangles:
- **45–45–90**: sides in ratio $1 : 1 : \sqrt2$. Half a square.
- **30–60–90**: sides in ratio $1 : \sqrt3 : 2$, the shortest side opposite $30°$. Half an equilateral triangle.

The converse of Pythagoras: if $a^2 + b^2 = c^2$ the angle opposite $c$ is right; if $a^2 + b^2 > c^2$ it is acute; if $<$, obtuse.

### Area, five ways

1. $\frac12 \times \text{base} \times \text{height}$.
2. $\frac12 ab \sin C$ (two sides and the included angle). For $C = 30°$ this is $\frac14 ab$; for $60°$, $\frac{\sqrt3}{4}ab$.
3. **Heron**: $\sqrt{s(s-a)(s-b)(s-c)}$ with $s = \frac{a+b+c}{2}$.
4. $r \cdot s$, where $r$ is the inradius (circle touching all three sides). Reason: join the incentre to the vertices; three triangles with height $r$ and bases $a, b, c$.
5. $\dfrac{abc}{4R}$, where $R$ is the circumradius (circle through all three vertices).

For a right triangle with legs $a, b$ and hypotenuse $c$: $r = \dfrac{a + b - c}{2}$ and $R = \dfrac{c}{2}$.

### Cevians: medians, bisectors, altitudes

- A **median** joins a vertex to the midpoint of the opposite side. The three medians meet at the **centroid**, which divides each median $2 : 1$ from the vertex, and splits the triangle into six equal areas. Length: $4m_a^2 = 2b^2 + 2c^2 - a^2$ (Apollonius).
- **Angle bisector theorem**: the bisector from $A$ meets $BC$ at $D$ with $\dfrac{BD}{DC} = \dfrac{AB}{AC}$.
- The three perpendicular bisectors meet at the **circumcentre**; the three altitudes at the **orthocentre**; the three angle bisectors at the **incentre**. In an equilateral triangle all four centres coincide.

### Cosine rule when angles are given

$a^2 = b^2 + c^2 - 2bc\cos A$. With $A = 60°$ this is $a^2 = b^2 + c^2 - bc$; with $120°$, $a^2 = b^2 + c^2 + bc$. CAT uses exactly these two cases, and you can always avoid the rule by dropping a perpendicular to make a 30–60–90 triangle.

## Worked examples

### Example 1: angle chasing with parallels
*Lines $l$ and $m$ are parallel. A transversal makes an angle of $65°$ with $l$. A second transversal crosses the first at a point between the lines, making a $40°$ angle with it, and meets $m$. What angle does the second transversal make with $m$ on the same side?*

Picture the triangle formed by the two transversals and line $m$. At the crossing point, the angle inside the triangle is $40°$. The first transversal meets $m$ at $65°$ (corresponding angle). The third angle of the triangle is $180° - 65° - 40° = 75°$.

*Why this method:* with parallels, transfer the known angle to the other line (corresponding/alternate), then use the angle sum.

### Example 2: triangle inequality count
*Two sides of a triangle are $8$ and $15$. How many integer values can the third side take if the triangle is obtuse with the longest side being the third side?*

Triangle exists for $7 < x < 23$. Obtuse with $x$ longest: $x^2 > 64 + 225 = 289 \Rightarrow x > 17$. So $x = 18, 19, 20, 21, 22$: five values.
Check $x = 17$: $289 = 289$, right-angled, excluded ✓.

*Why this method:* two conditions, two inequalities, intersect and count.

### Example 3: 30–60–90
*A right triangle has hypotenuse $10$ and one angle $30°$. Find its area.*

Side opposite $30°$ is half the hypotenuse: $5$. The other leg is $5\sqrt3$. Area $= \frac12 \times 5 \times 5\sqrt3 = \frac{25\sqrt3}{2} \approx 21.65$.
Check Pythagoras: $25 + 75 = 100$ ✓.

*Why this method:* ratio $1 : \sqrt3 : 2$ saves trigonometry.

### Example 4: Heron and the inradius
*A triangle has sides $7, 8, 9$. Find its area and inradius.*

$s = 12$. Area $= \sqrt{12 \times 5 \times 4 \times 3} = \sqrt{720} = 12\sqrt5 \approx 26.8$.
$r = \dfrac{\text{Area}}{s} = \dfrac{12\sqrt5}{12} = \sqrt5$.
Check by estimate: a $7, 8, 9$ triangle is nearly equilateral with side 8, area $\approx \frac{\sqrt3}{4}(64) \approx 27.7$; close ✓.

*Why this method:* Heron when three sides are given; $r = \text{Area}/s$ immediately after.

### Example 5: angle bisector theorem
*In triangle $ABC$, $AB = 8$, $AC = 12$, $BC = 15$. The bisector of angle $A$ meets $BC$ at $D$. Find $BD$.*

$\dfrac{BD}{DC} = \dfrac{8}{12} = \dfrac23$. So $BD = \dfrac{2}{5} \times 15 = 6$, $DC = 9$.
Check: $6 + 9 = 15$ ✓.

*Why this method:* the bisector splits the opposite side in the ratio of the adjacent sides; no angles needed.

### Example 6: cosine rule, or avoid it
*In triangle $ABC$, $\angle A = 60°$, $AB = 5$, $AC = 8$. Find $BC$.*

Cosine rule: $BC^2 = 25 + 64 - 2(5)(8)\cos 60° = 89 - 40 = 49$, so $BC = 7$.
Without the rule: drop the perpendicular from $B$ to $AC$. It lands $5\cos60° = 2.5$ from $A$ with height $5\sin 60° = \frac{5\sqrt3}{2}$. The foot is $8 - 2.5 = 5.5$ from $C$. $BC^2 = 5.5^2 + \frac{75}{4} = 30.25 + 18.75 = 49$ ✓.

*Why this method:* with $60°$ the cosine rule is just $b^2 + c^2 - bc$; the perpendicular method is the backup if you forget.

## Traps & speed tips

- Exterior angle equals the sum of the two **remote** interior angles, not the adjacent one.
- Triangle inequality is strict: $7 < x < 23$, so neither 7 nor 23 counts.
- In a 30–60–90 triangle the side opposite $30°$ is the **shortest** (half the hypotenuse), not $\sqrt3$ times something.
- Heron's formula: compute $s$ first, then the three differences; if any difference is negative, the triangle does not exist.
- Area $= rs$ uses the semi-perimeter $s$, not the perimeter.
- Angle bisector theorem gives a ratio of **segments of the opposite side**, in the order of the **adjacent sides**.
- Centroid divides medians $2:1$ from the vertex; the longer part touches the vertex.

## Checklist

- Chase angles through parallel lines and triangles without drawing more than once.
- Count integer third sides, including an acute/obtuse condition.
- Use $1:1:\sqrt2$ and $1:\sqrt3:2$ ratios in both directions.
- Compute area by base-height, $\frac12 ab\sin C$, Heron, and $rs$.
- Apply the angle bisector theorem and the $2:1$ centroid fact.
- Find the third side with the $60°$ and $120°$ cosine rules.
