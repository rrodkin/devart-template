To overstate the obvious, I’m getting a late start here, having only found out about the competition two days ago.  After some mild internal debate, I’ve decided to just go for it.  Many are espousing creative coding as a “new” art, but as with many new things, it’s been around for a while.  Like, since the 60’s.  Really.

But on to the project . . 

**Background**

As I mentioned in the description, I’d been working on an interactive version of John Whitney’s **Matrix III**.  If you haven’t seen it, and you’re even mildly interested in computer-generated art, [this is a must see](http://youtu.be/ZrKgyY5aDvA).

In the first segment, which lasts under two minutes, Whitney presents us with four sets of six white discs, which he proceeds to shuffle about the screen in what may initially seem like a chaotic fashion.  Just the opposite.  He is actually moving the discs along a spline (e.g. a track), and in a very precise way.

It took me a while to figure what the path was exactly, but after sketching and resketching (see below), it became apparent that the path consisted of a Lissajous curve. On a lark, I decided to apply Whitney’s well-known principle of Differential Motion to control the speed of each disc.  This basically means that if Disc 1 is moving at rate N, Disc 2 travels at rate N+1, Disc 3 at N+2, and so on.  Sure enough, this is what he was doing, and I’d nailed the effect.

Here are a few of the analytical sketches:

![Early analytical sketches while studying Matrix III][../project_images/artifish_sketch_03.jpg?raw=true “Early Sketches”)

![Early analytical sketches while studying Matrix III][../project_images/artifish_sketch_04.jpg?raw=true “Early Sketches”)