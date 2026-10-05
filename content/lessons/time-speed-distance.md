# Time, Speed & Distance

> Two questions most years, sometimes three: meeting trains, boats, circular tracks, escalators, races. All of it is one relation, $d = s \times t$, used with the discipline of "which quantity is constant here?" Get that reflex and the chapter is a scoring area, not a time sink.

## Core ideas

### The relation and its three proportionalities

Distance $=$ Speed $\times$ Time. Hold one quantity fixed and the other two are tied:

- **Distance fixed:** speed and time are inversely proportional. $\frac{s_1}{s_2} = \frac{t_2}{t_1}$. Walk at $\frac{3}{4}$ of your usual speed and you take $\frac{4}{3}$ of the usual time.
- **Time fixed:** distance $\propto$ speed. Two people walking for the same time cover distances in the ratio of their speeds.
- **Speed fixed:** distance $\propto$ time.

Most questions are "distance fixed, compare two speeds". Write the time difference as $\frac{d}{s_1} - \frac{d}{s_2}$ and solve.

**Units:** $1$ km/h $= \frac{5}{18}$ m/s; $1$ m/s $= \frac{18}{5} = 3.6$ km/h. Convert before mixing metres with hours.

### Relative speed

Two objects moving along the same line:

- **Opposite directions:** they close the gap at $s_1 + s_2$.
- **Same direction:** the faster gains on the slower at $s_1 - s_2$.

"Time to meet" $=$ (initial gap) / (relative speed). This is the entire theory of trains crossing each other, cars meeting, and one person overtaking another.

### Trains

A train of length $L$ passing a pole (a point) travels $L$. Passing a platform of length $P$, it travels $L + P$. Passing another train of length $L_2$, the distance is $L + L_2$ at the relative speed. Always ask: what distance must the *front* of the train travel so that the *back* clears the obstacle?

### Boats and streams

Boat speed in still water $b$, stream speed $c$. Downstream speed $= b + c$; upstream $= b - c$. Therefore $b = \frac{\text{down} + \text{up}}{2}$ and $c = \frac{\text{down} - \text{up}}{2}$. A round trip of $d$ each way takes $\frac{d}{b + c} + \frac{d}{b - c}$.

### Average speed

Average speed $= \frac{\text{total distance}}{\text{total time}}$. For equal distances at $u$ and $v$ it is $\frac{2uv}{u + v}$; for equal times it is $\frac{u + v}{2}$. Never average the speeds without checking which is equal.

### Meeting point and the "after meeting" result

Two people start simultaneously from A and B toward each other, meet, and then take $t_1$ and $t_2$ to reach their destinations. Then

$$\frac{s_1}{s_2} = \sqrt{\frac{t_2}{t_1}}$$

Derive: let them meet after time $T$. Person 1 covered $s_1 T$ before meeting; person 2 covers that same stretch after meeting in $t_2$, so $s_1 T = s_2 t_2$. Similarly $s_2 T = s_1 t_1$. Divide: $\frac{s_1}{s_2} = \frac{s_2 t_2}{s_1 t_1} \Rightarrow \left(\frac{s_1}{s_2}\right)^2 = \frac{t_2}{t_1}$. Also $T = \sqrt{t_1 t_2}$.

### Circular tracks

Two runners on a track of length $L$ starting together:

- Opposite directions: they meet every $\frac{L}{s_1 + s_2}$.
- Same direction: the faster laps the slower every $\frac{L}{s_1 - s_2}$.
- Both back at the start together: LCM of their individual lap times.
- Number of distinct meeting points on the track (speeds in lowest-terms ratio $a : b$): $a + b$ for opposite directions, $|a - b|$ for the same direction.

### Races

"A beats B by 40 m or 8 seconds" means B covers the last 40 m in 8 s, so B's speed is 5 m/s. Then B's time for the full race follows, and A's is 8 s less. "A gives B a start of 40 m" means B runs 40 m less.

### Escalators

An escalator moving at $e$ steps per second with $N$ visible steps. A person walking up at $p$ steps/s reaches the top after $t = \frac{N}{p + e}$ seconds and has taken $pt$ steps. So $N = (\text{steps taken}) \times \frac{p + e}{p}$. Two walking speeds give two equations in $N$ and $e$.

## Worked examples

### Example 1 (CAT 2017)

*A man walks to the station at 12 km/h and reaches 10 minutes after the train has left. At 15 km/h he would have reached 10 minutes before departure. How far is the station?*

Distance fixed; time difference $= 20$ min $= \frac{1}{3}$ h.
$\frac{d}{12} - \frac{d}{15} = \frac{1}{3} \Rightarrow d \cdot \frac{5 - 4}{60} = \frac{1}{3} \Rightarrow d = 20$ km.

Check: $\frac{20}{12} = 100$ min; $\frac{20}{15} = 80$ min; difference 20 min. ✓

**Why this method:** the two arrival times straddle the departure, so the gap is $10 + 10$, not 10.

### Example 2

*A 150 m train crosses a pole in 9 seconds. How long will it take to cross a 300 m platform?*

Speed $= \frac{150}{9} = \frac{50}{3}$ m/s. Platform: distance $= 150 + 300 = 450$ m; time $= 450 \div \frac{50}{3} = 27$ s.

**Why this method:** the train must travel its own length plus the platform's.

### Example 3 (CAT 2020)

*Car 1 starts from A toward B and Car 2 from B toward A at the same time. After they meet, Car 1 takes 45 minutes to reach B and Car 2 takes 20 minutes to reach A. If Car 1's speed is 60 km/h, find Car 2's speed.*

$\frac{s_1}{s_2} = \sqrt{\frac{t_2}{t_1}} = \sqrt{\frac{20}{45}} = \sqrt{\frac{4}{9}} = \frac{2}{3}$. So $s_2 = 60 \times \frac{3}{2} = 90$ km/h.

Check via $T = \sqrt{45 \times 20} = 30$ min. Before meeting Car 1 covers $60 \times \frac{1}{2} = 30$ km; Car 2 covers that 30 km in 20 min at 90 km/h. ✓

**Why this method:** the square-root rule is a CAT standard; know the derivation so you trust it.

### Example 4

*A boat's speed in still water is 10 km/h and the stream flows at 2 km/h. How long does it take to go 24 km upstream and return?*

Up: $\frac{24}{8} = 3$ h. Down: $\frac{24}{12} = 2$ h. Total 5 h.

**Why this method:** two legs, two speeds; add times. The average speed is $\frac{48}{5} = 9.6$, less than 10, as it must be.

### Example 5

*Two runners start together from the same point on a 1,200 m circular track, running in opposite directions at 8 m/s and 4 m/s. When do they meet for the third time?*

Opposite directions: relative speed 12 m/s. They meet every $\frac{1200}{12} = 100$ s. Third meeting at 300 s.

**Why this method:** each meeting means their combined distance has grown by one lap.

### Example 6

*In a 1 km race, A beats B by 40 m or 8 seconds. How long does A take to finish?*

B runs 40 m in 8 s, so B's speed $= 5$ m/s and B takes $\frac{1000}{5} = 200$ s. A finishes 8 s earlier: 192 s.

**Why this method:** "40 m or 8 s" is a speed statement about the loser.

### Example 7

*A man walking up a moving escalator at 2 steps per second takes 30 steps to reach the top. Walking at 1 step per second, he takes 20 steps. How many steps are visible when the escalator is stationary?*

Let the escalator move $e$ steps/s and have $N$ steps.
Case 1: time $= \frac{30}{2} = 15$ s; $N = 30 + 15e$.
Case 2: time $= \frac{20}{1} = 20$ s; $N = 20 + 20e$.
$30 + 15e = 20 + 20e \Rightarrow e = 2$; $N = 60$.

Check: case 2, 20 s, escalator contributes 40, man 20: 60 ✓.

**Why this method:** steps visible $=$ steps you climb $+$ steps the escalator brings up during your trip. Time is the link.

## Traps & speed tips

- **Decide what is constant first** (distance, time or speed), then write the proportion.
- **"Late by 10, early by 10" is a 20-minute gap.**
- **Trains:** add lengths. Pole $=$ length; platform $=$ length $+$ platform; two trains $=$ sum of lengths at relative speed.
- **Same direction $\Rightarrow$ subtract speeds; opposite $\Rightarrow$ add.**
- **Average speed:** equal distances $\to$ harmonic mean $\frac{2uv}{u + v}$.
- **Boats:** still-water speed is the average of up and down speeds; stream is half the difference.
- **Meet-then-continue:** $s_1/s_2 = \sqrt{t_2/t_1}$, meeting time $= \sqrt{t_1 t_2}$.
- **Circular track, same point:** first meeting $= L / (\text{relative speed})$; back at start together $=$ LCM of lap times.
- **Units:** multiply km/h by $\frac{5}{18}$ to get m/s; common speeds: 36 km/h $= 10$ m/s, 54 km/h $= 15$ m/s, 72 km/h $= 20$ m/s, 90 km/h $= 25$ m/s.
- Use the **ratio of speeds** whenever the answer is a ratio or a percentage; absolute distances cancel.

## Checklist

- Solve "two speeds, time difference given" for the distance in one line.
- Handle trains crossing poles, platforms and each other.
- Compute boat/stream speeds from up and down data.
- Apply and derive the $\sqrt{t_2 / t_1}$ rule for two travellers meeting.
- Work out meeting times on a circular track in both directions.
- Translate "beats by $x$ m or $t$ s" into speeds.
- Set up two equations for an escalator problem.
