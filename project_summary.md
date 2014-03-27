# Project Title
####artifish

## Authors
- Richard Rodkin, [https://github.com/rrodkin](https://github.com/rrodkin "Github")


## Description
**artifish** was born while I was creating an updated and interactive version of John Whitney's 1972 classic, **Matrix III**. This initial prototype consists of six sinuous creatures (the 'fish') whose motion across the screen is governed by the principles of Differential Motion, resulting in a meditative visual counterpoint.

In this iteration, participants will be able to view and interact with a web-based version of the piece, though it will ultimately be deployed to iOS and Android devices as well as stand-alone flatscreens.  Interactive parameters include variable speed and direction, as well as an array of preset paths for the fish to follow.

Future versions will allow users to populate the communal aquarium with a variety of unique digital creatures and vegitation.

## Link to Prototype
Coming very soon, stay tuned!

## Example Code
I'm using JavaScript to create the splines/paths that guide the fish.  The splines consist largely of polar curves (Rhodonea, Lissajous, SuperFormula, etc.), which are then fed-in to a couple of Unity plugins (Vectrosity and PlayMaker) for rendering.  Here's a snippet: 

```
spline = new VectorLine("TheSpline", new Vector3[segments+1], lineColor, null, 1.0, LineType.Continuous);
var splineObjRef = gameObject.Find("Vector TheSpline");
spline.MakeSpline (splinePoints.ToArray(), segments, loop);
spline.Draw3D();
showSpline(false);
```


## Images & Videos

#### Coming Soon!
<!---
NOTE: For additional images you can either use a relative link to an image on this repo or an absolute link to an externally hosted image.

![Example Image](project_images/cover.jpg?raw=true "Example Image")

https://www.youtube.com/watch?v=30yGOxJJ2PQ
-->
