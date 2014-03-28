# artifish

##Author
- Richard Rodkin, [https://github.com/rrodkin](https://github.com/rrodkin "Github")


##Description
Few will argue that gazing into an aquarium of beautiful fish can be relaxing, soothing, even meditative.  There is something about the arc of their path, the slow pulsing of the tail and fins. . . the reflective ripples that catch the light, and the gentle sway of vegetation that softly underscores the entire scene.  **artifish** seeks to bring that experience to your tablet, phone and flatscreen.  Yes, there are a plethora of aquarium apps out there . . .  **artifish** is more than a digital aquarium, as the electric waters are inhabited by critters spawned from code . . . otherworldly, ethereal creatures that only exist when the power is turned on.

**artifish** was born while I was creating an updated and interactive version of John Whitney's 1972 classic, **Matrix III**. This initial prototype consists of six sinuous creatures (the 'fish') whose motion across the screen is governed by the principles of Differential Motion, resulting in a meditative visual counterpoint.

In this iteration, participants will be able to view and interact with a web-based version of the piece, though it will ultimately be deployed to iOS and Android devices as well as stand-alone flat-screens.  Interactive parameters include variable speed and direction, as well as an array of preset paths for the fish to follow.

Future versions will allow users to populate the communal aquarium with a variety of unique digital creatures and vegetation, as well as create their own paths directly on a touchscreen.

##Link to Prototype

The functional prototype is live, here: [artifish.memeticarts.com](artifish.memeticarts.com) is live!  This will currently run in your browser, but you need to [download the Unity Plugin](https://unity3d.com/webplayer “Plugin”) first. 

Here’s a quick rundown of the key commands, as I don’t have all the info up on the site yet:

- Keys 1-8: Switch curve types.  Hitting any of these keys at any time will stop the current action and load the  new curve type.  The curves, in order, are as follows: 8-petal Rose, 3-petal Rose, Gear, Starfish, Lemniscate (Figure-8), Lissajous, Random Curve, Gear2.
- SpaceBar: Start
- P: Pause
- S: Stop
- R: Reverse
- X: Speed up
- Z: Slow Down
- L: Toggle spline visibility

##Example Code
I'm using JavaScript to create the splines/paths that guide the fish.  The splines consist largely of polar curves (Rhodonea, Lissajous, SuperFormula, etc.), which are then fed-in to a couple of Unity plugins (Vectrosity and PlayMaker) for rendering.  Here's a snippet of the code that actually takes the generated point-set to create a spline for the fish to follow: 

```
spline = new VectorLine("TheSpline", new Vector3[segments+1], lineColor, null, 1.0, LineType.Continuous);
var splineObjRef = gameObject.Find("Vector TheSpline");
spline.MakeSpline (splinePoints.ToArray(), segments, loop);
spline.Draw3D();
showSpline(false);
```


##Images & Videos

Here is an initial video to give you the general idea.  The prototype created for devart consists of only one “species” at the moment, though I will introduce other candidates in one of the blog posts. Extra credit if you can identify the type of curve on which the fish are swimming!

https://www.youtube.com/watch?v=ZYTwa8PnYC4

