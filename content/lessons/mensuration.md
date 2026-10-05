# Mensuration (2D & 3D)

> One or two questions a year, mostly formula recall plus one idea: melt-and-recast (volume is conserved), a frustum, or a scaled shape. The trap is never the formula; it is using the wrong radius or forgetting one face.

## Core ideas

### 2D recap in one table

| Shape | Area | Perimeter / boundary |
|---|---|---|
| Rectangle $l \times b$ | $lb$ | $2(l + b)$ |
| Square side $s$ | $s^2$ | $4s$ |
| Triangle | $\frac12 bh$, Heron, $\frac12 ab\sin C$ | $a + b + c$ |
| Circle radius $r$ | $\pi r^2$ | $2\pi r$ |
| Sector angle $\theta$ | $\frac{\theta}{360}\pi r^2$ | arc $\frac{\theta}{360}2\pi r$ |
| Rhombus / kite | $\frac12 d_1 d_2$ | — |
| Trapezium | $\frac12(a + b)h$ | — |
| Regular hexagon | $\frac{3\sqrt3}{2}s^2$ | $6s$ |

Three circles of radius $r$ touching pairwise enclose a region of area $\sqrt3 r^2 - \frac{\pi r^2}{2}$: the equilateral triangle of side $2r$ minus three $60°$ sectors.

### 3D: volume, curved surface, total surface

Think of every solid as "area of cross-section × height" (prisms, cylinders) or one-third of that (cones, pyramids), except the sphere.

| Solid | Volume | Curved / lateral surface | Total surface |
|---|---|---|---|
| Cuboid $l, b, h$ | $lbh$ | $2h(l + b)$ | $2(lb + bh + hl)$ |
| Cube side $a$ | $a^3$ | $4a^2$ | $6a^2$ |
| Cylinder $r, h$ | $\pi r^2 h$ | $2\pi r h$ | $2\pi r(r + h)$ |
| Cone $r, h$, slant $l = \sqrt{r^2 + h^2}$ | $\frac13 \pi r^2 h$ | $\pi r l$ | $\pi r(r + l)$ |
| Sphere $r$ | $\frac43 \pi r^3$ | — | $4\pi r^2$ |
| Hemisphere $r$ | $\frac23 \pi r^3$ | $2\pi r^2$ | $3\pi r^2$ |
| Frustum radii $R, r$, height $h$, slant $l = \sqrt{h^2 + (R - r)^2}$ | $\frac13\pi h(R^2 + Rr + r^2)$ | $\pi(R + r)l$ | $\pi(R + r)l + \pi R^2 + \pi r^2$ |

Where the cone's curved surface comes from: unroll it into a sector of radius $l$ and arc length $2\pi r$; a sector's area is $\frac12 \times \text{arc} \times \text{radius} = \pi r l$. Where the cylinder's curved surface comes from: unroll it into a rectangle $2\pi r$ by $h$.

Diagonal of a cuboid: $\sqrt{l^2 + b^2 + h^2}$; of a cube, $a\sqrt3$. Sphere inside a cube of side $a$ has radius $\frac a2$; sphere around it has radius $\frac{a\sqrt3}{2}$.

### Melting and recasting

When a solid is melted into another, **volume is conserved**; surface area is not. Set the two volumes equal and solve for the unknown dimension. "How many small cones from one sphere" is volume divided by volume.

### Water rise

Dropping a solid into a cylinder of water raises the level by $\dfrac{\text{volume of solid}}{\pi R^2}$ where $R$ is the cylinder's radius. Pouring from one container to another is the same conservation.

### Scaling

If every length is multiplied by $k$, every area is multiplied by $k^2$ and every volume by $k^3$. A cone cut by a plane parallel to its base at half the height from the apex produces a small cone with $\frac18$ of the volume; the frustum below has $\frac78$. This is why frustum problems are often faster as "big cone minus small cone".

### Cube corners and cuts

Cutting off a corner of a cube through points at distance $a$ from the vertex along the three edges removes a tetrahedron of volume $\frac{a^3}{6}$ (a pyramid with a right-triangle base of area $\frac{a^2}{2}$ and height $a$). A cube cut by a plane through the midpoints of three edges meeting at a vertex loses $\frac{(s/2)^3}{6} = \frac{s^3}{48}$.

### Rolling a sheet

A rectangular sheet $L \times B$ rolled along its length makes a cylinder with circumference $L$ (so $r = \frac{L}{2\pi}$) and height $B$. Rolled the other way, circumference $B$, height $L$. The two cylinders have different volumes; the one with the larger circumference has the larger volume.

## Worked examples

### Example 1: cylinder, all three quantities
*A cylinder has radius 7 cm and height 10 cm. Find its volume, curved surface and total surface (take $\pi = \frac{22}{7}$).*

Volume $= \frac{22}{7} \times 49 \times 10 = 1540$ cm³. Curved $= 2 \times \frac{22}{7} \times 7 \times 10 = 440$ cm². Total $= 2 \times \frac{22}{7} \times 7 \times (7 + 10) = 44 \times 17 = 748$ cm².
Check total: $440 + 2 \times 154 = 748$ ✓.

*Why this method:* with $r = 7$ the $\frac{22}{7}$ cancels; CAT picks numbers like this.

### Example 2: cone
*A cone has radius 5 and height 12. Find its volume and curved surface area.*

$l = \sqrt{25 + 144} = 13$. Volume $= \frac13\pi(25)(12) = 100\pi$. Curved surface $= \pi \times 5 \times 13 = 65\pi$.

*Why this method:* compute the slant height first; it is always a Pythagorean triple in CAT.

### Example 3: melt and recast
*A solid sphere of radius 3 cm is melted and recast into a cylinder of radius 2 cm. Find the cylinder's height.*

$\frac43\pi(27) = \pi(4)h \Rightarrow 36\pi = 4\pi h \Rightarrow h = 9$ cm.

*Why this method:* volume conserved; one equation, one unknown.

### Example 4: frustum two ways
*A frustum has radii 8 and 2 and height 8. Find its volume.*

Formula: $\frac13\pi(8)(64 + 16 + 4) = \frac13\pi(8)(84) = 224\pi$.
Big-minus-small: the full cone has height $H$ with $\frac{2}{8} = \frac{H - 8}{H} \Rightarrow H = \frac{32}{3}$. Big cone $= \frac13\pi(64)\frac{32}{3} = \frac{2048\pi}{9}$; small cone $= \frac13\pi(4)\frac{8}{3} = \frac{32\pi}{9}$; difference $= \frac{2016\pi}{9} = 224\pi$ ✓.

*Why this method:* the formula is fastest; the subtraction checks it and is the only way when the question gives the whole cone.

### Example 5: water rise
*A cylindrical vessel of radius 10 cm contains water. A solid sphere of radius 5 cm is fully submerged. By how much does the water rise?*

Sphere volume $= \frac43\pi(125) = \frac{500\pi}{3}$. Rise $= \dfrac{500\pi/3}{100\pi} = \dfrac53 \approx 1.67$ cm.

*Why this method:* displaced volume equals the volume of the extra cylinder of water.

### Example 6: scaling and a cut
*A cone is cut by a plane parallel to its base at one-third of the height from the apex. Find the ratio of the volumes of the small cone and the frustum.*

The small cone is similar with scale $\frac13$, so its volume is $\frac{1}{27}$ of the whole. Frustum $= \frac{26}{27}$. Ratio $1 : 26$.

*Why this method:* $k^3$ for volumes; no formula needed.

## Traps & speed tips

- Cone and pyramid volumes carry the $\frac13$; cylinder and prism do not.
- Curved surface of a cone uses the **slant** height $l$, volume uses the **vertical** height $h$.
- Hemisphere total surface is $3\pi r^2$ (curved $2\pi r^2$ plus the flat disc).
- Melting conserves volume only; never equate surface areas.
- Rolling a sheet: the side that becomes the circumference determines the radius, and the radius is squared in the volume, so roll along the longer side for the larger volume.
- In scaling, the ratio of volumes is the **cube** of the ratio of lengths; a cone cut halfway has volumes $1 : 7$, not $1 : 1$.
- Use $\pi = \frac{22}{7}$ only when the question says so or the radius is a multiple of 7; otherwise leave $\pi$ in the answer or use $3.14$.
- Diagonal of a cube is $a\sqrt3$, of a face $a\sqrt2$.

## Checklist

- Write the volume and surface formulas for cube, cuboid, cylinder, cone, sphere, hemisphere and frustum.
- Find a cone's slant height and use it correctly.
- Solve melt-and-recast and water-rise problems by conserving volume.
- Compute frustum volume both by formula and by big-minus-small.
- Apply $k, k^2, k^3$ scaling to lengths, areas and volumes.
- Handle "sheet rolled into a cylinder" and "corner cut from a cube".
