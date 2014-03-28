#Process - Part 03: Happy Trails

First, apologies for the corny title, but hey, it’s late.

I thought it would be worth making a quick note to go over how the trails are constructed, as they are the centerpiece of the overall effect.  I’d love to say that there is some special ingredient that makes this happen, but the fact is that it’s really very simple.

Once I’d added Unity’s built-in trail-renderer to the fish “prefab”, or master object, I tapered the end of the trail from .4 to .1, which gives the trail the appearance of being more of a tail. Add some interesting colors, and voila, a sinuous corpus worthy of a fish.

![](../project_images/part03-screenshot-01.jpg?raw=true) 

One final note, if you haven’t noticed already -- the length of the body/tail is directly proportional to the speed at which the fish is moving.  This makes perfect sense when you consider that the Trail Renderer is actually intended to accentuate the movement of flying objects, or really fast avatars.  The image below illustrates the effect when the fish are moving really fast.

And since we’ve brought up the topic of speed, the next post will delve into Differential Motion and how it’s applied in the context of **artifish**

![](../project_images/part03-trails-01.jpg?raw=true)