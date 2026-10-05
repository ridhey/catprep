# Circles

> One or two circle questions a year, and CAT likes them at medium-hard: a chord and a tangent, an inscribed angle, or a sector area compared with a triangle (CAT 2018 asked exactly that). Every circle question is solved by one of about eight facts; the skill is picking the right one in ten seconds.

## Core ideas

### Vocabulary

A circle is the set of points at a fixed distance (the **radius** $r$) from the **centre** $O$. A **chord** joins two points on the circle; the longest chord is a **diameter** ($2r$). An **arc** is a piece of the circumference; a **sector** is the pizza slice between two radii and an arc; a **segment** is the region between a chord and its arc. A **tangent** touches the circle at exactly one point; a **secant** cuts it at two.

Circumference $= 2\pi r$; area $= \pi r^2$. A sector with central angle $\theta$ (degrees) is the fraction $\frac{\theta}{360}$ of the circle: arc length $\frac{\theta}{360} \cdot 2\pi r$, area $\frac{\theta}{360} \cdot \pi r^2$. A segment's area is the sector minus the triangle $OAB$, i.e. $\frac{\theta}{360}\pi r^2 - \frac12 r^2 \sin\theta$.

### Fact 1: perpendicular from the centre bisects a chord

If $OM \perp AB$ with $M$ on chord $AB$, then $M$ is the midpoint of $AB$, and $r^2 = OM^2 + \left(\frac{AB}{2}\right)^2$. Chord 24 at radius 13: $OM = \sqrt{169 - 144} = 5$. Equal chords are equidistant from the centre; the longer chord is nearer the centre.

### Fact 2: angle at the centre is twice the angle at the circumference

An arc $AB$ subtends $\angle AOB$ at the centre and $\angle ACB$ at any point $C$ on the remaining arc; $\angle AOB = 2\angle ACB$. Three consequences:

- Angles in the same segment are equal (every $C$ on the same arc sees $AB$ at the same angle).
- **Angle in a semicircle is $90°$** (Thales): a diameter subtends a right angle anywhere on the circle. Conversely, a right triangle's hypotenuse is a diameter of its circumcircle.
- If the chord subtends $100°$ at the centre, it subtends $50°$ on the major arc and $180° - 50° = 130°$ on the minor arc.

### Fact 3: cyclic quadrilaterals

A quadrilateral whose four vertices lie on a circle has **opposite angles summing to $180°$** (each pair of opposite angles sits on complementary arcs). An exterior angle equals the interior opposite angle. Converse: if opposite angles are supplementary, the four points are concyclic. Also **Ptolemy**: $AC \cdot BD = AB \cdot CD + AD \cdot BC$ for a cyclic quadrilateral.

### Fact 4: tangents

- A tangent is perpendicular to the radius at the point of contact.
- The two tangents from an external point $P$ are equal in length: $PA = PB$, and $PA^2 = PO^2 - r^2$.
- If the chord $AB$ subtends $\theta$ at the centre, the tangents at $A$ and $B$ meet at an angle $180° - \theta$ (the quadrilateral $OAPB$ has two right angles).
- **Alternate segment theorem**: the angle between a tangent and a chord through the point of contact equals the inscribed angle on the opposite side of the chord.

### Fact 5: power of a point

For a point $P$ and a circle, every line through $P$ cutting the circle at $X$ and $Y$ has the same product $PX \cdot PY$:

- $P$ inside, chords $AB$ and $CD$ through $P$: $PA \cdot PB = PC \cdot PD$.
- $P$ outside, secants $PAB$ and $PCD$: $PA \cdot PB = PC \cdot PD$.
- $P$ outside, tangent $PT$ and secant $PAB$: $PT^2 = PA \cdot PB$.

Why: in each case two triangles are similar (equal angles from the same arc). This is the chord-tangent tool the syllabus names; it turns "find the length" into one multiplication.

### Fact 6: two circles

For circles with radii $r_1 \ge r_2$ and centres $d$ apart: they touch externally if $d = r_1 + r_2$, internally if $d = r_1 - r_2$, intersect if $r_1 - r_2 < d < r_1 + r_2$. Common tangents: the **direct** (external) common tangent has length $\sqrt{d^2 - (r_1 - r_2)^2}$; the **transverse** (internal) one has length $\sqrt{d^2 - (r_1 + r_2)^2}$. Both come from a right triangle whose hypotenuse joins the centres. For externally touching circles the direct tangent length is $2\sqrt{r_1 r_2}$.

### Inradius and circumradius

Right triangle with legs $a, b$, hypotenuse $c$: $r = \frac{a + b - c}{2}$, $R = \frac c2$. Equilateral with side $s$: $R = \frac{s}{\sqrt3}$, $r = \frac{s}{2\sqrt3}$, so $R = 2r$. General: area $= rs = \frac{abc}{4R}$.

## Worked examples

### Example 1: chord distance
*A chord of length 24 cm is drawn in a circle of radius 13 cm. How far is it from the centre?*

Half-chord $12$, radius $13$: distance $= \sqrt{169 - 144} = 5$ cm. (A $5$–$12$–$13$ triangle.)

*Why this method:* perpendicular from the centre, half the chord, Pythagoras. Every chord-distance question is this.

### Example 2: inscribed angles
*Chord $AB$ subtends $100°$ at the centre. Points $C$ and $D$ lie on the major and minor arcs respectively. Find $\angle ACB$ and $\angle ADB$.*

$\angle ACB = 50°$ (half the central angle). $ACBD$ is cyclic, so $\angle ADB = 180° - 50° = 130°$.
Check: the reflex central angle is $260°$, half of which is $130°$ ✓.

*Why this method:* the doubling rule, then the cyclic-quadrilateral supplement.

### Example 3: tangent length and angle between tangents
*From a point $P$ at distance 13 cm from the centre of a circle of radius 5 cm, tangents $PA$ and $PB$ are drawn. Find $PA$ and $\angle APB$.*

$PA = \sqrt{169 - 25} = 12$ cm. In right triangle $OAP$, $\sin(\angle APO) = \frac{5}{13}$ and $\cos(\angle AOP) = \frac{5}{13}$. The central angle $AOB = 2\angle AOP$, and $\angle APB = 180° - \angle AOB$. Numerically $\angle AOP \approx 67.4°$, so $\angle APB \approx 180° - 134.8° = 45.2°$.

*Why this method:* radius ⟂ tangent gives a right triangle; the quadrilateral $OAPB$ has two right angles so the other two angles are supplementary.

### Example 4: intersecting chords
*Chords $AB$ and $CD$ meet at $P$ inside a circle with $AP = 3$, $PB = 8$, $CP = 4$. Find $PD$.*

$PA \cdot PB = PC \cdot PD \Rightarrow 24 = 4 \cdot PD \Rightarrow PD = 6$.

*Why this method:* power of a point. Triangles $APC$ and $DPB$ are similar (angles in the same segment), which is where the product rule comes from.

### Example 5: tangent–secant
*From external point $P$, a tangent $PT$ and a secant meeting the circle at $A$ (nearer) and $B$ are drawn. $PA = 4$, $AB = 5$. Find $PT$.*

$PT^2 = PA \cdot PB = 4 \times 9 = 36 \Rightarrow PT = 6$.
Check by similarity: $\triangle PTA \sim \triangle PBT$ (alternate segment theorem gives the equal angle), so $\dfrac{PT}{PB} = \dfrac{PA}{PT}$ ✓.

*Why this method:* $PB$ is the whole secant ($PA + AB$), not the chord; the product uses both distances from $P$.

### Example 6: common tangents
*Circles of radii 8 and 3 have centres 13 apart. Find the lengths of the direct and transverse common tangents.*

Direct: $\sqrt{13^2 - (8 - 3)^2} = \sqrt{169 - 25} = 12$.
Transverse: $\sqrt{13^2 - (8 + 3)^2} = \sqrt{169 - 121} = \sqrt{48} = 4\sqrt3 \approx 6.93$.
Both exist because $13 > 11$ (the circles are apart).

*Why this method:* drop a perpendicular from the smaller centre to the larger radius (direct) or extend the smaller radius backwards (transverse); either way a right triangle with hypotenuse $d$ appears.

## Traps & speed tips

- The inscribed angle is half the central angle **on the same arc**; on the other arc it is $180°$ minus that.
- Angle in a semicircle: whenever you see a diameter and a point on the circle, there is a right angle.
- In power of a point with a secant, multiply the **two distances from $P$** ($PA$ and $PB$), not $PA \cdot AB$.
- Tangent length from a point: $\sqrt{d^2 - r^2}$, with $d$ the distance to the **centre**.
- Sector area uses $\theta/360$; segment area subtracts the triangle $\frac12 r^2 \sin\theta$.
- Equal tangents from an external point: use it to set up equations in "tangent lengths" for a triangle with an incircle.
- Direct common tangent uses $(r_1 - r_2)$; transverse uses $(r_1 + r_2)$.
- Cyclic quadrilateral: **opposite** angles sum to $180°$, not adjacent ones.

## Checklist

- Find a chord length, its distance from the centre, or the radius from the other two.
- Use the doubling rule and the semicircle right angle.
- Apply opposite-angle and exterior-angle facts in a cyclic quadrilateral.
- Compute tangent lengths and use the alternate segment theorem.
- Apply power of a point in all three configurations.
- Compute direct and transverse common tangent lengths and sector/segment areas.
