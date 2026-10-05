# Coordinate Geometry

> One question in most years, rarely more. CAT coordinate geometry is arithmetic with a picture: distance, midpoint, slope, the area formula, and a circle's centre and radius. Lattice-point counting questions (CAT 2021) are the hard end.

## Core ideas

### Points and distance

A point is an ordered pair $(x, y)$: $x$ is the horizontal position, $y$ the vertical. The distance between $(x_1, y_1)$ and $(x_2, y_2)$ is, by Pythagoras on the horizontal and vertical gaps,

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}.$$

Use it to classify triangles: compute the three side lengths; equal sides mean isosceles, $a^2 + b^2 = c^2$ means right-angled.

### Dividing a segment

The point dividing $P(x_1, y_1)$ to $Q(x_2, y_2)$ **internally** in the ratio $m : n$ is

$$\left(\frac{mx_2 + nx_1}{m + n},\ \frac{my_2 + ny_1}{m + n}\right).$$

Reason: it is $\frac{m}{m+n}$ of the way from $P$ to $Q$ in both coordinates. The midpoint is the $1 : 1$ case: average the coordinates. The centroid of a triangle is the average of its three vertices.

### Lines

The **slope** of a line through two points is $\dfrac{y_2 - y_1}{x_2 - x_1}$, the rise per unit run. Horizontal lines have slope $0$; vertical lines have undefined slope (equation $x = c$). Two lines are parallel iff slopes are equal; perpendicular iff the product of slopes is $-1$ (e.g. $2$ and $-\frac12$).

Forms of a line:

- slope–intercept: $y = mx + c$ ($c$ is the $y$-intercept);
- point–slope: $y - y_1 = m(x - x_1)$;
- intercept form: $\dfrac{x}{a} + \dfrac{y}{b} = 1$, crossing the axes at $(a, 0)$ and $(0, b)$;
- general: $Ax + By + C = 0$, slope $-\dfrac{A}{B}$, intercepts $-\dfrac{C}{A}$ and $-\dfrac{C}{B}$.

The line $3x + 4y = 24$ has intercepts $8$ and $6$ and makes a triangle of area $\frac12 \times 8 \times 6 = 24$ with the axes.

Perpendicular distance from $(x_0, y_0)$ to $Ax + By + C = 0$:

$$\frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}.$$

Distance between parallel lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$: $\dfrac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}$.

Reflection of a point in the line $x + y = k$: swap and adjust, $(a, b) \to (k - b, k - a)$. In $y = x$: $(a, b) \to (b, a)$. In the $x$-axis: $(a, b) \to (a, -b)$.

### Area of a triangle (shoelace)

For vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$:

$$\text{Area} = \frac12\big|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\big|.$$

Three points are **collinear** iff this is zero (equivalently, the slopes between pairs agree). For a polygon, list the vertices in order and use the shoelace pattern: sum of $x_i y_{i+1}$ minus sum of $x_{i+1} y_i$, halved, absolute value.

### Circles

A circle with centre $(h, k)$ and radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$. The general form $x^2 + y^2 + 2gx + 2fy + c = 0$ has centre $(-g, -f)$ and radius $\sqrt{g^2 + f^2 - c}$: complete the square to see it. A line is tangent to the circle iff its distance from the centre equals $r$; it cuts a chord of length $2\sqrt{r^2 - d^2}$ when the distance is $d < r$.

### Lattice points

A lattice point has integer coordinates. Counting lattice points inside a triangle with vertices $(0,0), (n, 0), (0, n)$: interior points satisfy $x \ge 1, y \ge 1, x + y \le n - 1$, giving $1 + 2 + \dots + (n - 2) = \frac{(n-1)(n-2)}{2}$. **Pick's theorem** checks such counts: $\text{Area} = I + \frac{B}{2} - 1$ with $I$ interior and $B$ boundary lattice points. Boundary points on a segment from $(0,0)$ to $(a, b)$ number $\gcd(a, b) + 1$.

## Worked examples

### Example 1: classify a triangle
*Vertices $(0,0), (3,4), (-4,3)$. What kind of triangle, and its area?*

Sides: $5$, $5$, and $\sqrt{49 + 1} = \sqrt{50}$. Two equal sides, and $25 + 25 = 50$: isosceles right-angled. Area $= \frac12 \times 5 \times 5 = 12.5$.
Check by shoelace: $\frac12|0(4-3) + 3(3-0) + (-4)(0-4)| = \frac12|9 + 16| = 12.5$ ✓.

*Why this method:* three distances settle the type; the right angle gives the area without the formula.

### Example 2: section formula
*Find the point dividing $(1, 2)$ to $(6, 12)$ in the ratio $2 : 3$.*

$\left(\dfrac{2 \cdot 6 + 3 \cdot 1}{5}, \dfrac{2 \cdot 12 + 3 \cdot 2}{5}\right) = (3, 6)$.
Check: it should be $\frac25$ of the way: $x$ moves $5$ units in total, $\frac25 \times 5 = 2$, so $x = 3$ ✓.

*Why this method:* weights go on the **far** endpoint: the point nearer $P$ gets $P$'s coordinate weighted by $n$.

### Example 3: line through two points, then intercepts
*Find the line through $(1, 2)$ and $(3, 8)$ and the area it encloses with the axes.*

Slope $= \frac{8 - 2}{3 - 1} = 3$. Line: $y - 2 = 3(x - 1) \Rightarrow y = 3x - 1$.
Intercepts: $x = \frac13$, $y = -1$. Area $= \frac12 \times \frac13 \times 1 = \frac16$.

*Why this method:* slope, then point–slope; the intercepts are what you get by setting $y = 0$ and $x = 0$.

### Example 4: distance from a point to a line
*Find the distance from $(1, 1)$ to $3x - 4y + 12 = 0$, and decide whether the circle of radius 2 centred at $(1,1)$ meets the line.*

$\dfrac{|3 - 4 + 12|}{5} = \dfrac{11}{5} = 2.2 > 2$, so the line misses the circle.

*Why this method:* tangency and intersection questions are all "compare the distance with $r$".

### Example 5: circle from the general equation
*Find the centre and radius of $x^2 + y^2 - 4x + 6y - 3 = 0$ and the length of the chord it cuts on the $x$-axis.*

$(x - 2)^2 + (y + 3)^2 = 3 + 4 + 9 = 16$: centre $(2, -3)$, radius $4$.
On the $x$-axis ($y = 0$): $x^2 - 4x - 3 = 0 \Rightarrow x = 2 \pm \sqrt7$; chord $= 2\sqrt7$.
Check with the distance formula: centre is $3$ from the axis, so chord $= 2\sqrt{16 - 9} = 2\sqrt7$ ✓.

*Why this method:* completing the square is the one move; everything about the circle follows.

### Example 6: shoelace for a quadrilateral
*Find the area of the quadrilateral with vertices in order $(0,0), (4,0), (5,3), (1,4)$.*

$\sum x_i y_{i+1} = 0 \cdot 0 + 4 \cdot 3 + 5 \cdot 4 + 1 \cdot 0 = 32$.
$\sum y_i x_{i+1} = 0 \cdot 4 + 0 \cdot 5 + 3 \cdot 1 + 4 \cdot 0 = 3$.
Area $= \frac12|32 - 3| = 14.5$.
Check by splitting along $(0,0)$–$(5,3)$: triangles $(0,0),(4,0),(5,3)$ area $6$ and $(0,0),(5,3),(1,4)$ area $\frac12|20 - 3| = 8.5$; total $14.5$ ✓.

*Why this method:* shoelace handles any polygon once the vertices are in order around the boundary.

## Traps & speed tips

- Slope is $\frac{\Delta y}{\Delta x}$; swapping gives the reciprocal and a wrong perpendicular.
- Perpendicular slopes multiply to $-1$; "negative" alone is not enough.
- In the section formula the ratio $m : n$ is measured from the **first** point; reversing the ratio reverses the point.
- Always take the absolute value in the area formula, and halve it.
- Circle radius is $\sqrt{g^2 + f^2 - c}$ with $g, f$ being **half** the coefficients of $x, y$.
- $(x - h)^2 + (y - k)^2$: a plus inside means a negative coordinate of the centre.
- Diamond $|x| + |y| \le k$ has area $2k^2$; a square of side $s$ rotated $45°$ has diagonal $s\sqrt2$.
- Lattice points on a segment: $\gcd(\Delta x, \Delta y) + 1$ including endpoints.

## Checklist

- Compute distance, midpoint, section point and centroid.
- Write a line from two points or from a point and slope; read slope and intercepts from any form.
- Find the perpendicular distance from a point to a line and between parallel lines.
- Use the shoelace formula for triangles and quadrilaterals; test collinearity.
- Convert a circle's general equation to centre–radius form and find chord lengths.
- Count lattice points in simple triangles and check with Pick's theorem.
