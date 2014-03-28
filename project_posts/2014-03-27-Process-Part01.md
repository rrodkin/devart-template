#Process - Part 01: Generating Splines

##Getting to the Points

Since **artifish** is actually a splinter project, the groundwork for the core functions had already been laid.  Still, as we are interested in sharing the process, it’s worth taking a look.

A spline is a virtual line, and as such must be created from a set of points.  In Vectrosity, this is fairly easy to do, as you only need to set several points and curves will be automatically interpolated.  However, if you really want specific curves, as we do, you need to run the equations, and to acheive the proper resolution, you need a fair amount of points.  Not thousands, though that wouldn’t really stress the engine too much, but somewhere on the order of several hundred seems to do nicely.  It’s easy enough to find out.  Here’s a SuperFormula “gear” shape, at 64 points / 32 line segments, on the left, while on the right we have 720 points / 360 segments.  

![](../project_images/part01-splineRez.jpg?raw=true “Spline Resolution Comparison”)

Here’s the code for generating an 8-petal Rose curve.  The process is always the same, with the variant being, of course, the actual math for calculating the curve itself.



First, declare the list that will contain the points.  A list is similar to an array in Unity
```
var splinePoints = new List.<Vector3>();

```

Then, run the equation and populate the list with the coordinates for each point.  Notice that eventhough our app is in 2D, we’re still plotting points as Vector3 -- that is, in the context of a 3-Dimensional space.

```
var tTotal = 6.28;  	    // total theta (Radians) in curve.  6.28 (2PI) is full circle
var tf = tTotal / numPts;   // increment of theta for each point
var n = 4;  		    // number of petals in rose curve (if n is even, petals are 2n)
var r = 1.00; 
var s = 7;  		    // scale factor;
i=1;
while(i<=numPts){
	var t = tf*i; 	    // theta;
	r = Mathf.Sin(n*t); // Rose Curve;
```
Here is the meat of it -- where we actually assign the coordinates to our X and Y variables. Once we have the numbers, we convert into Unity-speak, as a Vector3 (see the variable “pt”), and we iteratively add each point to the splinePoints List (array).  Piece o’cake!  Or Pi?

```
	ptValX = s * (r * Mathf.Cos(t));
	ptValY = s * (r * Mathf.Sin(t));
	pt = Vector3(ptValX,ptValY,-2);
	splinePoints.Add(pt);
	i++;
}
```

But wait, there’s more!  Now that we have the points, we need to actually apply them to the line that we will use for the spline.  Vectrosity makes that easy.  You’ll also see towards the bottom of the code block that we’re setting variables in PlayMaker.  This type of talking back-and-forth between script and state machine is common, and adds an enormous amount of power to an application.

```
var lineColor = Color(.25, .15, .0);
spline = new VectorLine("TheSpline", new Vector3[segments+1], lineColor, null, 5.0, LineType.Continuous);
var splineObjRef = gameObject.Find("Vector TheSpline");
spline.MakeSpline (splinePoints.ToArray(), segments, loop);
spline.Draw3D();
showSpline(false); 
splineReady = true;
if(splineReady){
	for(var g=0;g<splinePoints.Count;g++){
		idx = (g+1).ToString();
		ptRef = "pt"+idx;
		pmFSM.FsmVariables.GetFsmVector3(ptRef).Value = splinePoints[g];
	}
	pmFSM.FsmVariables.GetFsmGameObject("splineObj").Value = splineObjRef;
	pmFSM.Fsm.Event("splineReady");
}

```

And there you have it, spline-generation accomplished!  From there I simply created a long set of if/else statements (to possibly be converted to a Case statement), one block per each curve type. To make it easier, I made the variable public, which exposes it in Unity’s inspector as a text input field, so I can supply the desired parameter directly through the GUI rather than the script itself.  

Now, just one last thing.  As I mentioned above, that last bit of code is used to pass the point data to Playmaker so we can use it later, most notably for positioning our fish objects and breathing life into them.  I’ve created a “Spline Manager” object in Unity that serves to hold not only the script, but also the state machine that communicates between the script and fish objects.  I’ll dive into this in more detail when I discuss how we get the fish to follow the spline.






