To overstate the obvious, I’m getting a late start here, having only found out about the competition two days ago.  After some mild internal debate, I’ve decided to just go for it.  Many are espousing creative coding as a “new” art, but as with many new things, it’s been around for a while.  Like, since the 60’s.  Really.

But on to the project . . 

##Background

As I mentioned in the description, I’d been working on an interactive version of John Whitney’s **Matrix III**.  If you haven’t seen it, and you’re even mildly interested in computer-generated art, [this is a must see](http://youtu.be/ZrKgyY5aDvA).

In the first segment, which lasts under two minutes, Whitney presents us with four sets of six white discs, which he proceeds to shuffle about the screen in what may initially seem like a chaotic fashion.  Just the opposite.  He is actually moving the discs along a spline (e.g. a track), and in a very precise way.

It took me a while to figure what the path was exactly, but after sketching and resketching (see below), it became apparent that the path consisted of a Lissajous curve. On a lark, I decided to apply Whitney’s well-known principle of Differential Motion to control the speed of each disc.  This basically means that if Disc 1 is moving at rate N, Disc 2 travels at rate N+1, Disc 3 at N+2, and so on.  Sure enough, this is what he was doing, and I’d nailed the effect.

Here are a few of the analytical sketches:

![Early analytical sketches while studying Matrix III][../project_images/artifish_sketch_03.jpg?raw=true “Early Sketches”)

![Early analytical sketches while studying Matrix III][../project_images/artifish_sketch_04.jpg?raw=true “Early Sketches”)

##Artifish is Born

As happy as I was to have “cracked” Whitney’s technique, it quickly became obvious why Whitney had limited this initial sequence to under two minutes — watching white discs float around on a screen gets old very fast.  I truly don’t remember what prompted me to try it, but on a whim I decided to attach trail renderers to the discs.  These come “for free” in Unity, and in are normally used on projectiles in video games to accentuate motion (think bullets, birds, etc.).  By default, the trails are purely rectangular, and colorless, and, when added to an object, initially look like a flag waving behind the object.  I applied some colors, and then decided to taper the end down so it didn’t look so abrupt.  And when I started the discs moving, there they were . . . artifish!

Despite the objects being so simple — again, a disc and a “trail”, the result was surprisingly pleasant.  Best of all, the trails helped to emphasize the effect of the Differential Motion, as well has highlight some interesting properties that were neither apparent nor presented in Whitney’s film, because he didn’t run the sequence far enough for it to complete a full cycle.  More on that in a future post.

##Next Post . . .

Now that you have some background, it’s time to define the scope for this project.  Aside from the fact that there are barely two days left, there is precious little time until July . . . 